// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IAggregationEvent } from "./IEpcisAggregationEvent.js";
import type { IAssociationEvent } from "./IEpcisAssociationEvent.js";
import type { IObjectEvent } from "./IEpcisObjectEvent.js";

/**
 * The type that subsumes an EPCIS Event.
 */
export type EpcisEventUnionType = IObjectEvent | IAssociationEvent | IAggregationEvent;
