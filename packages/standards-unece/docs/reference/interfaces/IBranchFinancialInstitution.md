# Interface: IBranchFinancialInstitution

A sub-division of a bank, building society, credit union, stock brokerage, or similar business; established primarily to
provide financial services and financial transactions.

## See

https://vocabulary.uncefact.org/BranchFinancialInstitution

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

> **type**: `"BranchFinancialInstitution"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this branch of a financial institution.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationAddress?

> `optional` **locationAddress**: [`IFinancialInstitutionAddress`](IFinancialInstitutionAddress.md)

The location address for this branch of a financial institution.

#### See

https://vocabulary.uncefact.org/locationAddress

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this branch of a financial institution.

#### See

https://vocabulary.uncefact.org/name
