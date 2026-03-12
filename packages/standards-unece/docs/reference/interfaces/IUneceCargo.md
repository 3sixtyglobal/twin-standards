# Interface: IUneceCargo

Information about goods being transported identifying their nature for customs, statistical or transport purposes.

## See

https://vocabulary.uncefact.org/Cargo

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Cargo"`

JSON-LD Type.

***

### cargoCategoryTypeCode? {#cargocategorytypecode}

> `optional` **cargoCategoryTypeCode**: [`UneceCargoCategoryCodeList`](../type-aliases/UneceCargoCategoryCodeList.md)

The code, such as UNECE Recommendation 21 single digit codes, specifying the type of transported cargo.

#### See

https://vocabulary.uncefact.org/cargoCategoryTypeCode

***

### cargoCommodityCategoryStatisticalClassificationCode? {#cargocommoditycategorystatisticalclassificationcode}

> `optional` **cargoCommodityCategoryStatisticalClassificationCode**: `"unece:CargoCommodityCategoryCodeList#ZZZ"`

The code specifying a statistical classification for this transport cargo.

#### See

https://vocabulary.uncefact.org/cargoCommodityCategoryStatisticalClassificationCode

***

### cargoOperationalCategoryCode? {#cargooperationalcategorycode}

> `optional` **cargoOperationalCategoryCode**: [`UneceCargoOperationalCategoryCodeList`](../type-aliases/UneceCargoOperationalCategoryCodeList.md)

The code specifying the operational category for this transport cargo, such as obnoxious or military.

#### See

https://vocabulary.uncefact.org/cargoOperationalCategoryCode

***

### identification? {#identification}

> `optional` **identification**: `string`

Identification, expressed as text, of this transport cargo that is sufficient to identify it for customs, statistical or
transport purposes.

#### See

https://vocabulary.uncefact.org/identification
