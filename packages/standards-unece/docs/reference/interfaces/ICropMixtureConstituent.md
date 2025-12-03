# Interface: ICropMixtureConstituent

A plant species or variety constituting part of a field crop mixture.

## See

https://vocabulary.uncefact.org/CropMixtureConstituent

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

> **type**: `"CropMixtureConstituent"`

JSON-LD Type.

***

### cropProportionPercent?

> `optional` **cropProportionPercent**: `string`

The percent of the crop proportion of this field crop mixture constituent.

#### See

https://vocabulary.uncefact.org/cropProportionPercent

***

### specifiedBotanicalCrop?

> `optional` **specifiedBotanicalCrop**: [`IBotanicalCrop`](IBotanicalCrop.md)[]

The botanical crop specified for this field crop mixture constituent.

#### See

https://vocabulary.uncefact.org/specifiedBotanicalCrop
