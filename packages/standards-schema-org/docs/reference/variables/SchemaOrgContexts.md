# Variable: SchemaOrgContexts

> `const` **SchemaOrgContexts**: `object`

The contexts of schema.org data.

## Type Declaration

### Namespace {#namespace}

> `readonly` **Namespace**: `"https://schema.org/"` = `"https://schema.org/"`

The canonical RDF namespace URI.

### Context {#context}

> `readonly` **Context**: `"https://schema.org"` = `"https://schema.org"`

The value to use in @context.
Note: Context differs from Namespace (no trailing slash) as per schema.org specification.
The schema.org JSON-LD context URL format does not include a trailing slash.

### JsonLdContext {#jsonldcontext}

> `readonly` **JsonLdContext**: `"https://schema.org/docs/jsonldcontext.json"` = `"https://schema.org/docs/jsonldcontext.json"`

The JSON-LD Context URL.
