# Interface: IUneceLocationParty

An individual, a group, or a body having a role related to a location.

## See

https://vocabulary.uncefact.org/LocationParty

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

> **type**: `"LocationParty"`

JSON-LD Type.

***

### countryId?

> `optional` **countryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)

A unique country identifier for this location party.

#### See

https://vocabulary.uncefact.org/countryId

***

### definedContact?

> `optional` **definedContact**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

A trade contact defined for this location party.

#### See

https://vocabulary.uncefact.org/definedContact

***

### description?

> `optional` **description**: `string`

A textual description of this location party.

#### See

https://vocabulary.uncefact.org/description

***

### faxCommunication?

> `optional` **faxCommunication**: [`IUneceCommunication`](IUneceCommunication.md)[]

Fax communication information for this location party.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier of this location party.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationPartyRoleCode?

> `optional` **locationPartyRoleCode**: `string`

A code specifying a role of this location party.

#### See

https://vocabulary.uncefact.org/locationPartyRoleCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this location party.

#### See

https://vocabulary.uncefact.org/name

***

### postalAddress?

> `optional` **postalAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

A postal address for this location party.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### providedService?

> `optional` **providedService**: [`IUneceService`](IUneceService.md)[]

A transport service provided by this location party.

#### See

https://vocabulary.uncefact.org/providedService

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location or place specified for this party.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedTransportPerson?

> `optional` **specifiedTransportPerson**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A transport related person specified for this location party.

#### See

https://vocabulary.uncefact.org/specifiedTransportPerson

***

### telephoneCommunication?

> `optional` **telephoneCommunication**: [`IUneceCommunication`](IUneceCommunication.md)

Telephone communication information for this location party.

#### See

https://vocabulary.uncefact.org/telephoneCommunication

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of location party that is independent of its role.

#### See

https://vocabulary.uncefact.org/typeCode

***

### uRICommunication?

> `optional` **uRICommunication**: [`IUneceCommunication`](IUneceCommunication.md)[]

Uniform Resource Identifier (URI) communication information for this location party, such as a web or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
