# Interface: IUneceSpecifiedCertification

The process of certifying that a certain product, process or organization has passed performance tests, or qualification
requirements stipulated in a standard or regulation.

## See

https://vocabulary.uncefact.org/SpecifiedCertification

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

> **type**: `"SpecifiedCertification"`

JSON-LD Type.

***

### assertion?

> `optional` **assertion**: `string`

An assertion, expressed as text, for this specified certification.

#### See

https://vocabulary.uncefact.org/assertion

***

### assertionCode?

> `optional` **assertionCode**: `string`

A code specifying an assertion for this specified certification, such as a claim that a product is free of hazardous
chemicals.

#### See

https://vocabulary.uncefact.org/assertionCode

***

### auditDateTime?

> `optional` **auditDateTime**: `string`

An audit date, time, date time or other date time value for this specified certification.

#### See

https://vocabulary.uncefact.org/auditDateTime

***

### endDateTime?

> `optional` **endDateTime**: `string`

The end date value for this specified certification.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this specified certification.

#### See

https://vocabulary.uncefact.org/identifier

***

### relatedLocation?

> `optional` **relatedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this specified certification.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### relatedStandard?

> `optional` **relatedStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard related to this specified certification.

#### See

https://vocabulary.uncefact.org/relatedStandard

***

### responsibleAgency?

> `optional` **responsibleAgency**: `string`

A responsible agency, expressed as text, for this specified certification.

#### See

https://vocabulary.uncefact.org/responsibleAgency

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion for this specified certification.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### standard?

> `optional` **standard**: `string`

A standard, expressed as text, for this specified certification.

#### See

https://vocabulary.uncefact.org/standard

***

### startDateTime?

> `optional` **startDateTime**: `string`

The start date value for this specified certification.

#### See

https://vocabulary.uncefact.org/startDateTime

***

### uRIId?

> `optional` **uRIId**: `string`

A Uniform Resource Identifier (URI) for this specified certification.

#### See

https://vocabulary.uncefact.org/uRIId
