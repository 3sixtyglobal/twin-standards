# Interface: IAppliedTax

A total levy or payment for the support of a government that is required of persons, groups, or businesses within the
domain of that government.

## See

https://vocabulary.uncefact.org/AppliedTax

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

> **type**: `"AppliedTax"`

JSON-LD Type.

***

### appliedTaxTypeCode?

> `optional` **appliedTaxTypeCode**: `string`

The code specifying the applied tax type such as VAT.

#### See

https://vocabulary.uncefact.org/appliedTaxTypeCode

***

### basisAmount?

> `optional` **basisAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value used as the basis in calculating the applied tax.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### calculatedAmount?

> `optional` **calculatedAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value resulting from the calculation of the applied tax.

#### See

https://vocabulary.uncefact.org/calculatedAmount

***

### calculatedRate?

> `optional` **calculatedRate**: `string`

The rate used to calculate the applied tax.

#### See

https://vocabulary.uncefact.org/calculatedRate

***

### taxPointDate?

> `optional` **taxPointDate**: `string`

The date of the tax point when taxes, such as VAT, are to be applied.

#### See

https://vocabulary.uncefact.org/taxPointDate
