# Interface: IUneceCustomsValuation

A cross-border trade related assessment of the worth of an object, such as its monetary value, for customs purposes.

## See

https://vocabulary.uncefact.org/CustomsValuation

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CustomsValuation"`

JSON-LD Type.

***

### addedAdjustmentAmount? {#addedadjustmentamount}

> `optional` **addedAdjustmentAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the adjustment added for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/addedAdjustmentAmount

***

### addedAdjustmentPercent? {#addedadjustmentpercent}

> `optional` **addedAdjustmentPercent**: `string`

The adjustment added, expressed as a percentage, for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/addedAdjustmentPercent

***

### applicableCurrencyExchange? {#applicablecurrencyexchange}

> `optional` **applicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)

The trade related currency exchange applicable to this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/applicableCurrencyExchange

***

### buyerSellerRelationshipIndicator? {#buyersellerrelationshipindicator}

> `optional` **buyerSellerRelationshipIndicator**: `boolean`

The indication of whether or not there is a relationship between the buyer and the seller, such as a financial
relationship, for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/buyerSellerRelationshipIndicator

***

### buyerSellerRelationshipPriceInfluenceIndicator? {#buyersellerrelationshippriceinfluenceindicator}

> `optional` **buyerSellerRelationshipPriceInfluenceIndicator**: `boolean`

The indication of whether or not the buyer seller relationship influences the price of the goods for this cross-border
customs valuation.

#### See

https://vocabulary.uncefact.org/buyerSellerRelationshipPriceInfluenceIndicator

***

### chargeApportionMethodCode? {#chargeapportionmethodcode}

> `optional` **chargeApportionMethodCode**: `string`

The code specifying the method of the apportion of charges for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/chargeApportionMethodCode

***

### deductedAdjustmentAmount? {#deductedadjustmentamount}

> `optional` **deductedAdjustmentAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the adjustment deducted for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/deductedAdjustmentAmount

***

### deductedAdjustmentPercent? {#deductedadjustmentpercent}

> `optional` **deductedAdjustmentPercent**: `string`

The adjustment deducted, expressed as a percentage, for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/deductedAdjustmentPercent

***

### methodCode? {#methodcode}

> `optional` **methodCode**: `string`

The code specifying the method by which this cross-border customs valuation is determined.

#### See

https://vocabulary.uncefact.org/methodCode

***

### otherChargeAmount? {#otherchargeamount}

> `optional` **otherChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value added or subtracted from the total invoice price not previously taken into account for this
cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/otherChargeAmount

***

### royaltyLicenseFeeIndicator? {#royaltylicensefeeindicator}

> `optional` **royaltyLicenseFeeIndicator**: `boolean`

The indication of whether or not there is a royalty or licence fee related to the goods for this cross-border customs
valuation.

#### See

https://vocabulary.uncefact.org/royaltyLicenseFeeIndicator

***

### salePriceConditionIndicator? {#salepriceconditionindicator}

> `optional` **salePriceConditionIndicator**: `boolean`

The indication of whether or not there is a condition imposed on the sale price of the goods for this cross-border
customs valuation.

#### See

https://vocabulary.uncefact.org/salePriceConditionIndicator

***

### saleRestriction? {#salerestriction}

> `optional` **saleRestriction**: `string`

A restriction, expressed as text, imposed on the sale of the goods for this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/saleRestriction

***

### saleRestrictionIndicator? {#salerestrictionindicator}

> `optional` **saleRestrictionIndicator**: `boolean`

The indication of whether or not there is any restriction imposed on the sale of the goods for this cross-border customs
valuation.

#### See

https://vocabulary.uncefact.org/saleRestrictionIndicator

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/typeCode

***

### wTOAdditionCode? {#wtoadditioncode}

> `optional` **wTOAdditionCode**: `string`

The code specifying any additions necessary under the World Trade Organization (WTO) Valuation Agreement used for the
assessment of this cross-border customs valuation.

#### See

https://vocabulary.uncefact.org/wTOAdditionCode
