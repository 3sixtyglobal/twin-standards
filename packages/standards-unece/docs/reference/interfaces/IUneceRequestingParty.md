# Interface: IUneceRequestingParty

An individual, a group, or a body having a role as a requestor.

## See

https://vocabulary.uncefact.org/RequestingParty

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"RequestingParty"`

JSON-LD Type.

***

### accessRightsTypeAccessRightsCode? {#accessrightstypeaccessrightscode}

> `optional` **accessRightsTypeAccessRightsCode**: [`UneceAccessRightsTypeCodeList`](../type-aliases/UneceAccessRightsTypeCodeList.md)

The code specifying the access rights, such as unlimited, restricted, prohibited, for this requesting party.

#### See

https://vocabulary.uncefact.org/accessRightsTypeAccessRightsCode

***

### bEIId? {#beiid}

> `optional` **bEIId**: `string` \| `IJsonLdValueObject`

The unique Business Entity Identifier (BEI) as defined by ISO 9362 (Banking telecommunication messages, Bank Identifier
Codes) for this requesting party.

#### See

https://vocabulary.uncefact.org/bEIId

***

### description? {#description}

> `optional` **description**: `string`

The textual description of this requesting party.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this requesting party.

#### See

https://vocabulary.uncefact.org/identifier

***

### languageCode? {#languagecode}

> `optional` **languageCode**: `string`

A code specifying a language for this requesting party.

#### See

https://vocabulary.uncefact.org/languageCode

***

### lineOfCreditSpecifiedFinancialAccount? {#lineofcreditspecifiedfinancialaccount}

> `optional` **lineOfCreditSpecifiedFinancialAccount**: [`IUneceFinancingFinancialAccount`](IUneceFinancingFinancialAccount.md)

The financing financial account, used for managing the line of credit, specified for this requesting party.

#### See

https://vocabulary.uncefact.org/lineOfCreditSpecifiedFinancialAccount

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this requesting party.

#### See

https://vocabulary.uncefact.org/name

***

### partyTypeCode? {#partytypecode}

> `optional` **partyTypeCode**: [`UnecePartyTypeCodeList`](../type-aliases/UnecePartyTypeCodeList.md)

The code specifying the type of requesting party.

#### See

https://vocabulary.uncefact.org/partyTypeCode

***

### specifiedCreditorFinancialAccount? {#specifiedcreditorfinancialaccount}

> `optional` **specifiedCreditorFinancialAccount**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)

The creditor financial account, used for crediting, specified for this requesting party.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialAccount

***

### specifiedProprietaryIdentity? {#specifiedproprietaryidentity}

> `optional` **specifiedProprietaryIdentity**: [`IUneceProprietaryIdentity`](IUneceProprietaryIdentity.md)[]

A proprietary identity specified for this requesting party.

#### See

https://vocabulary.uncefact.org/specifiedProprietaryIdentity
