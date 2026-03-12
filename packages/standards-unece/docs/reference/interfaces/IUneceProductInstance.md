# Interface: IUneceProductInstance

An individual trade product or batch of similar trade products produced by human or mechanical effort or by a natural
process.

## See

https://vocabulary.uncefact.org/ProductInstance

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductInstance"`

JSON-LD Type.

***

### actualQuantity? {#actualquantity}

> `optional` **actualQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual quantity of items in this trade product instance.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### ammunitionId? {#ammunitionid}

> `optional` **ammunitionId**: `string` \| `IJsonLdValueObject`

A unique ammunition identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/ammunitionId

***

### applicableClassification? {#applicableclassification}

> `optional` **applicableClassification**: [`IUneceClassification`](IUneceClassification.md)[]

A product classification applicable to this trade product instance.

#### See

https://vocabulary.uncefact.org/applicableClassification

***

### applicableGoodsCharacteristic? {#applicablegoodscharacteristic}

> `optional` **applicableGoodsCharacteristic**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

A distinguishing material feature applicable to this trade product instance.

#### See

https://vocabulary.uncefact.org/applicableGoodsCharacteristic

***

### applicableProductCharacteristic? {#applicableproductcharacteristic}

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this trade product instance.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### appliedProcess? {#appliedprocess}

> `optional` **appliedProcess**: [`IUneceProductHandlingProcess`](IUneceProductHandlingProcess.md)[]

A product handling process applied to this trade product instance, such as manufacturing or storage.

#### See

https://vocabulary.uncefact.org/appliedProcess

***

### batchId? {#batchid}

> `optional` **batchId**: `string` \| `IJsonLdValueObject`

The unique batch identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/batchId

***

### bestBeforeDateTime? {#bestbeforedatetime}

> `optional` **bestBeforeDateTime**: `string`

The date, time, date time, or other date time value before which it is best to consume the items contained in this trade
product instance.

#### See

https://vocabulary.uncefact.org/bestBeforeDateTime

***

### brandNameAdditionalInformationNote? {#brandnameadditionalinformationnote}

> `optional` **brandNameAdditionalInformationNote**: [`IUneceNote`](IUneceNote.md)[]

An additional brand name information note for this trade product instance.

#### See

https://vocabulary.uncefact.org/brandNameAdditionalInformationNote

***

### ceramicCapacitorId? {#ceramiccapacitorid}

> `optional` **ceramicCapacitorId**: `string` \| `IJsonLdValueObject`

The ceramic capacitor identifier of this trade product instance.

#### See

https://vocabulary.uncefact.org/ceramicCapacitorId

***

### certificationEvidenceDocument? {#certificationevidencedocument}

> `optional` **certificationEvidenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document providing evidence of certification for this trade product instance.

#### See

https://vocabulary.uncefact.org/certificationEvidenceDocument

***

### commonName? {#commonname}

> `optional` **commonName**: `string`

A common name, expressed as text, for this trade product instance.

#### See

https://vocabulary.uncefact.org/commonName

***

### dNAMarkerId? {#dnamarkerid}

> `optional` **dNAMarkerId**: `string` \| `IJsonLdValueObject`

The DNA marker identifier of this trade product instance.

#### See

https://vocabulary.uncefact.org/dNAMarkerId

***

### disposalReasonCode? {#disposalreasoncode}

> `optional` **disposalReasonCode**: `string`

A code specifying a disposal reason for this trade product instance.

#### See

https://vocabulary.uncefact.org/disposalReasonCode

***

### ePCId? {#epcid}

> `optional` **ePCId**: `string` \| `IJsonLdValueObject`

The EPC (Electronic Product Code) identifier of this trade product instance.

#### See

https://vocabulary.uncefact.org/ePCId

***

### equipmentId? {#equipmentid}

> `optional` **equipmentId**: `string` \| `IJsonLdValueObject`

A unique equipment identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/equipmentId

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value of expiry of the items contained in the trade product instance.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### globalSerialId? {#globalserialid}

> `optional` **globalSerialId**: `string` \| `IJsonLdValueObject`

The unique global serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/globalSerialId

***

### iUIDId? {#iuidid}

> `optional` **iUIDId**: `string` \| `IJsonLdValueObject`

A unique Department of Defense Item Unique Identifier (IUID) for this trade product instance.

