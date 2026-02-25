# Interface: IUneceStoresItemInventory

A stores item, such as for onboard use during a journey.

## See

https://vocabulary.uncefact.org/StoresItemInventory

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"StoresItemInventory"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this stores inventory item.

#### See

https://vocabulary.uncefact.org/description

***

### onboardQuantity?

> `optional` **onboardQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

An onboard quantity for this stores inventory item.

#### See

https://vocabulary.uncefact.org/onboardQuantity

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for this stores inventory item.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location specified for this stores inventory item.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of stores inventory item.

#### See

https://vocabulary.uncefact.org/typeCode
