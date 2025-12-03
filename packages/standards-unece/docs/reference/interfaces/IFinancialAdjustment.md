# Interface: IFinancialAdjustment

A correction or modification to reflect actual financial conditions.

## See

https://vocabulary.uncefact.org/FinancialAdjustment

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

> **type**: `"FinancialAdjustment"`

JSON-LD Type.

***

### accountingDebitCreditStatusDirectionCode?

> `optional` **accountingDebitCreditStatusDirectionCode**: [`AccountingDebitCreditStatusCodeList`](../type-aliases/AccountingDebitCreditStatusCodeList.md)[]

The code specifying whether the financial adjustment must be subtracted or added.

#### See

https://vocabulary.uncefact.org/accountingDebitCreditStatusDirectionCode

***

### actualAmount?

> `optional` **actualAmount**: [`IAmountType`](IAmountType.md)[]

An actual monetary value added or subtracted as a result of this financial adjustment.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualDateTime?

> `optional` **actualDateTime**: `string`

The actual date, time, date time, or other date time value of this financial adjustment.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### actualQuantity?

> `optional` **actualQuantity**: [`IQuantityType`](IQuantityType.md)

The actual quantity added or subtracted as a result of this financial adjustment.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### claimRelatedParty?

> `optional` **claimRelatedParty**: [`ITradeParty`](ITradeParty.md)[]

The claim related party for this financial adjustment.

#### See

https://vocabulary.uncefact.org/claimRelatedParty

***

### financialAdjustmentReasonCode?

> `optional` **financialAdjustmentReasonCode**: [`FinancialAdjustmentReasonCodeList`](../type-aliases/FinancialAdjustmentReasonCodeList.md)

A code specifying a reason for this financial adjustment.

#### See

https://vocabulary.uncefact.org/financialAdjustmentReasonCode

***

### invoiceReferenceDocument?

> `optional` **invoiceReferenceDocument**: [`IDocument`](IDocument.md)[]

The invoice document referenced for this financial adjustment.

#### See

https://vocabulary.uncefact.org/invoiceReferenceDocument

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this financial adjustment.

#### See

https://vocabulary.uncefact.org/reason

***

### relatedTax?

> `optional` **relatedTax**: [`ITradeTax`](ITradeTax.md)[]

A trade tax related to this financial adjustment.

#### See

https://vocabulary.uncefact.org/relatedTax
