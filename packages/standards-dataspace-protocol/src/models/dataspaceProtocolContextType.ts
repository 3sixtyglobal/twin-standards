// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@twin.org/core";
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { DataspaceProtocolContexts } from "./dataspaceProtocolContexts.js";

/**
 * The Dataspace Protocol JSON-LD context type.
 */
export type DataspaceProtocolContextType =
	| typeof DataspaceProtocolContexts.Context
	| SingleOccurrenceArray<
			IJsonLdContextDefinitionElement,
			typeof DataspaceProtocolContexts.Context
	  >;
