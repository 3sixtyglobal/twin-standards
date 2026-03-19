# Interface: IDataspaceProtocolOffer

Offer interface compliant with Eclipse Data Space Protocol.

Extends IOdrlOffer with DS Protocol-specific constraints:
- `@id` is REQUIRED (used as the primary offer identifier in DS Protocol)
- `@context` is omitted (inherited from the parent Dataset/Distribution)

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - IOdrlOffer from @twin.org/standards-w3c-odrl

## Extends

- [`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md)

## Properties

### @id {#id}

> **@id**: `string`

Unique identifier for the offer.

#### Overrides

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`@id`](IDataspaceProtocolOfferBase.md#id)

***

### @context {#context}

> **@context**: `OdrlContextType`

LD Context.

***

### @type {#type}

> **@type**: `"Offer"`

The type must be "Offer".

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`@type`](IDataspaceProtocolOfferBase.md#type)

***

### assigner {#assigner}

> **assigner**: `string` \| `IOdrlParty`

The assigner of the offer.
Required for Offer policies.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`assigner`](IDataspaceProtocolOfferBase.md#assigner)

***

### profile? {#profile}

<<<<<<< Updated upstream
> `optional` **profile**: `ObjectOrArray`\<`string`\>
=======
> `optional` **profile?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`profile`](IDataspaceProtocolOfferBase.md#profile)

***

### assignee? {#assignee}

<<<<<<< Updated upstream
> `optional` **assignee**: `ObjectOrArray`\<`string` \| `IOdrlParty` \| `IOdrlPartyCollection`\>
=======
> `optional` **assignee?**: `ObjectOrArray`\<`string` \| `IOdrlParty` \| `IOdrlPartyCollection`\>
>>>>>>> Stashed changes

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`assignee`](IDataspaceProtocolOfferBase.md#assignee)

***

### target? {#target}

<<<<<<< Updated upstream
> `optional` **target**: `ObjectOrArray`\<`string` \| `IOdrlAsset` \| `IOdrlAssetCollection`\>
=======
> `optional` **target?**: `ObjectOrArray`\<`string` \| `IOdrlAsset` \| `IOdrlAssetCollection`\>
>>>>>>> Stashed changes

The target asset for the rule.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`target`](IDataspaceProtocolOfferBase.md#target)

***

### action? {#action}

<<<<<<< Updated upstream
> `optional` **action**: `ObjectOrArray`\<`string` \| `IOdrlAction`\>
=======
> `optional` **action?**: `ObjectOrArray`\<`string` \| `IOdrlAction`\>
>>>>>>> Stashed changes

The action associated with the rule.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`action`](IDataspaceProtocolOfferBase.md#action)

***

### inheritFrom? {#inheritfrom}

<<<<<<< Updated upstream
> `optional` **inheritFrom**: `ObjectOrArray`\<`string`\>
=======
> `optional` **inheritFrom?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`inheritFrom`](IDataspaceProtocolOfferBase.md#inheritfrom)

***

### conflict? {#conflict}

> `optional` **conflict?**: `ConflictStrategyType`

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`conflict`](IDataspaceProtocolOfferBase.md#conflict)

***

### permission? {#permission}

<<<<<<< Updated upstream
> `optional` **permission**: `ObjectOrArray`\<`IOdrlPermission`\>
=======
> `optional` **permission?**: `ObjectOrArray`\<`IOdrlPermission`\>
>>>>>>> Stashed changes

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`permission`](IDataspaceProtocolOfferBase.md#permission)

***

### prohibition? {#prohibition}

<<<<<<< Updated upstream
> `optional` **prohibition**: `ObjectOrArray`\<`IOdrlProhibition`\>
=======
> `optional` **prohibition?**: `ObjectOrArray`\<`IOdrlProhibition`\>
>>>>>>> Stashed changes

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`prohibition`](IDataspaceProtocolOfferBase.md#prohibition)

***

### obligation? {#obligation}

<<<<<<< Updated upstream
> `optional` **obligation**: `ObjectOrArray`\<`IOdrlDuty`\>
=======
> `optional` **obligation?**: `ObjectOrArray`\<`IOdrlDuty`\>
>>>>>>> Stashed changes

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`obligation`](IDataspaceProtocolOfferBase.md#obligation)
