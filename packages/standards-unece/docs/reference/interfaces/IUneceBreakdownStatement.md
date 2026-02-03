# Interface: IUneceBreakdownStatement

A detailed statement of work, prices, and dimensions for this valuation.

## See

https://vocabulary.uncefact.org/BreakdownStatement

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

> **type**: `"BreakdownStatement"`

JSON-LD Type.

***

### binaryFile?

> `optional` **binaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

A specified binary file referenced by this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/binaryFile

***

### changedStatus?

> `optional` **changedStatus**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)

A changed recorded status for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### comment?

> `optional` **comment**: `string`

A comment, expressed as text, for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/comment

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### creationBinaryFile?

> `optional` **creationBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

A specified binary file used to create this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/creationBinaryFile

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### defaultCurrencyCode?

> `optional` **defaultCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the default currency for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/defaultCurrencyCode

***

### defaultLanguageCode?

> `optional` **defaultLanguageCode**: `string`

The code specifying the default language for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/defaultLanguageCode

***

### description?

> `optional` **description**: `string`

A textual description of this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/identifier

***

### itemBasicWorkItem?

> `optional` **itemBasicWorkItem**: [`IUneceBasicWorkItem`](IUneceBasicWorkItem.md)

A basic work item in this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/itemBasicWorkItem

***

### itemGroupedWorkItem?

> `optional` **itemGroupedWorkItem**: [`IUneceGroupedWorkItem`](IUneceGroupedWorkItem.md)

A grouped work item in this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/itemGroupedWorkItem

***

### measurementMethodId?

> `optional` **measurementMethodId**: `string`

A unique identifier of a method of measurement for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/measurementMethodId

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/name

***

### priceListId?

> `optional` **priceListId**: `string`

The identifier of a price list for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/priceListId

***

### readerBinaryFile?

> `optional` **readerBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

A specified binary file used to read this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/readerBinaryFile

***

### requestedActionCode?

> `optional` **requestedActionCode**: `string`

A code specifying the requested action for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### totalPrice?

> `optional` **totalPrice**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)

A total calculated price for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/totalPrice

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/typeCode
