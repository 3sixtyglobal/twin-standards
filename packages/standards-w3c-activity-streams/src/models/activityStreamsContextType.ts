// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { ActivityStreamsContexts } from "./activityStreamsContexts.js";

/**
 * The Activity Streams JSON-LD context type.
 */
export type ActivityStreamsContextType =
	| typeof ActivityStreamsContexts.Context
	| [typeof ActivityStreamsContexts.Context]
	| [
			IJsonLdContextDefinitionElement,
			typeof ActivityStreamsContexts.Context,
			...IJsonLdContextDefinitionElement[]
	  ]
	| [
			...IJsonLdContextDefinitionElement[],
			typeof ActivityStreamsContexts.Context,
			IJsonLdContextDefinitionElement
	  ];
