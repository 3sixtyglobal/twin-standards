# Interface: IRadionuclide

A radionuclide atom that has excess nuclear energy, making it unstable.

## See

https://vocabulary.uncefact.org/Radionuclide

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

> **type**: `"Radionuclide"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this radioactive radionuclide.

#### See

https://vocabulary.uncefact.org/identifier

***

### lowDispersibleStatusIndicator?

> `optional` **lowDispersibleStatusIndicator**: `boolean`

The indication of whether or not this radioactive radionuclide has a low dispersible status.

#### See

https://vocabulary.uncefact.org/lowDispersibleStatusIndicator

***

### name?

> `optional` **name**: `string`

A name or symbol, expressed as text, of a radioactive radionuclide.

#### See

https://vocabulary.uncefact.org/name

***

### specialFormIndicator?

> `optional` **specialFormIndicator**: `boolean`

The indication of whether or not this radioactive radionuclide has a special form.

#### See

https://vocabulary.uncefact.org/specialFormIndicator
