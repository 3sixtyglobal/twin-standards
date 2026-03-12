# Variable: JwsAlgorithms

> `const` **JwsAlgorithms**: `object`

JWS signature algorithms supported for proof signing.
Based on RFC 7518 (JSON Web Algorithms) and W3C DID standards.

## Type Declaration

### EdDSA {#eddsa}

> `readonly` **EdDSA**: `"EdDSA"` = `"EdDSA"`

EdDSA signature algorithm using Ed25519 curve.
Used by both DataIntegrityProof (eddsa-jcs-2022) and JsonWebSignature2020.

#### See

https://www.w3.org/TR/vc-di-eddsa/

## See

https://datatracker.ietf.org/doc/html/rfc7518#section-3.1
