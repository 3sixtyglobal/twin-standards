# Interface: IUneceValidationStatus

Information relevant to a condition of a validation.

## See

https://vocabulary.uncefact.org/ValidationStatus

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

> **type**: `"ValidationStatus"`

JSON-LD Type.

***

### additionalReason?

> `optional` **additionalReason**: `string`

Information, expressed as text, related to the reason for this validation status.

#### See

https://vocabulary.uncefact.org/additionalReason

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this validation status.

#### See

https://vocabulary.uncefact.org/reason

***

### validationDocumentStatusConditionCode?

> `optional` **validationDocumentStatusConditionCode**: `string`

The code specifying the condition of this validation status.

#### See

https://vocabulary.uncefact.org/validationDocumentStatusConditionCode

***

### validationStatusReasonCode?

> `optional` **validationStatusReasonCode**: `string`

The code specifying the reason for this validation status.

#### See

https://vocabulary.uncefact.org/validationStatusReasonCode
