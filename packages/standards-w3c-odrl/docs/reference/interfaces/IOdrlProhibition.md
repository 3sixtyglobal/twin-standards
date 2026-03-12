# Interface: IOdrlProhibition

Interface for Prohibition Rules.
https://www.w3.org/TR/odrl-model/#prohibition

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Properties

### remedy? {#remedy}

> `optional` **remedy**: [`IOdrlDuty`](IOdrlDuty.md) \| [`IOdrlDuty`](IOdrlDuty.md)[]

The remedies that must be fulfilled if prohibition is violated.

***

### uid? {#uid}

> `optional` **uid**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action? {#action}

> `optional` **action**: `string` \| [`IOdrlAction`](IOdrlAction.md) \| (`string` \| [`IOdrlAction`](IOdrlAction.md))[]

The action associated with the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`action`](IOdrlRule.md#action)

***

### target? {#target}

> `optional` **target**: `string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`target`](IOdrlRule.md#target)

***

### assigner? {#assigner}

> `optional` **assigner**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md) \| (`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md))[]

The assigner of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assigner`](IOdrlRule.md#assigner)

***

### assignee? {#assignee}

> `optional` **assignee**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md) \| (`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md))[]

The assignee of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assignee`](IOdrlRule.md#assignee)

***

### constraint? {#constraint}

> `optional` **constraint**: [`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md) \| ([`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md))[]

Constraints applied to the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`constraint`](IOdrlRule.md#constraint)

***

### summary? {#summary}

> `optional` **summary**: `string`

Additional relation sub-properties as defined in ODRL profiles.
For example, 'summary' in profile "http://example.com/odrl:profile:03"
indicates where the output should be stored.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`summary`](IOdrlRule.md#summary)
