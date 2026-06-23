// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEpcisAggregationEvent } from "./IEpcisAggregationEvent.js";
import type { IEpcisAssociationEvent } from "./IEpcisAssociationEvent.js";
import type { IEpcisEvent } from "./IEpcisEvent.js";
import type { IEpcisObjectEvent } from "./IEpcisObjectEvent.js";
import type { IEpcisTransactionEvent } from "./IEpcisTransactionEvent.js";
import type { IEpcisTransformationEvent } from "./IEpcisTransformationEvent.js";

/**
 * Discriminated union covering all EPCIS 2.0 event interfaces used in this
 * package.
 */
export type EpcisEvents =
	| IEpcisObjectEvent
	| IEpcisAssociationEvent
	| IEpcisAggregationEvent
	| IEpcisTransactionEvent
	| IEpcisTransformationEvent
	| IEpcisEvent;
