# Interface: IUneceTradePrice

A sum of money for which something is or may be bought or sold for trade purposes.

## See

https://vocabulary.uncefact.org/TradePrice

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

> **type**: `"TradePrice"`

JSON-LD Type.

***

### applicableCustomerClass?

> `optional` **applicableCustomerClass**: [`IUneceCustomerClass`](IUneceCustomerClass.md)

An applicable customer class for this trade price.

#### See

https://vocabulary.uncefact.org/applicableCustomerClass

***

### applicableSpecifiedNote?

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)

A specified note applicable to this trade price.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### appliedAllowanceCharge?

> `optional` **appliedAllowanceCharge**: [`IUneceTradeAllowanceCharge`](IUneceTradeAllowanceCharge.md)

An allowance or charge applied to the trade price.

#### See

https://vocabulary.uncefact.org/appliedAllowanceCharge

***

### associatedDocument?

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)

An associated document referenced for this trade price.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### basisDateTime?

> `optional` **basisDateTime**: `string`

The date, time, date time, or other date time value used as the basis for this trade price.

#### See

https://vocabulary.uncefact.org/basisDateTime

***

### basisQuantity?

> `optional` **basisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity on which the trade price is based.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### bracketTypeCode?

> `optional` **bracketTypeCode**: `string`

The code specifying the type of bracket for this trade price.

#### See

https://vocabulary.uncefact.org/bracketTypeCode

***

### calculationPercent?

> `optional` **calculationPercent**: `string`

The calculation percentage for this trade price.

#### See

https://vocabulary.uncefact.org/calculationPercent

***

### cancellationPercent?

> `optional` **cancellationPercent**: `string`

The cancellation percentage for this trade price.

#### See

https://vocabulary.uncefact.org/cancellationPercent

***

### categoryTypeCode?

> `optional` **categoryTypeCode**: `string`

The code specifying the type of category, such as refund or service charge, for this trade price.

#### See

https://vocabulary.uncefact.org/categoryTypeCode

***

### changeReason?

> `optional` **changeReason**: `string`

A reason, expressed as text, for a change of this trade price.

#### See

https://vocabulary.uncefact.org/changeReason

***

### chargeAmount?

> `optional` **chargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of the trade price charge.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### comparisonPrice?

> `optional` **comparisonPrice**: [`IUneceReferencePrice`](IUneceReferencePrice.md)

A price that provides a comparison with this trade price.

#### See

https://vocabulary.uncefact.org/comparisonPrice

***

### customerServicePointQuantity?

> `optional` **customerServicePointQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of customer service points for this trade price.

#### See

https://vocabulary.uncefact.org/customerServicePointQuantity

***

### dayQuantity?

> `optional` **dayQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of days related to this trade price.

#### See

https://vocabulary.uncefact.org/dayQuantity

***

### deliveryLocation?

> `optional` **deliveryLocation**: [`IUneceTradeLocation`](IUneceTradeLocation.md)

A delivery location for this trade price.

#### See

https://vocabulary.uncefact.org/deliveryLocation

***

### description?

> `optional` **description**: `string`

A textual description of this trade price.

#### See

https://vocabulary.uncefact.org/description

***

### determinationCode?

> `optional` **determinationCode**: `string`

The code specifying the determination of this trade price.

#### See

https://vocabulary.uncefact.org/determinationCode

***

### document?

> `optional` **document**: [`IUneceDocument`](IUneceDocument.md)

A document referenced for this trade price.

#### See

https://vocabulary.uncefact.org/document

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The expiry date, time, date time, or other date time value for this trade price.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### grandTotalChargeAmount?

> `optional` **grandTotalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of the grand total charge of this trade price.

#### See

https://vocabulary.uncefact.org/grandTotalChargeAmount

***

### includedTax?

> `optional` **includedTax**: [`IUneceTradeTax`](IUneceTradeTax.md)

A tax included in this trade price.

#### See

https://vocabulary.uncefact.org/includedTax

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this trade price.

#### See

https://vocabulary.uncefact.org/information

***

### maximumChargeAmount?

> `optional` **maximumChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value that is the maximum charge in a range of trade prices.

