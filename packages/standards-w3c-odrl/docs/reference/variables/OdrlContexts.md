# Variable: OdrlContexts

> `const` **OdrlContexts**: `object`

The contexts for ODRL.

## Type Declaration

### Namespace

> `readonly` **Namespace**: `"http://www.w3.org/ns/odrl/2/"` = `"http://www.w3.org/ns/odrl/2/"`

The canonical RDF namespace URI.

### Context

> `readonly` **Context**: `"http://www.w3.org/ns/odrl/2"` = `"http://www.w3.org/ns/odrl/2"`

The value to use in @context.
Note: Context differs from Namespace (no trailing slash) as per ODRL 2.2 specification.
The ODRL JSON-LD context URL format does not include a trailing slash.

### JsonLdContext

> `readonly` **JsonLdContext**: `"http://www.w3.org/ns/odrl.jsonld"` = `"http://www.w3.org/ns/odrl.jsonld"`

The JSON-LD Context URL.
