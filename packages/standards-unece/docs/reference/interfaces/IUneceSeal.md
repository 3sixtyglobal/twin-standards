# Interface: IUneceSeal

A device used to secure an object and protect it from unauthorized entry or tampering during transport or other
logistics operations.

## See

https://vocabulary.uncefact.org/Seal

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Seal"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this logistics seal.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuingParty?

> `optional` **issuingParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party issuing this logistics seal.

#### See

https://vocabulary.uncefact.org/issuingParty

***

### logisticsSealTypeCode?

> `optional` **logisticsSealTypeCode**: `string`

The code specifying the type of logistics seal.

#### See

https://vocabulary.uncefact.org/logisticsSealTypeCode

***

### logisticsSealingPartyRoleCode?

> `optional` **logisticsSealingPartyRoleCode**: [`UneceSealingPartyRoleCodeList`](../type-aliases/UneceSealingPartyRoleCodeList.md)

The code specifying the role of the party responsible for the sealing of this logistics seal.

#### See

https://vocabulary.uncefact.org/logisticsSealingPartyRoleCode

***

### maximumId?

> `optional` **maximumId**: `string`

The maximum unique identifier used for these logistics seals.

#### See

https://vocabulary.uncefact.org/maximumId

***

### sealConditionCode?

> `optional` **sealConditionCode**: [`UneceSealConditionCodeList`](../type-aliases/UneceSealConditionCodeList.md)[]

A code specifying a condition of this logistics seal.

#### See

https://vocabulary.uncefact.org/sealConditionCode

***

### sealingPartyRole?

> `optional` **sealingPartyRole**: `string`

The role, expressed as text, of the party responsible for the sealing of this logistics seal.

#### See

https://vocabulary.uncefact.org/sealingPartyRole
