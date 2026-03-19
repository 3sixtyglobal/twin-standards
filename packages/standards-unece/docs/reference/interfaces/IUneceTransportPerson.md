# Interface: IUneceTransportPerson

A transport related person, such as a member of a crew or a passenger.

## See

https://vocabulary.uncefact.org/TransportPerson

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TransportPerson"`

JSON-LD Type.

***

### attainedAcademicQualification? {#attainedacademicqualification}

> `optional` **attainedAcademicQualification?**: [`IUneceAcademicQualification`](IUneceAcademicQualification.md)[]

An academic qualification attained by this transport person.

#### See

https://vocabulary.uncefact.org/attainedAcademicQualification

***

### birthCountryId? {#birthcountryid}

> `optional` **birthCountryId?**: `string` \| `IJsonLdValueObject`

The identifier of the birth country of this transport person.

#### See

https://vocabulary.uncefact.org/birthCountryId

***

### birthDateTime? {#birthdatetime}

> `optional` **birthDateTime?**: `string`

The birth date of this transport person.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### birthplaceName? {#birthplacename}

> `optional` **birthplaceName?**: `string`

The name, expressed as text, of the place where this transport person was born.

#### See

https://vocabulary.uncefact.org/birthplaceName

***

### bookingId? {#bookingid}

> `optional` **bookingId?**: `string` \| `IJsonLdValueObject`

A booking identifier for this transport person.

#### See

https://vocabulary.uncefact.org/bookingId

***

### cabinId? {#cabinid}

> `optional` **cabinId?**: `string` \| `IJsonLdValueObject`

A cabin identifier for this transport person.

#### See

https://vocabulary.uncefact.org/cabinId

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

A code specifying a category for this transport person, such as a member of crew or passenger.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### declaredPersonalEffects? {#declaredpersonaleffects}

> `optional` **declaredPersonalEffects?**: [`IUnecePersonalEffects`](IUnecePersonalEffects.md)[]

Personal effects use declared by a transport person.

#### See

https://vocabulary.uncefact.org/declaredPersonalEffects

***

### disembarkationDateTime? {#disembarkationdatetime}

> `optional` **disembarkationDateTime?**: `string`

A date, time, date time, or other date time value that this person disembarked from a means of transport.

#### See

https://vocabulary.uncefact.org/disembarkationDateTime

***

### disembarkationLocation? {#disembarkationlocation}

> `optional` **disembarkationLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A disembarkation location for this transport person.

#### See

https://vocabulary.uncefact.org/disembarkationLocation

***

### emailURICommunication? {#emailuricommunication}

> `optional` **emailURICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

The email URI (Uniform Resource Identifier) communication for this transport person.

#### See

https://vocabulary.uncefact.org/emailURICommunication

***

### embarkationDateTime? {#embarkationdatetime}

> `optional` **embarkationDateTime?**: `string`

A date, time, date time, or other date time value that this person embarked upon a means of transport.

#### See

https://vocabulary.uncefact.org/embarkationDateTime

***

### embarkationLocation? {#embarkationlocation}

> `optional` **embarkationLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

An embarkation location for this transport person.

#### See

https://vocabulary.uncefact.org/embarkationLocation

***

### familyName? {#familyname}

> `optional` **familyName?**: `string`

A family name, expressed as text, for this transport person.

#### See

https://vocabulary.uncefact.org/familyName

***

### genderCode? {#gendercode}

> `optional` **genderCode?**: `string`

A code specifying the gender of this transport person.

#### See

https://vocabulary.uncefact.org/genderCode

***

### givenName? {#givenname}

> `optional` **givenName?**: `string`

A given name, expressed as text, for this transport person.

#### See

https://vocabulary.uncefact.org/givenName

***

### identifiedStowaway? {#identifiedstowaway}

> `optional` **identifiedStowaway?**: [`IUneceStowaway`](IUneceStowaway.md)[]

A transport person identified as a found stowaway.

#### See

https://vocabulary.uncefact.org/identifiedStowaway

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this transport person.

#### See

https://vocabulary.uncefact.org/identifier

***

### inTransitIndicator? {#intransitindicator}

> `optional` **inTransitIndicator?**: `boolean`

The indication of whether or not this transport person is in transit.

#### See

https://vocabulary.uncefact.org/inTransitIndicator

***

### landlineTelephoneCommunication? {#landlinetelephonecommunication}

> `optional` **landlineTelephoneCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Landline telephone communication information for this transport person.

#### See

https://vocabulary.uncefact.org/landlineTelephoneCommunication

***

### mobileTelephoneCommunication? {#mobiletelephonecommunication}

> `optional` **mobileTelephoneCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Mobile telephone communication information for this transport person.

#### See

https://vocabulary.uncefact.org/mobileTelephoneCommunication

***

### nationalityCountry? {#nationalitycountry}

> `optional` **nationalityCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A country that constitutes a nationality by origin, birth, or naturalization for this transport person.

#### See

https://vocabulary.uncefact.org/nationalityCountry

***

### onboardIndicator? {#onboardindicator}

> `optional` **onboardIndicator?**: `boolean`

The indication of whether or not this person is onboard a means of transport.

#### See

https://vocabulary.uncefact.org/onboardIndicator

***

### partyRoleCode? {#partyrolecode}

> `optional` **partyRoleCode?**: [`UnecePartyRoleCodeList`](../type-aliases/UnecePartyRoleCodeList.md)[]

A code specifying a role of this transport person.

#### See

https://vocabulary.uncefact.org/partyRoleCode

***

### passengerId? {#passengerid}

> `optional` **passengerId?**: `string` \| `IJsonLdValueObject`

A passenger identifier for this transport person.

#### See

https://vocabulary.uncefact.org/passengerId

***

### reportedIllness? {#reportedillness}

> `optional` **reportedIllness?**: [`IUneceIllness`](IUneceIllness.md)[]

An MDH (Maritime Declaration of Health) reported illness or disease for this transport person.

#### See

https://vocabulary.uncefact.org/reportedIllness

***

### role? {#role}

> `optional` **role?**: `string`

A role, expressed as text, of this transport person.

#### See

https://vocabulary.uncefact.org/role

***

### specificAccreditation? {#specificaccreditation}

> `optional` **specificAccreditation?**: [`IUneceAccreditation`](IUneceAccreditation.md)[]

A certified accreditation specific to this transport person.

#### See

https://vocabulary.uncefact.org/specificAccreditation

***

### transportPersonLanguageId? {#transportpersonlanguageid}

> `optional` **transportPersonLanguageId?**: `string` \| `IJsonLdValueObject`

A unique identifier of a language related to this transport person, such as their spoken or correspondence language.

#### See

https://vocabulary.uncefact.org/transportPersonLanguageId

***

### transportPersonName? {#transportpersonname}

> `optional` **transportPersonName?**: `string`

The name or set of names, expressed as text, by which this transport person is known.

#### See

https://vocabulary.uncefact.org/transportPersonName

***

### travelIdentityDocument? {#travelidentitydocument}

> `optional` **travelIdentityDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced travel identity document for this transport person.

#### See

https://vocabulary.uncefact.org/travelIdentityDocument

***

### travelVisaDocument? {#travelvisadocument}

> `optional` **travelVisaDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced travel visa document for this transport person.

#### See

https://vocabulary.uncefact.org/travelVisaDocument
