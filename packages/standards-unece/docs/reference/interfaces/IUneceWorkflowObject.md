# Interface: IUneceWorkflowObject

An object used in the management of the status changes in a business process.

## See

https://vocabulary.uncefact.org/WorkflowObject

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"WorkflowObject"`

JSON-LD Type.

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this trade workflow object.

#### See

https://vocabulary.uncefact.org/identifier

***

### previousStatusCode? {#previousstatuscode}

> `optional` **previousStatusCode?**: [`UneceWorkflowStatusCodeList`](../type-aliases/UneceWorkflowStatusCodeList.md)

The code specifying the previous status of this trade workflow object.

#### See

https://vocabulary.uncefact.org/previousStatusCode

***

### workflowStatusCode {#workflowstatuscode}

> **workflowStatusCode**: [`UneceWorkflowStatusCodeList`](../type-aliases/UneceWorkflowStatusCodeList.md)

The code specifying the status of this trade workflow object.

#### See

https://vocabulary.uncefact.org/workflowStatusCode
