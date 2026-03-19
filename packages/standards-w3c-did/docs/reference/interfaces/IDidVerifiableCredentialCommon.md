# Interface: IDidVerifiableCredentialCommon

Interface describing a verifiable credential.
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

<<<<<<< Updated upstream
> `optional` **credentialSubject**: `ObjectOrArray`\<`IJsonLdNodeObject`\>
=======
> `optional` **credentialSubject?**: `ObjectOrArray`\<`IJsonLdNodeObject`\>
>>>>>>> Stashed changes

The data for the verifiable credential.

***

### credentialStatus? {#credentialstatus}

<<<<<<< Updated upstream
> `optional` **credentialStatus**: `ObjectOrArray`\<[`IDidCredentialStatus`](IDidCredentialStatus.md)\>
=======
> `optional` **credentialStatus?**: `ObjectOrArray`\<[`IDidCredentialStatus`](IDidCredentialStatus.md)\>
>>>>>>> Stashed changes

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

***

### credentialSchema? {#credentialschema}

<<<<<<< Updated upstream
> `optional` **credentialSchema**: `ObjectOrArray`\<[`IDidCredentialSchema`](IDidCredentialSchema.md)\>
=======
> `optional` **credentialSchema?**: `ObjectOrArray`\<[`IDidCredentialSchema`](IDidCredentialSchema.md)\>
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
> `optional` **evidence**: `ObjectOrArray`\<`IJsonLdNodeObject`\>
=======
> `optional` **evidence?**: `ObjectOrArray`\<`IJsonLdNodeObject`\>
>>>>>>> Stashed changes

Evidence associated with the Credential.

***

### proof? {#proof}

<<<<<<< Updated upstream
> `optional` **proof**: `ObjectOrArray`\<[`IProof`](../type-aliases/IProof.md)\>
=======
> `optional` **proof?**: `ObjectOrArray`\<[`IProof`](../type-aliases/IProof.md)\>
>>>>>>> Stashed changes

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.
