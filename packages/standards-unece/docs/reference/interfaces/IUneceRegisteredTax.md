# Interface: IUneceRegisteredTax

A registered tax or duty system pertaining to an authority.

## See

https://vocabulary.uncefact.org/RegisteredTax

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"RegisteredTax"`

JSON-LD Type.

***

### currencyCode? {#currencycode}

> `optional` **currencyCode?**: `string`

The code specifying the currency for this registered tax.

#### See

https://vocabulary.uncefact.org/currencyCode

***

### customsDutyIndicator? {#customsdutyindicator}

> `optional` **customsDutyIndicator?**: `boolean`

The indication of whether or not this registered tax is a customs duty.

#### See

https://vocabulary.uncefact.org/customsDutyIndicator

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this registered tax.

#### See

https://vocabulary.uncefact.org/description

***

### exemptionReason? {#exemptionreason}

> `optional` **exemptionReason?**: `string`

A reason, expressed as text, for exemption from this registered tax.

#### See

https://vocabulary.uncefact.org/exemptionReason

***

### exemptionReasonCode? {#exemptionreasoncode}

> `optional` **exemptionReasonCode?**: `string`

The code specifying the exemption reason for this registered tax.

#### See

https://vocabulary.uncefact.org/exemptionReasonCode

***

### jurisdiction? {#jurisdiction}

> `optional` **jurisdiction?**: `string`

A jurisdiction, expressed as text, for this registered tax.

#### See

https://vocabulary.uncefact.org/jurisdiction

***

### registeredTaxTypeCode? {#registeredtaxtypecode}

> `optional` **registeredTaxTypeCode?**: `string`

The code specifying the type of registered tax.

#### See

https://vocabulary.uncefact.org/registeredTaxTypeCode
