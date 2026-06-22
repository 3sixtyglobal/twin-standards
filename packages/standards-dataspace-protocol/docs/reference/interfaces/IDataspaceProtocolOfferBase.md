# Interface: IDataspaceProtocolOfferBase

Context-free offer interface compliant with Eclipse Data Space Protocol, for embedding within parent documents.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types

## Extends

- `Omit`\<`IOdrlOffer`, `"uid"` \| `"@context"`\>

## Extended by

- [`IDataspaceProtocolOffer`](IDataspaceProtocolOffer.md)

## Properties

### @id {#id}

> **@id**: `string`

Unique identifier for the offer.

***

### @type {#type}

> **@type**: `"Offer"`

The type must be "Offer".

#### Inherited from

`Omit.@type`

***

### assigner {#assigner}

> **assigner**: `string` \| `IOdrlParty`

The assigner of the offer.
Required for Offer policies.

#### Inherited from

`Omit.assigner`

***

### profile? {#profile}

> `optional` **profile?**: `ObjectOrArray`\<`string`\>

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

`Omit.profile`

***

### assignee? {#assignee}

> `optional` **assignee?**: `ObjectOrArray`\<`string` \| `IOdrlParty` \| `IOdrlPartyCollection`\>

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

`Omit.assignee`

***

### target? {#target}

> `optional` **target?**: `ObjectOrArray`\<`string` \| `IOdrlAsset` \| `IOdrlAssetCollection`\>

The target asset for the rule.

#### Inherited from

`Omit.target`

***

### action? {#action}

> `optional` **action?**: `ObjectOrArray`\<`string` \| `IOdrlAction`\>

The action associated with the rule.

#### Inherited from

`Omit.action`

***

### inheritFrom? {#inheritfrom}

> `optional` **inheritFrom?**: `ObjectOrArray`\<`string`\>

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

`Omit.inheritFrom`

***

### conflict? {#conflict}

> `optional` **conflict?**: `OdrlConflictStrategyType`

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

`Omit.conflict`

***

### permission? {#permission}

> `optional` **permission?**: `ObjectOrArray`\<`IOdrlPermission`\>

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.permission`

***

### prohibition? {#prohibition}

> `optional` **prohibition?**: `ObjectOrArray`\<`IOdrlProhibition`\>

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.prohibition`

***

### obligation? {#obligation}

> `optional` **obligation?**: `ObjectOrArray`\<`IOdrlDuty`\>

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.obligation`
