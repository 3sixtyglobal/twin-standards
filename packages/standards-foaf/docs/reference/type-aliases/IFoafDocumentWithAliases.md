# Type Alias: IFoafDocumentWithAliases\<T\>

> **IFoafDocumentWithAliases**\<`T`\> = `JsonLdObjectWithAliases`\<[`IFoafDocument`](../interfaces/IFoafDocument.md), `T`\>

A FOAF Document with FOAF-prefixed aliases for non-JSON-LD keys.
This allows using either prefixed aliases (e.g., "foaf:name") when defining a FOAF Document.

## Type Parameters

### T

`T` *extends* `string` = `"foaf"`
