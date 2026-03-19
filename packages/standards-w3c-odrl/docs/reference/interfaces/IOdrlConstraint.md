# Interface: IOdrlConstraint

Interface for ODRL Constraints.
https://www.w3.org/TR/odrl-model/#constraint

## Properties

### uid? {#uid}

> `optional` **uid?**: `string`

Optional unique identifier for the constraint.

***

### leftOperand {#leftoperand}

> **leftOperand**: `string`

The left operand of the constraint.

***

### operator {#operator}

> **operator**: [`OperatorType`](../type-aliases/OperatorType.md)

The operator of the constraint.

***

### rightOperand? {#rightoperand}

<<<<<<< Updated upstream
> `optional` **rightOperand**: `ObjectOrArray`\<`string` \| \{ `@value`: `string`; `@type?`: `string`; \} \| \{ `@id`: `string`; \}\>
=======
> `optional` **rightOperand?**: `ObjectOrArray`\<`string` \| \{ `@value`: `string`; `@type?`: `string`; \} \| \{ `@id`: `string`; \}\>
>>>>>>> Stashed changes

The right operand of the constraint.
value with optional

***

### rightOperandReference? {#rightoperandreference}

<<<<<<< Updated upstream
> `optional` **rightOperandReference**: `ObjectOrArray`\<`string`\>
=======
> `optional` **rightOperandReference?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

Reference to the right operand.
Can be used to reference external resources or policies using an IRI.
Mutually exclusive with rightOperand.

***

### dataType? {#datatype}

> `optional` **dataType?**: `string`

The data type of the right operand.

***

### unit? {#unit}

> `optional` **unit?**: `string`

The unit for the right operand value.

***

### status? {#status}

> `optional` **status?**: [`StatusType`](../type-aliases/StatusType.md)

The status value for comparison.
