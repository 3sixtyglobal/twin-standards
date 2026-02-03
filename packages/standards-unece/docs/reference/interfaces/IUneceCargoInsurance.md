# Interface: IUneceCargoInsurance

Insurance coverage for cargo during transport movements.

## See

https://vocabulary.uncefact.org/CargoInsurance

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

> **type**: `"CargoInsurance"`

JSON-LD Type.

***

### contractGeneralConditions?

> `optional` **contractGeneralConditions**: `string`

The contract general conditions, expressed as text, for this transport cargo insurance.

#### See

https://vocabulary.uncefact.org/contractGeneralConditions

***

### coverageCode?

> `optional` **coverageCode**: `string`

The code specifying the coverage of this transport cargo insurance.

#### See

https://vocabulary.uncefact.org/coverageCode

***

### coverageDescription?

> `optional` **coverageDescription**: `string`

The textual description of the coverage of this transport cargo insurance.

#### See

https://vocabulary.uncefact.org/coverageDescription

***

### coverageParty?

> `optional` **coverageParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The coverage party for this transport cargo insurance.

#### See

https://vocabulary.uncefact.org/coverageParty
