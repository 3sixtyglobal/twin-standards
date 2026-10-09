# Variable: FoafContexts

> `const` **FoafContexts**: `object`

The LD Contexts concerning FOAF.

## Type Declaration

### Namespace {#namespace}

> `readonly` **Namespace**: `"https://xmlns.com/foaf/0.1/"` = `"https://xmlns.com/foaf/0.1/"`

The canonical RDF namespace URI.

### Context {#context}

> `readonly` **Context**: `"https://xmlns.com/foaf/0.1/"` = `"https://xmlns.com/foaf/0.1/"`

The value to use in @context.
Note: Context matches Namespace (both include trailing slash) as per FOAF specification.
The FOAF JSON-LD context URL format includes a trailing slash.

### JsonLdContext {#jsonldcontext}

> `readonly` **JsonLdContext**: `"https://schema.3sixty.global/foaf/types.jsonld"` = `"https://schema.3sixty.global/foaf/types.jsonld"`

The JSON-LD Context URL.

### JsonSchemaNamespace {#jsonschemanamespace}

> `readonly` **JsonSchemaNamespace**: `"https://schema.3sixty.global/foaf/"` = `"https://schema.3sixty.global/foaf/"`

The namespace location of the hosted version of the JSON Schema.
