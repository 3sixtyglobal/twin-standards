# Interface: ISubordinateLineTradeSettlement

The information, at a subordinate line level, that enables the reconciliation of a financial transaction with the
item(s) that the financial transaction is intended to settle, for example a commercial invoice.

## See

https://vocabulary.uncefact.org/SubordinateLineTradeSettlement

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

> **type**: `"SubordinateLineTradeSettlement"`

JSON-LD Type.

***

### amountDirectionCode?

> `optional` **amountDirectionCode**: `string`

The code, specifying the direction, either an addition or subtraction, for the amount of this subordinate line trade
settlement.

#### See

https://vocabulary.uncefact.org/amountDirectionCode

***

### applicableTax?

> `optional` **applicableTax**: [`ITradeTax`](ITradeTax.md)[]

A tax applicable to this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### billingPeriod?

> `optional` **billingPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The billing period specified for the subordinate line of this trade settlement.

#### See

https://vocabulary.uncefact.org/billingPeriod

***

### invoiceReferencedDocument?

> `optional` **invoiceReferencedDocument**: [`IDocument`](IDocument.md)[]

An invoice document referenced for this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceReferencedDocument

***

### purchaseSpecifiedAccountingAccount?

> `optional` **purchaseSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A purchase accounting account specified for the subordinate line of this trade settlement.

#### See

https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount

***

### specifiedAllowanceCharge?

> `optional` **specifiedAllowanceCharge**: [`ITradeAllowanceCharge`](ITradeAllowanceCharge.md)[]

An allowance or charge specified for this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAllowanceCharge

***

### specifiedFinancialAdjustment?

> `optional` **specifiedFinancialAdjustment**: [`IFinancialAdjustment`](IFinancialAdjustment.md)[]

A financial adjustment specified for this subordinate line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialAdjustment
