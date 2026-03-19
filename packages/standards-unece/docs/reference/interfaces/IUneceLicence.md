# Interface: IUneceLicence

A permit from an authority to own or use something, do a particular thing, or to conduct a trade.

## See

https://vocabulary.uncefact.org/Licence

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Licence"`

JSON-LD Type.

***

### associatedStandard? {#associatedstandard}

> `optional` **associatedStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard associated to this specified licence.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### assuranceLevelCode? {#assurancelevelcode}

> `optional` **assuranceLevelCode?**: `string`

A code specifying an assurance level of this specified licence.

#### See

https://vocabulary.uncefact.org/assuranceLevelCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified licence.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime?**: `string`

An expiry date, time, date time or other date time value for this specified licence.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### grantedParty? {#grantedparty}

> `optional` **grantedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party granted this specified licence.

#### See

https://vocabulary.uncefact.org/grantedParty

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this specified licence.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

An issue date, time, date time or other date time value of this specified licence.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issuerParty? {#issuerparty}

> `optional` **issuerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that issues this specified licence.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this specified licence.

#### See

https://vocabulary.uncefact.org/name

***

### subjectTypeCode? {#subjecttypecode}

> `optional` **subjectTypeCode?**: [`UneceSubjectCodeList`](../type-aliases/UneceSubjectCodeList.md)[]

A code specifying a subject type for this licence.

#### See

https://vocabulary.uncefact.org/subjectTypeCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of licence.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validIndicator? {#validindicator}

> `optional` **validIndicator?**: `boolean`

The indication of whether or not this specified licence is valid.

#### See

https://vocabulary.uncefact.org/validIndicator

***

### verifiedObject? {#verifiedobject}

> `optional` **verifiedObject?**: [`IUneceObject`](IUneceObject.md)[]

An object verified for this specified licence.

#### See

https://vocabulary.uncefact.org/verifiedObject
