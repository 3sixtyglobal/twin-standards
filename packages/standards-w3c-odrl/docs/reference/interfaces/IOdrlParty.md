# Interface: IOdrlParty

Interface for ODRL Parties.
https://www.w3.org/TR/odrl-model/#party

## Extended by

- [`IOdrlPartyCollection`](IOdrlPartyCollection.md)

## Properties

### uid? {#uid}

> `optional` **uid?**: `string`

The unique identifier for the party.
Must be an IRI.

***

### @type? {#type}

> `optional` **@type?**: `ObjectOrArray`\<`string`\>

The type of the party.
Can be used to specify additional type information (e.g., "Party",
"vcard:Organization", "vcard:Individual").

***

### partOf? {#partof}

> `optional` **partOf?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md)\>

Reference to the party collection this party is part of.
Used to identify a PartyCollection that a Party entity is a member of.

***

### assigneeOf? {#assigneeof}

> `optional` **assigneeOf?**: `ObjectOrArray`\<`string`\>

Reference to a policy where this party is an assignee.
When assigneeOf is asserted, the Party MUST be inferred to undertake
the assignee functional role of all the Rules of that Policy.

***

### assignerOf? {#assignerof}

> `optional` **assignerOf?**: `ObjectOrArray`\<`string`\>

Reference to a policy where this party is an assigner.
When assignerOf is asserted, the Party MUST be inferred to undertake
the assigner functional role of all the Rules of that Policy.
