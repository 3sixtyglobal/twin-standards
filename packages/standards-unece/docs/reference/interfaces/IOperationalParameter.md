# Interface: IOperationalParameter

A set of measurable factors that specifies the conditions within which an entity operates correctly.

## See

https://vocabulary.uncefact.org/OperationalParameter

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

> **type**: `"OperationalParameter"`

JSON-LD Type.

***

### changeableIndicator?

> `optional` **changeableIndicator**: `boolean`

The indication whether or not this operational parameter is changeable.

#### See

https://vocabulary.uncefact.org/changeableIndicator

***

### definedRange?

> `optional` **definedRange**: [`IRange`](IRange.md)[]

A defined range specified for this operational parameter.

#### See

https://vocabulary.uncefact.org/definedRange

***

### description?

> `optional` **description**: `string`

A textual description of this operational parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this operational parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this operational parameter.

#### See

https://vocabulary.uncefact.org/name

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this operational parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this operational parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

The value, expressed as text, of this operational parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator?

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not this operational parameter value is allowed.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure value for this operational parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure
