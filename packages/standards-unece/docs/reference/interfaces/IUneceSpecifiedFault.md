# Interface: IUneceSpecifiedFault

An unattractive or unsatisfactory characteristic.

## See

https://vocabulary.uncefact.org/SpecifiedFault

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

> **type**: `"SpecifiedFault"`

JSON-LD Type.

***

### actualSpecifiedPercent?

> `optional` **actualSpecifiedPercent**: `string`

The actual percentage of this specified fault.

#### See

https://vocabulary.uncefact.org/actualSpecifiedPercent

***

### actualSpecifiedQuantity?

> `optional` **actualSpecifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The actual total quantity of this specified fault.

#### See

https://vocabulary.uncefact.org/actualSpecifiedQuantity

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this fault.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### classificationCode?

> `optional` **classificationCode**: `string`

The code specifying the classification for this fault.

#### See

https://vocabulary.uncefact.org/classificationCode

***

### description?

> `optional` **description**: `string`

A textual description of this specified fault.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedSpecifiedPercent?

> `optional` **estimatedSpecifiedPercent**: `string`

The estimated percentage of this specified fault.

#### See

https://vocabulary.uncefact.org/estimatedSpecifiedPercent

***

### faultType?

> `optional` **faultType**: `string`

A type, expressed as text, of this specified fault.

#### See

https://vocabulary.uncefact.org/faultType

***

### operationalApplicableTolerance?

> `optional` **operationalApplicableTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

An applicable operational tolerance of this specified fault.

#### See

https://vocabulary.uncefact.org/operationalApplicableTolerance

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of fault.

#### See

https://vocabulary.uncefact.org/typeCode
