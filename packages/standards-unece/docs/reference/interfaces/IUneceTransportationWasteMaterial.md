# Interface: IUneceTransportationWasteMaterial

Any materials unused and rejected as unwanted resulting from transportation.

## See

https://vocabulary.uncefact.org/TransportationWasteMaterial

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

> **type**: `"TransportationWasteMaterial"`

JSON-LD Type.

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this transportation waste material.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this transportation waste material.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableTransportationWasteRecoveryDisposalProcess?

> `optional` **applicableTransportationWasteRecoveryDisposalProcess**: [`IUneceTransportationWasteRecoveryDisposalProcess`](IUneceTransportationWasteRecoveryDisposalProcess.md)[]

A transportation waste recovery disposal process applicable to this transportation waste material.

#### See

https://vocabulary.uncefact.org/applicableTransportationWasteRecoveryDisposalProcess

***

### completeDeliveryIndicator?

> `optional` **completeDeliveryIndicator**: `boolean`

The indication of whether or not a transportation waste material delivery is complete.

#### See

https://vocabulary.uncefact.org/completeDeliveryIndicator

***

### includedTransportationWasteMaterialComponent?

> `optional` **includedTransportationWasteMaterialComponent**: [`IUneceTransportationWasteMaterialComponent`](IUneceTransportationWasteMaterialComponent.md)[]

A material component included in this transportation waste.

#### See

https://vocabulary.uncefact.org/includedTransportationWasteMaterialComponent

***

### nextDeliveryEvent?

> `optional` **nextDeliveryEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A next delivery event for this transportation waste material.

#### See

https://vocabulary.uncefact.org/nextDeliveryEvent

***

### portReceptionFacilityParty?

> `optional` **portReceptionFacilityParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A port reception facility party for this transportation waste material.

#### See

https://vocabulary.uncefact.org/portReceptionFacilityParty

***

### previousDeliveryTransportEvent?

> `optional` **previousDeliveryTransportEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A previous delivery event for this transportation waste material.

#### See

https://vocabulary.uncefact.org/previousDeliveryTransportEvent

***

### receptionFacilityContact?

> `optional` **receptionFacilityContact**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

A reception facility contact for this transportation waste material.

#### See

https://vocabulary.uncefact.org/receptionFacilityContact

***

### treatmentFacilityParty?

> `optional` **treatmentFacilityParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A material treatment facility party for this transportation waste material.

#### See

https://vocabulary.uncefact.org/treatmentFacilityParty

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of transportation waste material.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeMeasure?

> `optional` **volumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the volume of this transportation waste material.

#### See

https://vocabulary.uncefact.org/volumeMeasure

***

### weightMeasure?

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the weight of this transportation waste material.

#### See

https://vocabulary.uncefact.org/weightMeasure
