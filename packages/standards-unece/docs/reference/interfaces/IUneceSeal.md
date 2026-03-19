# Interface: IUneceSeal

A device used to secure an object and protect it from unauthorized entry or tampering during transport or other
logistics operations.

## See

https://vocabulary.uncefact.org/Seal

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Seal"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier for this logistics seal.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuingParty? {#issuingparty}

> `optional` **issuingParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party issuing this logistics seal.

#### See

https://vocabulary.uncefact.org/issuingParty

***

### logisticsSealTypeCode? {#logisticssealtypecode}

> `optional` **logisticsSealTypeCode?**: `string`

The code specifying the type of logistics seal.

#### See

https://vocabulary.uncefact.org/logisticsSealTypeCode

***

### logisticsSealingPartyRoleCode? {#logisticssealingpartyrolecode}

> `optional` **logisticsSealingPartyRoleCode?**: [`UneceSealingPartyRoleCodeList`](../type-aliases/UneceSealingPartyRoleCodeList.md)

The code specifying the role of the party responsible for the sealing of this logistics seal.

#### See

https://vocabulary.uncefact.org/logisticsSealingPartyRoleCode

***

### maximumId? {#maximumid}

> `optional` **maximumId?**: `string` \| `IJsonLdValueObject`

The maximum unique identifier used for these logistics seals.

#### See

https://vocabulary.uncefact.org/maximumId

***

### sealConditionCode? {#sealconditioncode}

> `optional` **sealConditionCode?**: [`UneceSealConditionCodeList`](../type-aliases/UneceSealConditionCodeList.md)[]

A code specifying a condition of this logistics seal.

#### See

https://vocabulary.uncefact.org/sealConditionCode

***

### sealingPartyRole? {#sealingpartyrole}

> `optional` **sealingPartyRole?**: `string`

The role, expressed as text, of the party responsible for the sealing of this logistics seal.

#### See

https://vocabulary.uncefact.org/sealingPartyRole
