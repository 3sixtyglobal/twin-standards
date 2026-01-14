# Interface: IEpcisSensorElement

EPCIS 2.0 SensorElement grouping metadata and one or more SensorReport
entries.

## See

https://ref.gs1.org/epcis/SensorElement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### sensorMetadata?

> `optional` **sensorMetadata**: [`IEpcisSensorMetadata`](IEpcisSensorMetadata.md)

(Optional) Element containing metadata attributes applicable to all
sensorReport entries within this sensorElement.

***

### sensorReport

> **sensorReport**: [`IEpcisSensorReport`](IEpcisSensorReport.md)[]

An element containing one or several attributes that pertain to a specific
sensor observation.
