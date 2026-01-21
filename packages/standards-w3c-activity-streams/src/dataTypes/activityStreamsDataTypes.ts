// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import type { JSONSchema7 } from "json-schema";
import { ActivityStreamsContexts } from "../models/activityStreamsContexts.js";
import { ActivityStreamsTypes } from "../models/activityStreamsTypes.js";
import ActivitySchema from "../schemas/ActivityStreamsActivity.json" with { type: "json" };

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
				`${ActivityStreamsContexts.Namespace}${activityStreamsType}`,
				() => ({
					namespace: ActivityStreamsContexts.Namespace,
					type: `${activityStreamsType}`,
					defaultValue: {},
					jsonSchema: async () => ActivitySchema as JSONSchema7
				})
			);
		}
	}
}
