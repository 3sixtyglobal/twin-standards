# Interface: IOdrlRule

Base interface for ODRL Rules.
https://www.w3.org/TR/odrl-model/#rule

## Extended by

- [`IOdrlDuty`](IOdrlDuty.md)
- [`IOdrlPermission`](IOdrlPermission.md)
- [`IOdrlProhibition`](IOdrlProhibition.md)

## Properties

### uid? {#uid}

> `optional` **uid**: `string`

Optional unique identifier for the rule.

***

### action? {#action}

> `optional` **action**: `string` \| [`IOdrlAction`](IOdrlAction.md) \| (`string` \| [`IOdrlAction`](IOdrlAction.md))[]

The action associated with the rule.

***

### target? {#target}

> `optional` **target**: `string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md) \| (`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md) \| [`IOdrlAsset`](IOdrlAsset.md))[]

The target asset for the rule.

***

### assigner? {#assigner}

> `optional` **assigner**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md) \| (`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md))[]

The assigner of the rule.

***

### assignee? {#assignee}

> `optional` **assignee**: `string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md) \| (`string` \| [`IOdrlPartyCollection`](IOdrlPartyCollection.md) \| [`IOdrlParty`](IOdrlParty.md))[]

The assignee of the rule.

***

### constraint? {#constraint}

> `optional` **constraint**: [`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md) \| ([`IOdrlConstraint`](IOdrlConstraint.md) \| [`IOdrlLogicalConstraint`](IOdrlLogicalConstraint.md))[]

Constraints applied to the rule.

***

### summary? {#summary}

> `optional` **summary**: `string`

Additional relation sub-properties as defined in ODRL profiles.
For example, 'summary' in profile "http://example.com/odrl:profile:03"
indicates where the output should be stored.
