# Interface: IDeliveryAdjustment

A correction or modification to reflect actual delivery conditions.

## See

https://vocabulary.uncefact.org/DeliveryAdjustment

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

> **type**: `"DeliveryAdjustment"`

JSON-LD Type.

***

### actualAmount?

> `optional` **actualAmount**: [`IAmountType`](IAmountType.md)[]

An actual monetary value added or subtracted as a result of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualDateTime?

> `optional` **actualDateTime**: `string`

The actual date, time, date time, or other date time value of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### actualQuantity?

> `optional` **actualQuantity**: [`IQuantityType`](IQuantityType.md)

The actual quantity added or subtracted as a result of this delivery adjustment.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### adjustmentReasonCode?

> `optional` **adjustmentReasonCode**: [`AdjustmentReasonCodeList`](../type-aliases/AdjustmentReasonCodeList.md)[]

The code specifying a reason for this delivery adjustment.

#### See

https://vocabulary.uncefact.org/adjustmentReasonCode

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this delivery adjustment.

#### See

https://vocabulary.uncefact.org/reason
