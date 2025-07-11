// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { DataTypeHandlerFactory } from "@twin.org/data-core";
import type { JSONSchema7 } from "json-schema";
import { ActivityStreamsContexts } from "../models/activityStreamsContexts";
import { ActivityStreamsTypes } from "../models/activityStreamsTypes";
import ActivitySchema from "../schemas/Activity.json";
import ActivityStreamsLdContextTypeSchema from "../schemas/ActivityStreamsLdContextType.json";
import ActivityStreamsTypesSchema from "../schemas/ActivityStreamsTypes.json";

/**
 * Data Type registration for the Data Space Connector
 */
export abstract class ActivityStreamsDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		for (const activityStreamsType of Object.values(ActivityStreamsTypes)) {
			DataTypeHandlerFactory.register(
				`${ActivityStreamsContexts.ActivityStreamsNamespace}${activityStreamsType}`,
				() => ({
					context: ActivityStreamsContexts.ActivityStreamsNamespace,
					type: `${activityStreamsType}`,
					defaultValue: {},
					jsonSchema: async () => ActivitySchema as JSONSchema7
				})
			);
		}

		const auxiliaryTypes: { [key: string]: JSONSchema7 } = {
			ActivityStreamsLdContextType: ActivityStreamsLdContextTypeSchema as JSONSchema7,
			ActivityStreamsTypes: ActivityStreamsTypesSchema as JSONSchema7
		};

		for (const type of Object.keys(auxiliaryTypes)) {
			DataTypeHandlerFactory.register(
				`https://schema.twindev.org/w3c-activity-streams/${type}`,
				() => ({
					context: "https://schema.twindev.org/w3c-activity-streams/",
					type,
					defaultValue: {},
					jsonSchema: async () => auxiliaryTypes[type]
				})
			);
		}
	}
}
