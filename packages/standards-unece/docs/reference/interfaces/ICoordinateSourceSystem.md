# Interface: ICoordinateSourceSystem

Properties defining a geographical coordinate source system used in different places around the world to identify
locations on the earth.

## See

https://vocabulary.uncefact.org/CoordinateSourceSystem

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

> **type**: `"CoordinateSourceSystem"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/identifier

***

### signalSourceAvailableQuantity?

> `optional` **signalSourceAvailableQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity of signal source available for this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/signalSourceAvailableQuantity

***

### sourceTypeCode?

> `optional` **sourceTypeCode**: `string`

The code specifying a type of source for this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/sourceTypeCode

***

### toleranceMeasure?

> `optional` **toleranceMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the tolerance of this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/toleranceMeasure

***

### usedSignalSourceQuantity?

> `optional` **usedSignalSourceQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity of the used signal source of this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/usedSignalSourceQuantity
