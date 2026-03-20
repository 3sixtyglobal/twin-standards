# Interface: IOdrlPolicy

Interface representing an ODRL Policy.
https://www.w3.org/TR/odrl-model/#policy

## Extended by

- [`IOdrlAgreement`](IOdrlAgreement.md)
- [`IOdrlOffer`](IOdrlOffer.md)
- [`IOdrlSet`](IOdrlSet.md)

## Properties

### @context {#context}

> **@context**: [`OdrlContextType`](../type-aliases/OdrlContextType.md)

The context for the policy.
Must include "https://www.w3.org/ns/odrl.jsonld"

***

### @type {#type}

> **@type**: [`OdrlPolicyType`](../type-aliases/OdrlPolicyType.md)

The type of policy.
Must be one of: "Set", "Offer", "Agreement"

***

### uid {#uid}

> **uid**: `string`

The unique identifier for the policy.
Must be an IRI.

***

### profile? {#profile}

> `optional` **profile?**: `ObjectOrArray`\<`string`\>

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

***

### assigner? {#assigner}

> `optional` **assigner?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>

The assigner of the policy.
Applies to all rules unless overridden at rule level.

***

### assignee? {#assignee}

> `optional` **assignee?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>

The assignee of the policy.
Applies to all rules unless overridden at rule level.

***

### target? {#target}

> `optional` **target?**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>

The target asset for the rule.

***

### action? {#action}

> `optional` **action?**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>

The action associated with the rule.

***

### inheritFrom? {#inheritfrom}

> `optional` **inheritFrom?**: `ObjectOrArray`\<`string`\>

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

***

### conflict? {#conflict}

> `optional` **conflict?**: [`OdrlConflictStrategyType`](../type-aliases/OdrlConflictStrategyType.md)

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

***

### permission? {#permission}

> `optional` **permission?**: `ObjectOrArray`\<[`IOdrlPermission`](IOdrlPermission.md)\>

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### prohibition? {#prohibition}

> `optional` **prohibition?**: `ObjectOrArray`\<[`IOdrlProhibition`](IOdrlProhibition.md)\>

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### obligation? {#obligation}

> `optional` **obligation?**: `ObjectOrArray`\<[`IOdrlDuty`](IOdrlDuty.md)\>

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.
