# Interface: ITradePrice

A sum of money for which something is or may be bought or sold for trade purposes.

## See

https://vocabulary.uncefact.org/TradePrice

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

> **type**: `"TradePrice"`

JSON-LD Type.

***

### applicableCustomerClass?

> `optional` **applicableCustomerClass**: [`ICustomerClass`](ICustomerClass.md)[]

An applicable customer class for this trade price.

#### See

https://vocabulary.uncefact.org/applicableCustomerClass

***

### applicableSpecifiedNote?

> `optional` **applicableSpecifiedNote**: [`ISpecifiedNote`](ISpecifiedNote.md)[]

A specified note applicable to this trade price.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### appliedAllowanceCharge?

> `optional` **appliedAllowanceCharge**: [`ITradeAllowanceCharge`](ITradeAllowanceCharge.md)[]

An allowance or charge applied to the trade price.

#### See

https://vocabulary.uncefact.org/appliedAllowanceCharge

***

### associatedDocument?

> `optional` **associatedDocument**: [`IDocument`](IDocument.md)[]

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

> `optional` **basisQuantity**: [`IQuantityType`](IQuantityType.md)[]

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

> `optional` **chargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the trade price charge.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### comparisonPrice?

> `optional` **comparisonPrice**: [`IReferencePrice`](IReferencePrice.md)[]

A price that provides a comparison with this trade price.

#### See

https://vocabulary.uncefact.org/comparisonPrice

***

### customerServicePointQuantity?

> `optional` **customerServicePointQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of customer service points for this trade price.

#### See

https://vocabulary.uncefact.org/customerServicePointQuantity

***

### dayQuantity?

> `optional` **dayQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of days related to this trade price.

#### See

https://vocabulary.uncefact.org/dayQuantity

***

### deliveryLocation?

> `optional` **deliveryLocation**: [`ITradeLocation`](ITradeLocation.md)[]

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

> `optional` **document**: [`IDocument`](IDocument.md)[]

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

> `optional` **grandTotalChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the grand total charge of this trade price.

#### See

https://vocabulary.uncefact.org/grandTotalChargeAmount

***

### includedTax?

> `optional` **includedTax**: [`ITradeTax`](ITradeTax.md)[]

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

> `optional` **maximumChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is the maximum charge in a range of trade prices.

#### See

https://vocabulary.uncefact.org/maximumChargeAmount

***

### maximumQuantity?

> `optional` **maximumQuantity**: [`IQuantityType`](IQuantityType.md)[]

The maximum quantity in a range for which the trade price applies.

#### See

https://vocabulary.uncefact.org/maximumQuantity

***

### minimumChargeAmount?

> `optional` **minimumChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is the minimum charge in a range of trade prices.

#### See

https://vocabulary.uncefact.org/minimumChargeAmount

***

### minimumQuantity?

> `optional` **minimumQuantity**: [`IQuantityType`](IQuantityType.md)[]

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

> `optional` **operationalApplicablePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

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

> `optional` **priceTypeCode**: [`PriceTypeCodeList`](../type-aliases/PriceTypeCodeList.md)[]

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

> `optional` **repackagingChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a repackaging charge for this trade price.

#### See

https://vocabulary.uncefact.org/repackagingChargeAmount

***

### repairChargeAmount?

> `optional` **repairChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a repair charge for this trade price.

#### See

https://vocabulary.uncefact.org/repairChargeAmount

***

### seasonalApplicablePeriod?

> `optional` **seasonalApplicablePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

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

> `optional` **specifiedPaymentTradeSettlement**: [`IPaymentTradeSettlement`](IPaymentTradeSettlement.md)[]

A payment trade settlement specified for this trade price.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement

***

### totalChargeAmount?

> `optional` **totalChargeAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total charge of this trade price.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### tradeComparisonPrice?

> `optional` **tradeComparisonPrice**: [`IReferencePrice`](IReferencePrice.md)[]

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

> `optional` **unitAmount**: [`IAmountType`](IAmountType.md)

A monetary value of the unit of this trade price.

#### See

https://vocabulary.uncefact.org/unitAmount

***

### validityPeriod?

> `optional` **validityPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)

A specified period for which this trade price is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod
