# Interface: IUneceSubordinateTradeLineItem

A collection of information specific to a subordinate item being used or reported on for trade purposes.

## See

https://vocabulary.uncefact.org/SubordinateTradeLineItem

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

> **type**: `"SubordinateTradeLineItem"`

JSON-LD Type.

***

### applicableProduct?

> `optional` **applicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product applicable for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/applicableProduct

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### goodsTypeCode?

> `optional` **goodsTypeCode**: `"unece:GoodsTypeCodeList#ZZZ"`[]

The code specifying the type of subordinate trade line item.

#### See

https://vocabulary.uncefact.org/goodsTypeCode

***

### goodsTypeExtensionTypeExtensionCode?

> `optional` **goodsTypeExtensionTypeExtensionCode**: `"unece:GoodsTypeExtensionCodeList#ZZZ"`[]

A code used as an extension to the type code for further specifying this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedNote?

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included in this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/includedNote

***

### requestedResponseTypeCode?

> `optional` **requestedResponseTypeCode**: `string`

The code specifying the type of response requested for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/requestedResponseTypeCode

***

### responseReasonCode?

> `optional` **responseReasonCode**: `string`

The code specifying the response reason of this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/responseReasonCode

***

### specifiedProduct?

> `optional` **specifiedProduct**: [`IUneceProduct`](IUneceProduct.md)[]

The referenced product specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedProduct

***

### specifiedSubordinateLineTradeAgreement?

> `optional` **specifiedSubordinateLineTradeAgreement**: [`IUneceSubordinateLineTradeAgreement`](IUneceSubordinateLineTradeAgreement.md)[]

The trade agreement specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedSubordinateLineTradeAgreement

***

### specifiedSubordinateLineTradeDelivery?

> `optional` **specifiedSubordinateLineTradeDelivery**: [`IUneceSubordinateLineTradeDelivery`](IUneceSubordinateLineTradeDelivery.md)[]

The delivery specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedSubordinateLineTradeDelivery

***

### specifiedSubordinateLineTradeSettlement?

> `optional` **specifiedSubordinateLineTradeSettlement**: [`IUneceSubordinateLineTradeSettlement`](IUneceSubordinateLineTradeSettlement.md)[]

A trade settlement specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedSubordinateLineTradeSettlement
