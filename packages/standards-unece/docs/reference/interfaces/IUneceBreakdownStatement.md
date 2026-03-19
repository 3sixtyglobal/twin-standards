# Interface: IUneceBreakdownStatement

A detailed statement of work, prices, and dimensions for this valuation.

## See

https://vocabulary.uncefact.org/BreakdownStatement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"BreakdownStatement"`

JSON-LD Type.

***

### binaryFile? {#binaryfile}

> `optional` **binaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file referenced by this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/binaryFile

***

### changedStatus? {#changedstatus}

> `optional` **changedStatus?**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)[]

A changed recorded status for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### comment? {#comment}

> `optional` **comment?**: `string`

A comment, expressed as text, for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/comment

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode?**: `string`

The code specifying the contractual language for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### creationBinaryFile? {#creationbinaryfile}

> `optional` **creationBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file used to create this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/creationBinaryFile

***

### creationDateTime {#creationdatetime}

> **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### defaultCurrencyCode {#defaultcurrencycode}

> **defaultCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the default currency for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/defaultCurrencyCode

***

### defaultLanguageCode {#defaultlanguagecode}

> **defaultLanguageCode**: `string`

The code specifying the default language for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/defaultLanguageCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/description

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/identifier

***

### itemBasicWorkItem? {#itembasicworkitem}

> `optional` **itemBasicWorkItem?**: [`IUneceBasicWorkItem`](IUneceBasicWorkItem.md)[]

A basic work item in this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/itemBasicWorkItem

***

### itemGroupedWorkItem? {#itemgroupedworkitem}

> `optional` **itemGroupedWorkItem?**: [`IUneceGroupedWorkItem`](IUneceGroupedWorkItem.md)[]

A grouped work item in this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/itemGroupedWorkItem

***

### measurementMethodId? {#measurementmethodid}

> `optional` **measurementMethodId?**: `string` \| `IJsonLdValueObject`

A unique identifier of a method of measurement for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/measurementMethodId

***

### name {#name}

> **name**: `string`

The name, expressed as text, for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/name

***

### priceListId? {#pricelistid}

> `optional` **priceListId?**: `string` \| `IJsonLdValueObject`

The identifier of a price list for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/priceListId

***

### readerBinaryFile? {#readerbinaryfile}

> `optional` **readerBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file used to read this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/readerBinaryFile

***

### requestedActionCode? {#requestedactioncode}

> `optional` **requestedActionCode?**: `string`

A code specifying the requested action for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### totalPrice? {#totalprice}

> `optional` **totalPrice?**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)[]

A total calculated price for this valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/totalPrice

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying the type of valuation breakdown statement.

#### See

https://vocabulary.uncefact.org/typeCode
