# Interface: IUneceGroupedWorkItem

A grouping of related work items.

## See

https://vocabulary.uncefact.org/GroupedWorkItem

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

> **type**: `"GroupedWorkItem"`

JSON-LD Type.

***

### actualComplexDescription?

> `optional` **actualComplexDescription**: [`IUneceComplexDescription`](IUneceComplexDescription.md)[]

An actual complex description for this work item group.

#### See

https://vocabulary.uncefact.org/actualComplexDescription

***

### alternativeClassificationCode?

> `optional` **alternativeClassificationCode**: `string`

A code specifying an alternative classification for this work item group.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### binaryFile?

> `optional` **binaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file referenced by this grouped work item.

#### See

https://vocabulary.uncefact.org/binaryFile

***

### changedStatus?

> `optional` **changedStatus**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)[]

A changed recorded status for this grouped work item.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### comment?

> `optional` **comment**: `string`

A comment, expressed as text, for this work item group.

#### See

https://vocabulary.uncefact.org/comment

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this grouped work item.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### identifier

> **identifier**: `string`

The unique identifier for this work item group.

#### See

https://vocabulary.uncefact.org/identifier

***

### index?

> `optional` **index**: `string`

The index, expressed as text, to be used for this grouped work item.

#### See

https://vocabulary.uncefact.org/index

***

### itemBasicWorkItem?

> `optional` **itemBasicWorkItem**: [`IUneceBasicWorkItem`](IUneceBasicWorkItem.md)[]

A basic work item within this grouped work item.

#### See

https://vocabulary.uncefact.org/itemBasicWorkItem

***

### itemGroupedWorkItem?

> `optional` **itemGroupedWorkItem**: `IUneceGroupedWorkItem`[]

A grouped work item within this grouped work item.

#### See

https://vocabulary.uncefact.org/itemGroupedWorkItem

***

### priceListItemId?

> `optional` **priceListItemId**: `string`

The identifier of a price list item for this grouped work item.

#### See

https://vocabulary.uncefact.org/priceListItemId

***

### primaryClassificationCode?

> `optional` **primaryClassificationCode**: `string`

A code specifying the primary classification for this work item group.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### requestedActionCode?

> `optional` **requestedActionCode**: `string`

A code specifying a requested action for this grouped work item.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### totalPrice?

> `optional` **totalPrice**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)[]

A total calculated price for this work item group.

#### See

https://vocabulary.uncefact.org/totalPrice

***

### totalQuantity?

> `optional` **totalQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total quantity of this work item group.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of this work item group.

#### See

https://vocabulary.uncefact.org/typeCode
