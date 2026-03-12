# Interface: IUneceGuestPerson

An individual guest.

## See

https://vocabulary.uncefact.org/GuestPerson

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GuestPerson"`

JSON-LD Type.

***

### accompanyingAnimal? {#accompanyinganimal}

> `optional` **accompanyingAnimal**: [`IUnecePetAnimal`](IUnecePetAnimal.md)[]

A pet animal accompanying this guest person.

#### See

https://vocabulary.uncefact.org/accompanyingAnimal

***

### applicableSpecifiedNote? {#applicablespecifiednote}

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A note applicable to this guest person.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### birthDateTime? {#birthdatetime}

> `optional` **birthDateTime**: `string`

The date, time, date time, or other date time value which specifies the birth date for this guest.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### carriedCertificate? {#carriedcertificate}

> `optional` **carriedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate carried by this guest person.

#### See

https://vocabulary.uncefact.org/carriedCertificate

***

### claimedLanguageProficiency? {#claimedlanguageproficiency}

> `optional` **claimedLanguageProficiency**: [`IUneceLanguageProficiency`](IUneceLanguageProficiency.md)[]

Personal language proficiency skills claimed by this guest person.

#### See

https://vocabulary.uncefact.org/claimedLanguageProficiency

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this guest person.

#### See

https://vocabulary.uncefact.org/description

***

### durationUnitAgeMeasure? {#durationunitagemeasure}

> `optional` **durationUnitAgeMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)

The measure of the age of this guest person.

#### See

https://vocabulary.uncefact.org/durationUnitAgeMeasure

***

### genderCode? {#gendercode}

> `optional` **genderCode**: `string`

The code specifying the gender of this guest, such as male, female.

#### See

https://vocabulary.uncefact.org/genderCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this guest.

#### See

https://vocabulary.uncefact.org/identifier

***

### languageId? {#languageid}

> `optional` **languageId**: `string` \| `IJsonLdValueObject`

The identifier of the language of this guest.

#### See

https://vocabulary.uncefact.org/languageId

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, by which this guest person is known.

#### See

https://vocabulary.uncefact.org/name

***

### notifiedAllergy? {#notifiedallergy}

> `optional` **notifiedAllergy**: [`IUneceAllergy`](IUneceAllergy.md)[]

An allergy notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedAllergy

***

### notifiedDisability? {#notifieddisability}

> `optional` **notifiedDisability**: [`IUneceDisability`](IUneceDisability.md)[]

A disability notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedDisability

***

### notifiedFoodChoice? {#notifiedfoodchoice}

> `optional` **notifiedFoodChoice**: [`IUneceFoodChoice`](IUneceFoodChoice.md)[]

A food choice notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedFoodChoice

***

### notifiedGuestArrival? {#notifiedguestarrival}

> `optional` **notifiedGuestArrival**: [`IUneceGuestArrival`](IUneceGuestArrival.md)[]

An arrival notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedGuestArrival

***

### notifiedHealthIndication? {#notifiedhealthindication}

> `optional` **notifiedHealthIndication**: [`IUneceGuestHealthIndication`](IUneceGuestHealthIndication.md)[]

A health indication notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedHealthIndication

***

### notifiedPreference? {#notifiedpreference}

> `optional` **notifiedPreference**: [`IUnecePreference`](IUnecePreference.md)[]

An experience item preference notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedPreference

***

### notifiedProtectionMeans? {#notifiedprotectionmeans}

> `optional` **notifiedProtectionMeans**: [`IUneceProtectionMeans`](IUneceProtectionMeans.md)[]

A disease protection means notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedProtectionMeans

***

### passportId? {#passportid}

> `optional` **passportId**: `string` \| `IJsonLdValueObject`

The identifier of the passport of this guest.

#### See

https://vocabulary.uncefact.org/passportId

***

### raisedQuery? {#raisedquery}

> `optional` **raisedQuery**: [`IUneceSpecialQuery`](IUneceSpecialQuery.md)[]

A special query raised for this guest person.

#### See

https://vocabulary.uncefact.org/raisedQuery

***

### residenceCountryId? {#residencecountryid}

> `optional` **residenceCountryId**: `string` \| `IJsonLdValueObject`

The identifier of the residence country of this guest person.

#### See

https://vocabulary.uncefact.org/residenceCountryId

***

### roleCode? {#rolecode}

> `optional` **roleCode**: `string`

The code specifying the role of this guest person.

#### See

https://vocabulary.uncefact.org/roleCode

***

### specifiedCarriedEquipment? {#specifiedcarriedequipment}

> `optional` **specifiedCarriedEquipment**: [`IUneceCarriedEquipment`](IUneceCarriedEquipment.md)[]

Carried equipment specified for this guest person.

#### See

https://vocabulary.uncefact.org/specifiedCarriedEquipment

***

### specifiedPaymentMeans? {#specifiedpaymentmeans}

> `optional` **specifiedPaymentMeans**: [`IUnecePaymentMeans`](IUnecePaymentMeans.md)[]

A trade settlement payment means specified for this guest person.

#### See

https://vocabulary.uncefact.org/specifiedPaymentMeans

***

### title? {#title}

> `optional` **title**: `string`

A title, expressed as text, associated with this guest person, such as Doctor, Mr., Mrs., Ms.

#### See

https://vocabulary.uncefact.org/title

***

### titleCode? {#titlecode}

> `optional` **titleCode**: `string`

The code specifying the title of this guest person.

#### See

https://vocabulary.uncefact.org/titleCode

***

### travelInsuranceCertificate? {#travelinsurancecertificate}

> `optional` **travelInsuranceCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A travel insurance certificate for this guest person.

#### See

https://vocabulary.uncefact.org/travelInsuranceCertificate

***

### usedCommunication? {#usedcommunication}

> `optional` **usedCommunication**: [`IUneceCommunication`](IUneceCommunication.md)[]

A universal communication used by this guest.

#### See

https://vocabulary.uncefact.org/usedCommunication
