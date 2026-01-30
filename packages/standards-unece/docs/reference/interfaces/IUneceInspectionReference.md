# Interface: IUneceInspectionReference

The identification of related information for an inspection.

## See

https://vocabulary.uncefact.org/InspectionReference

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

> **type**: `"InspectionReference"`

JSON-LD Type.

***

### abbreviation?

> `optional` **abbreviation**: `string`

The shortened text string to identify this inspection reference.

#### See

https://vocabulary.uncefact.org/abbreviation

***

### comment?

> `optional` **comment**: `string`

A comment, expressed as text, for this inspection reference.

#### See

https://vocabulary.uncefact.org/comment

***

### description?

> `optional` **description**: `string`

A textual description of this inspection reference.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this inspection reference.

#### See

https://vocabulary.uncefact.org/identifier

***

### propertyReferenceCode?

> `optional` **propertyReferenceCode**: `string`

The code specifying the property reference of this inspection reference.

#### See

https://vocabulary.uncefact.org/propertyReferenceCode

***

### status?

> `optional` **status**: `string`

A status, expressed as text, for this inspection reference.

#### See

https://vocabulary.uncefact.org/status

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this inspection reference.

#### See

https://vocabulary.uncefact.org/value

***

### valueCode?

> `optional` **valueCode**: `string`

The value, expressed as a code, for this inspection reference.

#### See

https://vocabulary.uncefact.org/valueCode
