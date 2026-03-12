# Interface: IUneceDisposalInstructions

A set of instructions detailing how to properly dispose of a material.

## See

https://vocabulary.uncefact.org/DisposalInstructions

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DisposalInstructions"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description**: `string`

A textual description of these disposal instructions.

#### See

https://vocabulary.uncefact.org/description

***

### disposalInstructionsRecyclingDescriptionCode? {#disposalinstructionsrecyclingdescriptioncode}

> `optional` **disposalInstructionsRecyclingDescriptionCode**: `string`

A code describing recycling in these disposal instructions.

#### See

https://vocabulary.uncefact.org/disposalInstructionsRecyclingDescriptionCode

***

### handling? {#handling}

> `optional` **handling**: `string`

The handling, expressed as text, in this set of disposal instructions.

#### See

https://vocabulary.uncefact.org/handling

***

### materialId? {#materialid}

> `optional` **materialId**: `string` \| `IJsonLdValueObject`

The identifier of the material to which these disposal instructions apply.

#### See

https://vocabulary.uncefact.org/materialId

***

### rCRAHandling? {#rcrahandling}

> `optional` **rCRAHandling**: `string`

The Resource Conservation and Recovery Act (RCRA) handling, expressed as text, in this set of disposal instructions.

#### See

https://vocabulary.uncefact.org/rCRAHandling

***

### recyclingProcedure? {#recyclingprocedure}

> `optional` **recyclingProcedure**: `string`

A recycling procedure, expressed as text, for these disposal instructions.

#### See

https://vocabulary.uncefact.org/recyclingProcedure
