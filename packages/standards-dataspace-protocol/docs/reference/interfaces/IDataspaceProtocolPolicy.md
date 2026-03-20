# Interface: IDataspaceProtocolPolicy

Policy interface compliant with Eclipse Data Space Protocol.

Extends IOdrlPolicy with DS Protocol-specific constraints:
- `@id` is REQUIRED (used as the primary policy identifier in DS Protocol)
- `@context` is omitted (inherited from the parent Dataset/Distribution)

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - IOdrlPolicy from @twin.org/standards-w3c-odrl

## Extends

- `Omit`\<`IOdrlPolicy`, `"uid"`\>

## Properties

### @id {#id}

> **@id**: `string`

Unique identifier for the policy.

***

### @context {#context}

> **@context**: `OdrlContextType`

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

#### Inherited from

`Omit.@context`

***

### @type {#type}

> **@type**: `OdrlPolicyType`

The type of policy.
Must be one of: "Set", "Offer", "Agreement"

#### Inherited from

`Omit.@type`

***

### profile? {#profile}

> `optional` **profile?**: `ObjectOrArray`\<`string`\>

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

`Omit.profile`

***

### assigner? {#assigner}

> `optional` **assigner?**: `ObjectOrArray`\<`string` \| `IOdrlParty` \| `IOdrlPartyCollection`\>

The assigner of the policy.
Applies to all rules unless overridden at rule level.

#### Inherited from

`Omit.assigner`

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
