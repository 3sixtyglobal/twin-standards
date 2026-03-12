# Interface: IDataspaceProtocolSet

Set interface compliant with Eclipse Data Space Protocol.

Extends IOdrlSet with DS Protocol-specific constraints:
- `@id` is REQUIRED (used as the primary set identifier in DS Protocol)
- `@context` is omitted (inherited from the parent Dataset/Distribution)

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - IOdrlSet from @twin.org/standards-w3c-odrl

## Extends

- `Omit`\<`IOdrlSet`, `"uid"`\>

## Properties

### @id {#id}

> **@id**: `string`

Unique identifier for the set.

***

### @context {#context}

> **@context**: `OdrlContextType`

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

#### Inherited from

`Omit.@context`

***

### profile? {#profile}

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

`Omit.profile`

***

### assigner? {#assigner}

> `optional` **assigner**: `string` \| `IOdrlParty` \| `IOdrlPartyCollection` \| (`string` \| `IOdrlParty` \| `IOdrlPartyCollection`)[]

The assigner of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

`Omit.assigner`

***

### assignee? {#assignee}

> `optional` **assignee**: `string` \| `IOdrlParty` \| `IOdrlPartyCollection` \| (`string` \| `IOdrlParty` \| `IOdrlPartyCollection`)[]

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

`Omit.assignee`

***

### target? {#target}

> `optional` **target**: `string` \| `IOdrlAsset` \| `IOdrlAssetCollection` \| (`string` \| `IOdrlAsset` \| `IOdrlAssetCollection`)[]

The target asset for the rule.

#### Inherited from

`Omit.target`

***

### action? {#action}

> `optional` **action**: `string` \| `IOdrlAction` \| (`string` \| `IOdrlAction`)[]

The action associated with the rule.

#### Inherited from

`Omit.action`

***

### inheritFrom? {#inheritfrom}

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

`Omit.inheritFrom`

***

### conflict? {#conflict}

> `optional` **conflict**: `ConflictStrategyType`

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

`Omit.conflict`

***

### permission? {#permission}

> `optional` **permission**: `IOdrlPermission` \| `IOdrlPermission`[]

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.permission`

***

### prohibition? {#prohibition}

> `optional` **prohibition**: `IOdrlProhibition` \| `IOdrlProhibition`[]

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.prohibition`

***

### obligation? {#obligation}

> `optional` **obligation**: `IOdrlDuty` \| `IOdrlDuty`[]

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.obligation`

***

### @type {#type}

> **@type**: `"Set"`

The type must be "Set".

#### Inherited from

`Omit.@type`
