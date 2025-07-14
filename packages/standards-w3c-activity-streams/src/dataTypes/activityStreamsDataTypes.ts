// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { nameof } from "@twin.org/nameof";
import type { JSONSchema7 } from "json-schema";
import { ActivityStreamsContexts } from "../models/activityStreamsContexts";
import type { ActivityStreamsContextType } from "../models/activityStreamsContextType";
import { ActivityStreamsTypes } from "../models/activityStreamsTypes";
import ActivitySchema from "../schemas/Activity.json";
import ActivityStreamsContextTypeSchema from "../schemas/ActivityStreamsContextType.json";
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

		const twinSchemaTypes: { [key: string]: JSONSchema7 } = {
			[nameof<ActivityStreamsContextType>()]: ActivityStreamsContextTypeSchema as JSONSchema7,
			[nameof<ActivityStreamsTypes>()]: ActivityStreamsTypesSchema as JSONSchema7
		};

		for (const type of Object.keys(twinSchemaTypes)) {
			DataTypeHandlerFactory.register(`${ActivityStreamsContexts.TwinContext}/${type}`, () => ({
				context: ActivityStreamsContexts.TwinContext,
				type,
				defaultValue: {},
				jsonSchema: async () => twinSchemaTypes[type]
			}));
		}
	}
}
