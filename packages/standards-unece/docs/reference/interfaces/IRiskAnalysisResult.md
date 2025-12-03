# Interface: IRiskAnalysisResult

The result of a logistics risk analysis calculation.

## See

https://vocabulary.uncefact.org/RiskAnalysisResult

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"RiskAnalysisResult"`

JSON-LD Type.

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### consignmentRiskRelatedCode?

> `optional` **consignmentRiskRelatedCode**: `string`

A code specifying a consignment related risk for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/consignmentRiskRelatedCode

***

### description?

> `optional` **description**: `string`

The textual description of this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/description

***

### information?

> `optional` **information**: `string`

Information, expressed as text, concerning this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/information

***

### levelCode?

> `optional` **levelCode**: `string`

The code specifying the level for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/levelCode

***

### partyRiskRelatedCode?

> `optional` **partyRiskRelatedCode**: `string`

A code specifying a party related risk for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/partyRiskRelatedCode

***

### screeningMethodCode?

> `optional` **screeningMethodCode**: `string`

A code specifying a method of screening used in this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/screeningMethodCode

***

### securityExemptionCode?

> `optional` **securityExemptionCode**: `string`

A code specifying a security exemption for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/securityExemptionCode

***

### transportEquipmentRiskRelatedCode?

> `optional` **transportEquipmentRiskRelatedCode**: `string`

A code specifying a transport equipment related risk for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/transportEquipmentRiskRelatedCode

***

### transportMovementRiskRelatedCode?

> `optional` **transportMovementRiskRelatedCode**: `string`

A code specifying a transport movement related risk for this logistics risk analysis result.

#### See

https://vocabulary.uncefact.org/transportMovementRiskRelatedCode
