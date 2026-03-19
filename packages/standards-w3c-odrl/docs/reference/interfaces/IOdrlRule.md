# Interface: IOdrlRule

Base interface for ODRL Rules.
https://www.w3.org/TR/odrl-model/#rule

## Extended by

- [`IOdrlDuty`](IOdrlDuty.md)
- [`IOdrlPermission`](IOdrlPermission.md)
- [`IOdrlProhibition`](IOdrlProhibition.md)

## Properties

### uid? {#uid}

> `optional` **uid?**: `string`

Optional unique identifier for the rule.

***

### action? {#action}

<<<<<<< Updated upstream
> `optional` **action**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>
=======
> `optional` **action?**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>
>>>>>>> Stashed changes

The action associated with the rule.

***

### target? {#target}

<<<<<<< Updated upstream
> `optional` **target**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>
=======
> `optional` **target?**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>
>>>>>>> Stashed changes

The target asset for the rule.

***

### assigner? {#assigner}

<<<<<<< Updated upstream
> `optional` **assigner**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
=======
> `optional` **assigner?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
>>>>>>> Stashed changes

The assigner of the rule.

***

### assignee? {#assignee}

<<<<<<< Updated upstream
> `optional` **assignee**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
=======
> `optional` **assignee?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
>>>>>>> Stashed changes

The assignee of the rule.

***

### constraint? {#constraint}

<<<<<<< Updated upstream
> `optional` **constraint**: `ObjectOrArray`\<[`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md)\>
=======
> `optional` **constraint?**: `ObjectOrArray`\<[`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md)\>
>>>>>>> Stashed changes

Constraints applied to the rule.

***

### summary? {#summary}

> `optional` **summary?**: `string`

Additional relation sub-properties as defined in ODRL profiles.
For example, 'summary' in profile "http://example.com/odrl:profile:03"
indicates where the output should be stored.
