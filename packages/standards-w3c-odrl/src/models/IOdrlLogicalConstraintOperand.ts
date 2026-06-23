// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Operand list wrapper for logical constraints.
 * Uses JSON-LD list to preserve order for andSequence.
 */
export interface IOdrlLogicalConstraintOperand {
	/**
	 * Ordered list of constraint references for logical evaluation.
	 */
	"@list": { "@id": string }[];
}
