# Interface: IUneceAssessment

The evaluation of an object, such as a product, process, or organization, with respect to the object's worth or
condition.

## See

https://vocabulary.uncefact.org/Assessment

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Assessment"`

JSON-LD Type.

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this specified assessment.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified assessment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### assessedObject? {#assessedobject}

> `optional` **assessedObject**: [`IUneceObject`](IUneceObject.md)[]

An object assessed for this specified assessment.

#### See

https://vocabulary.uncefact.org/assessedObject

***

### assessorParty? {#assessorparty}

> `optional` **assessorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The assessor party for this specified assessment.

#### See

https://vocabulary.uncefact.org/assessorParty

***

### associatedBinaryFile? {#associatedbinaryfile}

> `optional` **associatedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file associated with this specified assessment.

#### See

https://vocabulary.uncefact.org/associatedBinaryFile

***

### assuranceLevelCode? {#assurancelevelcode}

> `optional` **assuranceLevelCode**: `string`

The code specifying the assurance level, such as verified by second party or third party, for this specified assessment.

#### See

https://vocabulary.uncefact.org/assuranceLevelCode

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

The code specifying the category for this specified assessment.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### endDateTime? {#enddatetime}

> `optional` **endDateTime**: `string`

The date, time, date time or other date time value for the end of this specified assessment.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this specified assessment.

#### See

https://vocabulary.uncefact.org/name

***

### relatedTradeTransaction? {#relatedtradetransaction}

> `optional` **relatedTradeTransaction**: [`IUneceSupplyChainTradeTransaction`](IUneceSupplyChainTradeTransaction.md)[]

A supply chain trade transaction related to this specified assessment.

#### See

https://vocabulary.uncefact.org/relatedTradeTransaction

***

### reportDateTime? {#reportdatetime}

> `optional` **reportDateTime**: `string`

The date, time, date time or other date time value of the report of this specified assessment.

#### See

https://vocabulary.uncefact.org/reportDateTime

***

### reportId? {#reportid}

> `optional` **reportId**: `string` \| `IJsonLdValueObject`

The report identifier for this specified assessment.

#### See

https://vocabulary.uncefact.org/reportId

***

### selfAssessedIndicator? {#selfassessedindicator}

> `optional` **selfAssessedIndicator**: `boolean`

The indication of whether or not this specified assessment is self assessed.

#### See

https://vocabulary.uncefact.org/selfAssessedIndicator

***

### startDateTime? {#startdatetime}

> `optional` **startDateTime**: `string`

The date, time, date time or other date time value for the start of this specified assessment.

#### See

https://vocabulary.uncefact.org/startDateTime

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status of this specified assessment.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of specified assessment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### verifiedIndicator? {#verifiedindicator}

> `optional` **verifiedIndicator**: `boolean`

The indication of whether or not this specified assessment is verified.

#### See

https://vocabulary.uncefact.org/verifiedIndicator

***

### verifierParty? {#verifierparty}

> `optional` **verifierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A verifier party for this specified assessment.

#### See

https://vocabulary.uncefact.org/verifierParty
