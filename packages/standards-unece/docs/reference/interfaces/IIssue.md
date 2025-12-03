# Interface: IIssue

A targeted topic for debate or resolution.

## See

https://vocabulary.uncefact.org/Issue

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

> **type**: `"Issue"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this target issue.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumSpecifiedCharacteristic?

> `optional` **maximumSpecifiedCharacteristic**: [`IMetricCharacteristic`](IMetricCharacteristic.md)[]

The maximum metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/maximumSpecifiedCharacteristic

***

### minimumSpecifiedCharacteristic?

> `optional` **minimumSpecifiedCharacteristic**: [`IMetricCharacteristic`](IMetricCharacteristic.md)[]

The minimum metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/minimumSpecifiedCharacteristic

***

### specifiedMetricCharacteristic?

> `optional` **specifiedMetricCharacteristic**: [`IMetricCharacteristic`](IMetricCharacteristic.md)[]

The metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/specifiedMetricCharacteristic

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of target issue, such as a value or a range.

#### See

https://vocabulary.uncefact.org/typeCode
