// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlPolicy } from "@twin.org/standards-w3c-odrl";
import type { GaiaXContextType } from "./gaiaXContextType.js";
import type { GaiaXTypes } from "./gaiaXTypes.js";
import type { IGaiaXDataExchangeComponent } from "./IGaiaXDataExchangeComponent.js";
import type { IGaiaXEntity } from "./IGaiaXEntity.js";
import type { IGaiaXLegalPerson } from "./IGaiaXLegalPerson.js";

/**
 * A Data Resource as defined by Gaia-X.
 * See also W3C DCAT Dataset https://www.w3.org/TR/vocab-dcat-3/.
 */
export interface IGaiaXDataResource extends IGaiaXEntity {
	/**
	 * The LD Context
	 */
	"@context": GaiaXContextType;

	/**
	 * Subject Id
	 */
	id: string;

	/**
	 * Subject type
	 */
	type: typeof GaiaXTypes.DataResource;

	/**
	 * The Resource Name
	 */
	name: string;

	/**
	 * Exposed through a Data Exchange Component.
	 * 'string' in case just an Id pointing to the Data Exchange Component is supplied
	 * the third case covers the idiom where a JSON-LD Node is supplied with id and type.
	 */
	exposedThrough:
		| IGaiaXDataExchangeComponent
		| string
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.DataExchangeComponent });

	/**
	 * Who is the data producer
	 */
	producedBy: IGaiaXLegalPerson | string;

	/**
	 * Pointer (URL) to the license
	 */
	license: string;

	/**
	 * Copyright owner
	 */
	copyrightOwnedBy: IGaiaXLegalPerson | string;

	/**
	 * ODRL Policy
	 */
	resourcePolicy: IOdrlPolicy | IOdrlPolicy[];
}
