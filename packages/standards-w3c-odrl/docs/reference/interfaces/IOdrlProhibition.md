# Interface: IOdrlProhibition

Interface for Prohibition Rules.
https://www.w3.org/TR/odrl-model/#prohibition

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Properties

### remedy? {#remedy}

<<<<<<< Updated upstream
> `optional` **remedy**: `ObjectOrArray`\<[`IOdrlDuty`](IOdrlDuty.md)\>
=======
> `optional` **remedy?**: `ObjectOrArray`\<[`IOdrlDuty`](IOdrlDuty.md)\>
>>>>>>> Stashed changes

The remedies that must be fulfilled if prohibition is violated.

***

### uid? {#uid}

> `optional` **uid?**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action? {#action}

<<<<<<< Updated upstream
> `optional` **action**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>
=======
> `optional` **action?**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>
>>>>>>> Stashed changes

The action associated with the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`action`](IOdrlRule.md#action)

***

### target? {#target}

<<<<<<< Updated upstream
> `optional` **target**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>
=======
> `optional` **target?**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>
>>>>>>> Stashed changes

The target asset for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`target`](IOdrlRule.md#target)

***

### assigner? {#assigner}

<<<<<<< Updated upstream
> `optional` **assigner**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
=======
> `optional` **assigner?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
>>>>>>> Stashed changes

The assigner of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assigner`](IOdrlRule.md#assigner)

***

### assignee? {#assignee}

<<<<<<< Updated upstream
> `optional` **assignee**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
=======
> `optional` **assignee?**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>
>>>>>>> Stashed changes

The assignee of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assignee`](IOdrlRule.md#assignee)

***

### constraint? {#constraint}

<<<<<<< Updated upstream
> `optional` **constraint**: `ObjectOrArray`\<[`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md)\>
=======
> `optional` **constraint?**: `ObjectOrArray`\<[`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md)\>
>>>>>>> Stashed changes

Constraints applied to the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`constraint`](IOdrlRule.md#constraint)

***

### summary? {#summary}

> `optional` **summary?**: `string`

Additional relation sub-properties as defined in ODRL profiles.
For example, 'summary' in profile "http://example.com/odrl:profile:03"
indicates where the output should be stored.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`summary`](IOdrlRule.md#summary)
