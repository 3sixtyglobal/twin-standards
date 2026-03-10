# Interface: IUneceReturnableAssetInstructions

The procedures to follow for returnable assets, such as reusable packaging (pallets, crates).

## See

https://vocabulary.uncefact.org/ReturnableAssetInstructions

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ReturnableAssetInstructions"`

JSON-LD Type.

***

### depositValueSpecifiedAmount?

> `optional` **depositValueSpecifiedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A deposit value specified in these returnable asset instructions.

#### See

https://vocabulary.uncefact.org/depositValueSpecifiedAmount

***

### depositValueValidityPeriod?

> `optional` **depositValueValidityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period during which the deposit value specified in these returnable asset instructions is valid.

#### See

https://vocabulary.uncefact.org/depositValueValidityPeriod

***

### materialId?

> `optional` **materialId**: `string` \| `IJsonLdValueObject`

An identifier of the material to which these returnable asset instructions apply.

#### See

https://vocabulary.uncefact.org/materialId

***

### returnableAssetInstructionsTermsAndConditionsDescriptionCode?

> `optional` **returnableAssetInstructionsTermsAndConditionsDescriptionCode**: `string`

The code specifying the description of the terms and conditions for these returnable asset instructions.

#### See

https://vocabulary.uncefact.org/returnableAssetInstructionsTermsAndConditionsDescriptionCode

***

### termsAndConditionsDescription?

> `optional` **termsAndConditionsDescription**: `string`

A textual description of the terms and conditions for these returnable asset instructions.

#### See

https://vocabulary.uncefact.org/termsAndConditionsDescription
