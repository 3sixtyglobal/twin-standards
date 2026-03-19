# Interface: IUneceComplexDescription

An aggregation of descriptive information consisting of different but related characteristics that together constitute a
work item complex description.

## See

https://vocabulary.uncefact.org/ComplexDescription

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ComplexDescription"`

JSON-LD Type.

***

### abstract? {#abstract}

> `optional` **abstract?**: `string`

A textual abstract of the content of the work item complex description.

#### See

https://vocabulary.uncefact.org/abstract

***

### content? {#content}

> `optional` **content?**: `string`

Content, expressed as text, for this work item complex description.

#### See

https://vocabulary.uncefact.org/content

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode?**: `string`

The code specifying the contractual language for this work item complex description.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### requestingQuery? {#requestingquery}

> `optional` **requestingQuery?**: [`IUneceSpecificationQuery`](IUneceSpecificationQuery.md)[]

A requesting specification query for this work item complex description.

#### See

https://vocabulary.uncefact.org/requestingQuery

***

### respondingResponse? {#respondingresponse}

> `optional` **respondingResponse?**: [`IUneceResponse`](IUneceResponse.md)[]

A responding specification response for this work item complex description.

#### See

https://vocabulary.uncefact.org/respondingResponse

***

### subsetComplexDescription? {#subsetcomplexdescription}

> `optional` **subsetComplexDescription?**: `IUneceComplexDescription`

The complex description subset for this work item complex description.

#### See

https://vocabulary.uncefact.org/subsetComplexDescription
