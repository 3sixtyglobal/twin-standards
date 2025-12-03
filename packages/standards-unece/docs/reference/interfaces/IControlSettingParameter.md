# Interface: IControlSettingParameter

A set of measurable factors that specifies the conditions of its operation within a specific context.

## See

https://vocabulary.uncefact.org/ControlSettingParameter

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

> **type**: `"ControlSettingParameter"`

JSON-LD Type.

***

### changeableIndicator?

> `optional` **changeableIndicator**: `boolean`

The indication whether or not this control setting parameter is changeable.

#### See

https://vocabulary.uncefact.org/changeableIndicator

***

### description?

> `optional` **description**: `string`

A textual description of this control setting parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this control setting parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this control setting parameter.

#### See

https://vocabulary.uncefact.org/name

***

### requestedRange?

> `optional` **requestedRange**: [`IRange`](IRange.md)[]

A requested range specified for this control setting parameter.

#### See

https://vocabulary.uncefact.org/requestedRange

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this control setting parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying a type of parameter for this control setting parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

The value, expressed as text, of this control setting parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator?

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not this control setting parameter value is allowed.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure value for this control setting parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure
