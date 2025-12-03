# Interface: ITransportPerson

A transport related person, such as a member of a crew or a passenger.

## See

https://vocabulary.uncefact.org/TransportPerson

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

> **type**: `"TransportPerson"`

JSON-LD Type.

***

### attainedAcademicQualification?

> `optional` **attainedAcademicQualification**: [`IAcademicQualification`](IAcademicQualification.md)[]

An academic qualification attained by this transport person.

#### See

https://vocabulary.uncefact.org/attainedAcademicQualification

***

### birthCountryId?

> `optional` **birthCountryId**: `string`

The identifier of the birth country of this transport person.

#### See

https://vocabulary.uncefact.org/birthCountryId

***

### birthDateTime?

> `optional` **birthDateTime**: `string`

The birth date of this transport person.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### birthplaceName?

> `optional` **birthplaceName**: `string`

The name, expressed as text, of the place where this transport person was born.

#### See

https://vocabulary.uncefact.org/birthplaceName

***

### bookingId?

> `optional` **bookingId**: `string`

A booking identifier for this transport person.

#### See

https://vocabulary.uncefact.org/bookingId

***

### cabinId?

> `optional` **cabinId**: `string`

A cabin identifier for this transport person.

#### See

https://vocabulary.uncefact.org/cabinId

***

### categoryCode?

> `optional` **categoryCode**: `string`

A code specifying a category for this transport person, such as a member of crew or passenger.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### declaredPersonalEffects?

> `optional` **declaredPersonalEffects**: [`IPersonalEffects`](IPersonalEffects.md)[]

Personal effects use declared by a transport person.

#### See

https://vocabulary.uncefact.org/declaredPersonalEffects

***

### disembarkationDateTime?

> `optional` **disembarkationDateTime**: `string`

A date, time, date time, or other date time value that this person disembarked from a means of transport.

#### See

https://vocabulary.uncefact.org/disembarkationDateTime

***

### disembarkationLocation?

> `optional` **disembarkationLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A disembarkation location for this transport person.

#### See

https://vocabulary.uncefact.org/disembarkationLocation

***

### emailURICommunication?

> `optional` **emailURICommunication**: [`ICommunication`](ICommunication.md)[]

The email URI (Uniform Resource Identifier) communication for this transport person.

#### See

https://vocabulary.uncefact.org/emailURICommunication

***

### embarkationDateTime?

> `optional` **embarkationDateTime**: `string`

A date, time, date time, or other date time value that this person embarked upon a means of transport.

#### See

https://vocabulary.uncefact.org/embarkationDateTime

***

### embarkationLocation?

> `optional` **embarkationLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

An embarkation location for this transport person.

#### See

https://vocabulary.uncefact.org/embarkationLocation

***

### familyName?

> `optional` **familyName**: `string`

A family name, expressed as text, for this transport person.

#### See

https://vocabulary.uncefact.org/familyName

***

### genderCode?

> `optional` **genderCode**: `string`

A code specifying the gender of this transport person.

#### See

https://vocabulary.uncefact.org/genderCode

***

### givenName?

> `optional` **givenName**: `string`

A given name, expressed as text, for this transport person.

#### See

https://vocabulary.uncefact.org/givenName

***

### identifiedStowaway?

> `optional` **identifiedStowaway**: [`IStowaway`](IStowaway.md)[]

A transport person identified as a found stowaway.

#### See

https://vocabulary.uncefact.org/identifiedStowaway

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this transport person.

#### See

https://vocabulary.uncefact.org/identifier

***

### inTransitIndicator?

> `optional` **inTransitIndicator**: `boolean`

The indication of whether or not this transport person is in transit.

#### See

https://vocabulary.uncefact.org/inTransitIndicator

***

### landlineTelephoneCommunication?

> `optional` **landlineTelephoneCommunication**: [`ICommunication`](ICommunication.md)[]

Landline telephone communication information for this transport person.

#### See

https://vocabulary.uncefact.org/landlineTelephoneCommunication

***

### mobileTelephoneCommunication?

> `optional` **mobileTelephoneCommunication**: [`ICommunication`](ICommunication.md)[]

Mobile telephone communication information for this transport person.

#### See

https://vocabulary.uncefact.org/mobileTelephoneCommunication

***

### nationalityCountry?

> `optional` **nationalityCountry**: [`ICountry`](ICountry.md)[]

A country that constitutes a nationality by origin, birth, or naturalization for this transport person.

#### See

https://vocabulary.uncefact.org/nationalityCountry

***

### onboardIndicator?

> `optional` **onboardIndicator**: `boolean`

The indication of whether or not this person is onboard a means of transport.

#### See

https://vocabulary.uncefact.org/onboardIndicator

***

### partyRoleCode?

> `optional` **partyRoleCode**: [`PartyRoleCodeList`](../type-aliases/PartyRoleCodeList.md)[]

A code specifying a role of this transport person.

#### See

https://vocabulary.uncefact.org/partyRoleCode

***

### passengerId?

> `optional` **passengerId**: `string`

A passenger identifier for this transport person.

#### See

https://vocabulary.uncefact.org/passengerId

***

### reportedIllness?

> `optional` **reportedIllness**: [`IIllness`](IIllness.md)[]

An MDH (Maritime Declaration of Health) reported illness or disease for this transport person.

#### See

https://vocabulary.uncefact.org/reportedIllness

***

### role?

> `optional` **role**: `string`

A role, expressed as text, of this transport person.

#### See

https://vocabulary.uncefact.org/role

***

### specificAccreditation?

> `optional` **specificAccreditation**: [`IAccreditation`](IAccreditation.md)[]

A certified accreditation specific to this transport person.

#### See

https://vocabulary.uncefact.org/specificAccreditation

***

### transportPersonLanguageId?

> `optional` **transportPersonLanguageId**: [`LanguageId`](../type-aliases/LanguageId.md)[]

A unique identifier of a language related to this transport person, such as their spoken or correspondence language.

#### See

https://vocabulary.uncefact.org/transportPersonLanguageId

***

### transportPersonName?

> `optional` **transportPersonName**: `string`

The name or set of names, expressed as text, by which this transport person is known.

#### See

https://vocabulary.uncefact.org/transportPersonName

***

### travelIdentityDocument?

> `optional` **travelIdentityDocument**: [`IDocument`](IDocument.md)[]

A referenced travel identity document for this transport person.

#### See

https://vocabulary.uncefact.org/travelIdentityDocument

***

### travelVisaDocument?

> `optional` **travelVisaDocument**: [`IDocument`](IDocument.md)[]

A referenced travel visa document for this transport person.

#### See

https://vocabulary.uncefact.org/travelVisaDocument
