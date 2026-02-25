// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IOdrlLogicalConstraintOperand } from "./IOdrlLogicalConstraintOperand.js";

/**
 * Interface for ODRL Logical Constraints.
 * A Logical Constraint compares two or more existing Constraints by one logical operator.
 * If the comparison returns a logical match, then the Logical Constraint is satisfied.
 * https://www.w3.org/TR/odrl-model/#constraint-logical
 */
export interface IOdrlLogicalConstraint {
	/**
	 * Optional unique identifier for the logical constraint.
	 * Must be an IRI.
	 */
	uid?: string;

	/**
	 * AND operator - all constraints must be satisfied.
	 * Exactly one logical operator must be present.
	 */
	and?: IOdrlLogicalConstraintOperand;

	/**
	 * OR operator - at least one constraint must be satisfied.
	 * Exactly one logical operator must be present.
	 */
	or?: IOdrlLogicalConstraintOperand;

	/**
	 * XOR operator - exactly one constraint must be satisfied.
	 * Exactly one logical operator must be present.
	 */
	xone?: IOdrlLogicalConstraintOperand;

	/**
	 * AND Sequence operator - all constraints must be satisfied in order.
	 * Exactly one logical operator must be present.
	 */
	andSequence?: IOdrlLogicalConstraintOperand;
}
