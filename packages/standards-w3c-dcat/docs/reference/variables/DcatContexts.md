# Variable: DcatContexts

> `const` **DcatContexts**: `object`

DCAT (Data Catalog Vocabulary) namespace contexts.

## Type Declaration

### Namespace {#namespace}

> `readonly` **Namespace**: `"http://www.w3.org/ns/dcat#"` = `"http://www.w3.org/ns/dcat#"`

The canonical RDF namespace URI.

### Context {#context}

> `readonly` **Context**: `"http://www.w3.org/ns/dcat#"` = `"http://www.w3.org/ns/dcat#"`

The value to use in @context.
Note: Context matches Namespace (both include trailing hash) as per DCAT 3.0 specification.
The DCAT JSON-LD context URL format includes a trailing hash.

### JsonLdContext {#jsonldcontext}

> `readonly` **JsonLdContext**: `"https://www.w3.org/ns/dcat.jsonld"` = `"https://www.w3.org/ns/dcat.jsonld"`

The JSON-LD Context URL.

### JsonSchemaNamespace {#jsonschemanamespace}

> `readonly` **JsonSchemaNamespace**: `"https://schema.3sixty.global/w3c-dcat/"` = `"https://schema.3sixty.global/w3c-dcat/"`

The namespace location of the hosted version of the JSON Schema.

### NamespaceRdf {#namespacerdf}

> `readonly` **NamespaceRdf**: `"http://www.w3.org/2000/01/rdf-schema#"` = `"http://www.w3.org/2000/01/rdf-schema#"`

The namespace for RDF vocabulary.

#### See

https://www.w3.org/TR/rdf-schema/

### JsonLdContextRdf {#jsonldcontextrdf}

> `readonly` **JsonLdContextRdf**: `"https://schema.3sixty.global/w3c-rdf/types.jsonld"` = `"https://schema.3sixty.global/w3c-rdf/types.jsonld"`

The context for RDF vocabulary Json-LD.

#### See

https://www.w3.org/TR/rdf-schema/

## See

https://www.w3.org/TR/vocab-dcat-3/
