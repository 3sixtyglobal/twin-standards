# Interface: IUneceObservationObjectiveParameter

A feature that is fixed for the case in question but may be different in other cases for this observation objective.

## See

https://vocabulary.uncefact.org/ObservationObjectiveParameter

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"ObservationObjectiveParameter"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of this observation objective parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/name

***

### parameterType?

> `optional` **parameterType**: `string`

A type, expressed as text, for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/parameterType

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this observation objective parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### statusValueMeasure?

> `optional` **statusValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the status value for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/statusValueMeasure

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of observation objective parameter, such as retailer, country, toxic standard or
examination type.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

The value, expressed as text, of this observation objective parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator?

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not this value is allowed for this parameter observation objective.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the value for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure
