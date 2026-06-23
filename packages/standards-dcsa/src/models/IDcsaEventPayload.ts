// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaEquipmentPayload } from "./IDcsaEquipmentPayload.js";
import type { IDcsaShipmentPayload } from "./IDcsaShipmentPayload.js";
import type { IDcsaTransportPayload } from "./IDcsaTransportPayload.js";

/**
 * Payload union for the base `event` schema (T&T events).
 */
export type IDcsaEventPayload =
	| IDcsaShipmentPayload
	| IDcsaEquipmentPayload
	| IDcsaTransportPayload;
