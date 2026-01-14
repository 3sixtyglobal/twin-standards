# Interface: IEpcisDestination

EPCIS 2.0 Destination element identifying the terminating endpoint of a
business transfer.

## See

https://ref.gs1.org/epcis/SourceOrDestination

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### type

> **type**: `string`

Identifier indicating the role of SourceOrDestination in a transfer (Owning
Party, Possessing Party, or Location).

Use [EpcisSourceDestTypes](../variables/EpcisSourceDestTypes.md) for known values.

***

### destination

> **destination**: `string`

Identifier that denotes the specific source or destination of a business
transfer; must correlate with the selected type.
