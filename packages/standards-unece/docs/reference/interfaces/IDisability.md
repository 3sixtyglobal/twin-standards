# Interface: IDisability

A physical or mental condition that limits a guest's movements, senses, or activities.

## See

https://vocabulary.uncefact.org/Disability

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

> **type**: `"Disability"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this guest disability.

#### See

https://vocabulary.uncefact.org/description

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this guest disability.

#### See

https://vocabulary.uncefact.org/name

***

### registeredDateTime?

> `optional` **registeredDateTime**: `string`

The date, time, date time, or other date time value when this guest disability has been registered.

#### See

https://vocabulary.uncefact.org/registeredDateTime

***

### requiredSupportingDevice?

> `optional` **requiredSupportingDevice**: `string`

A supporting device, expressed as text, for this required guest disability.

#### See

https://vocabulary.uncefact.org/requiredSupportingDevice

***

### restriction?

> `optional` **restriction**: `string`

A restriction, expressed as text, for this guest disability.

#### See

https://vocabulary.uncefact.org/restriction

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of guest disability.

#### See

https://vocabulary.uncefact.org/typeCode
