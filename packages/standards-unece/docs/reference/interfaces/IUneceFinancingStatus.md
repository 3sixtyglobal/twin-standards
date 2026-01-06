# Interface: IUneceFinancingStatus

Information relevant to a condition of financing.

## See

https://vocabulary.uncefact.org/FinancingStatus

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

> **type**: `"FinancingStatus"`

JSON-LD Type.

***

### financingStatusConditionCode?

> `optional` **financingStatusConditionCode**: `string`

The code specifying the condition of this financing status.

#### See

https://vocabulary.uncefact.org/financingStatusConditionCode

***

### financingStatusReasonCode?

> `optional` **financingStatusReasonCode**: `string`

The code specifying the reason for this financing status.

#### See

https://vocabulary.uncefact.org/financingStatusReasonCode

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this financing status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonInformation?

> `optional` **reasonInformation**: `string`

Information, expressed as text, related to the reason for this financing status.

#### See

https://vocabulary.uncefact.org/reasonInformation
