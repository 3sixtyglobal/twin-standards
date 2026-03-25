# Interface: IUnecePaymentMeans

The means by which a payment will be or has been made for trade settlement purposes.

## See

https://vocabulary.uncefact.org/PaymentMeans

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentMeans"`

JSON-LD Type.

***

### applicableFinancialCard? {#applicablefinancialcard}

> `optional` **applicableFinancialCard?**: [`IUneceFinancialCard`](IUneceFinancialCard.md)[]

A financial card applicable to this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/applicableFinancialCard

***

### creditorSpecifiedFinancialInstitution? {#creditorspecifiedfinancialinstitution}

> `optional` **creditorSpecifiedFinancialInstitution?**: [`IUnecePaymentFinancialInstitution`](IUnecePaymentFinancialInstitution.md)[]

A creditor financial institution specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/creditorSpecifiedFinancialInstitution

***

### debtorSpecifiedFinancialInstitution? {#debtorspecifiedfinancialinstitution}

> `optional` **debtorSpecifiedFinancialInstitution?**: [`IUnecePaymentFinancialInstitution`](IUnecePaymentFinancialInstitution.md)[]

A debtor financial institution specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/debtorSpecifiedFinancialInstitution

***

### identifiedCash? {#identifiedcash}

> `optional` **identifiedCash?**: [`IUneceCash`](IUneceCash.md)[]

A cash payment identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedCash

***

### identifiedCheque? {#identifiedcheque}

> `optional` **identifiedCheque?**: [`IUneceCheque`](IUneceCheque.md)[]

A cheque payment identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedCheque

***

### identifiedDigitalMethod? {#identifieddigitalmethod}

> `optional` **identifiedDigitalMethod?**: [`IUneceDigitalMethod`](IUneceDigitalMethod.md)[]

A digital payment method identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedDigitalMethod

***

### identifiedFinancialCard? {#identifiedfinancialcard}

> `optional` **identifiedFinancialCard?**: [`IUneceFinancialCard`](IUneceFinancialCard.md)[]

A financial card identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedFinancialCard

***

### identifiedVoucher? {#identifiedvoucher}

> `optional` **identifiedVoucher?**: [`IUneceVoucher`](IUneceVoucher.md)[]

An experience item voucher identified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/identifiedVoucher

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/information

***

### paidAmount? {#paidamount}

> `optional` **paidAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value to be paid by this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/paidAmount

***

### payeePartyFinancialAccount? {#payeepartyfinancialaccount}

> `optional` **payeePartyFinancialAccount?**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)[]

A creditor financial account of the payee party for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payeePartyFinancialAccount

***

### payeeSpecifiedFinancialInstitution? {#payeespecifiedfinancialinstitution}

> `optional` **payeeSpecifiedFinancialInstitution?**: [`IUneceCreditorFinancialInstitution`](IUneceCreditorFinancialInstitution.md)

The creditor financial institution of the payee party specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payeeSpecifiedFinancialInstitution

***

### payerPartyFinancialAccount? {#payerpartyfinancialaccount}

> `optional` **payerPartyFinancialAccount?**: [`IUneceDebtorFinancialAccount`](IUneceDebtorFinancialAccount.md)

The debtor financial account of the payer party for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payerPartyFinancialAccount

***

### payerSpecifiedFinancialInstitution? {#payerspecifiedfinancialinstitution}

> `optional` **payerSpecifiedFinancialInstitution?**: [`IUneceDebtorFinancialInstitution`](IUneceDebtorFinancialInstitution.md)

The debtor financial institution of the payer party specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/payerSpecifiedFinancialInstitution

***

### paymentGuaranteeMeansGuaranteeMethodCode? {#paymentguaranteemeansguaranteemethodcode}

> `optional` **paymentGuaranteeMeansGuaranteeMethodCode?**: `string`

The code specifying the method of guarantee for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/paymentGuaranteeMeansGuaranteeMethodCode

***

### paymentMeansChannelPaymentChannelCode? {#paymentmeanschannelpaymentchannelcode}

> `optional` **paymentMeansChannelPaymentChannelCode?**: `string`

The code specifying the payment channel through which this trade settlement payment is to be processed (Reference United
Nations Code List (UNCL) 4435).

#### See

https://vocabulary.uncefact.org/paymentMeansChannelPaymentChannelCode

***

### paymentMeansType? {#paymentmeanstype}

> `optional` **paymentMeansType?**: `string`

The type of trade settlement payment means, expressed as text.

#### See

https://vocabulary.uncefact.org/paymentMeansType

***

### paymentMeansTypeCode? {#paymentmeanstypecode}

> `optional` **paymentMeansTypeCode?**: `string`

The code specifying the type of trade settlement payment means, such as cash or check.

#### See

https://vocabulary.uncefact.org/paymentMeansTypeCode

***

### paymentMethodCode? {#paymentmethodcode}

> `optional` **paymentMethodCode?**: `string`

The code specifying the method by which a payment may be made for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/paymentMethodCode

***

### specifiedCreditorFinancialAccount? {#specifiedcreditorfinancialaccount}

> `optional` **specifiedCreditorFinancialAccount?**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)[]

A creditor financial account specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount

***

### specifiedPaymentFinancialInstitution? {#specifiedpaymentfinancialinstitution}

> `optional` **specifiedPaymentFinancialInstitution?**: [`IUnecePaymentFinancialInstitution`](IUnecePaymentFinancialInstitution.md)[]

A financial institution specified for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/specifiedPaymentFinancialInstitution

***

### tradeSettlementPaymentMeansId? {#tradesettlementpaymentmeansid}

> `optional` **tradeSettlementPaymentMeansId?**: `string` \| `IJsonLdValueObject`

An identifier for this trade settlement payment means.

#### See

https://vocabulary.uncefact.org/tradeSettlementPaymentMeansId
