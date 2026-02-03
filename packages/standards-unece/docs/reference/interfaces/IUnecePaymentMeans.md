# Interface: IUnecePaymentMeans

The means by which a payment will be or has been made for trade settlement purposes.

## See

https://vocabulary.uncefact.org/PaymentMeans

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

> **type**: `"PaymentMeans"`

JSON-LD Type.

***

### applicableFinancialCard?

> `optional` **applicableFinancialCard**: [`IUneceFinancialCard`](IUneceFinancialCard.md)

A financial card applicable to this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/applicableFinancialCard

***

### creditorSpecifiedFinancialInstitution?

> `optional` **creditorSpecifiedFinancialInstitution**: [`IUnecePaymentFinancialInstitution`](IUnecePaymentFinancialInstitution.md)

A creditor financial institution specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/creditorSpecifiedFinancialInstitution

***

### debtorSpecifiedFinancialInstitution?

> `optional` **debtorSpecifiedFinancialInstitution**: [`IUnecePaymentFinancialInstitution`](IUnecePaymentFinancialInstitution.md)

A debtor financial institution specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/debtorSpecifiedFinancialInstitution

***

### identifiedCash?

> `optional` **identifiedCash**: [`IUneceCash`](IUneceCash.md)

A cash payment identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedCash

***

### identifiedCheque?

> `optional` **identifiedCheque**: [`IUneceCheque`](IUneceCheque.md)

A cheque payment identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedCheque

***

### identifiedDigitalMethod?

> `optional` **identifiedDigitalMethod**: [`IUneceDigitalMethod`](IUneceDigitalMethod.md)

A digital payment method identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedDigitalMethod

***

### identifiedFinancialCard?

> `optional` **identifiedFinancialCard**: [`IUneceFinancialCard`](IUneceFinancialCard.md)

A financial card identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedFinancialCard

***

### identifiedVoucher?

> `optional` **identifiedVoucher**: [`IUneceVoucher`](IUneceVoucher.md)

An experience item voucher identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedVoucher

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/information

***

### paidAmount?

> `optional` **paidAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value to be paid by this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/paidAmount

***

### payeePartyFinancialAccount?

> `optional` **payeePartyFinancialAccount**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)

A creditor financial account of the payee party for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payeePartyFinancialAccount

***

### payeeSpecifiedFinancialInstitution?

> `optional` **payeeSpecifiedFinancialInstitution**: [`IUneceCreditorFinancialInstitution`](IUneceCreditorFinancialInstitution.md)

The creditor financial institution of the payee party specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payeeSpecifiedFinancialInstitution

***

### payerPartyFinancialAccount?

> `optional` **payerPartyFinancialAccount**: [`IUneceDebtorFinancialAccount`](IUneceDebtorFinancialAccount.md)

The debtor financial account of the payer party for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payerPartyFinancialAccount

***

### payerSpecifiedFinancialInstitution?

> `optional` **payerSpecifiedFinancialInstitution**: [`IUneceDebtorFinancialInstitution`](IUneceDebtorFinancialInstitution.md)

The debtor financial institution of the payer party specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payerSpecifiedFinancialInstitution

***

### paymentGuaranteeMeansGuaranteeMethodCode?

> `optional` **paymentGuaranteeMeansGuaranteeMethodCode**: [`UnecePaymentGuaranteeMeansCodeList`](../type-aliases/UnecePaymentGuaranteeMeansCodeList.md)

The code specifying the method of guarantee for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/paymentGuaranteeMeansGuaranteeMethodCode

***

### paymentMeansChannelPaymentChannelCode?

> `optional` **paymentMeansChannelPaymentChannelCode**: [`UnecePaymentMeansChannelCodeList`](../type-aliases/UnecePaymentMeansChannelCodeList.md)

The code specifying the payment channel through which this trade settlement payment is to be processed (Reference United
Nations Code List (UNCL) 4435).

#### See

https://vocabulary.uncefact.org/paymentMeansChannelPaymentChannelCode

***

### paymentMeansType?

> `optional` **paymentMeansType**: `string`

The type of trade settlement payment means, expressed as text.

#### See

https://vocabulary.uncefact.org/paymentMeansType

***

### paymentMeansTypeCode?

> `optional` **paymentMeansTypeCode**: [`UnecePaymentMeansCodeList`](../type-aliases/UnecePaymentMeansCodeList.md)

The code specifying the type of trade settlement payment means, such as cash or check.

#### See

https://vocabulary.uncefact.org/paymentMeansTypeCode

***

### paymentMethodCode?

> `optional` **paymentMethodCode**: `string`

The code specifying the method by which a payment may be made for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/paymentMethodCode

***

### specifiedCreditorFinancialAccount?

> `optional` **specifiedCreditorFinancialAccount**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)

A creditor financial account specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount

***

### specifiedPaymentFinancialInstitution?

> `optional` **specifiedPaymentFinancialInstitution**: [`IUnecePaymentFinancialInstitution`](IUnecePaymentFinancialInstitution.md)

A financial institution specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/specifiedPaymentFinancialInstitution

***

### tradeSettlementPaymentMeansId?

> `optional` **tradeSettlementPaymentMeansId**: `string`

An identifier for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/tradeSettlementPaymentMeansId
