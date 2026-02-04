# Interface: IUneceAnimalIdentity

Information about an animal which uniquely identifies it.

## See

https://vocabulary.uncefact.org/AnimalIdentity

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

> **type**: `"AnimalIdentity"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this animal identity.

#### See

https://vocabulary.uncefact.org/identifier

***

### identifierLengthNumeric?

> `optional` **identifierLengthNumeric**: `string`

The length, expressed as the number of characters, of the identifier in this animal identity.

#### See

https://vocabulary.uncefact.org/identifierLengthNumeric

***

### issuerPartyName

> **issuerPartyName**: `string`

The name, expressed as text, of the party issuing this animal identity.

#### See

https://vocabulary.uncefact.org/issuerPartyName

***

### legalBasis?

> `optional` **legalBasis**: `string`

The legal basis, expressed as text, for this animal identity.

#### See

https://vocabulary.uncefact.org/legalBasis

***

### versionId?

> `optional` **versionId**: `string`

The identifier of the version of this animal identity.

#### See

https://vocabulary.uncefact.org/versionId
