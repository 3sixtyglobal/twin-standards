# Interface: IUneceRegulatedGoods

Articles of trade or commerce which are subject to, or controlled by a rule, regulation, or law at a particular point
during their logistics lifecycle.

## See

https://vocabulary.uncefact.org/RegulatedGoods

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"RegulatedGoods"`

JSON-LD Type.

***

### applicableDangerousGoods? {#applicabledangerousgoods}

> `optional` **applicableDangerousGoods**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Transport dangerous goods information applicable to these logistics regulated goods.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods
