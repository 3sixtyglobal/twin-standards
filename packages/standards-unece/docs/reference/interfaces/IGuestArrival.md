# Interface: IGuestArrival

The act of coming to or reaching a place by a specified guest.

## See

https://vocabulary.uncefact.org/GuestArrival

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

> **type**: `"GuestArrival"`

JSON-LD Type.

***

### carrierId?

> `optional` **carrierId**: `string`

The identifier of the carrier for this specified guest arrival.

#### See

https://vocabulary.uncefact.org/carrierId

***

### carrierName?

> `optional` **carrierName**: `string`

A carrier's name, expressed as text, related to this specified guest arrival.

#### See

https://vocabulary.uncefact.org/carrierName

***

### expectedDateTime?

> `optional` **expectedDateTime**: `string`

The date, time, date time, or other date time value when this specified guest arrival is expected.

#### See

https://vocabulary.uncefact.org/expectedDateTime

***

### transportModeCode?

> `optional` **transportModeCode**: [`TransportModeCodeList`](../type-aliases/TransportModeCodeList.md)[]

The code specifying the transport mode of this specified guest arrival.

#### See

https://vocabulary.uncefact.org/transportModeCode
