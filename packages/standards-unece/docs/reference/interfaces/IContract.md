# Interface: IContract

An agreement between two or more parties for trade purposes.

## See

https://vocabulary.uncefact.org/Contract

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

> **type**: `"Contract"`

JSON-LD Type.

***

### automaticExtensionDateTime?

> `optional` **automaticExtensionDateTime**: `string`

The date, time, date time, or other date time value of automatic extension for this trade contract.

#### See

https://vocabulary.uncefact.org/automaticExtensionDateTime

***

### automaticExtensionDurationMeasure?

> `optional` **automaticExtensionDurationMeasure**: [`IDurationUnitMeasureType`](IDurationUnitMeasureType.md)[]

The measure of the duration of the automatic extension for this trade contract.

#### See

https://vocabulary.uncefact.org/automaticExtensionDurationMeasure

***

### description?

> `optional` **description**: `string`

A textual description of this trade contract.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this trade contract.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, date time, or other date time value for the issuance of this trade contract.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this trade contract.

#### See

https://vocabulary.uncefact.org/name

***

### signatureName?

> `optional` **signatureName**: `string`

A signature name, expressed as text, for this trade contract.

#### See

https://vocabulary.uncefact.org/signatureName

***

### signedDateTime?

> `optional` **signedDateTime**: `string`

The date, time, date time or other date time value when this trade contract was signed.

#### See

https://vocabulary.uncefact.org/signedDateTime

***

### signedLocation?

> `optional` **signedLocation**: [`ISpecifiedLocation`](ISpecifiedLocation.md)[]

A location where this trade contract was or will be signed.

#### See

https://vocabulary.uncefact.org/signedLocation

***

### signeeJobTitle?

> `optional` **signeeJobTitle**: `string`

A job title of the signee, expressed as text, for this trade contract.

#### See

https://vocabulary.uncefact.org/signeeJobTitle
