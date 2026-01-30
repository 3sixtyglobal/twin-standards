# Interface: IUneceInstalmentPlan

A plan for paying a total sum of money by several payments made over a period of time.

## See

https://vocabulary.uncefact.org/InstalmentPlan

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

> **type**: `"InstalmentPlan"`

JSON-LD Type.

***

### specifiedInstalmentPayment?

> `optional` **specifiedInstalmentPayment**: [`IUneceInstalmentPayment`](IUneceInstalmentPayment.md)[]

An instalment payment specified for this instalment plan.

#### See

https://vocabulary.uncefact.org/specifiedInstalmentPayment
