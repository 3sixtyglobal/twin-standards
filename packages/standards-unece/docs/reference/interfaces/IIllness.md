# Interface: IIllness

A WHO MDH (Maritime Declaration of Health) reported illness or disease for an onboard person.

## See

https://vocabulary.uncefact.org/Illness

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

> **type**: `"Illness"`

JSON-LD Type.

***

### caseDispositionCode?

> `optional` **caseDispositionCode**: `string`

A code specifying a case disposition of this MDH illness.

#### See

https://vocabulary.uncefact.org/caseDispositionCode

***

### comment?

> `optional` **comment**: `string`

A comment, expressed as text for this MDH illness.

#### See

https://vocabulary.uncefact.org/comment

***

### evacuationLocation?

> `optional` **evacuationLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics evacuation location for this MDH illness.

#### See

https://vocabulary.uncefact.org/evacuationLocation

***

### healthStatusCode?

> `optional` **healthStatusCode**: `string`

A code specifying a health status of this MDH illness.

#### See

https://vocabulary.uncefact.org/healthStatusCode

***

### healthStatusReportedIndicator?

> `optional` **healthStatusReportedIndicator**: `boolean`

The indication of whether or not the health status has been reported for this MDH illness.

#### See

https://vocabulary.uncefact.org/healthStatusReportedIndicator

***

### nature?

> `optional` **nature**: `string`

A nature, expressed as text, of this MDH illness.

#### See

https://vocabulary.uncefact.org/nature

***

### symptomOnsetDateTime?

> `optional` **symptomOnsetDateTime**: `string`

A symptom onset date, time, date time or other date time value for this MDH illness.

#### See

https://vocabulary.uncefact.org/symptomOnsetDateTime

***

### treatment?

> `optional` **treatment**: `string`

A treatment, expressed as text, for this MDH illness.

#### See

https://vocabulary.uncefact.org/treatment
