# Interface: IUneceSubordinateTradeLineItem

A collection of information specific to a subordinate item being used or reported on for trade purposes.

## See

https://vocabulary.uncefact.org/SubordinateTradeLineItem

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SubordinateTradeLineItem"`

JSON-LD Type.

***

### applicableProduct? {#applicableproduct}

> `optional` **applicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product applicable for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/applicableProduct

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

The code specifying the category of this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### goodsTypeCode? {#goodstypecode}

> `optional` **goodsTypeCode**: `"unece:GoodsTypeCodeList#ZZZ"`

The code specifying the type of subordinate trade line item.

#### See

https://vocabulary.uncefact.org/goodsTypeCode

***

### goodsTypeExtensionTypeExtensionCode? {#goodstypeextensiontypeextensioncode}

> `optional` **goodsTypeExtensionTypeExtensionCode**: `"unece:GoodsTypeExtensionCodeList#ZZZ"`[]

A code used as an extension to the type code for further specifying this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedNote? {#includednote}

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included in this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/includedNote

***

### requestedResponseTypeCode? {#requestedresponsetypecode}

> `optional` **requestedResponseTypeCode**: `string`

The code specifying the type of response requested for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/requestedResponseTypeCode

***

### responseReasonCode? {#responsereasoncode}

> `optional` **responseReasonCode**: `string`

The code specifying the response reason of this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/responseReasonCode

***

### specifiedProduct? {#specifiedproduct}

> `optional` **specifiedProduct**: [`IUneceProduct`](IUneceProduct.md)

The referenced product specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedProduct

***

### specifiedSubordinateLineTradeAgreement? {#specifiedsubordinatelinetradeagreement}

> `optional` **specifiedSubordinateLineTradeAgreement**: [`IUneceSubordinateLineTradeAgreement`](IUneceSubordinateLineTradeAgreement.md)

The trade agreement specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedSubordinateLineTradeAgreement

***

### specifiedSubordinateLineTradeDelivery? {#specifiedsubordinatelinetradedelivery}

> `optional` **specifiedSubordinateLineTradeDelivery**: [`IUneceSubordinateLineTradeDelivery`](IUneceSubordinateLineTradeDelivery.md)

The delivery specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedSubordinateLineTradeDelivery

***

### specifiedSubordinateLineTradeSettlement? {#specifiedsubordinatelinetradesettlement}

> `optional` **specifiedSubordinateLineTradeSettlement**: [`IUneceSubordinateLineTradeSettlement`](IUneceSubordinateLineTradeSettlement.md)[]

A trade settlement specified for this subordinate trade line item.

#### See

https://vocabulary.uncefact.org/specifiedSubordinateLineTradeSettlement
