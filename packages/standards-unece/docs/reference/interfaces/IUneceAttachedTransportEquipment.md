# Interface: IUneceAttachedTransportEquipment

A piece of attached transport equipment, such as a chain or a tarpaulin.

## See

https://vocabulary.uncefact.org/AttachedTransportEquipment

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

> **type**: `"AttachedTransportEquipment"`

JSON-LD Type.

***

### characteristic?

> `optional` **characteristic**: `string`

The textual description of the characteristics, i.e. size and type, of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/characteristic

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### transportEquipmentCategoryCode?

> `optional` **transportEquipmentCategoryCode**: [`UneceTransportEquipmentCategoryCodeList`](../type-aliases/UneceTransportEquipmentCategoryCodeList.md)

A code specifying a category of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentCategoryCode

***

### transportEquipmentSizeTypeCharacteristicCode?

> `optional` **transportEquipmentSizeTypeCharacteristicCode**: [`UneceTransportEquipmentSizeTypeCodeList`](../type-aliases/UneceTransportEquipmentSizeTypeCodeList.md)

The code specifying the characteristics, i.e. size and type, of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of attached transport equipment.

#### See

https://vocabulary.uncefact.org/unitQuantity
