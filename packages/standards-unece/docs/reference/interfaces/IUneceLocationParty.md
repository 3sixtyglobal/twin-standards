# Interface: IUneceLocationParty

An individual, a group, or a body having a role related to a location.

## See

https://vocabulary.uncefact.org/LocationParty

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LocationParty"`

JSON-LD Type.

***

### countryId? {#countryid}

> `optional` **countryId?**: `string` \| `object` & `object` \| `object` & `object` \| `object` & `object`

A unique country identifier for this location party.

#### See

https://vocabulary.uncefact.org/countryId

***

### definedContact? {#definedcontact}

> `optional` **definedContact?**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

A trade contact defined for this location party.

#### See

https://vocabulary.uncefact.org/definedContact

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this location party.

#### See

https://vocabulary.uncefact.org/description

***

### faxCommunication? {#faxcommunication}

> `optional` **faxCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Fax communication information for this location party.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier of this location party.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationPartyRoleCode? {#locationpartyrolecode}

> `optional` **locationPartyRoleCode?**: `string`

A code specifying a role of this location party.

#### See

https://vocabulary.uncefact.org/locationPartyRoleCode

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this location party.

#### See

https://vocabulary.uncefact.org/name

***

### postalAddress? {#postaladdress}

> `optional` **postalAddress?**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

A postal address for this location party.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### providedService? {#providedservice}

> `optional` **providedService?**: [`IUneceService`](IUneceService.md)[]

A transport service provided by this location party.

#### See

https://vocabulary.uncefact.org/providedService

***

### specifiedLogisticsLocation? {#specifiedlogisticslocation}

> `optional` **specifiedLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location or place specified for this party.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedTransportPerson? {#specifiedtransportperson}

> `optional` **specifiedTransportPerson?**: [`IUneceTransportPerson`](IUneceTransportPerson.md)[]

A transport related person specified for this location party.

#### See

https://vocabulary.uncefact.org/specifiedTransportPerson

***

### telephoneCommunication? {#telephonecommunication}

> `optional` **telephoneCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Telephone communication information for this location party.

#### See

https://vocabulary.uncefact.org/telephoneCommunication

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying the type of location party that is independent of its role.

#### See

https://vocabulary.uncefact.org/typeCode

***

### uRICommunication? {#uricommunication}

> `optional` **uRICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Uniform Resource Identifier (URI) communication information for this location party, such as a web or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
