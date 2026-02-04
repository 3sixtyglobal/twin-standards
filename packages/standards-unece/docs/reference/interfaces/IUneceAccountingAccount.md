# Interface: IUneceAccountingAccount

A specific trade account for recording debits and credits to general accounting, cost accounting or budget accounting.

## See

https://vocabulary.uncefact.org/AccountingAccount

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

> **type**: `"AccountingAccount"`

JSON-LD Type.

***

### abbreviatedName?

> `optional` **abbreviatedName**: `string`

The abbreviated name, expressed as text, of this trade accounting account.

#### See

https://vocabulary.uncefact.org/abbreviatedName

***

### accountingAccountTypeCode?

> `optional` **accountingAccountTypeCode**: [`UneceAccountingAccountTypeCodeList`](../type-aliases/UneceAccountingAccountTypeCodeList.md)

The code specifying the type of trade accounting account, such as general (main), secondary, cost accounting or budget
account.

#### See

https://vocabulary.uncefact.org/accountingAccountTypeCode

***

### accountingAmountTypeAmountTypeCode?

> `optional` **accountingAmountTypeAmountTypeCode**: [`UneceAccountingAmountTypeCodeList`](../type-aliases/UneceAccountingAmountTypeCodeList.md)

The code specifying the amount type for this trade accounting account.

#### See

https://vocabulary.uncefact.org/accountingAmountTypeAmountTypeCode

***

### accountingDocumentSetTriggerCode?

> `optional` **accountingDocumentSetTriggerCode**: [`UneceAccountingDocumentCodeList`](../type-aliases/UneceAccountingDocumentCodeList.md)[]

A code specifying a set trigger for this trade accounting account to be used in response to a specific event or a set of
events.

#### See

https://vocabulary.uncefact.org/accountingDocumentSetTriggerCode

***

### costReferenceDimensionPattern?

> `optional` **costReferenceDimensionPattern**: `string`

The cost reference dimension pattern, expressed as text, for this trade accounting account.

#### See

https://vocabulary.uncefact.org/costReferenceDimensionPattern

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this trade accounting account.

#### See

https://vocabulary.uncefact.org/identifier

***

### mainAccountsChartId?

> `optional` **mainAccountsChartId**: `string`

The unique identifier of the main accounts chart for this trade accounting account.

#### See

https://vocabulary.uncefact.org/mainAccountsChartId

***

### mainAccountsChartReferenceId?

> `optional` **mainAccountsChartReferenceId**: `string`

The unique identifier of the main accounts chart reference for this trade accounting account.

#### See

https://vocabulary.uncefact.org/mainAccountsChartReferenceId

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this trade accounting account.

#### See

https://vocabulary.uncefact.org/name

***

### subAccountId?

> `optional` **subAccountId**: `string`

The unique identifier of the sub account for this trade accounting account.

#### See

https://vocabulary.uncefact.org/subAccountId
