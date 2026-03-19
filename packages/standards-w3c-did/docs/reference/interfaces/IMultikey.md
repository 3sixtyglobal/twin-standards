# Interface: IMultikey

Interface describing a Multikey.
https://www.w3.org/TR/cid-1.0/

## Properties

### @context? {#context}

<<<<<<< Updated upstream
> `optional` **@context**: `"https://www.w3.org/ns/cid/v1"` \| `"https://w3id.org/security/multikey/v1"` \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://www.w3.org/ns/cid/v1"`\> \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://w3id.org/security/multikey/v1"`\>
=======
> `optional` **@context?**: `"https://www.w3.org/ns/cid/v1"` \| `"https://w3id.org/security/multikey/v1"` \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://www.w3.org/ns/cid/v1"`\> \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://w3id.org/security/multikey/v1"`\>
>>>>>>> Stashed changes

JSON-LD Context.

***

### id? {#id}

> `optional` **id?**: `string`

The id of the entry.

***

### type {#type}

> **type**: `"Multikey"`

The type of the entry.

***

### controller? {#controller}

> `optional` **controller?**: `string`

The controller for the entry.

***

### publicKeyMultibase {#publickeymultibase}

> **publicKeyMultibase**: `string`

The public key for the entry.

***

### secretKeyMultibase? {#secretkeymultibase}

> `optional` **secretKeyMultibase?**: `string`

The secret key for the entry.

***

### expires? {#expires}

> `optional` **expires?**: `string`

The date the entry expires.

***

### revoked? {#revoked}

> `optional` **revoked?**: `string`

The date the entry was revoked.
