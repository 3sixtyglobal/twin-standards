# Interface: IUneceDirectPosition

A specified physical location described within a coordinate reference system.

## See

https://vocabulary.uncefact.org/DirectPosition

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DirectPosition"`

JSON-LD Type.

***

### axisLabelList? {#axislabellist}

> `optional` **axisLabelList?**: `string`

An ordered list of axis labels, expressed as text, for this specified direct position.

#### See

https://vocabulary.uncefact.org/axisLabelList

***

### coordinateReferenceDimension? {#coordinatereferencedimension}

> `optional` **coordinateReferenceDimension?**: `string`

A coordinate reference dimension, expressed as text, for this specified direct position.

#### See

https://vocabulary.uncefact.org/coordinateReferenceDimension

***

### countNumeric? {#countnumeric}

> `optional` **countNumeric?**: `string`

A count for this specified direct position.

#### See

https://vocabulary.uncefact.org/countNumeric

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of the reference for this specified direct position.

#### See

https://vocabulary.uncefact.org/name

***

### uOMLabelList? {#uomlabellist}

> `optional` **uOMLabelList?**: `string`

An ordered list of Unit Of Measure (UOM) labels, expressed as text, for this specified direct position.

#### See

https://vocabulary.uncefact.org/uOMLabelList
