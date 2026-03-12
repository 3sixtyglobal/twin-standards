# Variable: DublinCoreContexts

> `const` **DublinCoreContexts**: `object`

The contexts for Dublin Core.

## Type Declaration

### NamespaceTerms {#namespaceterms}

> `readonly` **NamespaceTerms**: `"http://purl.org/dc/terms/"` = `"http://purl.org/dc/terms/"`

The canonical RDF namespace URI for Dublin Core Terms.

### ContextTerms {#contextterms}

> `readonly` **ContextTerms**: `"http://purl.org/dc/terms/"` = `"http://purl.org/dc/terms/"`

The value to use in JSON-LD context for Dublin Core Terms.
Note: ContextTerms matches NamespaceTerms (both include trailing slash) as per Dublin Core specification.
The Dublin Core Terms JSON-LD context URL format includes a trailing slash.

### JsonLdContextTerms {#jsonldcontextterms}

> `readonly` **JsonLdContextTerms**: `"https://schema.twindev.org/dublin-core/terms.jsonld"` = `"https://schema.twindev.org/dublin-core/terms.jsonld"`

JSON-LD Context URL for Dublin Core Terms.

### NamespaceDcmiType {#namespacedcmitype}

> `readonly` **NamespaceDcmiType**: `"http://purl.org/dc/dcmitype/"` = `"http://purl.org/dc/dcmitype/"`

The canonical RDF namespace URI for Dublin Core DCMI Types.

### ContextDcmiType {#contextdcmitype}

> `readonly` **ContextDcmiType**: `"http://purl.org/dc/dcmitype/"` = `"http://purl.org/dc/dcmitype/"`

The value to use in JSON-LD context for Dublin Core DCMI Types.
Note: ContextDcmiType matches NamespaceDcmiType (both include trailing slash) as per Dublin Core specification.
The Dublin Core DCMI Types JSON-LD context URL format includes a trailing slash.

### JsonLdContextDcmiType {#jsonldcontextdcmitype}

> `readonly` **JsonLdContextDcmiType**: `"https://schema.twindev.org/dublin-core/dcmitype.jsonld"` = `"https://schema.twindev.org/dublin-core/dcmitype.jsonld"`

JSON-LD Context URL for DCMI Types
