# Interface: IUneceAppliedAllowanceCharge

The applied allowance or charge component of pricing.

## See

https://vocabulary.uncefact.org/AppliedAllowanceCharge

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

> **type**: `"AppliedAllowanceCharge"`

JSON-LD Type.

***

### actualAmount?

> `optional` **actualAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The actual monetary value of the applied allowance charge.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### appliedAllowanceChargeReasonCode?

> `optional` **appliedAllowanceChargeReasonCode**: `string`

The code specifying the reason for this applied allowance charge.

#### See

https://vocabulary.uncefact.org/appliedAllowanceChargeReasonCode

***

### basisAmount?

> `optional` **basisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value that is the basis on which the applied allowance charge is calculated.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### calculationPercent?

> `optional` **calculationPercent**: `string`

The percentage used to calculate the applied allowance charge.

#### See

https://vocabulary.uncefact.org/calculationPercent

***

### categoryAppliedTax?

> `optional` **categoryAppliedTax**: [`IUneceAppliedTax`](IUneceAppliedTax.md)[]

The applied tax category of this applied allowance charge.

#### See

https://vocabulary.uncefact.org/categoryAppliedTax

***

### chargeIndicator?

> `optional` **chargeIndicator**: `boolean`

The indication of whether or not the applied allowance charge is a charge.

#### See

https://vocabulary.uncefact.org/chargeIndicator

***

### description?

> `optional` **description**: `string`

The textual description of the applied allowance charge.

#### See

https://vocabulary.uncefact.org/description
