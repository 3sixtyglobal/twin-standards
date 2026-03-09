// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { LeftOperandType } from "./types/leftOperandType.js";
import type { OperatorType } from "./types/operatorType.js";
import type { StatusType } from "./types/statusType.js";

/**
 * Interface for ODRL Constraints.
 * https://www.w3.org/TR/odrl-model/#constraint
 */
export interface IOdrlConstraint {
	/**
	 * Optional unique identifier for the constraint.
	 */
	uid?: string;

	/**
	 * The left operand of the constraint.
	 */
	leftOperand: string | LeftOperandType;

	/**
	 * The operator of the constraint.
	 */
	operator: OperatorType;

	/**
	 * The right operand of the constraint.
	 * value with optional @type is used for literal values (like "5.00" with type "xsd:decimal")
	 * id is used when referencing a URI/identifier (like odrl:policyUsage)
	 * Mutually exclusive with rightOperandReference.
	 */
	rightOperand?:
		| string
		| {
				"@value": string;
				"@type"?: string;
		  }
		| {
				"@id": string;
		  }
		| (
				| string
				| {
						"@value": string;
						"@type"?: string;
				  }
				| {
						"@id": string;
				  }
		  )[];

	/**
	 * Reference to the right operand.
	 * Can be used to reference external resources or policies using an IRI.
	 * Mutually exclusive with rightOperand.
	 */
	rightOperandReference?: string | string[];

	/**
	 * The data type of the right operand.
	 */
	dataType?: string;

	/**
	 * The unit for the right operand value.
	 */
	unit?: string;

	/**
	 * The status value for comparison.
	 */
	status?: StatusType;
}
