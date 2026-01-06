# Interface: IUneceConvoy

A number of means of transport following each other with a common logistics purpose.

## See

https://vocabulary.uncefact.org/Convoy

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

> **type**: `"Convoy"`

JSON-LD Type.

***

### maximumWidthMeasure?

> `optional` **maximumWidthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

The maximum width measure for this logistics convoy.

#### See

https://vocabulary.uncefact.org/maximumWidthMeasure

***

### overallLengthMeasure?

> `optional` **overallLengthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

The overall length measure of this logistics convoy.

#### See

https://vocabulary.uncefact.org/overallLengthMeasure

***

### powerActiveTransportMeans?

> `optional` **powerActiveTransportMeans**: [`IUneceLogisticsTransportMeans`](IUneceLogisticsTransportMeans.md)[]

A means of transport actively powering this logistics convoy.

#### See

https://vocabulary.uncefact.org/powerActiveTransportMeans

***

### powerInactiveTransportMeans?

> `optional` **powerInactiveTransportMeans**: [`IUneceLogisticsTransportMeans`](IUneceLogisticsTransportMeans.md)[]

A means of transport not actively powering this logistics convoy.

#### See

https://vocabulary.uncefact.org/powerInactiveTransportMeans

***

### transportMeansQuantity?

> `optional` **transportMeansQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of means of transport in this logistics convoy.

#### See

https://vocabulary.uncefact.org/transportMeansQuantity