#### See

https://vocabulary.uncefact.org/maximumChargeAmount

***

### maximumQuantity?

> `optional` **maximumQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum quantity in a range for which the trade price applies.

#### See

https://vocabulary.uncefact.org/maximumQuantity

***

### minimumChargeAmount?

> `optional` **minimumChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value that is the minimum charge in a range of trade prices.

#### See

https://vocabulary.uncefact.org/minimumChargeAmount

***

### minimumQuantity?

> `optional` **minimumQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum quantity in a range for which this trade price applies.

#### See

https://vocabulary.uncefact.org/minimumQuantity

***

### multipleReasonIndicator?

> `optional` **multipleReasonIndicator**: `boolean`

The indication of whether or not multiple reasons affect this trade price.

#### See

https://vocabulary.uncefact.org/multipleReasonIndicator

***

### netPriceIndicator?

> `optional` **netPriceIndicator**: `boolean`

The indication of whether or not the trade price is the net price.

#### See

https://vocabulary.uncefact.org/netPriceIndicator

***

### operationalApplicablePeriod?

> `optional` **operationalApplicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

An operational period applicable for this trade price.

#### See

https://vocabulary.uncefact.org/operationalApplicablePeriod

***

### orderUnitConversionFactorNumeric?

> `optional` **orderUnitConversionFactorNumeric**: `string`

The value used as the factor to convert the order unit into the price unit for this trade price.

#### See

https://vocabulary.uncefact.org/orderUnitConversionFactorNumeric

***

### priceType?

> `optional` **priceType**: `string`

A type, expressed as text, for this trade price.

#### See

https://vocabulary.uncefact.org/priceType

***

### priceTypeCode?

> `optional` **priceTypeCode**: [`UnecePriceTypeCodeList`](../type-aliases/UnecePriceTypeCodeList.md)

The code specifying the type of trade price.

#### See

https://vocabulary.uncefact.org/priceTypeCode

***

### reasonCode?

> `optional` **reasonCode**: `string`

A code specifying a reason for this trade price.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### repackagingChargeAmount?

> `optional` **repackagingChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of a repackaging charge for this trade price.

#### See

https://vocabulary.uncefact.org/repackagingChargeAmount

***

### repairChargeAmount?

> `optional` **repairChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of a repair charge for this trade price.

#### See

https://vocabulary.uncefact.org/repairChargeAmount

***

### seasonalApplicablePeriod?

> `optional` **seasonalApplicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

A seasonal period applicable for this trade price.

#### See

https://vocabulary.uncefact.org/seasonalApplicablePeriod

***

### seasonalRankCode?

> `optional` **seasonalRankCode**: `string`

The code specifying the seasonal rank of this trade price.

#### See

https://vocabulary.uncefact.org/seasonalRankCode

***

### specifiedPaymentTradeSettlement?

> `optional` **specifiedPaymentTradeSettlement**: [`IUnecePaymentTradeSettlement`](IUnecePaymentTradeSettlement.md)

A payment trade settlement specified for this trade price.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement

***

### totalChargeAmount?

> `optional` **totalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of the total charge of this trade price.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### tradeComparisonPrice?

> `optional` **tradeComparisonPrice**: [`IUneceReferencePrice`](IUneceReferencePrice.md)

A price that provides a trade comparison with this trade price.

#### See

https://vocabulary.uncefact.org/tradeComparisonPrice

***

### tradePriceBracketTypeCode?

> `optional` **tradePriceBracketTypeCode**: `string`

The code specifying the type of bracket for this trade price.

#### See

https://vocabulary.uncefact.org/tradePriceBracketTypeCode

***

### tradePriceCategoryTypeCode?

> `optional` **tradePriceCategoryTypeCode**: `string`

The code specifying the type of category, such as refund or service charge, for this trade price.

#### See

https://vocabulary.uncefact.org/tradePriceCategoryTypeCode

***

### unitAmount?

> `optional` **unitAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of the unit of this trade price.

#### See

https://vocabulary.uncefact.org/unitAmount

***

### validityPeriod?

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

A specified period for which this trade price is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod
