# Type Alias: IFoafOrganizationWithAliases\<T\>

> **IFoafOrganizationWithAliases**\<`T`\> = `JsonLdObjectWithAliases`\<[`IFoafOrganization`](../interfaces/IFoafOrganization.md), `T`\>

A FOAF Organization with FOAF-prefixed aliases for non-JSON-LD keys.
This allows using either prefixed aliases (e.g., "foaf:name") when defining a FOAF Organization.

## Type Parameters

### T

`T` *extends* `string` = `"foaf"`
