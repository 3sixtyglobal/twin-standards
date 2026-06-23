# Interface: IUneceAccountingAccount

A specific trade account for recording debits and credits to general accounting, cost accounting or budget accounting.

## See

https://vocabulary.uncefact.org/AccountingAccount

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AccountingAccount"`

JSON-LD Type.

***

### abbreviatedName? {#abbreviatedname}

> `optional` **abbreviatedName?**: `string`

The abbreviated name, expressed as text, of this trade accounting account.

#### See

https://vocabulary.uncefact.org/abbreviatedName

***

### accountingAccountTypeCode? {#accountingaccounttypecode}

> `optional` **accountingAccountTypeCode?**: [`UneceAccountingAccountTypeCodeList`](../type-aliases/UneceAccountingAccountTypeCodeList.md)

The code specifying the type of trade accounting account, such as general (main), secondary, cost accounting or budget
account.

#### See

https://vocabulary.uncefact.org/accountingAccountTypeCode

***

### accountingAmountTypeAmountTypeCode? {#accountingamounttypeamounttypecode}

> `optional` **accountingAmountTypeAmountTypeCode?**: [`UneceAccountingAmountTypeCodeList`](../type-aliases/UneceAccountingAmountTypeCodeList.md)

The code specifying the amount type for this trade accounting account.

#### See

https://vocabulary.uncefact.org/accountingAmountTypeAmountTypeCode

***

### accountingDocumentSetTriggerCode? {#accountingdocumentsettriggercode}

> `optional` **accountingDocumentSetTriggerCode?**: [`UneceAccountingDocumentCodeList`](../type-aliases/UneceAccountingDocumentCodeList.md)[]

A code specifying a set trigger for this trade accounting account to be used in response to a specific event or a set of
events.

#### See

https://vocabulary.uncefact.org/accountingDocumentSetTriggerCode

***

### costReferenceDimensionPattern? {#costreferencedimensionpattern}

> `optional` **costReferenceDimensionPattern?**: `string`

The cost reference dimension pattern, expressed as text, for this trade accounting account.

#### See

https://vocabulary.uncefact.org/costReferenceDimensionPattern

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this trade accounting account.

#### See

https://vocabulary.uncefact.org/identifier

***

### mainAccountsChartId? {#mainaccountschartid}

> `optional` **mainAccountsChartId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the main accounts chart for this trade accounting account.

#### See

https://vocabulary.uncefact.org/mainAccountsChartId

***

### mainAccountsChartReferenceId? {#mainaccountschartreferenceid}

> `optional` **mainAccountsChartReferenceId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the main accounts chart reference for this trade accounting account.

#### See

https://vocabulary.uncefact.org/mainAccountsChartReferenceId

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this trade accounting account.

#### See

https://vocabulary.uncefact.org/name

***

### subAccountId? {#subaccountid}

> `optional` **subAccountId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the sub account for this trade accounting account.

#### See

https://vocabulary.uncefact.org/subAccountId
