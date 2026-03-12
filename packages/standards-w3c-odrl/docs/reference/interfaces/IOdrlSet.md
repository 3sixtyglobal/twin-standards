# Interface: IOdrlSet

Interface representing an ODRL Set.
A Set is a basic policy type with no specific party requirements.
https://www.w3.org/TR/odrl-model/#policy-set

## Extends

- [`IOdrlPolicy`](IOdrlPolicy.md)

## Properties

### @context {#context}

> **@context**: [`OdrlContextType`](../type-aliases/OdrlContextType.md)

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`@context`](IOdrlPolicy.md#context)

***

### uid {#uid}

> **uid**: `string`

The unique identifier for the policy.
Must be an IRI.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`uid`](IOdrlPolicy.md#uid)

***

### profile? {#profile}

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`profile`](IOdrlPolicy.md#profile)

***

### assigner? {#assigner}

> `optional` **assigner**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md) \| (`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md))[]

The assigner of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`assigner`](IOdrlPolicy.md#assigner)

***

### assignee? {#assignee}

> `optional` **assignee**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md) \| (`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md))[]

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`assignee`](IOdrlPolicy.md#assignee)

***

### target? {#target}

> `optional` **target**: `string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`target`](IOdrlPolicy.md#target)

***

### action? {#action}

> `optional` **action**: `string` \| [`IOdrlAction`](IOdrlAction.md) \| (`string` \| [`IOdrlAction`](IOdrlAction.md))[]

The action associated with the rule.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`action`](IOdrlPolicy.md#action)

***

### inheritFrom? {#inheritfrom}

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`inheritFrom`](IOdrlPolicy.md#inheritfrom)

***

### conflict? {#conflict}

> `optional` **conflict**: [`ConflictStrategyType`](../type-aliases/ConflictStrategyType.md)

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`conflict`](IOdrlPolicy.md#conflict)

***

### permission? {#permission}

> `optional` **permission**: [`IOdrlPermission`](IOdrlPermission.md) \| [`IOdrlPermission`](IOdrlPermission.md)[]

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`permission`](IOdrlPolicy.md#permission)

***

### prohibition? {#prohibition}

> `optional` **prohibition**: [`IOdrlProhibition`](IOdrlProhibition.md) \| [`IOdrlProhibition`](IOdrlProhibition.md)[]

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`prohibition`](IOdrlPolicy.md#prohibition)

***

### obligation? {#obligation}

> `optional` **obligation**: [`IOdrlDuty`](IOdrlDuty.md) \| [`IOdrlDuty`](IOdrlDuty.md)[]

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

[`IOdrlPolicy`](IOdrlPolicy.md).[`obligation`](IOdrlPolicy.md#obligation)

***

### @type {#type}

> **@type**: `"Set"`

The type must be "Set".

#### Overrides

[`IOdrlPolicy`](IOdrlPolicy.md).[`@type`](IOdrlPolicy.md#type)
