# Interface: IUneceSubordinateLineTradeSettlement

The information, at a subordinate line level, that enables the reconciliation of a financial transaction with the
item(s) that the financial transaction is intended to settle, for example a commercial invoice.

## See

https://vocabulary.uncefact.org/SubordinateLineTradeSettlement

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SubordinateLineTradeSettlement"`

JSON-LD Type.

***

### amountDirectionCode? {#amountdirectioncode}

> `optional` **amountDirectionCode**: `string`

The code, specifying the direction, either an addition or subtraction, for the amount of this subordinate line trade
settlement.

#### See

https://vocabulary.uncefact.org/amountDirectionCode

***

### applicableTax? {#applicabletax}

> `optional` **applicableTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax applicable to this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### billingPeriod? {#billingperiod}

> `optional` **billingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The billing period specified for the subordinate line of this trade settlement.

#### See

https://vocabulary.uncefact.org/billingPeriod

***

### invoiceReferencedDocument? {#invoicereferenceddocument}

> `optional` **invoiceReferencedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An invoice document referenced for this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceReferencedDocument

***

### purchaseSpecifiedAccountingAccount? {#purchasespecifiedaccountingaccount}

> `optional` **purchaseSpecifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

A purchase accounting account specified for the subordinate line of this trade settlement.

#### See

https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount

***

### specifiedAllowanceCharge? {#specifiedallowancecharge}

> `optional` **specifiedAllowanceCharge**: [`IUneceTradeAllowanceCharge`](IUneceTradeAllowanceCharge.md)[]

An allowance or charge specified for this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAllowanceCharge

***

### specifiedFinancialAdjustment? {#specifiedfinancialadjustment}

> `optional` **specifiedFinancialAdjustment**: [`IUneceFinancialAdjustment`](IUneceFinancialAdjustment.md)[]

A financial adjustment specified for this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialAdjustment
