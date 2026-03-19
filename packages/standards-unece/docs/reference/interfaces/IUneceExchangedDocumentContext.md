# Interface: IUneceExchangedDocumentContext

The scenario or setting of an exchanged document, such as its business process application context.

## See

https://vocabulary.uncefact.org/ExchangedDocumentContext

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExchangedDocumentContext"`

JSON-LD Type.

***

### applicationSpecifiedParameter? {#applicationspecifiedparameter}

> `optional` **applicationSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

An application context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/applicationSpecifiedParameter

***

### bIMSpecifiedParameter? {#bimspecifiedparameter}

> `optional` **bIMSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A Business Information Master (BIM) context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/bIMSpecifiedParameter

***

### businessProcessSpecifiedParameter? {#businessprocessspecifiedparameter}

> `optional` **businessProcessSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A business process context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/businessProcessSpecifiedParameter

***

### guidelineSpecifiedParameter? {#guidelinespecifiedparameter}

> `optional` **guidelineSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A guideline context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/guidelineSpecifiedParameter

***

### messageStandardSpecifiedParameter? {#messagestandardspecifiedparameter}

> `optional` **messageStandardSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)

The message standard document context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/messageStandardSpecifiedParameter

***

### processingTransactionDateTime? {#processingtransactiondatetime}

> `optional` **processingTransactionDateTime?**: `string`

The date, time, date time, or other date time value of the processing of a transaction for this exchanged document
context.

#### See

https://vocabulary.uncefact.org/processingTransactionDateTime

***

### scenarioSpecifiedParameter? {#scenariospecifiedparameter}

> `optional` **scenarioSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A scenario context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/scenarioSpecifiedParameter

***

### specifiedTransactionId? {#specifiedtransactionid}

> `optional` **specifiedTransactionId?**: `string` \| `IJsonLdValueObject`

The identifier of a specified transaction in this exchanged document context.

#### See

https://vocabulary.uncefact.org/specifiedTransactionId

***

### subsetSpecifiedParameter? {#subsetspecifiedparameter}

> `optional` **subsetSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A subset context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/subsetSpecifiedParameter

***

### testIndicator? {#testindicator}

> `optional` **testIndicator?**: `boolean`

The indication of whether or not this exchanged document context is a test.

#### See

https://vocabulary.uncefact.org/testIndicator

***

### userSpecifiedParameter? {#userspecifiedparameter}

> `optional` **userSpecifiedParameter?**: [`IUneceDocumentContextParameter`](IUneceDocumentContextParameter.md)[]

A user specified document context parameter specified for this exchanged document context.

#### See

https://vocabulary.uncefact.org/userSpecifiedParameter
