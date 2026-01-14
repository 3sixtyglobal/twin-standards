# Interface: IEpcisErrorDeclaration

EPCIS 2.0 ErrorDeclaration describing corrections to previously captured
events.

## See

https://ref.gs1.org/epcis/ErrorDeclaration

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### declarationTime

> **declarationTime**: `string`

The date and time at which the declaration of error is made.

***

### reason?

> `optional` **reason**: `string`

Reason for the error.

Use [EpcisErrorReasonTypes](../variables/EpcisErrorReasonTypes.md) for known values.

***

### correctiveEventIDs?

> `optional` **correctiveEventIDs**: `string`[]

(Optional) If present, indicates that the events having the specified URIs as
the value of their eventID fields are to be considered as "corrections" to
the event declared erroneous by this event.
