# Interface: IUneceCancellationStatus

Information relevant to a condition of a cancellation.

## See

https://vocabulary.uncefact.org/CancellationStatus

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CancellationStatus"`

JSON-LD Type.

***

### cancellationDocumentStatusConditionCode? {#cancellationdocumentstatusconditioncode}

> `optional` **cancellationDocumentStatusConditionCode?**: `string`

The code specifying the condition of this cancellation status.

#### See

https://vocabulary.uncefact.org/cancellationDocumentStatusConditionCode

***

### cancellationStatusReasonCode? {#cancellationstatusreasoncode}

> `optional` **cancellationStatusReasonCode?**: `string`

The code specifying the reason for this cancellation status.

#### See

https://vocabulary.uncefact.org/cancellationStatusReasonCode

***

### reason? {#reason}

> `optional` **reason?**: `string`

A reason, expressed as text, for this cancellation status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonInformation? {#reasoninformation}

> `optional` **reasonInformation?**: `string`

Information, expressed as text, related to the reason for this cancellation status.

#### See

https://vocabulary.uncefact.org/reasonInformation
