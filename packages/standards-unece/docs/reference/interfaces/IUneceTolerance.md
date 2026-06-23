# Interface: IUneceTolerance

Permissible limit or limits of variation that is fixed for the case in question but may be different in other cases.

## See

https://vocabulary.uncefact.org/Tolerance

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Tolerance"`

JSON-LD Type.

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this specified tolerance.

#### See

https://vocabulary.uncefact.org/information

***

### marginValueNumeric? {#marginvaluenumeric}

> `optional` **marginValueNumeric?**: `string`

The margin numeric value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/marginValueNumeric

***

### marginValuePercent? {#marginvaluepercent}

> `optional` **marginValuePercent?**: `string`

The margin percentage value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/marginValuePercent

***

### minusValuePercent? {#minusvaluepercent}

> `optional` **minusValuePercent?**: `string`

The minus percentage value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/minusValuePercent

***

### minusValueQuantity? {#minusvaluequantity}

> `optional` **minusValueQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minus quantity value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/minusValueQuantity

***

### surplusValuePercent? {#surplusvaluepercent}

> `optional` **surplusValuePercent?**: `string`

The surplus percentage value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/surplusValuePercent

***

### surplusValueQuantity? {#surplusvaluequantity}

> `optional` **surplusValueQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The surplus quantity value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/surplusValueQuantity
