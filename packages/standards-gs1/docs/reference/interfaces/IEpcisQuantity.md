# Interface: IEpcisQuantity

EPCIS 2.0 QuantityElement defining class-level identifiers and amounts.

## See

https://ref.gs1.org/epcis/QuantityElement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### epcClass

> **epcClass**: `string`

A class-level identifier for the class to which the specified quantity of
objects belongs.

***

### quantity?

> `optional` **quantity**: `number`

(Optional) A number that specifies how many or how much of the specified
EPCClass is denoted by this QuantityElement.

***

### uom?

> `optional` **uom**: `string`

(Optional) Unit of measure by which the specified value(s) of the property
specified by type should be interpreted.
