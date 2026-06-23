# Standards W3C DID Examples

These snippets cover verifiable credential helpers, proof helpers, multikey conversion, and signer verifier usage.

## VerifiableCredentialHelper

```typescript
import {
  DidContexts,
  VerifiableCredentialHelper,
  type IDidVerifiableCredential
} from '@twin.org/standards-w3c-did';

const credential: IDidVerifiableCredential = {
  '@context': [DidContexts.ContextVCv2],
  type: ['VerifiableCredential'],
  issuer: 'did:example:issuer',
  credentialSubject: { id: 'did:example:holder' }
};

VerifiableCredentialHelper.setValidFrom(credential, '2026-03-09T09:00:00Z');
VerifiableCredentialHelper.setValidUntil(credential, '2026-12-31T23:59:59Z');

const from = VerifiableCredentialHelper.getValidFrom(credential);
const until = VerifiableCredentialHelper.getValidUntil(credential);

console.log(from); // 2026-03-09T09:00:00Z
console.log(until); // 2026-12-31T23:59:59Z
```

## ProofHelper

```typescript
import type { IJsonLdNodeObject } from '@twin.org/data-json-ld';
import { ProofHelper, ProofTypes } from '@twin.org/standards-w3c-did';

const doc: IJsonLdNodeObject = {
  '@context': ['https://www.w3.org/ns/credentials/v2'],
  type: ['VerifiableCredential'],
  credentialSubject: { id: 'did:example:holder' }
};

const unsigned = ProofHelper.createUnsignedProof(
  ProofTypes.JsonWebSignature2020,
  'did:example:issuer#key-1'
);
const signer = ProofHelper.createAsyncSignerVerifier(ProofTypes.JsonWebSignature2020);

const signed = await signer.createProofWithSigner(doc, unsigned, async data => data.slice(0, 64));

console.log(unsigned.type); // JsonWebSignature2020
console.log(typeof signed.proofValue === 'string'); // true
```

## MultikeyHelper

```typescript
import type { IJwk } from '@twin.org/web';
import { MultikeyHelper } from '@twin.org/standards-w3c-did';

const jwk: IJwk = {
  kty: 'OKP',
  crv: 'Ed25519',
  alg: 'EdDSA',
  x: 'xW3f6wYf0j0M2f6WnGw1V8xgj2YyN6xYv1l6fA8Vq5E',
  d: 'kB0l6QUPkzWJeN6wHZfG4Dwb4J7Y0C5i9mS1r2fYv5Y'
};

const multikey = MultikeyHelper.fromJwk('did:example:issuer', 'did:example:issuer#key-1', jwk);
const roundTrip = MultikeyHelper.toJwk(multikey);

console.log(multikey.type); // Multikey
console.log(roundTrip.crv); // Ed25519
```

## DidDataTypes

```typescript
import { DidDataTypes } from '@twin.org/standards-w3c-did';

DidDataTypes.registerTypes();

console.log(typeof DidDataTypes.registerTypes === 'function'); // true
```
