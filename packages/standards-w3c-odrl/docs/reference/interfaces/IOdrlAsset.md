# Interface: IOdrlAsset

Interface for ODRL Assets.
https://www.w3.org/TR/odrl-model/#asset

## Extended by

- [`IOdrlAssetCollection`](IOdrlAssetCollection.md)

## Properties

### uid? {#uid}

> `optional` **uid?**: `string`

The unique identifier for the asset.
Should be an IRI.

***

### @type? {#type}

> `optional` **@type?**: `string`

The type of the asset.
Can be used to specify additional type information.

***

### partOf? {#partof}

<<<<<<< Updated upstream
> `optional` **partOf**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md)\>
=======
> `optional` **partOf?**: `ObjectOrArray`\<`string` \| [`IOdrlAssetCollection`](IOdrlAssetCollection.md)\>
>>>>>>> Stashed changes

Reference to the asset collection this asset is part of.
Used to identify an AssetCollection that this Asset is a member of.

***

### hasPolicy? {#haspolicy}

<<<<<<< Updated upstream
> `optional` **hasPolicy**: `ObjectOrArray`\<`string`\>
=======
> `optional` **hasPolicy?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

Reference to the policy that governs this asset.
Used to identify the Policy that governs this Asset.
