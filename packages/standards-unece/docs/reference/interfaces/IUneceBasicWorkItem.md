# Interface: IUneceBasicWorkItem

A basic item of work.

## See

https://vocabulary.uncefact.org/BasicWorkItem

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"BasicWorkItem"`

JSON-LD Type.

***

### actualComplexDescription? {#actualcomplexdescription}

> `optional` **actualComplexDescription?**: [`IUneceComplexDescription`](IUneceComplexDescription.md)[]

An actual complex description for this basic work item.

#### See

https://vocabulary.uncefact.org/actualComplexDescription

***

### alternativeClassificationCode? {#alternativeclassificationcode}

> `optional` **alternativeClassificationCode?**: `string`

A code specifying an alternative classification for this basic work item.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### binaryFile? {#binaryfile}

> `optional` **binaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file referenced by this basic work item.

#### See

https://vocabulary.uncefact.org/binaryFile

***

### changedStatus? {#changedstatus}

> `optional` **changedStatus?**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)[]

A changed recorded status for this basic work item.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### comment? {#comment}

> `optional` **comment?**: `string`

A comment, expressed as text, for this basic work item.

#### See

https://vocabulary.uncefact.org/comment

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode?**: `string`

The code specifying the contractual language for this basic work item.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this basic work item.

#### See

https://vocabulary.uncefact.org/identifier

***

### index? {#index}

> `optional` **index?**: `string`

The index, expressed as text, to be used for this basic work item.

#### See

https://vocabulary.uncefact.org/index

***

### itemBasicWorkItem? {#itembasicworkitem}

> `optional` **itemBasicWorkItem?**: `IUneceBasicWorkItem`[]

A basic work item in this basic work item.

#### See

https://vocabulary.uncefact.org/itemBasicWorkItem

***

### priceListItemId? {#pricelistitemid}

> `optional` **priceListItemId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a price list item for this basic work item.

#### See

https://vocabulary.uncefact.org/priceListItemId

***

### primaryClassificationCode? {#primaryclassificationcode}

> `optional` **primaryClassificationCode?**: `string`

A code specifying the primary classification for this basic work item.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### referenceId? {#referenceid}

> `optional` **referenceId?**: `string` \| `IJsonLdValueObject`

The unique identifier of another work item referenced by this basic work item.

#### See

https://vocabulary.uncefact.org/referenceId

***

### requestedActionCode? {#requestedactioncode}

> `optional` **requestedActionCode?**: `string`

A code specifying a requested action for this basic work item.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### totalPrice? {#totalprice}

> `optional` **totalPrice?**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)[]

A total calculated price for this basic work item.

#### See

https://vocabulary.uncefact.org/totalPrice

***

### totalQuantity? {#totalquantity}

> `optional` **totalQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total quantity for this basic work item.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### totalQuantityAnalysis? {#totalquantityanalysis}

> `optional` **totalQuantityAnalysis?**: [`IUneceQuantityAnalysis`](IUneceQuantityAnalysis.md)[]

An analysis of the total quantity for this basic work item.

#### See

https://vocabulary.uncefact.org/totalQuantityAnalysis

***

### totalQuantityClassificationCode? {#totalquantityclassificationcode}

> `optional` **totalQuantityClassificationCode?**: `string`

The code specifying the classification of the total quantity for this basic work item.

#### See

https://vocabulary.uncefact.org/totalQuantityClassificationCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying the type of basic work item.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitPrice? {#unitprice}

> `optional` **unitPrice?**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)[]

A unit calculated price for this basic work item.

#### See

https://vocabulary.uncefact.org/unitPrice
