# Interface: IUneceTradePrice

A sum of money for which something is or may be bought or sold for trade purposes.

## See

https://vocabulary.uncefact.org/TradePrice

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradePrice"`

JSON-LD Type.

***

### applicableCustomerClass? {#applicablecustomerclass}

> `optional` **applicableCustomerClass**: [`IUneceCustomerClass`](IUneceCustomerClass.md)[]

An applicable customer class for this trade price.

#### See

https://vocabulary.uncefact.org/applicableCustomerClass

***

### applicableSpecifiedNote? {#applicablespecifiednote}

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A specified note applicable to this trade price.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### appliedAllowanceCharge? {#appliedallowancecharge}

> `optional` **appliedAllowanceCharge**: [`IUneceTradeAllowanceCharge`](IUneceTradeAllowanceCharge.md)[]

An allowance or charge applied to the trade price.

#### See

https://vocabulary.uncefact.org/appliedAllowanceCharge

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An associated document referenced for this trade price.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### basisDateTime? {#basisdatetime}

> `optional` **basisDateTime**: `string`

The date, time, date time, or other date time value used as the basis for this trade price.

#### See

https://vocabulary.uncefact.org/basisDateTime

***

### basisQuantity? {#basisquantity}

> `optional` **basisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity on which the trade price is based.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### bracketTypeCode? {#brackettypecode}

> `optional` **bracketTypeCode**: `string`

The code specifying the type of bracket for this trade price.

#### See

https://vocabulary.uncefact.org/bracketTypeCode

***

### calculationPercent? {#calculationpercent}

> `optional` **calculationPercent**: `string`

The calculation percentage for this trade price.

#### See

https://vocabulary.uncefact.org/calculationPercent

***

### cancellationPercent? {#cancellationpercent}

> `optional` **cancellationPercent**: `string`

The cancellation percentage for this trade price.

#### See

https://vocabulary.uncefact.org/cancellationPercent

***

### categoryTypeCode? {#categorytypecode}

> `optional` **categoryTypeCode**: `string`

The code specifying the type of category, such as refund or service charge, for this trade price.

#### See

https://vocabulary.uncefact.org/categoryTypeCode

***

### changeReason? {#changereason}

> `optional` **changeReason**: `string`

A reason, expressed as text, for a change of this trade price.

#### See

https://vocabulary.uncefact.org/changeReason

***

### chargeAmount? {#chargeamount}

> `optional` **chargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the trade price charge.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### comparisonPrice? {#comparisonprice}

> `optional` **comparisonPrice**: [`IUneceReferencePrice`](IUneceReferencePrice.md)[]

A price that provides a comparison with this trade price.

#### See

https://vocabulary.uncefact.org/comparisonPrice

***

### customerServicePointQuantity? {#customerservicepointquantity}

> `optional` **customerServicePointQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of customer service points for this trade price.

#### See

https://vocabulary.uncefact.org/customerServicePointQuantity

***

### dayQuantity? {#dayquantity}

> `optional` **dayQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of days related to this trade price.

#### See

https://vocabulary.uncefact.org/dayQuantity

***

### deliveryLocation? {#deliverylocation}

> `optional` **deliveryLocation**: [`IUneceTradeLocation`](IUneceTradeLocation.md)[]

A delivery location for this trade price.

#### See

https://vocabulary.uncefact.org/deliveryLocation

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this trade price.

#### See

https://vocabulary.uncefact.org/description

***

### determinationCode? {#determinationcode}

> `optional` **determinationCode**: `string`

The code specifying the determination of this trade price.

#### See

https://vocabulary.uncefact.org/determinationCode

***

### document? {#document}

> `optional` **document**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced for this trade price.

#### See

https://vocabulary.uncefact.org/document

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime**: `string`

The expiry date, time, date time, or other date time value for this trade price.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### grandTotalChargeAmount? {#grandtotalchargeamount}

> `optional` **grandTotalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the grand total charge of this trade price.

#### See

https://vocabulary.uncefact.org/grandTotalChargeAmount

***

### includedTax? {#includedtax}

> `optional` **includedTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax included in this trade price.

#### See

https://vocabulary.uncefact.org/includedTax

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for this trade price.

#### See

https://vocabulary.uncefact.org/information

***

### maximumChargeAmount? {#maximumchargeamount}

> `optional` **maximumChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is the maximum charge in a range of trade prices.

#### See

https://vocabulary.uncefact.org/maximumChargeAmount

***

### maximumQuantity? {#maximumquantity}

