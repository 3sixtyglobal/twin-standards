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

<<<<<<< Updated upstream
> `optional` **@type**: `ObjectOrArray`\<`string`\>
=======
> `optional` **@type?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

The type of the party.
Can be used to specify additional type information (e.g., "Party",
"vcard:Organization", "vcard:Individual").

***

### partOf? {#partof}

<<<<<<< Updated upstream
> `optional` **partOf**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md)\>
=======
> `optional` **partOf?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md)\>
>>>>>>> Stashed changes

Reference to the party collection this party is part of.
Used to identify a PartyCollection that a Party entity is a member of.

***

### assigneeOf? {#assigneeof}

<<<<<<< Updated upstream
> `optional` **assigneeOf**: `ObjectOrArray`\<`string`\>
=======
> `optional` **assigneeOf?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

Reference to a policy where this party is an assignee.
When assigneeOf is asserted, the Party MUST be inferred to undertake
the assignee functional role of all the Rules of that Policy.

***

### assignerOf? {#assignerof}

<<<<<<< Updated upstream
> `optional` **assignerOf**: `ObjectOrArray`\<`string`\>
=======
> `optional` **assignerOf?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

Reference to a policy where this party is an assigner.
When assignerOf is asserted, the Party MUST be inferred to undertake
the assigner functional role of all the Rules of that Policy.
