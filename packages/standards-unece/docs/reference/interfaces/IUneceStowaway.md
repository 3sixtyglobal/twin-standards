# Interface: IUneceStowaway

A person who is found hiding aboard a ship or other conveyance, such as in order to obtain free passage or elude
detection.

## See

https://vocabulary.uncefact.org/Stowaway

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

> **type**: `"Stowaway"`

JSON-LD Type.

***

### careProvided?

> `optional` **careProvided**: `string`

Care, expressed as text, that has been provided to this found stowaway.

#### See

https://vocabulary.uncefact.org/careProvided

***

### claimedLanguageProficiency?

> `optional` **claimedLanguageProficiency**: [`IUneceLanguageProficiency`](IUneceLanguageProficiency.md)[]

Personal language proficiency skills claimed by this found stowaway.

#### See

https://vocabulary.uncefact.org/claimedLanguageProficiency

***

### countryClaimedNationalityId?

> `optional` **countryClaimedNationalityId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)[]

An identifier of a nationality claimed by this found stowaway.

#### See

https://vocabulary.uncefact.org/countryClaimedNationalityId

***

### discoveredDateTime?

> `optional` **discoveredDateTime**: `string`

A date, time, date time, or other date time value on which this found stowaway is discovered.

#### See

https://vocabulary.uncefact.org/discoveredDateTime

***

### embarkationLocation?

> `optional` **embarkationLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location where a found stowaway embarked upon the transport means on which they were discovered.

#### See

https://vocabulary.uncefact.org/embarkationLocation

***

### homeAddress?

> `optional` **homeAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

A home address for this found stowaway.

#### See

https://vocabulary.uncefact.org/homeAddress

***

### intendedDestinationLocationCode?

> `optional` **intendedDestinationLocationCode**: `string`

A code specifying a location of an intended destination for this found stowaway.

#### See

https://vocabulary.uncefact.org/intendedDestinationLocationCode

***

### intendedDestinationName?

> `optional` **intendedDestinationName**: `string`

A name, expressed as text, of an intended destination for this found stowaway.

#### See

https://vocabulary.uncefact.org/intendedDestinationName

***

### interviewDateTime?

> `optional` **interviewDateTime**: `string`

A date, time, date time, or other date time value on which this found stowaway is interviewed.

#### See

https://vocabulary.uncefact.org/interviewDateTime

***

### personalStatement?

> `optional` **personalStatement**: `string`

A personal statement, expressed as text, made by this found stowaway.

#### See

https://vocabulary.uncefact.org/personalStatement

***

### photographicPictureBinaryFile?

> `optional` **photographicPictureBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file providing a photographic picture of this found stowaway.

#### See

https://vocabulary.uncefact.org/photographicPictureBinaryFile

***

### physicalDescription?

> `optional` **physicalDescription**: `string`

The physical description, expressed as text, of this found stowaway.

#### See

https://vocabulary.uncefact.org/physicalDescription

***

### possessionList?

> `optional` **possessionList**: `string`

A list of possessions, expressed as text, for this found stowaway.

#### See

https://vocabulary.uncefact.org/possessionList

***

### providedContact?

> `optional` **providedContact**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

A person or department that acts as a point of contact with or for this found stowaway.

#### See

https://vocabulary.uncefact.org/providedContact

***

### providedName?

> `optional` **providedName**: `string`

A name, expressed as text, as provided by this found stowaway.

#### See

https://vocabulary.uncefact.org/providedName

***

### responsiblePersonStatement?

> `optional` **responsiblePersonStatement**: `string`

A statement, expressed as text, about the stowaway made by the person responsible for operating the means of transport
on which the stowaway was found.

#### See

https://vocabulary.uncefact.org/responsiblePersonStatement

***

### statedEmbarkationMethod?

> `optional` **statedEmbarkationMethod**: `string`

A method, expressed as text, of embarkation stated by this found stowaway.

#### See

https://vocabulary.uncefact.org/statedEmbarkationMethod

***

### statedEmbarkationReason?

> `optional` **statedEmbarkationReason**: `string`

A reason, expressed as text, for embarkation stated by this found stowaway.

#### See

https://vocabulary.uncefact.org/statedEmbarkationReason
