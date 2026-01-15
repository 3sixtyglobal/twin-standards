// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { GeneralError, Is, ObjectHelper, type IValidationFailure } from "@twin.org/core";
import { DataTypeHelper, JsonSchemaHelper } from "@twin.org/data-core";
import {
	JsonLdHelper,
	JsonLdProcessor,
	type IJsonLdContextDefinitionRoot,
	type IJsonLdNodeObject
} from "@twin.org/data-json-ld";
import { nameof } from "@twin.org/nameof";
import { DcatContexts } from "@twin.org/standards-w3c-dcat";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";

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
	 * @param validationFailures the Validation failures obtained during the conformance checking.
	 * @returns true or false depending whether the object is conformant or not
	 */
	public static async checkConformance(
		object: IJsonLdNodeObject,
		validationFailures: IValidationFailure[]
	): Promise<boolean> {
		let result = false;

		const dcatNamespace = DcatContexts.Namespace;

		const objectTypes = await JsonLdHelper.getType(object);

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

			const validationResult = await JsonSchemaHelper.validate(
				schema,
				await DataspaceProtocolHelper.normalize(object)
			);
			result = validationResult.result;

			if (!result && Is.array(validationResult.error)) {
				for (const aError of validationResult.error) {
					const validationFailure: IValidationFailure = {
						property: aError.instancePath,
						reason: aError.message as string
					};
					validationFailures.push(validationFailure);
				}
			}
		}
		return result;
	}

	/**
	 * Normalizes the input object making it compliant with the DS Protocol specifications.
	 * @param object The input object.
	 * @returns The input object normalized.
	 */
	public static async normalize(object: IJsonLdNodeObject): Promise<IJsonLdNodeObject> {
		const annotatedObject = DataspaceProtocolHelper.annotateLDContextForFormat(object);

		const compactedObject = await JsonLdProcessor.compact(annotatedObject, [
			DataspaceProtocolContexts.JsonLdContext
		]);

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
