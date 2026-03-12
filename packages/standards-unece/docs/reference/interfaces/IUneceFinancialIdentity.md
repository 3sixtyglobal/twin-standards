# Interface: IUneceFinancialIdentity

A financial identification for an organization.

## See

https://vocabulary.uncefact.org/FinancialIdentity

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancialIdentity"`

JSON-LD Type.

***

### agentAssignedCustomerId? {#agentassignedcustomerid}

> `optional` **agentAssignedCustomerId**: `string` \| `IJsonLdValueObject`

The agent assigned customer identifier for this financial identity.

#### See

https://vocabulary.uncefact.org/agentAssignedCustomerId

***

### bEIId? {#beiid}

> `optional` **bEIId**: `string` \| `IJsonLdValueObject`

The Business Entity Identifier (BEI) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier Codes)
for this financial identity.

#### See

https://vocabulary.uncefact.org/bEIId

***

### bICId? {#bicid}

> `optional` **bICId**: `string` \| `IJsonLdValueObject`

The Bank Identifier Code (BIC) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier Codes) for
this financial identity.

#### See

https://vocabulary.uncefact.org/bICId

***

### bankAssignedId? {#bankassignedid}

> `optional` **bankAssignedId**: `string` \| `IJsonLdValueObject`

The bank assigned identifier for this financial identity.

#### See

https://vocabulary.uncefact.org/bankAssignedId

***

### cHIPSUniversalId? {#chipsuniversalid}

> `optional` **cHIPSUniversalId**: `string` \| `IJsonLdValueObject`

The (United States) Clearing House Interbank Payments System (CHIPS) Universal Identification (UID) as assigned by the
New York Clearing House for this financial identity.

#### See

https://vocabulary.uncefact.org/cHIPSUniversalId

***

### iBEIId? {#ibeiid}

> `optional` **iBEIId**: `string` \| `IJsonLdValueObject`

The International Business Entity Identifier (IBEI) for this financial identity.

#### See

https://vocabulary.uncefact.org/iBEIId
