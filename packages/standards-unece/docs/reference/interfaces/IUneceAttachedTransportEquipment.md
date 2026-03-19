# Interface: IUneceAttachedTransportEquipment

A piece of attached transport equipment, such as a chain or a tarpaulin.

## See

https://vocabulary.uncefact.org/AttachedTransportEquipment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AttachedTransportEquipment"`

JSON-LD Type.

***

### characteristic? {#characteristic}

> `optional` **characteristic?**: `string`

The textual description of the characteristics, i.e. size and type, of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/characteristic

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### transportEquipmentCategoryCode? {#transportequipmentcategorycode}

> `optional` **transportEquipmentCategoryCode?**: [`UneceTransportEquipmentCategoryCodeList`](../type-aliases/UneceTransportEquipmentCategoryCodeList.md)[]

A code specifying a category of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentCategoryCode

***

### transportEquipmentSizeTypeCharacteristicCode? {#transportequipmentsizetypecharacteristiccode}

> `optional` **transportEquipmentSizeTypeCharacteristicCode?**: [`UneceTransportEquipmentSizeTypeCodeList`](../type-aliases/UneceTransportEquipmentSizeTypeCodeList.md)

The code specifying the characteristics, i.e. size and type, of this piece of attached transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of attached transport equipment.

#### See

https://vocabulary.uncefact.org/unitQuantity
