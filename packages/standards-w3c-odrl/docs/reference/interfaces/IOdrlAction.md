# Interface: IOdrlAction

Interface for ODRL Actions.
https://www.w3.org/TR/odrl-model/#action

## Properties

### rdf:value? {#rdfvalue}

> `optional` **rdf:value**: `object`

The value/identifier of the action.
Used in complex action definitions.

#### @id

> **@id**: `string`

***

### @id? {#id}

> `optional` **@id**: `string`

Direct action identifier.
Used in simple action references.

***

### refinement? {#refinement}

> `optional` **refinement**: [`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md) \| ([`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md))[]

Refinements applied to the action.

***

### includedIn? {#includedin}

> `optional` **includedIn**: `string`

Reference to the action this action is included in.

***

### implies? {#implies}

> `optional` **implies**: `string`[]

References to actions this action implies.
