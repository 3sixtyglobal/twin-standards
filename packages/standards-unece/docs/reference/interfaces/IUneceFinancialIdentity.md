# Interface: IUneceFinancialIdentity

A financial identification for an organization.

## See

https://vocabulary.uncefact.org/FinancialIdentity

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"FinancialIdentity"`

JSON-LD Type.

***

### agentAssignedCustomerId?

> `optional` **agentAssignedCustomerId**: `string`

The agent assigned customer identifier for this financial identity.

#### See

https://vocabulary.uncefact.org/agentAssignedCustomerId

***

### bEIId?

> `optional` **bEIId**: `string`

The Business Entity Identifier (BEI) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier Codes)
for this financial identity.

#### See

https://vocabulary.uncefact.org/bEIId

***

### bICId?

> `optional` **bICId**: `string`

The Bank Identifier Code (BIC) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier Codes) for
this financial identity.

#### See

https://vocabulary.uncefact.org/bICId

***

### bankAssignedId?

> `optional` **bankAssignedId**: `string`

The bank assigned identifier for this financial identity.

#### See

https://vocabulary.uncefact.org/bankAssignedId

***

### cHIPSUniversalId?

> `optional` **cHIPSUniversalId**: `string`

The (United States) Clearing House Interbank Payments System (CHIPS) Universal Identification (UID) as assigned by the
New York Clearing House for this financial identity.

#### See

https://vocabulary.uncefact.org/cHIPSUniversalId

***

### iBEIId?

> `optional` **iBEIId**: `string`

The International Business Entity Identifier (IBEI) for this financial identity.

#### See

https://vocabulary.uncefact.org/iBEIId
