# Interface: IUneceFinancialAdjustment

A correction or modification to reflect actual financial conditions.

## See

https://vocabulary.uncefact.org/FinancialAdjustment

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancialAdjustment"`

JSON-LD Type.

***

### accountingDebitCreditStatusDirectionCode? {#accountingdebitcreditstatusdirectioncode}

> `optional` **accountingDebitCreditStatusDirectionCode**: [`UneceAccountingDebitCreditStatusCodeList`](../type-aliases/UneceAccountingDebitCreditStatusCodeList.md)

The code specifying whether the financial adjustment must be subtracted or added.

#### See

https://vocabulary.uncefact.org/accountingDebitCreditStatusDirectionCode

***

### actualAmount? {#actualamount}

> `optional` **actualAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An actual monetary value added or subtracted as a result of this financial adjustment.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualDateTime? {#actualdatetime}

> `optional` **actualDateTime**: `string`

The actual date, time, date time, or other date time value of this financial adjustment.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### actualQuantity? {#actualquantity}

> `optional` **actualQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual quantity added or subtracted as a result of this financial adjustment.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### claimRelatedParty? {#claimrelatedparty}

> `optional` **claimRelatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The claim related party for this financial adjustment.

#### See

https://vocabulary.uncefact.org/claimRelatedParty

***

### financialAdjustmentReasonCode? {#financialadjustmentreasoncode}

> `optional` **financialAdjustmentReasonCode**: [`UneceFinancialAdjustmentReasonCodeList`](../type-aliases/UneceFinancialAdjustmentReasonCodeList.md)[]

A code specifying a reason for this financial adjustment.

#### See

https://vocabulary.uncefact.org/financialAdjustmentReasonCode

***

### invoiceReferenceDocument? {#invoicereferencedocument}

> `optional` **invoiceReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)

The invoice document referenced for this financial adjustment.

#### See

https://vocabulary.uncefact.org/invoiceReferenceDocument

***

### reason? {#reason}

> `optional` **reason**: `string`

A reason, expressed as text, for this financial adjustment.

#### See

https://vocabulary.uncefact.org/reason

***

### relatedTax? {#relatedtax}

> `optional` **relatedTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A trade tax related to this financial adjustment.

#### See

https://vocabulary.uncefact.org/relatedTax
