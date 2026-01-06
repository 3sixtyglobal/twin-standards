# Interface: IUneceLicence

A permit from an authority to own or use something, do a particular thing, or to conduct a trade.

## See

https://vocabulary.uncefact.org/Licence

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

> **type**: `"Licence"`

JSON-LD Type.

***

### associatedStandard?

> `optional` **associatedStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard associated to this specified licence.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### assuranceLevelCode?

> `optional` **assuranceLevelCode**: `string`

A code specifying an assurance level of this specified licence.

#### See

https://vocabulary.uncefact.org/assuranceLevelCode

***

### description?

> `optional` **description**: `string`

A textual description of this specified licence.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

An expiry date, time, date time or other date time value for this specified licence.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### grantedParty?

> `optional` **grantedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party granted this specified licence.

#### See

https://vocabulary.uncefact.org/grantedParty

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified licence.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

An issue date, time, date time or other date time value of this specified licence.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issuerParty?

> `optional` **issuerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party that issues this specified licence.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified licence.

#### See

https://vocabulary.uncefact.org/name

***

### subjectTypeCode?

> `optional` **subjectTypeCode**: [`UneceSubjectCodeList`](../type-aliases/UneceSubjectCodeList.md)[]

A code specifying a subject type for this licence.

#### See

https://vocabulary.uncefact.org/subjectTypeCode

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of licence.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validIndicator?

> `optional` **validIndicator**: `boolean`

The indication of whether or not this specified licence is valid.

#### See

https://vocabulary.uncefact.org/validIndicator

***

### verifiedObject?

> `optional` **verifiedObject**: [`IUneceObject`](IUneceObject.md)[]

An object verified for this specified licence.

#### See

https://vocabulary.uncefact.org/verifiedObject
