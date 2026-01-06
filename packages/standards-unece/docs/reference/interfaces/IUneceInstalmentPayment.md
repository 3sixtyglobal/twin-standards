# Interface: IUneceInstalmentPayment

A discharge of obligations in respect of funds or securities, transferred through one of several payments, between two
or more parties.

## See

https://vocabulary.uncefact.org/InstalmentPayment

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"InstalmentPayment"`

JSON-LD Type.

***

### dueDateTime?

> `optional` **dueDateTime**: `string`

The due date for this instalment payment.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### paidAmount?

> `optional` **paidAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value paid or to be paid for this instalment payment.

#### See

https://vocabulary.uncefact.org/paidAmount

***

### sequenceId?

> `optional` **sequenceId**: `string`

The sequence identifier for this instalment payment.

#### See

https://vocabulary.uncefact.org/sequenceId

***

### specifiedFinancingRequestResultDocument?

> `optional` **specifiedFinancingRequestResultDocument**: [`IUneceFinancingRequestResultDocument`](IUneceFinancingRequestResultDocument.md)[]

The financing request result document specified for this instalment payment.

#### See

https://vocabulary.uncefact.org/specifiedFinancingRequestResultDocument
