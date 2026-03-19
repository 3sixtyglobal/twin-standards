# Interface: IUnecePaymentFinancialInstitution

An institution that provides financial services and financial transactions for payment.

## See

https://vocabulary.uncefact.org/PaymentFinancialInstitution

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentFinancialInstitution"`

JSON-LD Type.

***

### bEIId? {#beiid}

> `optional` **bEIId?**: `string` \| `IJsonLdValueObject`

The unique Business Entity Identifier (BEI) as defined in ISO 9362 for this payment financial institution.

#### See

https://vocabulary.uncefact.org/bEIId

***

### bICId? {#bicid}

> `optional` **bICId?**: `string` \| `IJsonLdValueObject`

The unique Bank Identification Code (BIC) as defined in ISO 9362 for this payment financial institution.

#### See

https://vocabulary.uncefact.org/bICId

***

### branchName? {#branchname}

> `optional` **branchName?**: `string`

A branch name, expressed as text, for this payment financial institution.

#### See

https://vocabulary.uncefact.org/branchName

***

### branchNameId? {#branchnameid}

> `optional` **branchNameId?**: `string` \| `IJsonLdValueObject`

The identifier of the branch name for this payment financial institution.

#### See

https://vocabulary.uncefact.org/branchNameId

***

### gLNId? {#glnid}

> `optional` **gLNId?**: `string` \| `IJsonLdValueObject`

The unique Global Location Number (GLN) as defined by GS1 for this payment financial institution.

#### See

https://vocabulary.uncefact.org/gLNId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this payment financial institution.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this payment financial institution.

#### See

https://vocabulary.uncefact.org/name

***

### nameId? {#nameid}

> `optional` **nameId?**: `string` \| `IJsonLdValueObject`

The identifier of the name for this payment financial institution.

#### See

https://vocabulary.uncefact.org/nameId

***

### roleCode? {#rolecode}

> `optional` **roleCode?**: `string`

The code specifying the role for this payment financial institution, such as intermediary or settlement agent.

#### See

https://vocabulary.uncefact.org/roleCode

***

### specifiedCommunication? {#specifiedcommunication}

> `optional` **specifiedCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

A communication specified for this payment financial institution.

#### See

https://vocabulary.uncefact.org/specifiedCommunication

***

### specifiedPaymentFinancialAccount? {#specifiedpaymentfinancialaccount}

> `optional` **specifiedPaymentFinancialAccount?**: [`IUnecePaymentFinancialAccount`](IUnecePaymentFinancialAccount.md)[]

A payment financial account specified for this payment financial institution.

#### See

https://vocabulary.uncefact.org/specifiedPaymentFinancialAccount

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of payment financial institution.

#### See

https://vocabulary.uncefact.org/typeCode
