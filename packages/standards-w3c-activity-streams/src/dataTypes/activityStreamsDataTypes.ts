// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { nameof } from "@twin.org/nameof";
import type { JSONSchema7 } from "json-schema";
import { ActivityStreamsContexts } from "../models/activityStreamsContexts.js";
import { ActivityStreamsTypes } from "../models/activityStreamsTypes.js";
import ActivitySchema from "../schemas/Activity.json" with { type: "json" };
import ActivityStreamsTypesSchema from "../schemas/ActivityStreamsTypes.json" with { type: "json" };

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

		DataTypeHandlerFactory.register(
			`${ActivityStreamsContexts.TwinContext}/${nameof<ActivityStreamsTypes>()}`,
			() => ({
				context: ActivityStreamsContexts.TwinContext,
				type: nameof<ActivityStreamsTypes>(),
				defaultValue: {},
				jsonSchema: async () => ActivityStreamsTypesSchema as JSONSchema7
			})
		);
	}
}
