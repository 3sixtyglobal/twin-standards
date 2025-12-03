# Interface: ISpecifiedMethod

A defined way of performing something.

## See

https://vocabulary.uncefact.org/SpecifiedMethod

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

> **type**: `"SpecifiedMethod"`

JSON-LD Type.

***

### applicableParameter?

> `optional` **applicableParameter**: [`ISpecifiedParameter`](ISpecifiedParameter.md)[]

A parameter applicable to this specified method.

#### See

https://vocabulary.uncefact.org/applicableParameter

***

### certificationId?

> `optional` **certificationId**: `string`

A certification identifier of this specified method.

#### See

https://vocabulary.uncefact.org/certificationId

***

### certificationTypeCode?

> `optional` **certificationTypeCode**: `string`

The code specifying the certification type of this method.

#### See

https://vocabulary.uncefact.org/certificationTypeCode

***

### externalReference?

> `optional` **externalReference**: `string`

An external reference, expressed as text, for this specified method.

#### See

https://vocabulary.uncefact.org/externalReference

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified method.

#### See

https://vocabulary.uncefact.org/identifier

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this specified method.

#### See

https://vocabulary.uncefact.org/information

***

### localTypeCode?

> `optional` **localTypeCode**: `string`

The code specifying the local type for this method.

#### See

https://vocabulary.uncefact.org/localTypeCode

***

### measurementCode?

> `optional` **measurementCode**: `string`

The code specifying the measurement for this method.

#### See

https://vocabulary.uncefact.org/measurementCode

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this specified method.

#### See

https://vocabulary.uncefact.org/name

***

### obligatoryTypeCode?

> `optional` **obligatoryTypeCode**: `string`

The code specifying the obligatory type for this method.

#### See

https://vocabulary.uncefact.org/obligatoryTypeCode

***

### standardTypeCode?

> `optional` **standardTypeCode**: `string`

The code specifying the standard type for this method.

#### See

https://vocabulary.uncefact.org/standardTypeCode

***

### usedTechnologyCode?

> `optional` **usedTechnologyCode**: `string`

The code specifying the technology used by this method.

#### See

https://vocabulary.uncefact.org/usedTechnologyCode
