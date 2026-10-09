// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IOdrlAsset } from "./IOdrlAsset.js";
import type { IOdrlConstraint } from "./IOdrlConstraint.js";
import type { IOdrlLogicalConstraint } from "./IOdrlLogicalConstraint.js";

/**
 * Interface for ODRL Asset Collections.
 * An AssetCollection is a single resource representing a set of member resources,
 * where all members of the set will be the subject of the Rule.
 * https://www.w3.org/TR/odrl-model/#asset
 */
export interface IOdrlAssetCollection extends IOdrlAsset {
	/**
	 * Reference to the source of the asset collection.
	 * Must be an IRI that references the AssetCollection.
	 * Omit to scope the collection entirely by its refinement instead.
	 * @json-schema format:uri
	 */
	source?: string;

	/**
	 * Refinements applied to the asset collection.
	 * Used to specify the refinement context under which to identify individual Asset(s)
	 * of the complete collection. The refinement applies to the characteristics of each
	 * member of the collection (not the resource as a whole).
	 */
	refinement?: ObjectOrArray<IOdrlConstraint | IOdrlLogicalConstraint>;
}
