# Interface: IUneceContactPerson

An individual human being in a position to give assistance or information.

## See

https://vocabulary.uncefact.org/ContactPerson

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ContactPerson"`

JSON-LD Type.

***

### alias? {#alias}

> `optional` **alias?**: `string`

The alias, expressed as text, reflecting a shortened form of the name of this person or any other name such as a
nickname by which this contact person may be known.

#### See

https://vocabulary.uncefact.org/alias

***

### birthDateTime? {#birthdatetime}

> `optional` **birthDateTime?**: `string`

The date, time, date time or other date time value which specifies the birth date for this contact person.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### birthplaceName? {#birthplacename}

> `optional` **birthplaceName?**: `string`

The name of the place where this contact person was born, expressed as text.

#### See

https://vocabulary.uncefact.org/birthplaceName

***

### contactPersonTitleCode? {#contactpersontitlecode}

> `optional` **contactPersonTitleCode?**: `string`

The code specifying the title of this contact person, such as Ms., Doctor, Mister.

#### See

https://vocabulary.uncefact.org/contactPersonTitleCode

***

### countryResidenceCountryId? {#countryresidencecountryid}

> `optional` **countryResidenceCountryId?**: `string` \| `object` & `object` \| `object` & `object` \| `object` & `object`

The identifier of the residence country of this contact person.

#### See

https://vocabulary.uncefact.org/countryResidenceCountryId

***

### emailURICommunication? {#emailuricommunication}

> `optional` **emailURICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

An email Uniform Resource Identifier (URI) communication for this contact person.

#### See

https://vocabulary.uncefact.org/emailURICommunication

***

### familyName? {#familyname}

> `optional` **familyName?**: `string`

A name, expressed as text, that this contact person shares with members of his/her family.

#### See

https://vocabulary.uncefact.org/familyName

***

### familyNamePrefix? {#familynameprefix}

> `optional` **familyNamePrefix?**: `string`

The prefix, expressed as text, that precedes this contact person's family name, such as Van, Von.

#### See

https://vocabulary.uncefact.org/familyNamePrefix

***

### faxCommunication? {#faxcommunication}

> `optional` **faxCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Facsimile communication information for this contact person.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### genderCode? {#gendercode}

> `optional` **genderCode?**: `string`

The code specifying the gender of this contact person.

#### See

https://vocabulary.uncefact.org/genderCode

***

### givenName? {#givenname}

> `optional` **givenName?**: `string`

The name, expressed as text, given to this contact person, usually by parents at birth.

#### See

https://vocabulary.uncefact.org/givenName

***

### instantMessagingCommunication? {#instantmessagingcommunication}

> `optional` **instantMessagingCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

An instant messaging communication for this contact person.

#### See

https://vocabulary.uncefact.org/instantMessagingCommunication

***

### middleName? {#middlename}

> `optional` **middleName?**: `string`

The middle name, expressed as text, of this contact person, usually given by parents at birth.

#### See

https://vocabulary.uncefact.org/middleName

***

### nameSuffix? {#namesuffix}

> `optional` **nameSuffix?**: `string`

The suffix, expressed as text, that follows this contact person's name, such as Junior, Third.

#### See

https://vocabulary.uncefact.org/nameSuffix

***

### role? {#role}

> `optional` **role?**: `string`

A role, expressed as text, for this contact person.

#### See

https://vocabulary.uncefact.org/role

***

### specifiedBirthAddress? {#specifiedbirthaddress}

> `optional` **specifiedBirthAddress?**: [`IUneceBirthAddress`](IUneceBirthAddress.md)

The birth address specified for this contact person.

#### See

https://vocabulary.uncefact.org/specifiedBirthAddress

***

### specifiedCommunication? {#specifiedcommunication}

> `optional` **specifiedCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

A universal communication specified for this contact person.

#### See

https://vocabulary.uncefact.org/specifiedCommunication

***

### specifiedEmployerIdentity? {#specifiedemployeridentity}

> `optional` **specifiedEmployerIdentity?**: [`IUneceEmployerIdentity`](IUneceEmployerIdentity.md)[]

An employer identity specified for this contact person.

#### See

https://vocabulary.uncefact.org/specifiedEmployerIdentity

***

### specifiedPersonIdentity? {#specifiedpersonidentity}

> `optional` **specifiedPersonIdentity?**: [`IUnecePersonIdentity`](IUnecePersonIdentity.md)

The person identity specified for this contact person.

#### See

https://vocabulary.uncefact.org/specifiedPersonIdentity

***

### specifiedTaxRegistration? {#specifiedtaxregistration}

> `optional` **specifiedTaxRegistration?**: [`IUneceTaxRegistration`](IUneceTaxRegistration.md)[]

A tax registration specified for this contact person.

#### See

https://vocabulary.uncefact.org/specifiedTaxRegistration

***

### telephoneCommunication? {#telephonecommunication}

> `optional` **telephoneCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

Telephone communication information for this contact person.

#### See

https://vocabulary.uncefact.org/telephoneCommunication

***

### title? {#title}

> `optional` **title?**: `string`

The textual expression of the title associated with this contact person, such as Doctor.

#### See

https://vocabulary.uncefact.org/title

***

### websiteURICommunication? {#websiteuricommunication}

> `optional` **websiteURICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

A website Uniform Resource Identifier (URI) communication for this contact person.

#### See

https://vocabulary.uncefact.org/websiteURICommunication
