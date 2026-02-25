# Interface: IUneceCancellationStatus

Information relevant to a condition of a cancellation.

## See

https://vocabulary.uncefact.org/CancellationStatus

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"CancellationStatus"`

JSON-LD Type.

***

### cancellationDocumentStatusConditionCode?

> `optional` **cancellationDocumentStatusConditionCode**: `string`

The code specifying the condition of this cancellation status.

#### See

https://vocabulary.uncefact.org/cancellationDocumentStatusConditionCode

***

### cancellationStatusReasonCode?

> `optional` **cancellationStatusReasonCode**: `string`

The code specifying the reason for this cancellation status.

#### See

https://vocabulary.uncefact.org/cancellationStatusReasonCode

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this cancellation status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonInformation?

> `optional` **reasonInformation**: `string`

Information, expressed as text, related to the reason for this cancellation status.

#### See

https://vocabulary.uncefact.org/reasonInformation
