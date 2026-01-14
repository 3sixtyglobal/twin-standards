// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DataspaceProtocolContexts } from "./dataspaceProtocolContexts.js";

/**
 * The Dataspace Protocol JSON-LD context type.
 */
export type DataspaceProtocolContextType =
	| [typeof DataspaceProtocolContexts.JsonLdContext]
	| [
			...IJsonLdContextDefinitionElement[],
			typeof DataspaceProtocolContexts.JsonLdContext,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof DataspaceProtocolContexts.JsonLdContext,
			...IJsonLdContextDefinitionElement[]
	  ];
