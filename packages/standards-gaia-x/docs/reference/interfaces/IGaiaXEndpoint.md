# Interface: IGaiaXEndpoint

Endpoint as defined by the Gaia-X ontology.
https://docs.gaia-x.eu/ontology/development/classes/Endpoint

## Properties

### type

> **type**: `"Endpoint"` \| `undefined`

The type of JSON-LD node. In this case it is allowed to be omitted as it is usually a child node.

***

### endpointURL

> **endpointURL**: `string`

The endpoint URL

***

### formalDescription?

> `optional` **formalDescription**: `string`

The formal description

***

### standardConformity?

> `optional` **standardConformity**: `IJsonLdNodeObject`

Standards conformity
