# Interface: IUneceExchangedDocumentContext

The scenario or setting of an exchanged document, such as its business process application context.

## See

https://vocabulary.uncefact.org/ExchangedDocumentContext

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

> **type**: `"ExchangedDocumentContext"`

JSON-LD Type.

***

### applicationSpecifiedParameter?

> `optional` **applicationSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

An application context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/applicationSpecifiedParameter

***

### bIMSpecifiedParameter?

> `optional` **bIMSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A Business Information Master (BIM) context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/bIMSpecifiedParameter

***

### businessProcessSpecifiedParameter?

> `optional` **businessProcessSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A business process context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/businessProcessSpecifiedParameter

***

### guidelineSpecifiedParameter?

> `optional` **guidelineSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A guideline context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/guidelineSpecifiedParameter

***

### messageStandardSpecifiedParameter?

> `optional` **messageStandardSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)

The message standard document context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/messageStandardSpecifiedParameter

***

### processingTransactionDateTime?

> `optional` **processingTransactionDateTime**: `string`

The date, time, date time, or other date time value of the processing of a transaction for this exchanged document
context.

#### See

https://vocabulary.uncefact.org/processingTransactionDateTime

***

### scenarioSpecifiedParameter?

> `optional` **scenarioSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A scenario context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/scenarioSpecifiedParameter

***

### specifiedTransactionId?

> `optional` **specifiedTransactionId**: `string`

The identifier of a specified transaction in this exchanged document context.

#### See

https://vocabulary.uncefact.org/specifiedTransactionId

***

### subsetSpecifiedParameter?

> `optional` **subsetSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A subset context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/subsetSpecifiedParameter

***

### testIndicator?

> `optional` **testIndicator**: `boolean`

The indication of whether or not this exchanged document context is a test.

#### See

https://vocabulary.uncefact.org/testIndicator

***

### userSpecifiedParameter?

> `optional` **userSpecifiedParameter**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A user specified document context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/userSpecifiedParameter
