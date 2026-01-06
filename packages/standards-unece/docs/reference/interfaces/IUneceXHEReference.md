# Interface: IUneceXHEReference

Information related to an XHE (Exchange Header Envelope).

## See

https://vocabulary.uncefact.org/XHEReference

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

> **type**: `"XHEReference"`

JSON-LD Type.

***

### endAvailabilityDateTime?

> `optional` **endAvailabilityDateTime**: `string`

The end date, time, date time, or other date time value for the availability of this XHE reference.

#### See

https://vocabulary.uncefact.org/endAvailabilityDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this XHE reference.

#### See

https://vocabulary.uncefact.org/identifier

***

### login?

> `optional` **login**: `string`

The login, expressed as text, for this XHE reference.

#### See

https://vocabulary.uncefact.org/login

***

### password?

> `optional` **password**: `string`

The password, expressed as text, for this XHE reference.

#### See

https://vocabulary.uncefact.org/password

***

### startAvailabilityDateTime?

> `optional` **startAvailabilityDateTime**: `string`

The start date, time, date time, or other date time value for the availability of this XHE reference.

#### See

https://vocabulary.uncefact.org/startAvailabilityDateTime
