// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { GeneralError, Is, ObjectHelper, type IValidationFailure } from "@twin.org/core";
import { DataTypeHandlerFactory, JsonSchemaHelper } from "@twin.org/data-core";
import {
	JsonLdHelper,
	JsonLdProcessor,
	type IJsonLdNodeObject,
	type IJsonLdContextDefinitionRoot
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

		const dcatPrefix = DcatContexts.ContextRoot;

		const objectTypes = await JsonLdHelper.getType(object);

		for (const type of objectTypes) {
			let dataTypeIdentifier = type;
			if (type.startsWith(dcatPrefix)) {
				const nonQualifiedType = `dcat:${type.replace(dcatPrefix, "")}`;
				dataTypeIdentifier = `${DataspaceProtocolContexts.ContextRoot}#${nonQualifiedType}`;
			}

			const schemaHandler = DataTypeHandlerFactory.getIfExists(dataTypeIdentifier);
			if (schemaHandler?.jsonSchema) {
				const schema = await schemaHandler.jsonSchema();
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
			DataspaceProtocolContexts.ContextRoot
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
