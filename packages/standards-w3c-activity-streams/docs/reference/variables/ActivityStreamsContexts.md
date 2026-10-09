# Variable: ActivityStreamsContexts

> `const` **ActivityStreamsContexts**: `object`

The LD Contexts concerning Activity Streams.

## Type Declaration

### Namespace {#namespace}

> `readonly` **Namespace**: `"https://www.w3.org/ns/activitystreams#"` = `"https://www.w3.org/ns/activitystreams#"`

The canonical RDF namespace URI.

### Context {#context}

> `readonly` **Context**: `"https://www.w3.org/ns/activitystreams"` = `"https://www.w3.org/ns/activitystreams"`

The value to use in @context.
Note: Context differs from Namespace (no trailing #) as per Activity Streams 2.0 specification.
The Activity Streams JSON-LD context URL format does not include a trailing hash.

### JsonLdContext {#jsonldcontext}

> `readonly` **JsonLdContext**: `"https://www.w3.org/ns/activitystreams.jsonld"` = `"https://www.w3.org/ns/activitystreams.jsonld"`

The JSON-LD Context URL.

### JsonSchemaNamespace {#jsonschemanamespace}

> `readonly` **JsonSchemaNamespace**: `"https://schema.3sixty.global/w3c-activity-streams/"` = `"https://schema.3sixty.global/w3c-activity-streams/"`

The namespace location of the hosted version of the JSON Schema.
