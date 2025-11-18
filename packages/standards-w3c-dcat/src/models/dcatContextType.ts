// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinition } from "@twin.org/data-json-ld";
import type { DublinCoreContexts } from "@twin.org/standards-dublin-core";
import type { DcatContexts } from "./dcatContexts.js";

/**
 * The DCAT JSON-LD context type.
 * Supports the DCAT context URL or arrays with additional context definitions.
 */
export type DcatContextType = {
	dcat: typeof DcatContexts.ContextRoot;
	dcterms: typeof DublinCoreContexts.ContextTerms;
} & IJsonLdContextDefinition;
