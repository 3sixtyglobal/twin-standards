# Interface: IGaiaXLegalPerson

A Legal Person as defined by Gaia-X.

## See

https://docs.gaia-x.eu/ontology/development/classes/LegalPerson/.

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

### name? {#name}

> `optional` **name**: `string`

Human readable Name.

#### Inherited from

`IGaiaXEntity.name`

***

### description? {#description}

> `optional` **description**: `string`

Description of the Gaia-X entity.

#### Inherited from

`IGaiaXEntity.description`

***

### type {#type}

> **type**: `"LegalPerson"`

JSON-LD type.

***

### registrationNumber {#registrationnumber}

> **registrationNumber**: [`IGaiaXRegistrationNumber`](IGaiaXRegistrationNumber.md)

The legal registration number.

#### See

https://docs.gaia-x.eu/ontology/development/slots/registrationNumber/

***

### legalName {#legalname}

> **legalName**: `string`

The legal name.

***

### legalAddress {#legaladdress}

> **legalAddress**: [`IGaiaXAddress`](IGaiaXAddress.md)

Legal Address

#### See

https://docs.gaia-x.eu/ontology/development/slots/legalAddress/

***

### headquartersAddress? {#headquartersaddress}

> `optional` **headquartersAddress**: [`IGaiaXAddress`](IGaiaXAddress.md)

Headquarters address.

#### See

https://docs.gaia-x.eu/ontology/development/slots/headquartersAddress/

***

### parentOrganizationOf? {#parentorganizationof}

> `optional` **parentOrganizationOf**: `IJsonLdNodeObject` & `object`[]

Parent organization.

#### See

https://docs.gaia-x.eu/ontology/development/slots/parentOrganizationOf/

***

### subOrganizationOf? {#suborganizationof}

> `optional` **subOrganizationOf**: `IJsonLdNodeObject` & `object`[]

Sub organization of.

#### See

https://docs.gaia-x.eu/ontology/development/slots/parentSubOrganizationOf
