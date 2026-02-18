# Interface: IProofSignerVerifierAsync

Interface describing an async proof signer and verifier.
Supports signing with callbacks to prevent private key exposure.

## Methods

### createProofWithSigner()

> **createProofWithSigner**(`unsecuredDocument`, `unsignedProof`, `signCallback`): `Promise`\<[`IProof`](../type-aliases/IProof.md)\>

Create a proof with an async signing callback.
This method prevents private key exposure by delegating signing to a secure callback.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IProof`](../type-aliases/IProof.md)

The proof options.

##### signCallback

(`data`, `algorithm`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Async callback that signs data with a private key from secure storage.
Receives data and JWS algorithm for vault-side validation.

#### Returns

`Promise`\<[`IProof`](../type-aliases/IProof.md)\>

The created proof.

***

### verifyProof()

> **verifyProof**(`securedDocument`, `signedProof`, `verifyKey`): `Promise`\<`boolean`\>

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

### createHash()

> **createHash**(`unsecuredDocument`, `unsignedProof`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Create a hash for the given data.

#### Parameters

##### unsecuredDocument

`IJsonLdNodeObject`

The data to create the proof for.

##### unsignedProof

[`IProof`](../type-aliases/IProof.md)

The unsigned proof.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The created hash.
