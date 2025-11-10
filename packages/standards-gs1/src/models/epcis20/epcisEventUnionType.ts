// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IAggregationEvent } from "./IAggregationEvent.js";
import type { IAssociationEvent } from "./IAssociationEvent.js";
import type { IObjectEvent } from "./IObjectEvent.js";

/**
 * The type that subsumes an EPCIS Event.
 */
export type EpcisEventUnionType = IObjectEvent | IAssociationEvent | IAggregationEvent;
