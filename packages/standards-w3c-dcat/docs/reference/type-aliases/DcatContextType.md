# Type Alias: DcatContextType

> **DcatContextType** = `object` & `IJsonLdContextDefinition`

The DCAT JSON-LD context type.
Supports the DCAT context URL or arrays with additional context definitions.

## Type Declaration

### dcat

> **dcat**: *typeof* [`Namespace`](../variables/DcatContexts.md#namespace)

### dcterms

> **dcterms**: *typeof* `DublinCoreContexts.NamespaceTerms`

### odrl?

> `optional` **odrl?**: *typeof* `OdrlContexts.Namespace`

### foaf?

> `optional` **foaf?**: *typeof* `FoafContexts.Namespace`
