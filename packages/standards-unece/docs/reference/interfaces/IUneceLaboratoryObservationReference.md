# Interface: IUneceLaboratoryObservationReference

The direction to related information for this laboratory observation.

## See

https://vocabulary.uncefact.org/LaboratoryObservationReference

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

> **type**: `"LaboratoryObservationReference"`

JSON-LD Type.

***

### abbreviation?

> `optional` **abbreviation**: `string`

The shortened text string to identify this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/abbreviation

***

### comment?

> `optional` **comment**: `string`

The comment, expressed as text, for this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/comment

***

### description?

> `optional` **description**: `string`

The textual description of this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/identifier

***

### propertyReferenceCode?

> `optional` **propertyReferenceCode**: `string`

The code specifying the property reference of this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/propertyReferenceCode

***

### status?

> `optional` **status**: `string`

The status, expressed as text, for this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/status

***

### value?

> `optional` **value**: `string`

The value, expressed as text, for this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/value

***

### valueCode?

> `optional` **valueCode**: `string`

The value, expressed as a code, for this laboratory observation reference.

#### See

https://vocabulary.uncefact.org/valueCode
