# Interface: IOdrlLogicalConstraint

Interface for ODRL Logical Constraints.
A Logical Constraint compares two or more existing Constraints by one logical operator.
If the comparison returns a logical match, then the Logical Constraint is satisfied.
https://www.w3.org/TR/odrl-model/#constraint-logical

## Properties

### uid? {#uid}

> `optional` **uid?**: `string`

Optional unique identifier for the logical constraint.
Must be an IRI.

***

### and? {#and}

> `optional` **and?**: [`IOdrlLogicalConstraintOperand`](IOdrlLogicalConstraintOperand.md)

AND operator - all constraints must be satisfied.
Exactly one logical operator must be present.

***

### or? {#or}

> `optional` **or?**: [`IOdrlLogicalConstraintOperand`](IOdrlLogicalConstraintOperand.md)

OR operator - at least one constraint must be satisfied.
Exactly one logical operator must be present.

***

### xone? {#xone}

> `optional` **xone?**: [`IOdrlLogicalConstraintOperand`](IOdrlLogicalConstraintOperand.md)

XOR operator - exactly one constraint must be satisfied.
Exactly one logical operator must be present.

***

### andSequence? {#andsequence}

> `optional` **andSequence?**: [`IOdrlLogicalConstraintOperand`](IOdrlLogicalConstraintOperand.md)

AND Sequence operator - all constraints must be satisfied in order.
Exactly one logical operator must be present.
