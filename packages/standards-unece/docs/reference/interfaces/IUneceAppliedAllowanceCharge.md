# Interface: IUneceAppliedAllowanceCharge

The applied allowance or charge component of pricing.

## See

https://vocabulary.uncefact.org/AppliedAllowanceCharge

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AppliedAllowanceCharge"`

JSON-LD Type.

***

### actualAmount? {#actualamount}

> `optional` **actualAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The actual monetary value of the applied allowance charge.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### appliedAllowanceChargeReasonCode? {#appliedallowancechargereasoncode}

> `optional` **appliedAllowanceChargeReasonCode?**: `string`

The code specifying the reason for this applied allowance charge.

#### See

https://vocabulary.uncefact.org/appliedAllowanceChargeReasonCode

***

### basisAmount? {#basisamount}

> `optional` **basisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value that is the basis on which the applied allowance charge is calculated.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### calculationPercent? {#calculationpercent}

> `optional` **calculationPercent?**: `string`

The percentage used to calculate the applied allowance charge.

#### See

https://vocabulary.uncefact.org/calculationPercent

***

### categoryAppliedTax? {#categoryappliedtax}

> `optional` **categoryAppliedTax?**: [`IUneceAppliedTax`](IUneceAppliedTax.md)

The applied tax category of this applied allowance charge.

#### See

https://vocabulary.uncefact.org/categoryAppliedTax

***

### chargeIndicator {#chargeindicator}

> **chargeIndicator**: `boolean`

The indication of whether or not the applied allowance charge is a charge.

#### See

https://vocabulary.uncefact.org/chargeIndicator

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of the applied allowance charge.

#### See

https://vocabulary.uncefact.org/description
