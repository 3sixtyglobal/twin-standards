# Interface: IDisposalInstructions

A set of instructions detailing how to properly dispose of a material.

## See

https://vocabulary.uncefact.org/DisposalInstructions

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

> **type**: `"DisposalInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of these disposal instructions.

#### See

https://vocabulary.uncefact.org/description

***

### disposalInstructionsRecyclingDescriptionCode?

> `optional` **disposalInstructionsRecyclingDescriptionCode**: `string`

A code describing recycling in these disposal instructions.

#### See

https://vocabulary.uncefact.org/disposalInstructionsRecyclingDescriptionCode

***

### handling?

> `optional` **handling**: `string`

The handling, expressed as text, in this set of disposal instructions.

#### See

https://vocabulary.uncefact.org/handling

***

### materialId?

> `optional` **materialId**: `string`

The identifier of the material to which these disposal instructions apply.

#### See

https://vocabulary.uncefact.org/materialId

***

### rCRAHandling?

> `optional` **rCRAHandling**: `string`

The Resource Conservation and Recovery Act (RCRA) handling, expressed as text, in this set of disposal instructions.

#### See

https://vocabulary.uncefact.org/rCRAHandling

***

### recyclingProcedure?

> `optional` **recyclingProcedure**: `string`

A recycling procedure, expressed as text, for these disposal instructions.

#### See

https://vocabulary.uncefact.org/recyclingProcedure
