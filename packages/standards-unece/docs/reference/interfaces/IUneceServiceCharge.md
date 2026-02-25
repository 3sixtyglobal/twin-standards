# Interface: IUneceServiceCharge

A charge made for a logistics related service.

## See

https://vocabulary.uncefact.org/ServiceCharge

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ServiceCharge"`

JSON-LD Type.

***

### allowanceCharge?

> `optional` **allowanceCharge**: `string`

The allowance or charge, expressed as text, for this logistics service charge.

#### See

https://vocabulary.uncefact.org/allowanceCharge

***

### appliedAmount?

> `optional` **appliedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value applied to this logistics service charge.

#### See

https://vocabulary.uncefact.org/appliedAmount

***

### appliedFromLocation?

> `optional` **appliedFromLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The start location from which this logistics service charge should be applied.

#### See

https://vocabulary.uncefact.org/appliedFromLocation

***

### appliedTax?

> `optional` **appliedTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax that is applied to this logistics service charge.

#### See

https://vocabulary.uncefact.org/appliedTax

***

### appliedToLocation?

> `optional` **appliedToLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The end location at which this logistics service charge is no longer to be applied.

#### See

https://vocabulary.uncefact.org/appliedToLocation

***

### calculationBasis?

> `optional` **calculationBasis**: `string`

The basis, expressed as text, on which this logistics service charge is to be calculated, such as by volume or per unit.

#### See

https://vocabulary.uncefact.org/calculationBasis

***

### calculationBasisAreaMeasure?

> `optional` **calculationBasisAreaMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the area used as the basis for the calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/calculationBasisAreaMeasure

***

### calculationBasisCommodityCode?

> `optional` **calculationBasisCommodityCode**: `string`

The code specifying the commodity used as the basis for the calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/calculationBasisCommodityCode

***

### calculationBasisPrice?

> `optional` **calculationBasisPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)

The trade price upon which a calculation of this logistics service charge is or will be based.

#### See

https://vocabulary.uncefact.org/calculationBasisPrice

***

### calculationBasisQuantity?

> `optional` **calculationBasisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number used as a basis in a calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/calculationBasisQuantity

***

### chargeCategoryCode?

> `optional` **chargeCategoryCode**: `string`

The code specifying the category of charge for this logistics service charge.

#### See

https://vocabulary.uncefact.org/chargeCategoryCode

***

### chargeCurrencyCode?

> `optional` **chargeCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)[]

A code specifying a charge currency for this logistics service charge.

#### See

https://vocabulary.uncefact.org/chargeCurrencyCode

***

### chargePayingPartyRoleCode?

> `optional` **chargePayingPartyRoleCode**: [`UneceChargePayingPartyRoleCodeList`](../type-aliases/UneceChargePayingPartyRoleCodeList.md)

The code specifying the role of the party responsible for paying this logistics service charge.

#### See

https://vocabulary.uncefact.org/chargePayingPartyRoleCode

***

### description?

> `optional` **description**: `string`

A textual description of this logistics service charge.

#### See

https://vocabulary.uncefact.org/description

***

### disbursementAmount?

> `optional` **disbursementAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a disbursement for this logistics service charge.

#### See

https://vocabulary.uncefact.org/disbursementAmount

***

### freightChargeTariffClassCode?

> `optional` **freightChargeTariffClassCode**: [`UneceFreightChargeTariffClassCodeList`](../type-aliases/UneceFreightChargeTariffClassCodeList.md)

The code specifying the tariff class for this logistics service charge which represents an entry in a table of fixed
charges [Reference United Nations Code List (UNCL) 5243].

#### See

https://vocabulary.uncefact.org/freightChargeTariffClassCode

***

### freightChargeTypeId?

> `optional` **freightChargeTypeId**: [`UneceFreightChargeTypeId`](../type-aliases/UneceFreightChargeTypeId.md)

The unique identifier for this logistics service charge.

#### See

https://vocabulary.uncefact.org/freightChargeTypeId

***

### freightInvoiceTypeCode?

> `optional` **freightInvoiceTypeCode**: `string`

A code specifying a type of freight invoice of this logistics service charge.

#### See

https://vocabulary.uncefact.org/freightInvoiceTypeCode

