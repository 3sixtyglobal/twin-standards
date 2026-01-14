// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Url, Validation } from "@twin.org/core";
import { DataTypeHandlerFactory, type IJsonSchema } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { SchemaOrgContexts } from "../models/schemaOrgContexts.js";
import { SchemaOrgTypes } from "../models/schemaOrgTypes.js";
import GeoCoordinatesSchema from "../schemas/GeoCoordinates.json" with { type: "json" };
import { SchemaOrgValidation } from "../utils/schemaOrgValidation.js";

/**
 * Handle all the data types for schema.org.
 */
export class SchemaOrgDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(/https?:\/\/schema.org\/?/, SchemaOrgContexts.JsonLdContext);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Text}`, () => ({
			namespace: SchemaOrgContexts.Namespace,
			type: SchemaOrgTypes.Text,
			defaultValue: "",
			jsonSchema: async () => ({
				type: "string"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.string(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Integer}`,
			() => ({
				namespace: SchemaOrgContexts.Namespace,
				type: SchemaOrgTypes.Integer,
				defaultValue: 0,
				jsonSchema: async () => ({
					type: "integer"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.integer(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Float}`,
			() => ({
				namespace: SchemaOrgContexts.Namespace,
				type: SchemaOrgTypes.Float,
				defaultValue: 0,
				jsonSchema: async () => ({
					type: "number"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.number(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Boolean}`,
			() => ({
				namespace: SchemaOrgContexts.Namespace,
				type: SchemaOrgTypes.Boolean,
				defaultValue: true,
				jsonSchema: async () => ({
					type: "boolean"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.boolean(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.URL}`, () => ({
			namespace: SchemaOrgContexts.Namespace,
			type: SchemaOrgTypes.URL,
			defaultValue: "",
			jsonSchema: async () => ({
				type: "string",
				format: "uri"
			}),
			validate: async (propertyName, value, failures, container) =>
				Url.validate(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Date}`, () => ({
			namespace: SchemaOrgContexts.Namespace,
			type: SchemaOrgTypes.Date,
			defaultValue: new Date(),
			jsonSchema: async () => ({
				type: "string",
				format: "date"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.dateString(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.DateTime}`,
			() => ({
				namespace: SchemaOrgContexts.Namespace,
				type: SchemaOrgTypes.DateTime,
				defaultValue: new Date(),
				jsonSchema: async () => ({
					type: "string",
					format: "date-time"
				}),
				validate: async (propertyName, value, failures, container) =>
					Validation.dateTimeString(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Time}`, () => ({
			namespace: SchemaOrgContexts.Namespace,
			type: SchemaOrgTypes.Time,
			defaultValue: new Date(),
			jsonSchema: async () => ({
				type: "string",
				format: "time"
			}),
			validate: async (propertyName, value, failures, container) =>
				Validation.timeString(propertyName, value, failures)
		}));

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.Image}`,
			() => ({
				namespace: SchemaOrgContexts.Namespace,
				type: SchemaOrgTypes.Image,
				defaultValue: "",
				jsonSchema: async () => ({
					type: "string",
					format: "uri"
				}),
				validate: async (propertyName, value, failures, container) =>
					Url.validate(propertyName, value, failures)
			})
		);

		DataTypeHandlerFactory.register(
			`${SchemaOrgContexts.Namespace}${SchemaOrgTypes.GeoCoordinates}`,
			() => ({
				namespace: SchemaOrgContexts.Namespace,
				type: SchemaOrgTypes.GeoCoordinates,
				defaultValue: { longitude: 0, latitude: 0 },
				jsonSchema: async () => GeoCoordinatesSchema as IJsonSchema,
				validate: async (propertyName, value, failures, container) =>
					SchemaOrgValidation.geoCoordinates(propertyName, value, failures)
			})
		);
	}
}
