# Interface: IBotanicalCrop

Plants or produce cultivated from a single botanical species or variety.

## See

https://vocabulary.uncefact.org/BotanicalCrop

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

> **type**: `"BotanicalCrop"`

JSON-LD Type.

***

### botanicalGenusCode?

> `optional` **botanicalGenusCode**: `string`

The code specifying the genus for this botanical crop.

#### See

https://vocabulary.uncefact.org/botanicalGenusCode

***

### botanicalIdentificationId?

> `optional` **botanicalIdentificationId**: `string`

The identifier for this botanical crop.

#### See

https://vocabulary.uncefact.org/botanicalIdentificationId

***

### botanicalName?

> `optional` **botanicalName**: `string`

The botanical name, expressed as text, for this botanical crop.

#### See

https://vocabulary.uncefact.org/botanicalName

***

### botanicalSpeciesCode?

> `optional` **botanicalSpeciesCode**: `string`

The code specifying the species for this botanical crop.

#### See

https://vocabulary.uncefact.org/botanicalSpeciesCode

***

### purposeCode?

> `optional` **purposeCode**: `string`

The code specifying the purpose for this botanical crop.

#### See

https://vocabulary.uncefact.org/purposeCode
