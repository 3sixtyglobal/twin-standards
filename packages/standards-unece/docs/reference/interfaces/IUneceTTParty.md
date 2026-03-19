# Interface: IUneceTTParty

An individual, group, or body related to a Track and Trace (TT) process.

## See

https://vocabulary.uncefact.org/TTParty

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TTParty"`

JSON-LD Type.

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this TT party.

#### See

https://vocabulary.uncefact.org/identifier

***

### managedCharacteristic? {#managedcharacteristic}

> `optional` **managedCharacteristic?**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic managed by this TT party.

#### See

https://vocabulary.uncefact.org/managedCharacteristic

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this TT party.

#### See

https://vocabulary.uncefact.org/name

***

### partyTypeCode? {#partytypecode}

> `optional` **partyTypeCode?**: [`UnecePartyTypeCodeList`](../type-aliases/UnecePartyTypeCodeList.md)[]

A code specifying the type of TT party.

#### See

https://vocabulary.uncefact.org/partyTypeCode

***

### residenceCountryId? {#residencecountryid}

> `optional` **residenceCountryId?**: `string` \| `IJsonLdValueObject`

The identifier for the country of residence for this TT party, such as the country in which a person lives or in which a
corporation has its place of incorporation.

#### See

https://vocabulary.uncefact.org/residenceCountryId

***

### specifiedTTAnimal? {#specifiedttanimal}

> `optional` **specifiedTTAnimal?**: [`IUneceTTAnimal`](IUneceTTAnimal.md)[]

A tracking animal specified for this TT party.

#### See

https://vocabulary.uncefact.org/specifiedTTAnimal

***

### specifiedTTLocation? {#specifiedttlocation}

> `optional` **specifiedTTLocation?**: [`IUneceTTLocation`](IUneceTTLocation.md)[]

A location specified for this TT party.

#### See

https://vocabulary.uncefact.org/specifiedTTLocation

***

### tTPartyRoleCode? {#ttpartyrolecode}

> `optional` **tTPartyRoleCode?**: `string`

A code specifying the role of this TT party.

#### See

https://vocabulary.uncefact.org/tTPartyRoleCode

***

### typeId? {#typeid}

> `optional` **typeId?**: `string` \| `IJsonLdValueObject`

An identifier of the type for this TT party.

#### See

https://vocabulary.uncefact.org/typeId
