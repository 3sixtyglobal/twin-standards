# Interface: IDataspaceProtocolAgreement

Agreement interface compliant with Eclipse Data Space Protocol.

Extends IOdrlAgreement with DS Protocol-specific constraints:
- `@id` is REQUIRED (used as the primary agreement identifier in DS Protocol)
- `@context` is omitted (inherited from the parent Dataset/Distribution)

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - IOdrlAgreement from @twin.org/standards-w3c-odrl

## Extends

- `Omit`\<`IOdrlAgreement`, `"uid"`\>

## Properties

### @id {#id}

> **@id**: `string`

Unique identifier for the agreement.

***

### @type {#type}

> **@type**: `"Agreement"`

The type must be "Agreement".

#### Inherited from

`Omit.@type`

***

### assigner {#assigner}

> **assigner**: `string` \| `IOdrlParty`

The assigner of the agreement.
Required for Agreement policies.

#### Inherited from

`Omit.assigner`

***

### assignee {#assignee}

> **assignee**: `string` \| `IOdrlParty`

The assignee of the agreement.
Required for Agreement policies.

#### Inherited from

`Omit.assignee`

***

### @context {#context}

> **@context**: `OdrlContextType`

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

#### Inherited from

`Omit.@context`

***

### profile? {#profile}

> `optional` **profile?**: `ObjectOrArray`\<`string`\>

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

#### Inherited from

`Omit.profile`

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
