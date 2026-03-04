# Interface: IDataspaceProtocolOffer

Offer interface compliant with Eclipse Data Space Protocol.

Extends IOdrlOffer with DS Protocol-specific constraints:
- `@id` is REQUIRED (used as the primary offer identifier in DS Protocol)
- `@context` is omitted (inherited from the parent Dataset/Distribution)
- `uid` is optional (DS Protocol uses `@id` instead of ODRL `uid`)

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - IOdrlOffer from @twin.org/standards-w3c-odrl

## Extends

- `Omit`\<`IOdrlOffer`, `"@context"` \| `"uid"`\>

## Properties

### @id

> **@id**: `string`

Unique identifier for the offer.

***

### uid?

> `optional` **uid**: `string`

Unique identifier for the offer.

***

### @type

> **@type**: `"Offer"`

The type must be "Offer".

#### Inherited from

`Omit.@type`

***

### assigner

> **assigner**: `string` \| `IOdrlParty`

The assigner of the offer.
Required for Offer policies.

#### Inherited from

`Omit.assigner`

***

### profile?

> `optional` **profile**: `string` \| `string`[]

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

`Omit.profile`

***

### assignee?

> `optional` **assignee**: `string` \| `IOdrlParty` \| `IOdrlPartyCollection` \| (`string` \| `IOdrlParty` \| `IOdrlPartyCollection`)[]

The assignee of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

`Omit.assignee`

***

### target?

> `optional` **target**: `string` \| `IOdrlAsset` \| `IOdrlAssetCollection` \| (`string` \| `IOdrlAsset` \| `IOdrlAssetCollection`)[]

The target asset for the rule.

#### Inherited from

`Omit.target`

***

### action?

> `optional` **action**: `string` \| `IOdrlAction` \| (`string` \| `IOdrlAction`)[]

The action associated with the rule.

#### Inherited from

`Omit.action`

***

### inheritFrom?

> `optional` **inheritFrom**: `string` \| `string`[]

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

#### Inherited from

`Omit.inheritFrom`

***

### conflict?

> `optional` **conflict**: `ConflictStrategyType`

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

#### Inherited from

`Omit.conflict`

***

### permission?

> `optional` **permission**: `IOdrlPermission` \| `IOdrlPermission`[]

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.permission`

***

### prohibition?

> `optional` **prohibition**: `IOdrlProhibition` \| `IOdrlProhibition`[]

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.prohibition`

***

### obligation?

> `optional` **obligation**: `IOdrlDuty` \| `IOdrlDuty`[]

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.

#### Inherited from

`Omit.obligation`
