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

Get the context for the verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to extract the expiration date from.

#### Returns

`"https://www.w3.org/2018/credentials/v1"` \| `"https://www.w3.org/ns/credentials/v2"` \| `undefined`

The context.

***

### getContextVersion() {#getcontextversion}

> `static` **getContextVersion**(`verifiableCredential`): `"v1"` \| `"v2"` \| `undefined`

Get the context version for the verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to extract the expiration date from.

#### Returns

`"v1"` \| `"v2"` \| `undefined`

The context version.

***

### getValidUntil() {#getvaliduntil}

> `static` **getValidUntil**(`verifiableCredential`): `string` \| `undefined`

Get the valid until date from a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to extract the expiration date from.

#### Returns

`string` \| `undefined`

The expiration date, if available.

***

### setValidUntil() {#setvaliduntil}

> `static` **setValidUntil**(`verifiableCredential`, `validUntil`): `void`

Set the valid until date on a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to set the expiration date on.

##### validUntil

`string`

The expiration date to set.

#### Returns

`void`

***

### getValidFrom() {#getvalidfrom}

> `static` **getValidFrom**(`verifiableCredential`): `string` \| `undefined`

Get the valid from from a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to extract the issuance date from.

#### Returns

`string` \| `undefined`

The issuance date, if available.

***

### setValidFrom() {#setvalidfrom}

> `static` **setValidFrom**(`verifiableCredential`, `validFrom`): `void`

Set the valid from date on a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to set the issuance date on.

##### validFrom

`string`

The issuance date to set.

#### Returns

`void`
