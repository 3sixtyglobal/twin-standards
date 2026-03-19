# Interface: IEpcisAssociationEvent

EPCIS 2.0 AssociationEvent describing membership relationships between parent
and child objects without implying physical containment.

## See

https://ref.gs1.org/epcis/AssociationEvent

## Extends

- [`IEpcisEvent`](IEpcisEvent.md)

## Properties

### type {#type}

> **type**: `"AssociationEvent"`

Type.

#### Overrides

[`IEpcisEvent`](IEpcisEvent.md).[`type`](IEpcisEvent.md#type)

***

### parentID {#parentid}

> **parentID**: `string`

Identifier of the parent of the aggregation or association; use the pure
identity URI when the parent is an EPC.

***

### childEPCs? {#childepcs}

> `optional` **childEPCs?**: `string`[]

(Optional) Unordered list of contained objects identified at the instance
level; AssociationEvents normally include childEPCs or childQuantityList
unless action is DELETE.

***

### childQuantityList? {#childquantitylist}

> `optional` **childQuantityList?**: [`IEpcisQuantity`](IEpcisQuantity.md)[]

Unordered list of one or more QuantityElements identifying contained objects
at the class level; may be empty only with action DELETE when disassociating
all children.

***

### action {#action}

> **action**: [`EpcisActionTypes`](../type-aliases/EpcisActionTypes.md)

How this event relates to the lifecycle of the EPCs named in this event.

***

### bizStep? {#bizstep}

> `optional` **bizStep?**: `string`

(Optional) The business step of which this event was a part.

***

### disposition? {#disposition}

> `optional` **disposition?**: `string`

(Optional) The business condition of the objects associated with the EPCs,
presumed to hold true until contradicted by a subsequent event.

***

### readPoint? {#readpoint}

> `optional` **readPoint?**: [`IEpcisLocation`](IEpcisLocation.md)

(Optional) The read point at which the event took place.

***

### bizLocation? {#bizlocation}

> `optional` **bizLocation?**: [`IEpcisLocation`](IEpcisLocation.md)

(Optional) The business location where the objects associated with the EPCs
may be found, until contradicted by a subsequent event.

***

### bizTransactionList? {#biztransactionlist}

> `optional` **bizTransactionList?**: [`IEpcisBizTransaction`](IEpcisBizTransaction.md)[]

(Optional) An unordered list of business transactions that define the context
of this event.

***

### sourceList? {#sourcelist}

> `optional` **sourceList?**: [`IEpcisSource`](IEpcisSource.md)[]

(Optional) Unordered list of Source elements that provide context about the
originating endpoint of a business transfer of which this event is a part.

***

### destinationList? {#destinationlist}

> `optional` **destinationList?**: [`IEpcisDestination`](IEpcisDestination.md)[]

(Optional) Unordered list of Destination elements that provide context about
the terminating endpoint of a business transfer of which this event is a part.

***

### sensorElementList? {#sensorelementlist}

> `optional` **sensorElementList?**: [`IEpcisSensorElement`](IEpcisSensorElement.md)[]

(Optional) Connects event to one or more SensorElements.

***

### @context {#context}

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

JSON-LD @context.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`@context`](IEpcisEvent.md#context)

***

### eventID? {#eventid}

> `optional` **eventID?**: `string`

URI identifier of a specific EPCIS event (alias of id in JSON or XML).

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventID`](IEpcisEvent.md#eventid)

***

### certificationInfo? {#certificationinfo}

<<<<<<< Updated upstream
> `optional` **certificationInfo**: `ObjectOrArray`\<`string`\>
=======
> `optional` **certificationInfo?**: `ObjectOrArray`\<`string`\>
>>>>>>> Stashed changes

(Optional) CertificationDetails relevant for Objects, Places and/or
Organizations mentioned in this Event.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`certificationInfo`](IEpcisEvent.md#certificationinfo)

***

### errorDeclaration? {#errordeclaration}

> `optional` **errorDeclaration?**: [`IEpcisErrorDeclaration`](IEpcisErrorDeclaration.md)

Error declaration.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`errorDeclaration`](IEpcisEvent.md#errordeclaration)

***

### eventTime {#eventtime}

> **eventTime**: `string`

The date and time at which the EPCIS Capturing Applications asserts the event
occurred.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventTime`](IEpcisEvent.md#eventtime)

***

### eventTimeZoneOffset {#eventtimezoneoffset}

> **eventTimeZoneOffset**: `string`

The time zone offset in effect at the time and place the event occurred,
expressed as an offset from UTC.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventTimeZoneOffset`](IEpcisEvent.md#eventtimezoneoffset)

***

### recordTime? {#recordtime}

> `optional` **recordTime?**: `string`

(Optional) The date and time at which this event was recorded by an EPCIS
Repository; ignored at capture and present on query results.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`recordTime`](IEpcisEvent.md#recordtime)
