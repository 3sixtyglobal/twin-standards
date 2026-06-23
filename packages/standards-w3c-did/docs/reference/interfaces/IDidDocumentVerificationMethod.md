# Interface: IDidDocumentVerificationMethod

Interface describing a DID document verification method.

## Properties

### id {#id}

> **id**: `string`

The id of the entry.

***

### controller {#controller}

> **controller**: `string`

The controller for the entry.

***

### type {#type}

> **type**: `string`

The type of the entry.

***

### publicKeyMultibase? {#publickeymultibase}

> `optional` **publicKeyMultibase?**: `string`

The public key for the entry.
Spec https://datatracker.ietf.org/doc/html/draft-multiformats-multibase-03 .

***

### publicKeyJwk? {#publickeyjwk}

> `optional` **publicKeyJwk?**: `JWK` & `IJsonLdNodeObject`

The public key for the entry as a JWK.
Spec https://datatracker.ietf.org/doc/html/rfc7517 .

***

### revocation? {#revocation}

> `optional` **revocation?**: `string`

Multi key partial revocation.
