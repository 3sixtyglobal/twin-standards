# Interface: IUnecePaymentFinancialInstitution

An institution that provides financial services and financial transactions for payment.

## See

https://vocabulary.uncefact.org/PaymentFinancialInstitution

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

> **type**: `"PaymentFinancialInstitution"`

JSON-LD Type.

***

### bEIId?

> `optional` **bEIId**: `string`

The unique Business Entity Identifier (BEI) as defined in ISO 9362 for this payment financial institution.

#### See

https://vocabulary.uncefact.org/bEIId

***

### bICId

> **bICId**: `string`

The unique Bank Identification Code (BIC) as defined in ISO 9362 for this payment financial institution.

#### See

https://vocabulary.uncefact.org/bICId

***

### branchName?

> `optional` **branchName**: `string`

A branch name, expressed as text, for this payment financial institution.

#### See

https://vocabulary.uncefact.org/branchName

***

### branchNameId?

> `optional` **branchNameId**: `string`

The identifier of the branch name for this payment financial institution.

#### See

https://vocabulary.uncefact.org/branchNameId

***

### gLNId?

> `optional` **gLNId**: `string`

The unique Global Location Number (GLN) as defined by GS1 for this payment financial institution.

#### See

https://vocabulary.uncefact.org/gLNId

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this payment financial institution.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this payment financial institution.

#### See

https://vocabulary.uncefact.org/name

***

### nameId?

> `optional` **nameId**: `string`

The identifier of the name for this payment financial institution.

#### See

https://vocabulary.uncefact.org/nameId

***

### roleCode?

> `optional` **roleCode**: `string`

The code specifying the role for this payment financial institution, such as intermediary or settlement agent.

#### See

https://vocabulary.uncefact.org/roleCode

***

### specifiedCommunication?

> `optional` **specifiedCommunication**: [`IUneceCommunication`](IUneceCommunication.md)[]

A communication specified for this payment financial institution.

#### See

https://vocabulary.uncefact.org/specifiedCommunication

***

### specifiedPaymentFinancialAccount?

> `optional` **specifiedPaymentFinancialAccount**: [`IUnecePaymentFinancialAccount`](IUnecePaymentFinancialAccount.md)[]

A payment financial account specified for this payment financial institution.

#### See

https://vocabulary.uncefact.org/specifiedPaymentFinancialAccount

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of payment financial institution.

#### See

https://vocabulary.uncefact.org/typeCode
