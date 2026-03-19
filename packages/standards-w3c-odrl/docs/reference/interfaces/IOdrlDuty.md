# Interface: IOdrlDuty

Interface for Duty Rules.
A Duty is the obligation to exercise an action, with all refinements satisfied.
A Duty is fulfilled if all constraints are satisfied and if its action has been exercised.
https://www.w3.org/TR/odrl-model/#duty

## Extends

- [`IOdrlRule`](IOdrlRule.md)

## Properties

### attributedParty? {#attributedparty}

> `optional` **attributedParty**: `string`

The party to be attributed
Used when the duty involves attribution

***

### trackingParty? {#trackingparty}

> `optional` **trackingParty**: `string`

The party performing the tracking
Used when the duty involves tracking

***

### consequence? {#consequence}

> `optional` **consequence**: `ObjectOrArray`\<`IOdrlDuty`\>

The consequences if the duty is not fulfilled.
Only applicable when the Duty is referenced by a Rule with duty or obligation
properties.

***

### compensatedParty? {#compensatedparty}

> `optional` **compensatedParty**: `string`

The party to be compensated
Used when the duty involves compensation

***

### uid? {#uid}

> `optional` **uid**: `string`

Optional unique identifier for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`uid`](IOdrlRule.md#uid)

***

### action? {#action}

> `optional` **action**: `ObjectOrArray`\<`string` \| [`IOdrlAction`](IOdrlAction.md)\>

The action associated with the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`action`](IOdrlRule.md#action)

***

### target? {#target}

> `optional` **target**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md)\>

The target asset for the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`target`](IOdrlRule.md#target)

***

### assigner? {#assigner}

> `optional` **assigner**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>

The assigner of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assigner`](IOdrlRule.md#assigner)

***

### assignee? {#assignee}

> `optional` **assignee**: `ObjectOrArray`\<`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md)\>

The assignee of the rule.

#### Inherited from

[`IOdrlRule`](IOdrlRule.md).[`assignee`](IOdrlRule.md#assignee)

***

### constraint? {#constraint}

> `optional` **constraint**: `ObjectOrArray`\<[`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md)\>

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
