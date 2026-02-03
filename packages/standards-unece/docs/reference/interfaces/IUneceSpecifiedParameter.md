# Interface: IUneceSpecifiedParameter

A specified feature that is fixed for the case in question but may be different in other cases.

## See

https://vocabulary.uncefact.org/SpecifiedParameter

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

> **type**: `"SpecifiedParameter"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description for this specified parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this specified parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this specified parameter.

#### See

https://vocabulary.uncefact.org/name

***

### parameterType?

> `optional` **parameterType**: `string`

A type, expressed as text, for this specified parameter.

#### See

https://vocabulary.uncefact.org/parameterType

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this specified parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### statusValueMeasure?

> `optional` **statusValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of a value of the status for this specified parameter.

#### See

https://vocabulary.uncefact.org/statusValueMeasure

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

The value, expressed as text, for this specified parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator?

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not the value for this specified parameter is allowed.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of a value for this specified parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)

A tolerance specified for the value of this parameter.

#### See

https://vocabulary.uncefact.org/valueTolerance
