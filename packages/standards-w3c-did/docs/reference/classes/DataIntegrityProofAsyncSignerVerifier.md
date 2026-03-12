# Class: DataIntegrityProofAsyncSignerVerifier

Helper methods for creating and verifying Data Integrity proofs with async signing callbacks.
This implementation delegates signing to a secure callback to prevent private key exposure.
https://www.w3.org/TR/vc-di-eddsa/#eddsa-jcs-2022

## Implements

- [`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md)

## Constructors

### Constructor

> **new DataIntegrityProofAsyncSignerVerifier**(): `DataIntegrityProofAsyncSignerVerifier`

Create a new instance of DataIntegrityProofAsyncSignerVerifier.

#### Returns

`DataIntegrityProofAsyncSignerVerifier`

## Properties

### CLASS\_NAME {#class_name}

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createProofWithSigner() {#createproofwithsigner}

> **createProofWithSigner**(`unsecuredDocument`, `unsignedProof`, `signCallback`): `Promise`\<[`IProof`](../type-aliases/IProof.md)\>

Create a proof with an async signing callback.
This method prevents private key exposure by delegating signing to a secure callback.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IDataIntegrityProof`](../interfaces/IDataIntegrityProof.md)

The proof options.

##### signCallback

(`data`, `algorithm`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Async callback that signs data with a private key from secure storage.

#### Returns

`Promise`\<[`IProof`](../type-aliases/IProof.md)\>

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

[`IDataIntegrityProof`](../interfaces/IDataIntegrityProof.md)

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

[`IDataIntegrityProof`](../interfaces/IDataIntegrityProof.md)

The unsigned proof.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The created hash.

#### Implementation of

[`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md).[`createHash`](../interfaces/IProofSignerVerifierAsync.md#createhash)
