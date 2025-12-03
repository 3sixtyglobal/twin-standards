# Interface: IAnimalHoldingEvent

The keeping of an animal in a particular location.

## See

https://vocabulary.uncefact.org/AnimalHoldingEvent

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

> **type**: `"AnimalHoldingEvent"`

JSON-LD Type.

***

### locationId?

> `optional` **locationId**: `string`

The identifier of the location for this animal holding event.

#### See

https://vocabulary.uncefact.org/locationId

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of the occurrence of this animal holding event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### relatedTTLocation?

> `optional` **relatedTTLocation**: [`ITTLocation`](ITTLocation.md)[]

A Track and Trace (TT) location related to this animal holding event.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### relatedTechnicalCharacteristic?

> `optional` **relatedTechnicalCharacteristic**: [`ITechnicalCharacteristic`](ITechnicalCharacteristic.md)[]

A technical characteristic related to this animal holding event.

#### See

https://vocabulary.uncefact.org/relatedTechnicalCharacteristic

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of animal holding event.

#### See

https://vocabulary.uncefact.org/typeCode
