# Interface: IUneceValidationStatus

Information relevant to a condition of a validation.

## See

https://vocabulary.uncefact.org/ValidationStatus

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ValidationStatus"`

JSON-LD Type.

***

### additionalReason? {#additionalreason}

> `optional` **additionalReason**: `string`

Information, expressed as text, related to the reason for this validation status.

#### See

https://vocabulary.uncefact.org/additionalReason

***

### reason? {#reason}

> `optional` **reason**: `string`

A reason, expressed as text, for this validation status.

#### See

https://vocabulary.uncefact.org/reason

***

### validationDocumentStatusConditionCode? {#validationdocumentstatusconditioncode}

> `optional` **validationDocumentStatusConditionCode**: `string`

The code specifying the condition of this validation status.

#### See

https://vocabulary.uncefact.org/validationDocumentStatusConditionCode

***

### validationStatusReasonCode? {#validationstatusreasoncode}

> `optional` **validationStatusReasonCode**: `string`

The code specifying the reason for this validation status.

#### See

https://vocabulary.uncefact.org/validationStatusReasonCode
