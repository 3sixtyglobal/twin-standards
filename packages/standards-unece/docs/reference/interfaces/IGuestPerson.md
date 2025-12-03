# Interface: IGuestPerson

An individual guest.

## See

https://vocabulary.uncefact.org/GuestPerson

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

> **type**: `"GuestPerson"`

JSON-LD Type.

***

### accompanyingAnimal?

> `optional` **accompanyingAnimal**: [`IPetAnimal`](IPetAnimal.md)[]

A pet animal accompanying this guest person.

#### See

https://vocabulary.uncefact.org/accompanyingAnimal

***

### applicableSpecifiedNote?

> `optional` **applicableSpecifiedNote**: [`ISpecifiedNote`](ISpecifiedNote.md)[]

A note applicable to this guest person.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### birthDateTime?

> `optional` **birthDateTime**: `string`

The date, time, date time, or other date time value which specifies the birth date for this guest.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### carriedCertificate?

> `optional` **carriedCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A certificate carried by this guest person.

#### See

https://vocabulary.uncefact.org/carriedCertificate

***

### claimedLanguageProficiency?

> `optional` **claimedLanguageProficiency**: [`ILanguageProficiency`](ILanguageProficiency.md)[]

Personal language proficiency skills claimed by this guest person.

#### See

https://vocabulary.uncefact.org/claimedLanguageProficiency

***

### description?

> `optional` **description**: `string`

A textual description of this guest person.

#### See

https://vocabulary.uncefact.org/description

***

### durationUnitAgeMeasure?

> `optional` **durationUnitAgeMeasure**: [`IDurationUnitMeasureType`](IDurationUnitMeasureType.md)[]

The measure of the age of this guest person.

#### See

https://vocabulary.uncefact.org/durationUnitAgeMeasure

***

### genderCode?

> `optional` **genderCode**: `string`

The code specifying the gender of this guest, such as male, female.

#### See

https://vocabulary.uncefact.org/genderCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this guest.

#### See

https://vocabulary.uncefact.org/identifier

***

### languageId?

> `optional` **languageId**: `string`

The identifier of the language of this guest.

#### See

https://vocabulary.uncefact.org/languageId

***

### name?

> `optional` **name**: `string`

A name, expressed as text, by which this guest person is known.

#### See

https://vocabulary.uncefact.org/name

***

### notifiedAllergy?

> `optional` **notifiedAllergy**: [`IAllergy`](IAllergy.md)[]

An allergy notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedAllergy

***

### notifiedDisability?

> `optional` **notifiedDisability**: [`IDisability`](IDisability.md)[]

A disability notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedDisability

***

### notifiedFoodChoice?

> `optional` **notifiedFoodChoice**: [`IFoodChoice`](IFoodChoice.md)[]

A food choice notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedFoodChoice

***

### notifiedGuestArrival?

> `optional` **notifiedGuestArrival**: [`IGuestArrival`](IGuestArrival.md)[]

An arrival notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedGuestArrival

***

### notifiedHealthIndication?

> `optional` **notifiedHealthIndication**: [`IGuestHealthIndication`](IGuestHealthIndication.md)[]

A health indication notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedHealthIndication

***

### notifiedPreference?

> `optional` **notifiedPreference**: [`IPreference`](IPreference.md)[]

An experience item preference notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedPreference

***

### notifiedProtectionMeans?

> `optional` **notifiedProtectionMeans**: [`IProtectionMeans`](IProtectionMeans.md)[]

A disease protection means notified for this guest person.

#### See

https://vocabulary.uncefact.org/notifiedProtectionMeans

***

### passportId?

> `optional` **passportId**: `string`

The identifier of the passport of this guest.

#### See

https://vocabulary.uncefact.org/passportId

***

### raisedQuery?

> `optional` **raisedQuery**: [`ISpecialQuery`](ISpecialQuery.md)[]

A special query raised for this guest person.

#### See

https://vocabulary.uncefact.org/raisedQuery

***

### residenceCountryId?

> `optional` **residenceCountryId**: `string`

The identifier of the residence country of this guest person.

#### See

https://vocabulary.uncefact.org/residenceCountryId

***

### roleCode?

> `optional` **roleCode**: `string`

The code specifying the role of this guest person.

#### See

https://vocabulary.uncefact.org/roleCode

***

### specifiedCarriedEquipment?

> `optional` **specifiedCarriedEquipment**: [`ICarriedEquipment`](ICarriedEquipment.md)[]

Carried equipment specified for this guest person.

#### See

https://vocabulary.uncefact.org/specifiedCarriedEquipment

***

### specifiedPaymentMeans?

> `optional` **specifiedPaymentMeans**: [`IPaymentMeans`](IPaymentMeans.md)[]

A trade settlement payment means specified for this guest person.

#### See

https://vocabulary.uncefact.org/specifiedPaymentMeans

***

### title?

> `optional` **title**: `string`

A title, expressed as text, associated with this guest person, such as Doctor, Mr., Mrs., Ms.

#### See

https://vocabulary.uncefact.org/title

***

### titleCode?

> `optional` **titleCode**: `string`

The code specifying the title of this guest person.

#### See

https://vocabulary.uncefact.org/titleCode

***

### travelInsuranceCertificate?

> `optional` **travelInsuranceCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A travel insurance certificate for this guest person.

#### See

https://vocabulary.uncefact.org/travelInsuranceCertificate

***

### usedCommunication?

> `optional` **usedCommunication**: [`ICommunication`](ICommunication.md)[]

A universal communication used by this guest.

#### See

https://vocabulary.uncefact.org/usedCommunication
