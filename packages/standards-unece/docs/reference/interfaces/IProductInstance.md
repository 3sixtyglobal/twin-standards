# Interface: IProductInstance

An individual trade product or batch of similar trade products produced by human or mechanical effort or by a natural
process.

## See

https://vocabulary.uncefact.org/ProductInstance

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

> **type**: `"ProductInstance"`

JSON-LD Type.

***

### actualQuantity?

> `optional` **actualQuantity**: [`IQuantityType`](IQuantityType.md)

The actual quantity of items in this trade product instance.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### ammunitionId?

> `optional` **ammunitionId**: `string`

A unique ammunition identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/ammunitionId

***

### applicableClassification?

> `optional` **applicableClassification**: [`IClassification`](IClassification.md)[]

A product classification applicable to this trade product instance.

#### See

https://vocabulary.uncefact.org/applicableClassification

***

### applicableGoodsCharacteristic?

> `optional` **applicableGoodsCharacteristic**: [`IGoodsCharacteristic`](IGoodsCharacteristic.md)[]

A distinguishing material feature applicable to this trade product instance.

#### See

https://vocabulary.uncefact.org/applicableGoodsCharacteristic

***

### applicableProductCharacteristic?

> `optional` **applicableProductCharacteristic**: [`IProductCharacteristic`](IProductCharacteristic.md)[]

A product characteristic applicable to this trade product instance.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### appliedProcess?

> `optional` **appliedProcess**: [`IProductHandlingProcess`](IProductHandlingProcess.md)[]

A product handling process applied to this trade product instance, such as manufacturing or storage.

#### See

https://vocabulary.uncefact.org/appliedProcess

***

### batchId?

> `optional` **batchId**: `string`

The unique batch identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/batchId

***

### bestBeforeDateTime?

> `optional` **bestBeforeDateTime**: `string`

The date, time, date time, or other date time value before which it is best to consume the items contained in this trade
product instance.

#### See

https://vocabulary.uncefact.org/bestBeforeDateTime

***

### brandNameAdditionalInformationNote?

> `optional` **brandNameAdditionalInformationNote**: [`INote`](INote.md)[]

An additional brand name information note for this trade product instance.

#### See

https://vocabulary.uncefact.org/brandNameAdditionalInformationNote

***

### ceramicCapacitorId?

> `optional` **ceramicCapacitorId**: `string`

The ceramic capacitor identifier of this trade product instance.

#### See

https://vocabulary.uncefact.org/ceramicCapacitorId

***

### certificationEvidenceDocument?

> `optional` **certificationEvidenceDocument**: [`IDocument`](IDocument.md)[]

A referenced document providing evidence of certification for this trade product instance.

#### See

https://vocabulary.uncefact.org/certificationEvidenceDocument

***

### commonName?

> `optional` **commonName**: `string`

A common name, expressed as text, for this trade product instance.

#### See

https://vocabulary.uncefact.org/commonName

***

### dNAMarkerId?

> `optional` **dNAMarkerId**: `string`

The DNA marker identifier of this trade product instance.

#### See

https://vocabulary.uncefact.org/dNAMarkerId

***

### disposalReasonCode?

> `optional` **disposalReasonCode**: `string`

A code specifying a disposal reason for this trade product instance.

#### See

https://vocabulary.uncefact.org/disposalReasonCode

***

### ePCId?

> `optional` **ePCId**: `string`

The EPC (Electronic Product Code) identifier of this trade product instance.

#### See

https://vocabulary.uncefact.org/ePCId

***

### equipmentId?

> `optional` **equipmentId**: `string`

A unique equipment identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/equipmentId

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value of expiry of the items contained in the trade product instance.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### globalSerialId?

> `optional` **globalSerialId**: `string`

The unique global serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/globalSerialId

***

### iUIDId?

> `optional` **iUIDId**: `string`

A unique Department of Defense Item Unique Identifier (IUID) for this trade product instance.

#### See

https://vocabulary.uncefact.org/iUIDId

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/identifier

***

### ingredientAdditionalInformationNote?

> `optional` **ingredientAdditionalInformationNote**: [`INote`](INote.md)[]

A note providing additional ingredient information for this trade product instance.

#### See

https://vocabulary.uncefact.org/ingredientAdditionalInformationNote

***

### inspectionDocument?

> `optional` **inspectionDocument**: [`IDocument`](IDocument.md)[]

A referenced inspection document for this trade product instance.

#### See

https://vocabulary.uncefact.org/inspectionDocument

***

### inspectionEvent?

> `optional` **inspectionEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The inspection event for this trade product instance.

#### See

https://vocabulary.uncefact.org/inspectionEvent

***

### intendedUse?

> `optional` **intendedUse**: `string`

An intended use, expressed as text, for this trade product instance.

#### See

https://vocabulary.uncefact.org/intendedUse

***

### kanbanId?

> `optional` **kanbanId**: `string`

The unique kanban identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/kanbanId

***

### lotId?

> `optional` **lotId**: `string`

The unique lot identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/lotId

***

### manufacturerAssignedSerialId?

> `optional` **manufacturerAssignedSerialId**: `string`

The unique manufacturer assigned serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/manufacturerAssignedSerialId

***

### originLocation?

> `optional` **originLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A location of origin for this supply chain product instance.

#### See

https://vocabulary.uncefact.org/originLocation

***

### packagingEvent?

> `optional` **packagingEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The packaging event for this trade product instance.

#### See

https://vocabulary.uncefact.org/packagingEvent

***

### processingEvent?

> `optional` **processingEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The processing event for this trade product instance.

#### See

https://vocabulary.uncefact.org/processingEvent

***

### productCharacteristic?

> `optional` **productCharacteristic**: [`IProductCharacteristic`](IProductCharacteristic.md)[]

A product characteristic for this trade product instance.

#### See

https://vocabulary.uncefact.org/productCharacteristic

***

### productionEvent?

> `optional` **productionEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The production event for this trade product instance.

#### See

https://vocabulary.uncefact.org/productionEvent

***

### qualityGradeAdditionalInformationNote?

> `optional` **qualityGradeAdditionalInformationNote**: [`INote`](INote.md)[]

A note providing additional quality grade information for this trade product instance.

#### See

https://vocabulary.uncefact.org/qualityGradeAdditionalInformationNote

***

### reclassificationEvent?

> `optional` **reclassificationEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A reclassification supply chain event for this trade product instance.

#### See

https://vocabulary.uncefact.org/reclassificationEvent

***

### registrationId?

> `optional` **registrationId**: `string`

A unique registration identifier, such as a vehicle licence plate identification, for this trade product instance.

#### See

https://vocabulary.uncefact.org/registrationId

***

### scientificName?

> `optional` **scientificName**: `string`

A scientific name, expressed as text, for this trade product instance.

#### See

https://vocabulary.uncefact.org/scientificName

***

### sellByDateTime?

> `optional` **sellByDateTime**: `string`

The date, time, date time, or other date time value by after which the items contained in the trade product instance
should not be sold.

#### See

https://vocabulary.uncefact.org/sellByDateTime

***

### serialId?

> `optional` **serialId**: `string`

A unique serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/serialId

***

### supplierAssignedSerialId?

> `optional` **supplierAssignedSerialId**: `string`

The unique supplier assigned serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/supplierAssignedSerialId

***

### usedPackaging?

> `optional` **usedPackaging**: [`ISupplyChainPackaging`](ISupplyChainPackaging.md)[]

Packaging used for this trade product instance.

#### See

https://vocabulary.uncefact.org/usedPackaging
