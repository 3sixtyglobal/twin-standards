# Interface: IUneceTransportationWasteMaterialComponent

An unused and rejected as unwanted component of transport material resulting from transportation.

## See

https://vocabulary.uncefact.org/TransportationWasteMaterialComponent

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TransportationWasteMaterialComponent"`

JSON-LD Type.

***

### applicableProductCertificate? {#applicableproductcertificate}

> `optional` **applicableProductCertificate?**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this transportation waste material component.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this transportation waste material component.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description? {#description}

> `optional` **description?**: `string`

A textual description for this transportation waste material component.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedGeneratedMeasure? {#estimatedgeneratedmeasure}

> `optional` **estimatedGeneratedMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The estimated measure for this generated transportation waste material component.

#### See

https://vocabulary.uncefact.org/estimatedGeneratedMeasure

***

### maximumDedicatedStorageCapacityMeasure? {#maximumdedicatedstoragecapacitymeasure}

> `optional` **maximumDedicatedStorageCapacityMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure of the maximum dedicated storage capacity for this transportation waste material component.

#### See

https://vocabulary.uncefact.org/maximumDedicatedStorageCapacityMeasure

***

### plannedDischargedMeasure? {#planneddischargedmeasure}

> `optional` **plannedDischargedMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The planned measure for this discharged transportation waste material component.

#### See

https://vocabulary.uncefact.org/plannedDischargedMeasure

***

### remainingDeliveryEvent? {#remainingdeliveryevent}

> `optional` **remainingDeliveryEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A delivery event for this remaining transportation waste material component.

#### See

https://vocabulary.uncefact.org/remainingDeliveryEvent

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of transportation waste material component.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeUnitReceivedMeasure? {#volumeunitreceivedmeasure}

> `optional` **volumeUnitReceivedMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure of this received transportation waste material component.

#### See

https://vocabulary.uncefact.org/volumeUnitReceivedMeasure

***

### volumeUnitRetainedMeasure? {#volumeunitretainedmeasure}

> `optional` **volumeUnitRetainedMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure for this retained transportation waste material component.

#### See

https://vocabulary.uncefact.org/volumeUnitRetainedMeasure
