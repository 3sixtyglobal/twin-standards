# Interface: IDidDocument

Interface describing a DID Document.
Spec https://www.w3.org/TR/did-core/#did-document-properties.

## Properties

### @context {#context}

> **@context**: `"https://www.w3.org/ns/did/v1"` \| `SingleOccurrenceArray`\<`IJsonLdContextDefinitionElement`, `"https://www.w3.org/ns/did/v1"`\>

The context for the document.

***

### id {#id}

> **id**: `string`

The id for the document.

***

### alsoKnownAs? {#alsoknownas}

<<<<<<< Updated upstream
> `optional` **alsoKnownAs**: `ObjectOrArray`\<`string`\>
=======
> `optional` **alsoKnownAs?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

Aliases for the document.

***

### controller? {#controller}

<<<<<<< Updated upstream
> `optional` **controller**: `ObjectOrArray`\<`string`\>
=======
> `optional` **controller?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

The controller for the document.

***

### verificationMethod? {#verificationmethod}

> `optional` **verificationMethod?**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The verification methods.

***

### authentication? {#authentication}

> `optional` **authentication?**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The authentication methods.

***

### assertionMethod? {#assertionmethod}

> `optional` **assertionMethod?**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The assertion methods.

***

### keyAgreement? {#keyagreement}

> `optional` **keyAgreement?**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The key agreements.

***

### capabilityInvocation? {#capabilityinvocation}

> `optional` **capabilityInvocation?**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability invocations.

***

### capabilityDelegation? {#capabilitydelegation}

> `optional` **capabilityDelegation?**: (`string` \| [`IDidDocumentVerificationMethod`](IDidDocumentVerificationMethod.md))[]

The capability delegations.

***

### service? {#service}

> `optional` **service?**: [`IDidService`](IDidService.md)[]

The services.
