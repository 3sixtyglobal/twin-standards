// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { ActivityStreamsContexts } from "./activityStreamsContexts.js";

/**
 * The Activity Streams JSON-LD context type.
 */
export type ActivityStreamsContextType =
	| typeof ActivityStreamsContexts.Context
	| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof ActivityStreamsContexts.Context>;
