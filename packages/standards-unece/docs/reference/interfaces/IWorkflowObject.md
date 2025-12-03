# Interface: IWorkflowObject

An object used in the management of the status changes in a business process.

## See

https://vocabulary.uncefact.org/WorkflowObject

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"WorkflowObject"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this trade workflow object.

#### See

https://vocabulary.uncefact.org/identifier

***

### previousStatusCode?

> `optional` **previousStatusCode**: [`WorkflowStatusCodeList`](../type-aliases/WorkflowStatusCodeList.md)[]

The code specifying the previous status of this trade workflow object.

#### See

https://vocabulary.uncefact.org/previousStatusCode

***

### workflowStatusCode?

> `optional` **workflowStatusCode**: [`WorkflowStatusCodeList`](../type-aliases/WorkflowStatusCodeList.md)[]

The code specifying the status of this trade workflow object.

#### See

https://vocabulary.uncefact.org/workflowStatusCode
