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

> `optional` **profile?**: `ObjectOrArray`\<`string`\>

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`profile`](IDataspaceProtocolOfferBase.md#profile)

***

### assignee? {#assignee}

> `optional` **assignee?**: `ObjectOrArray`\<`string` \| `IOdrlParty` \| `IOdrlPartyCollection`\>

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`assignee`](IDataspaceProtocolOfferBase.md#assignee)

***

### target? {#target}

> `optional` **target?**: `ObjectOrArray`\<`string` \| `IOdrlAsset` \| `IOdrlAssetCollection`\>

The target asset for the rule.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`target`](IDataspaceProtocolOfferBase.md#target)

***

### action? {#action}

> `optional` **action?**: `ObjectOrArray`\<`string` \| `IOdrlAction`\>

The action associated with the rule.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`action`](IDataspaceProtocolOfferBase.md#action)

***

### inheritFrom? {#inheritfrom}

> `optional` **inheritFrom?**: `ObjectOrArray`\<`string`\>

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`inheritFrom`](IDataspaceProtocolOfferBase.md#inheritfrom)

***

### conflict? {#conflict}

> `optional` **conflict?**: `OdrlConflictStrategyType`

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`conflict`](IDataspaceProtocolOfferBase.md#conflict)

***

### permission? {#permission}

> `optional` **permission?**: `ObjectOrArray`\<`IOdrlPermission`\>

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`permission`](IDataspaceProtocolOfferBase.md#permission)

***

### prohibition? {#prohibition}

> `optional` **prohibition?**: `ObjectOrArray`\<`IOdrlProhibition`\>

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`prohibition`](IDataspaceProtocolOfferBase.md#prohibition)

***

### obligation? {#obligation}

> `optional` **obligation?**: `ObjectOrArray`\<`IOdrlDuty`\>

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md).[`obligation`](IDataspaceProtocolOfferBase.md#obligation)
