# Class: MultikeyHelper

Helper methods for multikey.

## Constructors

### Constructor

> **new MultikeyHelper**(): `MultikeyHelper`

#### Returns

`MultikeyHelper`

## Properties

### CLASS\_NAME {#class_name}

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### toJwk() {#tojwk}

> `static` **toJwk**(`multikey`): `JWK`

Convert a multikey to a JWK.

#### Parameters

##### multikey

[`IMultikey`](../interfaces/IMultikey.md)

The multikey to convert.

#### Returns

`JWK`

The JWK.

#### Throws

GeneralError if the multikey is invalid.

***

### fromJwk() {#fromjwk}

> `static` **fromJwk**(`controller`, `id`, `jwk`): [`IMultikey`](../interfaces/IMultikey.md)

Convert a JWK to a Multikey.

#### Parameters

##### controller

`string`

The controller of the multikey.

##### id

`string`

The id of the multikey.

##### jwk

`JWK`

The jwk to convert.

#### Returns

[`IMultikey`](../interfaces/IMultikey.md)

The multikey.

#### Throws

GeneralError if the jwk is invalid.

***

### toRaw() {#toraw}

> `static` **toRaw**(`multikey`): `object`

Convert a multikey to raw keys.

#### Parameters

##### multikey

[`IMultikey`](../interfaces/IMultikey.md)

The multikey to convert.

#### Returns

`object`

The JWK.

##### publicKey

> **publicKey**: `Uint8Array`

##### privateKey

> **privateKey**: `Uint8Array`

#### Throws

GeneralError if the multikey is invalid.
