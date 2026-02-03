# Interface: IUneceAssessment

The evaluation of an object, such as a product, process, or organization, with respect to the object's worth or
condition.

## See

https://vocabulary.uncefact.org/Assessment

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

> **type**: `"Assessment"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)

A referenced standard applicable to this specified assessment.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)

A sustainability characteristic applicable to this specified assessment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### assessedObject?

> `optional` **assessedObject**: [`IUneceObject`](IUneceObject.md)

An object assessed for this specified assessment.

#### See

https://vocabulary.uncefact.org/assessedObject

***

### assessorParty?

> `optional` **assessorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The assessor party for this specified assessment.

#### See

https://vocabulary.uncefact.org/assessorParty

***

### associatedBinaryFile?

> `optional` **associatedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

A binary file associated with this specified assessment.

#### See

https://vocabulary.uncefact.org/associatedBinaryFile

***

### assuranceLevelCode?

> `optional` **assuranceLevelCode**: `string`

The code specifying the assurance level, such as verified by second party or third party, for this specified assessment.

#### See

https://vocabulary.uncefact.org/assuranceLevelCode

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this specified assessment.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time or other date time value for the end of this specified assessment.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified assessment.

#### See

https://vocabulary.uncefact.org/name

***

### relatedTradeTransaction?

> `optional` **relatedTradeTransaction**: [`IUneceSupplyChainTradeTransaction`](IUneceSupplyChainTradeTransaction.md)

A supply chain trade transaction related to this specified assessment.

#### See

https://vocabulary.uncefact.org/relatedTradeTransaction

***

### reportDateTime?

> `optional` **reportDateTime**: `string`

The date, time, date time or other date time value of the report of this specified assessment.

#### See

https://vocabulary.uncefact.org/reportDateTime

***

### reportId?

> `optional` **reportId**: `string`

The report identifier for this specified assessment.

#### See

https://vocabulary.uncefact.org/reportId

***

### selfAssessedIndicator?

> `optional` **selfAssessedIndicator**: `boolean`

The indication of whether or not this specified assessment is self assessed.

#### See

https://vocabulary.uncefact.org/selfAssessedIndicator

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time or other date time value for the start of this specified assessment.

#### See

https://vocabulary.uncefact.org/startDateTime

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this specified assessment.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified assessment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### verifiedIndicator?

> `optional` **verifiedIndicator**: `boolean`

The indication of whether or not this specified assessment is verified.

#### See

https://vocabulary.uncefact.org/verifiedIndicator

***

### verifierParty?

> `optional` **verifierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

A verifier party for this specified assessment.

#### See

https://vocabulary.uncefact.org/verifierParty
