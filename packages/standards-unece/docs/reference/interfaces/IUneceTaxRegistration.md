# Interface: IUneceTaxRegistration

Registration with a specific tax authority.

## See

https://vocabulary.uncefact.org/TaxRegistration

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

> **type**: `"TaxRegistration"`

JSON-LD Type.

***

### associatedTax?

> `optional` **associatedTax**: [`IUneceRegisteredTax`](IUneceRegisteredTax.md)

The registered tax associated with this tax registration.

#### See

https://vocabulary.uncefact.org/associatedTax

***

### iOSSId?

> `optional` **iOSSId**: `string`

The Import One Stop Shop (IOSS) identifier for this tax registration.

#### See

https://vocabulary.uncefact.org/iOSSId

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this tax registration.

#### See

https://vocabulary.uncefact.org/identifier