#### See

https://vocabulary.uncefact.org/iUIDId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/identifier

***

### ingredientAdditionalInformationNote? {#ingredientadditionalinformationnote}

> `optional` **ingredientAdditionalInformationNote**: [`IUneceNote`](IUneceNote.md)[]

A note providing additional ingredient information for this trade product instance.

#### See

https://vocabulary.uncefact.org/ingredientAdditionalInformationNote

***

### inspectionDocument? {#inspectiondocument}

> `optional` **inspectionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced inspection document for this trade product instance.

#### See

https://vocabulary.uncefact.org/inspectionDocument

***

### inspectionEvent? {#inspectionevent}

> `optional` **inspectionEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The inspection event for this trade product instance.

#### See

https://vocabulary.uncefact.org/inspectionEvent

***

### intendedUse? {#intendeduse}

> `optional` **intendedUse**: `string`

An intended use, expressed as text, for this trade product instance.

#### See

https://vocabulary.uncefact.org/intendedUse

***

### kanbanId? {#kanbanid}

> `optional` **kanbanId**: `string` \| `IJsonLdValueObject`

The unique kanban identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/kanbanId

***

### lotId? {#lotid}

> `optional` **lotId**: `string` \| `IJsonLdValueObject`

The unique lot identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/lotId

***

### manufacturerAssignedSerialId? {#manufacturerassignedserialid}

> `optional` **manufacturerAssignedSerialId**: `string` \| `IJsonLdValueObject`

The unique manufacturer assigned serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/manufacturerAssignedSerialId

***

### originLocation? {#originlocation}

> `optional` **originLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location of origin for this supply chain product instance.

#### See

https://vocabulary.uncefact.org/originLocation

***

### packagingEvent? {#packagingevent}

> `optional` **packagingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The packaging event for this trade product instance.

#### See

https://vocabulary.uncefact.org/packagingEvent

***

### processingEvent? {#processingevent}

> `optional` **processingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The processing event for this trade product instance.

#### See

https://vocabulary.uncefact.org/processingEvent

***

### productCharacteristic? {#productcharacteristic}

> `optional` **productCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic for this trade product instance.

#### See

https://vocabulary.uncefact.org/productCharacteristic

***

### productionEvent? {#productionevent}

> `optional` **productionEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The production event for this trade product instance.

#### See

https://vocabulary.uncefact.org/productionEvent

***

### qualityGradeAdditionalInformationNote? {#qualitygradeadditionalinformationnote}

> `optional` **qualityGradeAdditionalInformationNote**: [`IUneceNote`](IUneceNote.md)[]

A note providing additional quality grade information for this trade product instance.

#### See

https://vocabulary.uncefact.org/qualityGradeAdditionalInformationNote

***

### reclassificationEvent? {#reclassificationevent}

> `optional` **reclassificationEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A reclassification supply chain event for this trade product instance.

#### See

https://vocabulary.uncefact.org/reclassificationEvent

***

### registrationId? {#registrationid}

> `optional` **registrationId**: `string` \| `IJsonLdValueObject`

A unique registration identifier, such as a vehicle licence plate identification, for this trade product instance.

#### See

https://vocabulary.uncefact.org/registrationId

***

### scientificName? {#scientificname}

> `optional` **scientificName**: `string`

A scientific name, expressed as text, for this trade product instance.

#### See

https://vocabulary.uncefact.org/scientificName

***

### sellByDateTime? {#sellbydatetime}

> `optional` **sellByDateTime**: `string`

The date, time, date time, or other date time value by after which the items contained in the trade product instance
should not be sold.

#### See

https://vocabulary.uncefact.org/sellByDateTime

***

### serialId? {#serialid}

> `optional` **serialId**: `string` \| `IJsonLdValueObject`

A unique serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/serialId

***

### supplierAssignedSerialId? {#supplierassignedserialid}

> `optional` **supplierAssignedSerialId**: `string` \| `IJsonLdValueObject`

The unique supplier assigned serial identifier for this trade product instance.

#### See

https://vocabulary.uncefact.org/supplierAssignedSerialId

***

### usedPackaging? {#usedpackaging}

> `optional` **usedPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)

Packaging used for this trade product instance.

#### See

https://vocabulary.uncefact.org/usedPackaging
