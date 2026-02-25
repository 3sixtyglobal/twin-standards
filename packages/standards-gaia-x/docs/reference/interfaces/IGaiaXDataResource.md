# Interface: IGaiaXDataResource

A Data Resource as defined by Gaia-X.
See also W3C DCAT Dataset https://www.w3.org/TR/vocab-dcat-3/.

## Extends

- `IGaiaXEntity`

## Properties

### @context

> **@context**: [`GaiaXContextType`](../type-aliases/GaiaXContextType.md)

The LD Context

#### Overrides

`IGaiaXEntity.@context`

***

### id

> **id**: `string`

Subject Id

#### Overrides

`IGaiaXEntity.id`

***

### type

> **type**: `"DataResource"`

Subject type

***

### name

> **name**: `string`

The Resource Name

#### Overrides

`IGaiaXEntity.name`

***

### exposedThrough

> **exposedThrough**: `string` \| [`IGaiaXDataExchangeComponent`](IGaiaXDataExchangeComponent.md) \| `IJsonLdNodeObject` & `object`

Exposed through a Data Exchange Component.
'string' in case just an Id pointing to the Data Exchange Component is supplied
the third case covers the idiom where a JSON-LD Node is supplied with id and type.

***

### producedBy

> **producedBy**: `string` \| [`IGaiaXLegalPerson`](IGaiaXLegalPerson.md)

Who is the data producer

***

### license

> **license**: `string`

Pointer (URL) to the license

***

### copyrightOwnedBy

> **copyrightOwnedBy**: `string` \| [`IGaiaXLegalPerson`](IGaiaXLegalPerson.md)

Copyright owner

***

### resourcePolicy

> **resourcePolicy**: `ObjectOrArray`\<`IOdrlPolicy`\>

ODRL Policy

***

### description?

> `optional` **description**: `string`

Description of the Gaia-X entity.

#### Inherited from

`IGaiaXEntity.description`
