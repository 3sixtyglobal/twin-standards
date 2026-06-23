# Interface: IDidVerifiableCredentialCommon

Common properties shared by all verifiable credential versions.

## See

https://www.w3.org/TR/vc-data-model-2.0

## Extended by

- [`IDidVerifiableCredentialV1`](IDidVerifiableCredentialV1.md)
- [`IDidVerifiableCredentialV2`](IDidVerifiableCredentialV2.md)

## Properties

### id? {#id}

> `optional` **id?**: `string`

The identifier for the verifiable credential.

***

### type {#type}

> **type**: `ObjectOrArray`\<`string`\>

The types of the data stored in the verifiable credential.

***

### credentialSubject? {#credentialsubject}

> `optional` **credentialSubject?**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

The data for the verifiable credential.

***

### credentialStatus? {#credentialstatus}

> `optional` **credentialStatus?**: `ObjectOrArray`\<[`IDidCredentialStatus`](IDidCredentialStatus.md)\>

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

***

### credentialSchema? {#credentialschema}

> `optional` **credentialSchema?**: `ObjectOrArray`\<[`IDidCredentialSchema`](IDidCredentialSchema.md)\>

Annotate type definitions or lock them to specific versions of the vocabulary.

***

### issuer? {#issuer}

> `optional` **issuer?**: `string` \| \{ `id`: `string`; `name?`: `string` \| [`IDidLabel`](IDidLabel.md)[]; `description?`: `string` \| [`IDidLabel`](IDidLabel.md)[]; \}

The issuing identity.

***

### name? {#name}

> `optional` **name?**: `string` \| [`IDidLabel`](IDidLabel.md)[]

The name of the credential.

***

### description? {#description}

> `optional` **description?**: `string` \| [`IDidLabel`](IDidLabel.md)[]

The description of the credential.

***

### evidence? {#evidence}

> `optional` **evidence?**: `ObjectOrArray`\<`IJsonLdNodeObject`\>

Evidence associated with the Credential.

***

### proof? {#proof}

> `optional` **proof?**: `ObjectOrArray`\<[`IProof`](../type-aliases/IProof.md)\>

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.
