# Type Alias: DcatContextType

> **DcatContextType** = `object` & `IJsonLdContextDefinition`

The DCAT JSON-LD context type.
Supports the DCAT context URL or arrays with additional context definitions.

## Type Declaration

### dcat

> **dcat**: *typeof* [`ContextRoot`](../variables/DcatContexts.md#contextroot)

### dcterms

> **dcterms**: *typeof* `DublinCoreContexts.ContextTerms`

### odrl?

> `optional` **odrl**: *typeof* `OdrlContexts.OdrlNamespace`

### foaf?

> `optional` **foaf**: *typeof* `FoafContexts.ContextRoot`
