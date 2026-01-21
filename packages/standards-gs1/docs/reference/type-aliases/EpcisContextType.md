# Type Alias: EpcisContextType

> **EpcisContextType** = *typeof* [`Context`](../variables/EpcisContexts.md#context) \| \[*typeof* [`Context`](../variables/EpcisContexts.md#context)\] \| \[`...IJsonLdContextDefinitionElement[]`, *typeof* [`Context`](../variables/EpcisContexts.md#context), `IJsonLdContextDefinitionElement`\] \| \[`IJsonLdContextDefinitionElement`, *typeof* [`Context`](../variables/EpcisContexts.md#context), `...IJsonLdContextDefinitionElement[]`\]

Allowed shapes for an EPCIS 2.0 JSON-LD `@context`, anchored on the GS1
context root and optionally augmented with custom entries.
