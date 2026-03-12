# Class: ProofHelper

Helper methods for creating and verifying proofs.

## Constructors

### Constructor

> **new ProofHelper**(): `ProofHelper`

#### Returns

`ProofHelper`

## Properties

### CLASS\_NAME {#class_name}

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### createSignerVerifier() {#createsignerverifier}

> `static` **createSignerVerifier**(`proofType`): [`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

Create a signer verifier.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

#### Returns

[`IProofSignerVerifier`](../interfaces/IProofSignerVerifier.md)

The created signer verifier.

#### Throws

GeneralError if the proof type is not supported.

***

### createAsyncSignerVerifier() {#createasyncsignerverifier}

> `static` **createAsyncSignerVerifier**(`proofType`): [`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md)

Create an async signer verifier that supports signing with callbacks.
This enables signing without exposing private keys.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

#### Returns

[`IProofSignerVerifierAsync`](../interfaces/IProofSignerVerifierAsync.md)

The created async signer verifier.

#### Throws

GeneralError if the proof type is not supported.

***

### createProof() {#createproof}

> `static` **createProof**(`proofType`, `unsecuredDocument`, `unsignedProof`, `signKey`): `Promise`\<[`IProof`](../type-aliases/IProof.md)\>

Create a proof for the given data.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IProof`](../type-aliases/IProof.md)

The proof options.

##### signKey

`JWK`

The key to sign the proof with.

#### Returns

`Promise`\<[`IProof`](../type-aliases/IProof.md)\>

The created proof.

***

### createProofWithSigner() {#createproofwithsigner}

> `static` **createProofWithSigner**(`proofType`, `unsecuredDocument`, `unsignedProof`, `signCallback`): `Promise`\<[`IProof`](../type-aliases/IProof.md)\>

Create a proof with an async signing callback.
This method prevents private key exposure by delegating signing to a secure callback.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IProof`](../type-aliases/IProof.md)

The proof options.

##### signCallback

(`data`, `algorithm`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Async callback that signs data with a private key from secure storage. The algorithm parameter indicates the expected signing algorithm (e.g., "EdDSA") to enable validation.

#### Returns

`Promise`\<[`IProof`](../type-aliases/IProof.md)\>

The created proof.

***

### verifyProof() {#verifyproof}

> `static` **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

Verify a proof for the given data.

#### Parameters

##### securedDocument

`IJsonLdNodeObject`

The credential to verify.

##### signedProof

[`IProof`](../type-aliases/IProof.md)

The proof to verify.

##### verifyKey

`JWK`

The public key to verify the proof with.

#### Returns

`Promise`\<`boolean`\>

True if the credential was verified.

***

### createUnsignedProof() {#createunsignedproof}

> `static` **createUnsignedProof**(`proofType`, `verificationMethodId`, `otherParams?`): [`IProof`](../type-aliases/IProof.md)

Create an unsigned proof.

#### Parameters

##### proofType

[`ProofTypes`](../type-aliases/ProofTypes.md)

The type of proof to create.

##### verificationMethodId

`string`

The verification method id.

##### otherParams?

`any`

Other parameters for the proof.

#### Returns

[`IProof`](../type-aliases/IProof.md)

The created proof.

#### Throws

GeneralError if the proof type is not supported.
