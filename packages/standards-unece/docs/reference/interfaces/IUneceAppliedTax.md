# Interface: IUneceAppliedTax

A total levy or payment for the support of a government that is required of persons, groups, or businesses within the
domain of that government.

## See

https://vocabulary.uncefact.org/AppliedTax

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AppliedTax"`

JSON-LD Type.

***

### appliedTaxTypeCode? {#appliedtaxtypecode}

> `optional` **appliedTaxTypeCode?**: `string`

The code specifying the applied tax type such as VAT.

#### See

https://vocabulary.uncefact.org/appliedTaxTypeCode

***

### basisAmount? {#basisamount}

> `optional` **basisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value used as the basis in calculating the applied tax.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### calculatedAmount? {#calculatedamount}

> `optional` **calculatedAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value resulting from the calculation of the applied tax.

#### See

https://vocabulary.uncefact.org/calculatedAmount

***

### calculatedRate? {#calculatedrate}

> `optional` **calculatedRate?**: `string`

The rate used to calculate the applied tax.

#### See

https://vocabulary.uncefact.org/calculatedRate

***

### taxPointDate? {#taxpointdate}

> `optional` **taxPointDate?**: `string`

The date of the tax point when taxes, such as VAT, are to be applied.

#### See

https://vocabulary.uncefact.org/taxPointDate
