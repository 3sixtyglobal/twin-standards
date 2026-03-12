# Interface: IUneceStoresItemInventory

A stores item, such as for onboard use during a journey.

## See

https://vocabulary.uncefact.org/StoresItemInventory

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"StoresItemInventory"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this stores inventory item.

#### See

https://vocabulary.uncefact.org/description

***

### onboardQuantity? {#onboardquantity}

> `optional` **onboardQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

An onboard quantity for this stores inventory item.

#### See

https://vocabulary.uncefact.org/onboardQuantity

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

A sequence number for this stores inventory item.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLogisticsLocation? {#specifiedlogisticslocation}

> `optional` **specifiedLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location specified for this stores inventory item.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying the type of stores inventory item.

#### See

https://vocabulary.uncefact.org/typeCode
