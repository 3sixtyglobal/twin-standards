# Interface: IUneceBasicWorkItem

A basic item of work.

## See

https://vocabulary.uncefact.org/BasicWorkItem

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

> **type**: `"BasicWorkItem"`

JSON-LD Type.

***

### actualComplexDescription?

> `optional` **actualComplexDescription**: [`IUneceComplexDescription`](IUneceComplexDescription.md)

An actual complex description for this basic work item.

#### See

https://vocabulary.uncefact.org/actualComplexDescription

***

### alternativeClassificationCode?

> `optional` **alternativeClassificationCode**: `string`

A code specifying an alternative classification for this basic work item.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### binaryFile?

> `optional` **binaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

A specified binary file referenced by this basic work item.

#### See

https://vocabulary.uncefact.org/binaryFile

***

### changedStatus?

> `optional` **changedStatus**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)

A changed recorded status for this basic work item.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### comment?

> `optional` **comment**: `string`

A comment, expressed as text, for this basic work item.

#### See

https://vocabulary.uncefact.org/comment

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this basic work item.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this basic work item.

#### See

https://vocabulary.uncefact.org/identifier

***

### index?

> `optional` **index**: `string`

The index, expressed as text, to be used for this basic work item.

#### See

https://vocabulary.uncefact.org/index

***

### itemBasicWorkItem?

> `optional` **itemBasicWorkItem**: `IUneceBasicWorkItem`

A basic work item in this basic work item.

#### See

https://vocabulary.uncefact.org/itemBasicWorkItem

***

### priceListItemId?

> `optional` **priceListItemId**: `string`

The unique identifier of a price list item for this basic work item.

#### See

https://vocabulary.uncefact.org/priceListItemId

***

### primaryClassificationCode?

> `optional` **primaryClassificationCode**: `string`

A code specifying the primary classification for this basic work item.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### referenceId?

> `optional` **referenceId**: `string`

The unique identifier of another work item referenced by this basic work item.

#### See

https://vocabulary.uncefact.org/referenceId

***

### requestedActionCode?

> `optional` **requestedActionCode**: `string`

A code specifying a requested action for this basic work item.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### totalPrice?

> `optional` **totalPrice**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)

A total calculated price for this basic work item.

#### See

https://vocabulary.uncefact.org/totalPrice

***

### totalQuantity?

> `optional` **totalQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total quantity for this basic work item.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### totalQuantityAnalysis?

> `optional` **totalQuantityAnalysis**: [`IUneceQuantityAnalysis`](IUneceQuantityAnalysis.md)

An analysis of the total quantity for this basic work item.

#### See

https://vocabulary.uncefact.org/totalQuantityAnalysis

***

### totalQuantityClassificationCode?

> `optional` **totalQuantityClassificationCode**: `string`

The code specifying the classification of the total quantity for this basic work item.

#### See

https://vocabulary.uncefact.org/totalQuantityClassificationCode

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of basic work item.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitPrice?

> `optional` **unitPrice**: [`IUneceCalculatedPrice`](IUneceCalculatedPrice.md)

A unit calculated price for this basic work item.

#### See

https://vocabulary.uncefact.org/unitPrice
