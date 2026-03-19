# Interface: IOdrlPartyCollection

Interface for ODRL Party Collections.
A PartyCollection identifies a collection of entities and is a subclass of Party.
https://www.w3.org/TR/odrl-model/#party

## Extends

- [`IOdrlParty`](IOdrlParty.md)

## Properties

### uid? {#uid}

> `optional` **uid**: `string`

The unique identifier for the party.
Must be an IRI.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`uid`](IOdrlParty.md#uid)

***

### @type? {#type}

> `optional` **@type**: `ObjectOrArray`\<`string`\>

The type of the party.
Can be used to specify additional type information (e.g., "Party",
"vcard:Organization", "vcard:Individual").

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`@type`](IOdrlParty.md#type)

***

### partOf? {#partof}

> `optional` **partOf**: `ObjectOrArray`\<`string` \| `IOdrlPartyCollection`\>

Reference to the party collection this party is part of.
Used to identify a PartyCollection that a Party entity is a member of.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`partOf`](IOdrlParty.md#partof)

***

### assigneeOf? {#assigneeof}

> `optional` **assigneeOf**: `ObjectOrArray`\<`string`\>

Reference to a policy where this party is an assignee.
When assigneeOf is asserted, the Party MUST be inferred to undertake
the assignee functional role of all the Rules of that Policy.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`assigneeOf`](IOdrlParty.md#assigneeof)

***

### assignerOf? {#assignerof}

> `optional` **assignerOf**: `ObjectOrArray`\<`string`\>

Reference to a policy where this party is an assigner.
When assignerOf is asserted, the Party MUST be inferred to undertake
the assigner functional role of all the Rules of that Policy.

#### Inherited from

[`IOdrlParty`](IOdrlParty.md).[`assignerOf`](IOdrlParty.md#assignerof)

***

### source {#source}

> **source**: `string`

Reference to the source of the party collection.
Used to identify the origin or location of the collection.

***

### refinement? {#refinement}

> `optional` **refinement**: `ObjectOrArray`\<[`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md)\>

Refinements applied to the party collection.
Used to specify constraints that apply to all members of the collection.
