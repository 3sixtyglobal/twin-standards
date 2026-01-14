# Type Alias: EpcisContextType

> **EpcisContextType** = *typeof* [`Namespace`](../variables/EpcisContexts.md#namespace) \| \[*typeof* [`Namespace`](../variables/EpcisContexts.md#namespace)\] \| \[`...IJsonLdContextDefinitionElement[]`, *typeof* [`Namespace`](../variables/EpcisContexts.md#namespace), `IJsonLdContextDefinitionElement`\] \| \[`IJsonLdContextDefinitionElement`, *typeof* [`Namespace`](../variables/EpcisContexts.md#namespace), `...IJsonLdContextDefinitionElement[]`\]

Allowed shapes for an EPCIS 2.0 JSON-LD `@context`, anchored on the GS1
context root and optionally augmented with custom entries.
