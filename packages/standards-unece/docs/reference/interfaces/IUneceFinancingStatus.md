# Interface: IUneceFinancingStatus

Information relevant to a condition of financing.

## See

https://vocabulary.uncefact.org/FinancingStatus

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancingStatus"`

JSON-LD Type.

***

### financingStatusConditionCode? {#financingstatusconditioncode}

> `optional` **financingStatusConditionCode?**: `string`

The code specifying the condition of this financing status.

#### See

https://vocabulary.uncefact.org/financingStatusConditionCode

***

### financingStatusReasonCode? {#financingstatusreasoncode}

> `optional` **financingStatusReasonCode?**: `string`

The code specifying the reason for this financing status.

#### See

https://vocabulary.uncefact.org/financingStatusReasonCode

***

### reason? {#reason}

> `optional` **reason?**: `string`

A reason, expressed as text, for this financing status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonInformation? {#reasoninformation}

> `optional` **reasonInformation?**: `string`

Information, expressed as text, related to the reason for this financing status.

#### See

https://vocabulary.uncefact.org/reasonInformation
