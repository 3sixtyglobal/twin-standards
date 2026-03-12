# Interface: IUneceGroupedWorkItem

A grouping of related work items.

## See

https://vocabulary.uncefact.org/GroupedWorkItem

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GroupedWorkItem"`

JSON-LD Type.

***

### actualComplexDescription? {#actualcomplexdescription}

> `optional` **actualComplexDescription**: [`IUneceComplexDescription`](IUneceComplexDescription.md)[]

An actual complex description for this work item group.

#### See

https://vocabulary.uncefact.org/actualComplexDescription

***

### alternativeClassificationCode? {#alternativeclassificationcode}

> `optional` **alternativeClassificationCode**: `string`

A code specifying an alternative classification for this work item group.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### binaryFile? {#binaryfile}

> `optional` **binaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file referenced by this grouped work item.

#### See

https://vocabulary.uncefact.org/binaryFile

***

### changedStatus? {#changedstatus}

> `optional` **changedStatus**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)[]

A changed recorded status for this grouped work item.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### comment? {#comment}

> `optional` **comment**: `string`

A comment, expressed as text, for this work item group.

#### See

https://vocabulary.uncefact.org/comment

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this grouped work item.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this work item group.

#### See

https://vocabulary.uncefact.org/identifier

***

### index? {#index}

> `optional` **index**: `string`

The index, expressed as text, to be used for this grouped work item.

#### See

https://vocabulary.uncefact.org/index

***

### itemBasicWorkItem? {#itembasicworkitem}

> `optional` **itemBasicWorkItem**: [`IUneceBasicWorkItem`](IUneceBasicWorkItem.md)[]

A basic work item within this grouped work item.

#### See

https://vocabulary.uncefact.org/itemBasicWorkItem

***

### itemGroupedWorkItem? {#itemgroupedworkitem}

> `optional` **itemGroupedWorkItem**: `IUneceGroupedWorkItem`[]

A grouped work item within this grouped work item.

#### See

https://vocabulary.uncefact.org/itemGroupedWorkItem

***

### priceListItemId? {#pricelistitemid}

> `optional` **priceListItemId**: `string` \| `IJsonLdValueObject`

The identifier of a price list item for this grouped work item.

#### See

https://vocabulary.uncefact.org/priceListItemId

***

### primaryClassificationCode? {#primaryclassificationcode}

> `optional` **primaryClassificationCode**: `string`

A code specifying the primary classification for this work item group.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### requestedActionCode? {#requestedactioncode}

> `optional` **requestedActionCode**: `string`

A code specifying a requested action for this grouped work item.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### totalPrice? {#totalprice}

> `optional` **totalPrice**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)[]

A total calculated price for this work item group.

#### See

https://vocabulary.uncefact.org/totalPrice

***

### totalQuantity? {#totalquantity}

> `optional` **totalQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total quantity of this work item group.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying the type of this work item group.

#### See

https://vocabulary.uncefact.org/typeCode
