# Interface: IUneceAnimalIdentity

Information about an animal which uniquely identifies it.

## See

https://vocabulary.uncefact.org/AnimalIdentity

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"AnimalIdentity"`

JSON-LD Type.

***

### identifier

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this animal identity.

#### See

https://vocabulary.uncefact.org/identifier

***

### identifierLengthNumeric

> **identifierLengthNumeric**: `string`

The length, expressed as the number of characters, of the identifier in this animal identity.

#### See

https://vocabulary.uncefact.org/identifierLengthNumeric

***

### issuerPartyName

> **issuerPartyName**: `string`

The name, expressed as text, of the party issuing this animal identity.

#### See

https://vocabulary.uncefact.org/issuerPartyName

***

### legalBasis

> **legalBasis**: `string`

The legal basis, expressed as text, for this animal identity.

#### See

https://vocabulary.uncefact.org/legalBasis

***

### versionId?

> `optional` **versionId**: `string` \| `IJsonLdValueObject`

The identifier of the version of this animal identity.

#### See

https://vocabulary.uncefact.org/versionId
