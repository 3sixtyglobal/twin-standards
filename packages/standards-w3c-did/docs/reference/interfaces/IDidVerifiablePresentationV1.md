# Interface: IDidVerifiablePresentationV1

Interface describing a verifiable presentation.

## Extends

- [`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md)

## Properties

### id? {#id}

> `optional` **id?**: `string`

Provide a unique identifier for the presentation.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`id`](IDidVerifiablePresentationCommon.md#id)

***

### type {#type}

> **type**: `ObjectOrArray`\<`string`\>

The types of the data stored in the verifiable credential.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`type`](IDidVerifiablePresentationCommon.md#type)

***

### holder? {#holder}

> `optional` **holder?**: `string`

The entity generating the presentation.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`holder`](IDidVerifiablePresentationCommon.md#holder)

***

### proof? {#proof}

<<<<<<< Updated upstream
> `optional` **proof**: `ObjectOrArray`\<[`IProof`](../type-aliases/IProof.md)\>
=======
> `optional` **proof?**: `ObjectOrArray`\<[`IProof`](../type-aliases/IProof.md)\>
>>>>>>> Stashed changes

Proofs that the verifiable presentation is valid.
Optional if a different proof method is used, such as JWT.

#### Inherited from

[`IDidVerifiablePresentationCommon`](IDidVerifiablePresentationCommon.md).[`proof`](IDidVerifiablePresentationCommon.md#proof)

***

### @context {#context}

> **@context**: `"https://www.w3.org/2018/credentials/v1"` \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://www.w3.org/2018/credentials/v1"`\>

The context for the verifiable presentation.

***

### verifiableCredential? {#verifiablecredential}

> `optional` **verifiableCredential?**: (`string` \| [`IDidVerifiableCredentialV1`](IDidVerifiableCredentialV1.md))[]

The data for the verifiable credentials.
