// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { GeneralError, Is, ObjectHelper, type IValidationFailure } from "@3sixty/core";
import { DataTypeHelper, JsonSchemaHelper } from "@3sixty/data-core";
import {
	JsonLdHelper,
	JsonLdProcessor,
	type IJsonLdContextDefinitionRoot,
	type IJsonLdNodeObject
} from "@3sixty/data-json-ld";
import { nameof } from "@3sixty/nameof";
import { DcatContexts } from "@3sixty/standards-w3c-dcat";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import { DataspaceProtocolTransferProcessTypes } from "../models/transferProcess/dataspaceProtocolTransferProcessTypes.js";

/**
 * Dataspace protocol helper.
 */
export abstract class DataspaceProtocolHelper {
	/**
	 * The class name.
	 * @internal
	 */
	public static readonly CLASS_NAME = nameof<DataspaceProtocolHelper>();

	/**
	 * Checks whether the object passed as parameter is conformant to the DS Protocol definitions.
	 * @param object The object to check
	 * @returns An array of validation failures, empty if the object is conformant
	 */
	public static async validate(object: IJsonLdNodeObject): Promise<IValidationFailure[]> {
		const dcatNamespace = DcatContexts.Namespace;
		const validationFailures: IValidationFailure[] = [];

		const objectTypes = await JsonLdHelper.getType(object);
		if (objectTypes.length === 0) {
			validationFailures.push({
				property: "@type",
				reason: "validation.missingType"
			});
		} else {
			for (const type of objectTypes) {
				let dataTypeIdentifier = type;

				// If the DCAT3 types are used, convert to the DS Protocol equivalent
				// which have the enhancements and constraints defined by the DS Protocol
				if (type.startsWith(dcatNamespace)) {
					const nonQualifiedType = type.replace(dcatNamespace, "");
					dataTypeIdentifier = `${DataspaceProtocolContexts.Namespace}${nonQualifiedType}`;
				}

				const schema = await DataTypeHelper.getSchemaForType(dataTypeIdentifier);
				if (!schema) {
					throw new GeneralError(DataspaceProtocolHelper.CLASS_NAME, "schemaNotRegistered", {
						schemaId: dataTypeIdentifier
					});
				}

				const normalizedObject = await DataspaceProtocolHelper.normalize(object);

				const validationResult = await JsonSchemaHelper.validate(schema, normalizedObject);
				validationFailures.push(...validationResult);
			}
		}

		return validationFailures;
	}

	/**
	 * Normalizes the input object making it compliant with the DS Protocol specifications.
	 * @param object The input object.
	 * @returns The input object normalized.
	 */
	public static async normalize(object: IJsonLdNodeObject): Promise<IJsonLdNodeObject> {
		const annotatedObject = DataspaceProtocolHelper.annotateLDContextForFormat(object);

		// Determine if this is a message/transfer type (which expects Context) or a catalog type (which expects JsonLdContext)
		const objectType = ObjectHelper.propertyGet<string | string[]>(object, "@type");
		const isTransferProcessType =
			Is.string(objectType) &&
			(objectType.includes("Message") ||
				objectType === DataspaceProtocolTransferProcessTypes.TransferProcess ||
				objectType === DataspaceProtocolTransferProcessTypes.TransferError);

		const contextToUse = isTransferProcessType
			? DataspaceProtocolContexts.Context
			: DataspaceProtocolContexts.JsonLdContext;

		const compactedObject = await JsonLdProcessor.compact(annotatedObject, [contextToUse], {
			compactArrays: false
		});

		if (!Is.array(compactedObject["@context"])) {
			ObjectHelper.propertySet(compactedObject, "@context", [
				ObjectHelper.propertyGet(compactedObject, "@context")
			]);
		}

		return compactedObject;
	}

	/**
	 * Ensures format property has a proper LD Context.
	 * @param object The object.
	 * @returns a copy of the object annotated with the proper LD Context.
	 * @internal
	 */
	private static annotateLDContextForFormat(object: IJsonLdNodeObject): IJsonLdNodeObject {
		const result = ObjectHelper.clone<IJsonLdNodeObject>(object);

		// This step is needed before compaction as 'dcterms:format' is not defined originally as '@vocab'
		// but it is in the DSP LD Context
		const EXTRA_ANNOTATION = {
			"dcterms:format": {
				"@id": "dcterms:format",
				"@type": "@vocab"
			}
		};
		const ldContext = ObjectHelper.propertyGet<IJsonLdContextDefinitionRoot>(result, "@context");
		if (Is.array(ldContext)) {
			ldContext.push(EXTRA_ANNOTATION);
		} else if (Is.object(ldContext)) {
			ObjectHelper.propertySet(result, "@context", { ...ldContext, ...EXTRA_ANNOTATION });
		} else if (Is.string(ldContext)) {
			ObjectHelper.propertySet(result, "@context", [ldContext, EXTRA_ANNOTATION]);
		}

		return result;
	}
}
