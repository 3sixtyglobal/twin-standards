# Interface: IUneceBranchFinancialInstitution

A sub-division of a bank, building society, credit union, stock brokerage, or similar business; established primarily to
provide financial services and financial transactions.

## See

https://vocabulary.uncefact.org/BranchFinancialInstitution

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"BranchFinancialInstitution"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this branch of a financial institution.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationAddress? {#locationaddress}

> `optional` **locationAddress**: [`IUneceFinancialInstitutionAddress`](IUneceFinancialInstitutionAddress.md)

The location address for this branch of a financial institution.

#### See

https://vocabulary.uncefact.org/locationAddress

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this branch of a financial institution.

#### See

https://vocabulary.uncefact.org/name
