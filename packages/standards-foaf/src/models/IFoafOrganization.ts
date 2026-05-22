// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { FoafContextType } from "./foafContextType.js";
import type { FoafTypes } from "./foafTypes.js";
import type { IFoafAgent } from "./IFoafAgent.js";

/**
 * A FOAF Organization.
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IFoafOrganization extends IFoafAgent {
	/**
	 * The LD Context.
	 */
	"@context"?: FoafContextType;

	/**
	 * Type.
	 */
	"@type": typeof FoafTypes.Organization;
}
