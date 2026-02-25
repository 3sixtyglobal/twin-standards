# Interface: IUneceRegisteredTax

A registered tax or duty system pertaining to an authority.

## See

https://vocabulary.uncefact.org/RegisteredTax

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"RegisteredTax"`

JSON-LD Type.

***

### currencyCode?

> `optional` **currencyCode**: `string`

The code specifying the currency for this registered tax.

#### See

https://vocabulary.uncefact.org/currencyCode

***

### customsDutyIndicator?

> `optional` **customsDutyIndicator**: `boolean`

The indication of whether or not this registered tax is a customs duty.

#### See

https://vocabulary.uncefact.org/customsDutyIndicator

***

### description?

> `optional` **description**: `string`

A textual description of this registered tax.

#### See

https://vocabulary.uncefact.org/description

***

### exemptionReason?

> `optional` **exemptionReason**: `string`

A reason, expressed as text, for exemption from this registered tax.

#### See

https://vocabulary.uncefact.org/exemptionReason

***

### exemptionReasonCode?

> `optional` **exemptionReasonCode**: `string`

The code specifying the exemption reason for this registered tax.

#### See

https://vocabulary.uncefact.org/exemptionReasonCode

***

### jurisdiction?

> `optional` **jurisdiction**: `string`

A jurisdiction, expressed as text, for this registered tax.

#### See

https://vocabulary.uncefact.org/jurisdiction

***

### registeredTaxTypeCode?

> `optional` **registeredTaxTypeCode**: `string`

The code specifying the type of registered tax.

#### See

https://vocabulary.uncefact.org/registeredTaxTypeCode
