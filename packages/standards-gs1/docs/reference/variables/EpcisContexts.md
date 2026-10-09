# Variable: EpcisContexts

> `const` **EpcisContexts**: `object`

Canonical EPCIS JSON-LD context IRIs as defined by GS1.

## Type Declaration

### Namespace {#namespace}

> `readonly` **Namespace**: `"https://ref.gs1.org/epcis/"` = `"https://ref.gs1.org/epcis/"`

The canonical RDF namespace URI.

### Context {#context}

> `readonly` **Context**: `"https://ref.gs1.org/epcis"` = `"https://ref.gs1.org/epcis"`

The value to use in JSON-LD context.
Note: Context differs from Namespace (no trailing slash) as per GS1 EPCIS standard specification.
The EPCIS JSON-LD context URL format does not include a trailing slash.

### JsonLdContext {#jsonldcontext}

> `readonly` **JsonLdContext**: `"https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"` = `"https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"`

The JSON-LD Context URL.

### JsonSchemaNamespace {#jsonschemanamespace}

> `readonly` **JsonSchemaNamespace**: `"https://schema.3sixty.global/gs1/"` = `"https://schema.3sixty.global/gs1/"`

The namespace location of the hosted version of the JSON Schema.
