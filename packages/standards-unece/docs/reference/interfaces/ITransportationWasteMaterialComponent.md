# Interface: ITransportationWasteMaterialComponent

An unused and rejected as unwanted component of transport material resulting from transportation.

## See

https://vocabulary.uncefact.org/TransportationWasteMaterialComponent

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

> **type**: `"TransportationWasteMaterialComponent"`

JSON-LD Type.

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate applicable to this transportation waste material component.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this transportation waste material component.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description for this transportation waste material component.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedGeneratedMeasure?

> `optional` **estimatedGeneratedMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The estimated measure for this generated transportation waste material component.

#### See

https://vocabulary.uncefact.org/estimatedGeneratedMeasure

***

### maximumDedicatedStorageCapacityMeasure?

> `optional` **maximumDedicatedStorageCapacityMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The measure of the maximum dedicated storage capacity for this transportation waste material component.

#### See

https://vocabulary.uncefact.org/maximumDedicatedStorageCapacityMeasure

***

### plannedDischargedMeasure?

> `optional` **plannedDischargedMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The planned measure for this discharged transportation waste material component.

#### See

https://vocabulary.uncefact.org/plannedDischargedMeasure

***

### remainingDeliveryEvent?

> `optional` **remainingDeliveryEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A delivery event for this remaining transportation waste material component.

#### See

https://vocabulary.uncefact.org/remainingDeliveryEvent

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of transportation waste material component.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeUnitReceivedMeasure?

> `optional` **volumeUnitReceivedMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The measure of this received transportation waste material component.

#### See

https://vocabulary.uncefact.org/volumeUnitReceivedMeasure

***

### volumeUnitRetainedMeasure?

> `optional` **volumeUnitRetainedMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The measure for this retained transportation waste material component.

#### See

https://vocabulary.uncefact.org/volumeUnitRetainedMeasure
