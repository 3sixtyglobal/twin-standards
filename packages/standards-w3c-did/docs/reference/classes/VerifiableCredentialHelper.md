# Class: VerifiableCredentialHelper

Helper methods for creating and verifying proofs.

## Constructors

### Constructor

> **new VerifiableCredentialHelper**(): `VerifiableCredentialHelper`

#### Returns

`VerifiableCredentialHelper`

## Properties

### CLASS\_NAME {#class_name}

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### getContext() {#getcontext}

> `static` **getContext**(`verifiableCredential`): `"https://www.w3.org/2018/credentials/v1"` \| `"https://www.w3.org/ns/credentials/v2"` \| `undefined`

Get the JSON-LD context URL for the verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to inspect.

#### Returns

`"https://www.w3.org/2018/credentials/v1"` \| `"https://www.w3.org/ns/credentials/v2"` \| `undefined`

The context URL, or undefined if the version cannot be determined.

***

### getContextVersion() {#getcontextversion}

> `static` **getContextVersion**(`verifiableCredential`): `"v1"` \| `"v2"` \| `undefined`

Get the context version string for the verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to inspect.

#### Returns

`"v1"` \| `"v2"` \| `undefined`

The context version ("v1" or "v2"), or undefined if not determinable.

***

### getValidUntil() {#getvaliduntil}

> `static` **getValidUntil**(`verifiableCredential`): `string` \| `undefined`

Get the expiration date from a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to inspect.

#### Returns

`string` \| `undefined`

The expiration date string, or undefined if not present.

***

### setValidUntil() {#setvaliduntil}

> `static` **setValidUntil**(`verifiableCredential`, `validUntil`): `void`

Set the expiration date on a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to update.

##### validUntil

`string`

The expiration date to set.

#### Returns

`void`

***

### getValidFrom() {#getvalidfrom}

> `static` **getValidFrom**(`verifiableCredential`): `string` \| `undefined`

Get the issuance date from a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to inspect.

#### Returns

`string` \| `undefined`

The issuance date string, or undefined if not present.

***

### setValidFrom() {#setvalidfrom}

> `static` **setValidFrom**(`verifiableCredential`, `validFrom`): `void`

Set the issuance date on a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to update.

##### validFrom

`string`

The issuance date to set.

#### Returns

`void`
