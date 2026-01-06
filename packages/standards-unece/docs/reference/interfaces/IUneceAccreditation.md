# Interface: IUneceAccreditation

A certified recognition that provides evidence of a level of competency in a given area, such as certifying a level of
skill in a trade.

## See

https://vocabulary.uncefact.org/Accreditation

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

> **type**: `"Accreditation"`

JSON-LD Type.

***

### accreditingBodyName?

> `optional` **accreditingBodyName**: `string`

The name of the accrediting body, expressed as text, for this certified accreditation.

#### See

https://vocabulary.uncefact.org/accreditingBodyName

***

### authenticationMethodCode?

> `optional` **authenticationMethodCode**: `string`

A code specifying an authentication method for this certified accreditation.

#### See

https://vocabulary.uncefact.org/authenticationMethodCode

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this certified accreditation, such as driving or academic.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### description?

> `optional` **description**: `string`

The textual description of this certified accreditation.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date, time, date time or other date time value when this certified accreditation expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this certified accreditation.

#### See

https://vocabulary.uncefact.org/identifier

***

### obtainedDateTime?

> `optional` **obtainedDateTime**: `string`

The date, time, date time or other date time value when this certified accreditation was obtained.

#### See

https://vocabulary.uncefact.org/obtainedDateTime

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this certified accreditation, such as a type of driving license.

#### See

https://vocabulary.uncefact.org/typeCode
