# Interface: IUneceTolerance

Permissible limit or limits of variation that is fixed for the case in question but may be different in other cases.

## See

https://vocabulary.uncefact.org/Tolerance

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Tolerance"`

JSON-LD Type.

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this specified tolerance.

#### See

https://vocabulary.uncefact.org/information

***

### marginValueNumeric?

> `optional` **marginValueNumeric**: `string`

The margin numeric value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/marginValueNumeric

***

### marginValuePercent?

> `optional` **marginValuePercent**: `string`

The margin percentage value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/marginValuePercent

***

### minusValuePercent?

> `optional` **minusValuePercent**: `string`

The minus percentage value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/minusValuePercent

***

### minusValueQuantity?

> `optional` **minusValueQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The minus quantity value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/minusValueQuantity

***

### surplusValuePercent?

> `optional` **surplusValuePercent**: `string`

The surplus percentage value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/surplusValuePercent

***

### surplusValueQuantity?

> `optional` **surplusValueQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The surplus quantity value of this specified tolerance.

#### See

https://vocabulary.uncefact.org/surplusValueQuantity
