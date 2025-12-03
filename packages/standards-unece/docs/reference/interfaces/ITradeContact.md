# Interface: ITradeContact

A person or a department that acts as a point of contact with another person or department in a trading relationship.

## See

https://vocabulary.uncefact.org/TradeContact

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

> **type**: `"TradeContact"`

JSON-LD Type.

***

### accessibleLocation?

> `optional` **accessibleLocation**: [`ISpecifiedLocation`](ISpecifiedLocation.md)[]

An accessible location specified for this trade contact.

#### See

https://vocabulary.uncefact.org/accessibleLocation

***

### authorizedPersonName?

> `optional` **authorizedPersonName**: `string`

The name, expressed as text, of the authorized person for this trade contact.

#### See

https://vocabulary.uncefact.org/authorizedPersonName

***

### contactTypeCode?

> `optional` **contactTypeCode**: [`ContactTypeCodeList`](../type-aliases/ContactTypeCodeList.md)[]

The code specifying the type of trade contact.

#### See

https://vocabulary.uncefact.org/contactTypeCode

***

### departmentName?

> `optional` **departmentName**: `string`

A name, expressed as text, of the department to which this trade contact belongs within an organization.

#### See

https://vocabulary.uncefact.org/departmentName

***

### description?

> `optional` **description**: `string`

A textual description of this trade contact.

#### See

https://vocabulary.uncefact.org/description

***

### directTelephoneCommunication?

> `optional` **directTelephoneCommunication**: [`ICommunication`](ICommunication.md)[]

The direct telephone communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/directTelephoneCommunication

***

### eDICommunication?

> `optional` **eDICommunication**: [`ICommunication`](ICommunication.md)[]

Electronic Data Interchange (EDI) communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/eDICommunication

***

### emailURICommunication?

> `optional` **emailURICommunication**: [`ICommunication`](ICommunication.md)[]

The email URI communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/emailURICommunication

***

### faxCommunication?

> `optional` **faxCommunication**: [`ICommunication`](ICommunication.md)[]

Fax communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this trade contact.

#### See

https://vocabulary.uncefact.org/identifier

***

### instantMessagingCommunication?

> `optional` **instantMessagingCommunication**: [`ICommunication`](ICommunication.md)[]

Instant messaging communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/instantMessagingCommunication

***

### jobTitle?

> `optional` **jobTitle**: `string`

A job title, position or designation, expressed as text, of this trade contact within an organization, such as Director,
Software Engineer, Purchasing Manager.

#### See

https://vocabulary.uncefact.org/jobTitle

***

### mobileTelephoneCommunication?

> `optional` **mobileTelephoneCommunication**: [`ICommunication`](ICommunication.md)[]

The mobile telephone communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/mobileTelephoneCommunication

***

### personId?

> `optional` **personId**: `string`

A unique identifier for this trade contact person.

#### See

https://vocabulary.uncefact.org/personId

***

### personName?

> `optional` **personName**: `string`

A name, expressed as text, of this trade contact person.

#### See

https://vocabulary.uncefact.org/personName

***

### postalAddress?

> `optional` **postalAddress**: [`ITradeAddress`](ITradeAddress.md)[]

Postal address information for this trade contact.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### responsibility?

> `optional` **responsibility**: `string`

A responsibility, expressed as text, of this trade contact.

#### See

https://vocabulary.uncefact.org/responsibility

***

### specifiedContactPerson?

> `optional` **specifiedContactPerson**: [`IContactPerson`](IContactPerson.md)[]

The contact person specified for this trade contact.

#### See

https://vocabulary.uncefact.org/specifiedContactPerson

***

### specifiedNote?

> `optional` **specifiedNote**: [`INote`](INote.md)[]

A note specified for this trade contact.

#### See

https://vocabulary.uncefact.org/specifiedNote

***

### telephoneCommunication?

> `optional` **telephoneCommunication**: [`ICommunication`](ICommunication.md)

Telephone communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/telephoneCommunication

***

### telexCommunication?

> `optional` **telexCommunication**: [`ICommunication`](ICommunication.md)[]

Telegraphy (Telex) communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/telexCommunication

***

### uRICommunication?

> `optional` **uRICommunication**: [`ICommunication`](ICommunication.md)[]

Uniform Resource Identifier (URI) communication information for this trade contact, such as a web or an email address.

#### See

https://vocabulary.uncefact.org/uRICommunication

***

### usedCommunication?

> `optional` **usedCommunication**: [`ICommunication`](ICommunication.md)[]

A communication used by this trade contact.

#### See

https://vocabulary.uncefact.org/usedCommunication

***

### vOIPCommunication?

> `optional` **vOIPCommunication**: [`ICommunication`](ICommunication.md)[]

Voice Over Internet Protocol (VOIP) communication information for this trade contact.

#### See

https://vocabulary.uncefact.org/vOIPCommunication
