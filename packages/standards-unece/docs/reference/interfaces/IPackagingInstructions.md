# Interface: IPackagingInstructions

Packaging information of an instructive nature.

## See

https://vocabulary.uncefact.org/PackagingInstructions

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

> **type**: `"PackagingInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of these packaging instructions.

#### See

https://vocabulary.uncefact.org/description

***

### handling?

> `optional` **handling**: `string`

Packaging handling instructions, expressed as text.

#### See

https://vocabulary.uncefact.org/handling

***

### handlingCode?

> `optional` **handlingCode**: `string`

A code specifying packaging handling instructions.

#### See

https://vocabulary.uncefact.org/handlingCode

***

### instructionsType?

> `optional` **instructionsType**: `string`

A type, expressed as text, of these packaging instructions.

#### See

https://vocabulary.uncefact.org/instructionsType

***

### itemName?

> `optional` **itemName**: `string`

A name, expressed as text, of an item included in these packaging instructions.

#### See

https://vocabulary.uncefact.org/itemName

***

### packagingInstructionsDescriptionCode?

> `optional` **packagingInstructionsDescriptionCode**: `string`

The code specifying a description of these packaging instructions.

#### See

https://vocabulary.uncefact.org/packagingInstructionsDescriptionCode

***

### procedure?

> `optional` **procedure**: `string`

A procedure, expressed as text, for these packaging instructions.

#### See

https://vocabulary.uncefact.org/procedure

***

### requirementIndicator?

> `optional` **requirementIndicator**: `boolean`

The indication of whether or not there is a requirement for these packaging instructions.

#### See

https://vocabulary.uncefact.org/requirementIndicator