> `optional` **maximumQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum quantity in a range for which the trade price applies.

#### See

https://vocabulary.uncefact.org/maximumQuantity

***

### minimumChargeAmount? {#minimumchargeamount}

> `optional` **minimumChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is the minimum charge in a range of trade prices.

#### See

https://vocabulary.uncefact.org/minimumChargeAmount

***

### minimumQuantity? {#minimumquantity}

> `optional` **minimumQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum quantity in a range for which this trade price applies.

#### See

https://vocabulary.uncefact.org/minimumQuantity

***

### multipleReasonIndicator? {#multiplereasonindicator}

> `optional` **multipleReasonIndicator**: `boolean`

The indication of whether or not multiple reasons affect this trade price.

#### See

https://vocabulary.uncefact.org/multipleReasonIndicator

***

### netPriceIndicator? {#netpriceindicator}

> `optional` **netPriceIndicator**: `boolean`

The indication of whether or not the trade price is the net price.

#### See

https://vocabulary.uncefact.org/netPriceIndicator

***

### operationalApplicablePeriod? {#operationalapplicableperiod}

> `optional` **operationalApplicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An operational period applicable for this trade price.

#### See

https://vocabulary.uncefact.org/operationalApplicablePeriod

***

### orderUnitConversionFactorNumeric? {#orderunitconversionfactornumeric}

> `optional` **orderUnitConversionFactorNumeric**: `string`

The value used as the factor to convert the order unit into the price unit for this trade price.

#### See

https://vocabulary.uncefact.org/orderUnitConversionFactorNumeric

***

### priceType? {#pricetype}

> `optional` **priceType**: `string`

A type, expressed as text, for this trade price.

#### See

https://vocabulary.uncefact.org/priceType

***

### priceTypeCode? {#pricetypecode}

> `optional` **priceTypeCode**: [`UnecePriceTypeCodeList`](../type-aliases/UnecePriceTypeCodeList.md)

The code specifying the type of trade price.

#### See

https://vocabulary.uncefact.org/priceTypeCode

***

### reasonCode? {#reasoncode}

> `optional` **reasonCode**: `string`

A code specifying a reason for this trade price.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### repackagingChargeAmount? {#repackagingchargeamount}

> `optional` **repackagingChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a repackaging charge for this trade price.

#### See

https://vocabulary.uncefact.org/repackagingChargeAmount

***

### repairChargeAmount? {#repairchargeamount}

> `optional` **repairChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a repair charge for this trade price.

#### See

https://vocabulary.uncefact.org/repairChargeAmount

***

### seasonalApplicablePeriod? {#seasonalapplicableperiod}

> `optional` **seasonalApplicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A seasonal period applicable for this trade price.

#### See

https://vocabulary.uncefact.org/seasonalApplicablePeriod

***

### seasonalRankCode? {#seasonalrankcode}

> `optional` **seasonalRankCode**: `string`

The code specifying the seasonal rank of this trade price.

#### See

https://vocabulary.uncefact.org/seasonalRankCode

***

### specifiedPaymentTradeSettlement? {#specifiedpaymenttradesettlement}

> `optional` **specifiedPaymentTradeSettlement**: [`IUnecePaymentTradeSettlement`](IUnecePaymentTradeSettlement.md)[]

A payment trade settlement specified for this trade price.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement

***

### totalChargeAmount? {#totalchargeamount}

> `optional` **totalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total charge of this trade price.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### tradeComparisonPrice? {#tradecomparisonprice}

> `optional` **tradeComparisonPrice**: [`IUneceReferencePrice`](IUneceReferencePrice.md)[]

A price that provides a trade comparison with this trade price.

#### See

https://vocabulary.uncefact.org/tradeComparisonPrice

***

### tradePriceBracketTypeCode? {#tradepricebrackettypecode}

> `optional` **tradePriceBracketTypeCode**: `string`

The code specifying the type of bracket for this trade price.

#### See

https://vocabulary.uncefact.org/tradePriceBracketTypeCode

***

### tradePriceCategoryTypeCode? {#tradepricecategorytypecode}

> `optional` **tradePriceCategoryTypeCode**: `string`

The code specifying the type of category, such as refund or service charge, for this trade price.

#### See

https://vocabulary.uncefact.org/tradePriceCategoryTypeCode

***

### unitAmount? {#unitamount}

> `optional` **unitAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the unit of this trade price.

#### See

https://vocabulary.uncefact.org/unitAmount

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period for which this trade price is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod
