# Interface: IUneceTTParty

An individual, group, or body related to a Track and Trace (TT) process.

## See

https://vocabulary.uncefact.org/TTParty

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

> **type**: `"TTParty"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this TT party.

#### See

https://vocabulary.uncefact.org/identifier

***

### managedCharacteristic?

> `optional` **managedCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic managed by this TT party.

#### See

https://vocabulary.uncefact.org/managedCharacteristic

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this TT party.

#### See

https://vocabulary.uncefact.org/name

***

### partyTypeCode?

> `optional` **partyTypeCode**: [`UnecePartyTypeCodeList`](../type-aliases/UnecePartyTypeCodeList.md)[]

A code specifying the type of TT party.

#### See

https://vocabulary.uncefact.org/partyTypeCode

***

### residenceCountryId?

> `optional` **residenceCountryId**: `string`

The identifier for the country of residence for this TT party, such as the country in which a person lives or in which a
corporation has its place of incorporation.

#### See

https://vocabulary.uncefact.org/residenceCountryId

***

### specifiedTTAnimal?

> `optional` **specifiedTTAnimal**: [`IUneceTTAnimal`](IUneceTTAnimal.md)[]

A tracking animal specified for this TT party.

#### See

https://vocabulary.uncefact.org/specifiedTTAnimal

***

### specifiedTTLocation?

> `optional` **specifiedTTLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)[]

A location specified for this TT party.

#### See

https://vocabulary.uncefact.org/specifiedTTLocation

***

### tTPartyRoleCode?

> `optional` **tTPartyRoleCode**: `string`

A code specifying the role of this TT party.

#### See

https://vocabulary.uncefact.org/tTPartyRoleCode

***

### typeId?

> `optional` **typeId**: `string`

An identifier of the type for this TT party.

#### See

https://vocabulary.uncefact.org/typeId
