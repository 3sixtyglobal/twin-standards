# Interface: IUneceEquipment

Hardware or software typically marketed by a company other than the original manufacturer.

## See

https://vocabulary.uncefact.org/Equipment

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Equipment"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this OEM equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party for this OEM equipment.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### pollingCapabilityIndicator?

> `optional` **pollingCapabilityIndicator**: `boolean`

The indication of whether or not this OEM equipment has a polling capability.

#### See

https://vocabulary.uncefact.org/pollingCapabilityIndicator

***

### pollingRateMeasure?

> `optional` **pollingRateMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the polling rate for this OEM equipment.

#### See

https://vocabulary.uncefact.org/pollingRateMeasure

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of OEM equipment.

#### See

https://vocabulary.uncefact.org/typeCode