***

### informationTypeCode?

> `optional` **informationTypeCode**: `string`

A code specifying an information type of this logistics service charge.

#### See

https://vocabulary.uncefact.org/informationTypeCode

***

### invoiceTypeCode?

> `optional` **invoiceTypeCode**: `string`

A code specifying a type of invoice of this logistics service charge.

#### See

https://vocabulary.uncefact.org/invoiceTypeCode

***

### linearUnitCalculationBasisDistanceMeasure?

> `optional` **linearUnitCalculationBasisDistanceMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the distance used as the basis for the calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/linearUnitCalculationBasisDistanceMeasure

***

### logisticsChargeCalculationBasisCalculationBasisCode?

> `optional` **logisticsChargeCalculationBasisCalculationBasisCode**: `"unece:LogisticsChargeCalculationBasisCodeList#ZZZ"`

The code specifying a basis on which this logistics service charge is to be calculated, such as by volume or per unit.

#### See

https://vocabulary.uncefact.org/logisticsChargeCalculationBasisCalculationBasisCode

***

### logisticsServiceChargeTransportPaymentMethodCode?

> `optional` **logisticsServiceChargeTransportPaymentMethodCode**: `string`

The code specifying the transport payment method for this logistics service charge.

#### See

https://vocabulary.uncefact.org/logisticsServiceChargeTransportPaymentMethodCode

***

### paymentPlaceLocation?

> `optional` **paymentPlaceLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of the place of payment of this logistics service charge.

#### See

https://vocabulary.uncefact.org/paymentPlaceLocation

***

### postTranshipmentCalculationBasisQuantity?

> `optional` **postTranshipmentCalculationBasisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number used as a basis in a post-transhipment calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/postTranshipmentCalculationBasisQuantity

***

### preTranshipmentCalculationBasisQuantity?

> `optional` **preTranshipmentCalculationBasisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number used as a basis in a pre-transhipment calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/preTranshipmentCalculationBasisQuantity

***

### repackageAppliedAmount?

> `optional` **repackageAppliedAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the repackage on which the logistics service charge is determined.

#### See

https://vocabulary.uncefact.org/repackageAppliedAmount

***

### serviceCategoryCode?

> `optional` **serviceCategoryCode**: `string`

The code specifying the category of service for this logistics service charge.

#### See

https://vocabulary.uncefact.org/serviceCategoryCode

***

### serviceTypeCode?

> `optional` **serviceTypeCode**: `string`

A code specifying a service type of this logistics service charge.

#### See

https://vocabulary.uncefact.org/serviceTypeCode

***

### specifiedPaymentMeans?

> `optional` **specifiedPaymentMeans**: [`IUnecePaymentMeans`](IUnecePaymentMeans.md)

The trade settlement payment means specified for this logistics service charge.

#### See

https://vocabulary.uncefact.org/specifiedPaymentMeans

***

### tariffCurrencyCode?

> `optional` **tariffCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)[]

A code specifying a tariff currency for this logistics service charge.

#### See

https://vocabulary.uncefact.org/tariffCurrencyCode

***

### transportServiceCategoryCode?

> `optional` **transportServiceCategoryCode**: [`UneceTransportServiceCategoryCodeList`](../type-aliases/UneceTransportServiceCategoryCodeList.md)

The code specifying the category of this logistics service charge [Reference United Nations Code List (UNCL) 5237].

#### See

https://vocabulary.uncefact.org/transportServiceCategoryCode

***

### transportServicePaymentArrangementCode?

> `optional` **transportServicePaymentArrangementCode**: [`UneceTransportServicePaymentArrangementCodeList`](../type-aliases/UneceTransportServicePaymentArrangementCodeList.md)

The code specifying the payment arrangement for this logistics service charge [Reference United Nations Code List (UNCL)
4237].

#### See

https://vocabulary.uncefact.org/transportServicePaymentArrangementCode

***

### unitCalculationBasisAreaMeasure?

> `optional` **unitCalculationBasisAreaMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)

The measure of the area used as the basis for the calculation of this logistics service charge.

#### See

https://vocabulary.uncefact.org/unitCalculationBasisAreaMeasure
