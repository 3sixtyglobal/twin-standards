# Interface: IGaiaXServiceOffering

A Service offering

## Extends

- `IGaiaXEntity`

## Properties

### @context {#context}

> **@context**: [`GaiaXContextType`](../type-aliases/GaiaXContextType.md)

The LD context.

#### Inherited from

`IGaiaXEntity.@context`

***

### id {#id}

> **id**: `string`

The Id.

#### Inherited from

`IGaiaXEntity.id`

***

### description? {#description}

> `optional` **description**: `string`

Description of the Gaia-X entity.

#### Inherited from

`IGaiaXEntity.description`

***

### type {#type}

> **type**: `"ServiceOffering"`

Type

***

### name {#name}

> **name**: `string`

Name of the Service Offering.

#### Overrides

`IGaiaXEntity.name`

***

### providedBy {#providedby}

> **providedBy**: `string` \| [`IGaiaXLegalPerson`](IGaiaXLegalPerson.md) \| `IJsonLdNodeObject` & `object`

Participant that provides the offering

***

### servicePolicy {#servicepolicy}

> **servicePolicy**: `IOdrlPolicy` \| `IOdrlPolicy`[]

ODRL policy associated to the service offering

***

### aggregationOfResources? {#aggregationofresources}

> `optional` **aggregationOfResources**: `string`[] \| `IJsonLdNodeObject` & `object` \| [`IGaiaXDataResource`](IGaiaXDataResource.md)[]

Resources aggregated
It is supported different representations, inline,
by reference both providing the URI or a partial JSON-LD Node object

***

### endpoint? {#endpoint}

> `optional` **endpoint**: [`IGaiaXEndpoint`](IGaiaXEndpoint.md)

The endpoint
