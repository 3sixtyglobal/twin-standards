# Type Alias: DcatContextType

> **DcatContextType** = `object` & `IJsonLdContextDefinition`

The DCAT JSON-LD context type.
Supports the DCAT context URL or arrays with additional context definitions.

## Type Declaration

### dcat

> **dcat**: *typeof* [`Context`](../variables/DcatContexts.md#context)

### dcterms

> **dcterms**: *typeof* `DublinCoreContexts.ContextTerms`

### odrl?

> `optional` **odrl**: *typeof* `OdrlContexts.JsonLdContext`

### foaf?

> `optional` **foaf**: *typeof* `FoafContexts.JsonLdContext`
