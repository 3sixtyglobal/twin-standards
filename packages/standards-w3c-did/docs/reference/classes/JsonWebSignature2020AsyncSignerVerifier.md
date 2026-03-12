# Class: JsonWebSignature2020AsyncSignerVerifier

Helper methods for creating and verifying JsonWebSignature2020 proofs with async signing callbacks.
This implementation creates JWS signatures manually per RFC 7515 to support async signing callbacks.

## Implements

- [`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md)

## Constructors

### Constructor

> **new JsonWebSignature2020AsyncSignerVerifier**(): `JsonWebSignature2020AsyncSignerVerifier`

Create a new instance of JsonWebSignature2020AsyncSignerVerifier.

#### Returns

`JsonWebSignature2020AsyncSignerVerifier`

## Properties

### CLASS\_NAME {#class_name}

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createProofWithSigner() {#createproofwithsigner}

> **createProofWithSigner**(`unsecuredDocument`, `unsignedProof`, `signCallback`): `Promise`\<[`IJsonWebSignature2020Proof`](../interfaces/IJsonWebSignature2020Proof.md)\>

Create a proof with an async signing callback.
This method prevents private key exposure by delegating signing to a secure callback.
Implements JWS Compact Serialization per RFC 7515.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IJsonWebSignature2020Proof`](../interfaces/IJsonWebSignature2020Proof.md)

The proof options.

##### signCallback

(`data`, `algorithm`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Async callback that signs data with a private key from secure storage.

#### Returns

`Promise`\<[`IJsonWebSignature2020Proof`](../interfaces/IJsonWebSignature2020Proof.md)\>

The created proof.

#### Implementation of

[`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md).[`createProofWithSigner`](../interfaces/IProofSignerVerifierAsync.md#createproofwithsigner)

***

### verifyProof() {#verifyproof}

> **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

Verify a proof for the given data.

#### Parameters

##### securedDocument

`IJsonLdNodeObject`

The credential to verify.

##### signedProof

[`IJsonWebSignature2020Proof`](../interfaces/IJsonWebSignature2020Proof.md)

The proof to verify.

##### verifyKey

`JWK`

The public key to verify the proof with.

#### Returns

`Promise`\<`boolean`\>

True if the credential was verified.

#### Implementation of

[`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md).[`verifyProof`](../interfaces/IProofSignerVerifierAsync.md#verifyproof)

***

### createHash() {#createhash}

> **createHash**(`unsecuredDocument`, `unsignedProof`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Create a hash for the given data.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IJsonWebSignature2020Proof`](../interfaces/IJsonWebSignature2020Proof.md)

The unsigned proof.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The created hash.

#### Implementation of

[`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md).[`createHash`](../interfaces/IProofSignerVerifierAsync.md#createhash)
