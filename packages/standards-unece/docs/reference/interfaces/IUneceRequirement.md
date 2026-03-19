# Interface: IUneceRequirement

Common conditions contained in a contract or agreement applicable between trading partners.

## See

https://vocabulary.uncefact.org/Requirement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Requirement"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified requirement.

#### See

https://vocabulary.uncefact.org/description

***

### rule? {#rule}

> `optional` **rule?**: `string`

A rule, expressed as text, for this specified requirement.

#### See

https://vocabulary.uncefact.org/rule

***

### specifiedPaymentTradeSettlement? {#specifiedpaymenttradesettlement}

> `optional` **specifiedPaymentTradeSettlement?**: [`IUnecePaymentTradeSettlement`](IUnecePaymentTradeSettlement.md)

The payment trade settlement for this specified requirement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement

***

### specifyingParty? {#specifyingparty}

> `optional` **specifyingParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party specifying this specified requirement.

#### See

https://vocabulary.uncefact.org/specifyingParty

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of specified requirement.

#### See

https://vocabulary.uncefact.org/typeCode
