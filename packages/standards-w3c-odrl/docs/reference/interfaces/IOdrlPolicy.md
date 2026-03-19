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

> **@type**: [`PolicyType`](../type-aliases/PolicyType.md)

The type of policy.
Must be one of: "Set", "Offer", "Agreement"

***

### uid {#uid}

> **uid**: `string`

The unique identifier for the policy.
Must be an IRI.

***

### profile? {#profile}

<<<<<<< Updated upstream
> `optional` **profile**: `ObjectOrArray`\<`string`\>
=======
> `optional` **profile?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

The profile(s) this policy conforms to.
IRIs identifying the ODRL Profile(s).

***

### assigner? {#assigner}

<<<<<<< Updated upstream
> `optional` **assigner**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
=======
> `optional` **assigner?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
>>>>>>> Stashed changes

The assigner of the policy.
Applies to all rules unless overridden at rule level.

***

### assignee? {#assignee}

<<<<<<< Updated upstream
> `optional` **assignee**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
=======
> `optional` **assignee?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
>>>>>>> Stashed changes

The assignee of the policy.
Applies to all rules unless overridden at rule level.

***

### target? {#target}

<<<<<<< Updated upstream
> `optional` **target**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>
=======
> `optional` **target?**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>
>>>>>>> Stashed changes

The target asset for the rule.

***

### action? {#action}

<<<<<<< Updated upstream
> `optional` **action**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>
=======
> `optional` **action?**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>
>>>>>>> Stashed changes

The action associated with the rule.

***

### inheritFrom? {#inheritfrom}

<<<<<<< Updated upstream
> `optional` **inheritFrom**: `ObjectOrArray`\<`string`\>
=======
> `optional` **inheritFrom?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

The parent policy(ies) this policy inherits from.
IRIs identifying the parent Policy(ies).

***

### conflict? {#conflict}

> `optional` **conflict?**: [`ConflictStrategyType`](../type-aliases/ConflictStrategyType.md)

The conflict resolution strategy.
- perm: Permissions override Prohibitions
- prohibit: Prohibitions override Permissions
- invalid: Policy is void if conflicts exist (default)

***

### permission? {#permission}

<<<<<<< Updated upstream
> `optional` **permission**: `ObjectOrArray`\<[`IOdrlPermission`](IOdrlPermission.md)\>
=======
> `optional` **permission?**: `ObjectOrArray`\<[`IOdrlPermission`](IOdrlPermission.md)\>
>>>>>>> Stashed changes

The permissions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### prohibition? {#prohibition}

<<<<<<< Updated upstream
> `optional` **prohibition**: `ObjectOrArray`\<[`IOdrlProhibition`](IOdrlProhibition.md)\>
=======
> `optional` **prohibition?**: `ObjectOrArray`\<[`IOdrlProhibition`](IOdrlProhibition.md)\>
>>>>>>> Stashed changes

The prohibitions in the policy.
At least one of permission, prohibition, or obligation must be present.

***

### obligation? {#obligation}

<<<<<<< Updated upstream
> `optional` **obligation**: `ObjectOrArray`\<[`IOdrlDuty`](IOdrlDuty.md)\>
=======
> `optional` **obligation?**: `ObjectOrArray`\<[`IOdrlDuty`](IOdrlDuty.md)\>
>>>>>>> Stashed changes

The obligations in the policy.
At least one of permission, prohibition, or obligation must be present.
