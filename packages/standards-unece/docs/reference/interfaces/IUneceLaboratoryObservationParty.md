# Interface: IUneceLaboratoryObservationParty

An individual, group, or body having a role in laboratory observations.

## See

https://vocabulary.uncefact.org/LaboratoryObservationParty

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"LaboratoryObservationParty"`

JSON-LD Type.

***

### identifier

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this laboratory observation party.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this laboratory observation party.

#### See

https://vocabulary.uncefact.org/name

***

### officeAddress?

> `optional` **officeAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

The office address of this laboratory observation party.

#### See

https://vocabulary.uncefact.org/officeAddress

***

### personDefinedContact?

> `optional` **personDefinedContact**: [`IUneceLaboratoryObservationContact`](IUneceLaboratoryObservationContact.md)

The person defined as the contact for this laboratory observation party.

#### See

https://vocabulary.uncefact.org/personDefinedContact

***

### postalAddress?

> `optional` **postalAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

The postal address of this laboratory observation party.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### thirdPartyIssuedId?

> `optional` **thirdPartyIssuedId**: `string` \| `IJsonLdValueObject`

An alternate identifier issued by a third party for this laboratory observation party.

#### See

https://vocabulary.uncefact.org/thirdPartyIssuedId

***

### thirdPartyIssuedIdentification?

> `optional` **thirdPartyIssuedIdentification**: `string`

A third party issued identifier, expressed as text, for this laboratory observation party.

#### See

https://vocabulary.uncefact.org/thirdPartyIssuedIdentification

***

### websiteURICommunication?

> `optional` **websiteURICommunication**: [`IUneceCommunication`](IUneceCommunication.md)

The website URI (Uniform Resource Identifier) of this laboratory observation party.

#### See

https://vocabulary.uncefact.org/websiteURICommunication
