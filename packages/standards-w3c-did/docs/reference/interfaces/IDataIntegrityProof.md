# Interface: IDataIntegrityProof

Interface describing a did proof.
https://www.w3.org/TR/vc-data-integrity/

## Properties

### @context? {#context}

> `optional` **@context**: `"https://w3id.org/security/data-integrity/v2"` \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://w3id.org/security/data-integrity/v2"`\>

JSON-LD Context.

***

### type {#type}

> **type**: `"DataIntegrityProof"`

JSON-LD Type.

***

### cryptosuite {#cryptosuite}

> **cryptosuite**: `string`

An identifier for the cryptographic suite that can be used to verify the proof.

***

### id? {#id}

> `optional` **id**: `string`

The id of the proof.

***

### proofPurpose {#proofpurpose}

> **proofPurpose**: `string`

The reason the proof was created.

***

### proofValue? {#proofvalue}

> `optional` **proofValue**: `string`

Contains the base-encoded binary data necessary to verify the
digital proof using the verificationMethod specified.

***

### verificationMethod? {#verificationmethod}

> `optional` **verificationMethod**: `string`

The verification method of the proof.

***

### created? {#created}

> `optional` **created**: `string`

The iso date of when the proof was created.

***

### expires? {#expires}

> `optional` **expires**: `string`

The iso date of when the proof expires.

***

### domain? {#domain}

> `optional` **domain**: `ObjectOrArray`\<`string`\>

One or more security domains in which the proof is meant to be used.

***

### challenge? {#challenge}

> `optional` **challenge**: `ObjectOrArray`\<`string`\>

Provided to mitigate replay attacks on domains.

***

### previousProof? {#previousproof}

> `optional` **previousProof**: `string`

Identifies another data integrity proof that MUST verify before
the current proof is processed

***

### nonce? {#nonce}

> `optional` **nonce**: `string`

Use of this field is to increase privacy by decreasing linkability
that is the result of deterministically generated signatures.
