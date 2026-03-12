# Variable: EpcisBizStepTypes

> `const` **EpcisBizStepTypes**: `object`

Supported EPCIS 2.0 `bizStep` values.

These values come from the GS1 EPCIS / CBV (Core Business Vocabulary).
Use the union type `EpcisBizStepTypes` when you want to restrict a field to known CBV values.

## Type Declaration

### Accepting {#accepting}

> `readonly` **Accepting**: `"accepting"` = `"accepting"`

Activity where an object changes possession and/or ownership.

### Arriving {#arriving}

> `readonly` **Arriving**: `"arriving"` = `"arriving"`

Activity where an object arrives at a location.

### Assembling {#assembling}

> `readonly` **Assembling**: `"assembling"` = `"assembling"`

Combining one or more objects to create a new finished product while originals
remain recognisable.

### Collecting {#collecting}

> `readonly` **Collecting**: `"collecting"` = `"collecting"`

Picking up and collecting an object for future disposal, recycling, or re-use.

### Commissioning {#commissioning}

> `readonly` **Commissioning**: `"commissioning"` = `"commissioning"`

Associating a new instance- or class-level identifier with a specific object
for the first time.

### Consigning {#consigning}

> `readonly` **Consigning**: `"consigning"` = `"consigning"`

Overall process covering staging_outbound, loading, departing, and accepting
when granular steps are unknown.

### CreatingClassInstance {#creatingclassinstance}

> `readonly` **CreatingClassInstance**: `"creating_class_instance"` = `"creating_class_instance"`

Step where an instance or increased quantity of a class-level identifier is
produced and may repeat.

### CycleCounting {#cyclecounting}

> `readonly` **CycleCounting**: `"cycle_counting"` = `"cycle_counting"`

Counting objects within a location for business needs other than accounting.

### Decommissioning {#decommissioning}

> `readonly` **Decommissioning**: `"decommissioning"` = `"decommissioning"`

Disassociating an instance-level identifier from an object; it may be
re-commissioned later with a new identifier.

### Departing {#departing}

> `readonly` **Departing**: `"departing"` = `"departing"`

Activity where an object leaves a location on its way to a destination.

### Destroying {#destroying}

> `readonly` **Destroying**: `"destroying"` = `"destroying"`

Process of terminating an object so it should not be subject of subsequent events.

### Disassembling {#disassembling}

> `readonly` **Disassembling**: `"disassembling"` = `"disassembling"`

Breaking down an object into separate, uniquely identified component parts.

### Dispensing {#dispensing}

> `readonly` **Dispensing**: `"dispensing"` = `"dispensing"`

Making a product available in full or part to a consumer.

### Encoding {#encoding}

> `readonly` **Encoding**: `"encoding"` = `"encoding"`

Writing an instance-level identifier to a barcode or RFID tag before
association with an object.

### EnteringExiting {#enteringexiting}

> `readonly` **EnteringExiting**: `"entering_exiting"` = `"entering_exiting"`

Activity at a facility entrance/exit where customers leave with purchases or
enter with returns.

### Holding {#holding}

> `readonly` **Holding**: `"holding"` = `"holding"`

Segregating an object for further review.

### Inspecting {#inspecting}

> `readonly` **Inspecting**: `"inspecting"` = `"inspecting"`

Reviewing objects to address potential defects while keeping them viable in the
supply chain.

### Installing {#installing}

> `readonly` **Installing**: `"installing"` = `"installing"`

Putting an object into a composite object that already exists.

### Killing {#killing}

> `readonly` **Killing**: `"killing"` = `"killing"`

Terminating an RFID tag previously associated with an object while the object
continues to exist.

### Loading {#loading}

> `readonly` **Loading**: `"loading"` = `"loading"`

Loading an object into a shipping conveyance.

### Other {#other}

> `readonly` **Other**: `"other"` = `"other"`

A business step not identified by the CBV list.

### Packing {#packing}

> `readonly` **Packing**: `"packing"` = `"packing"`

Putting objects into a larger container for shipping, typically where
aggregation occurs.

### Picking {#picking}

> `readonly` **Picking**: `"picking"` = `"picking"`

Selecting objects to fill an order.

### Receiving {#receiving}

> `readonly` **Receiving**: `"receiving"` = `"receiving"`

Indicating an object is being received at a location and added to inventory.

### Removing {#removing}

> `readonly` **Removing**: `"removing"` = `"removing"`

Taking an object out of a composite object; opposite of installing.

### Repackaging {#repackaging}

> `readonly` **Repackaging**: `"repackaging"` = `"repackaging"`

Changing an object's packaging configuration.

### Repairing {#repairing}

> `readonly` **Repairing**: `"repairing"` = `"repairing"`

Repairing a malfunctioning product without replacing it.

### Replacing {#replacing}

> `readonly` **Replacing**: `"replacing"` = `"replacing"`

Substituting or exchanging an object for another object.

### Reserving {#reserving}

> `readonly` **Reserving**: `"reserving"` = `"reserving"`

Providing a set of not-yet-commissioned instance identifiers for use by another party.

### RetailSelling {#retailselling}

> `readonly` **RetailSelling**: `"retail_selling"` = `"retail_selling"`

Point-of-sale activity transferring ownership to a customer for value.

### Shipping {#shipping}

> `readonly` **Shipping**: `"shipping"` = `"shipping"`

Overall process covering staging_outbound, loading, and departing when finer
detail is unavailable.

### StagingOutbound {#stagingoutbound}

> `readonly` **StagingOutbound**: `"staging_outbound"` = `"staging_outbound"`

Moving an object from a facility to an area where it awaits transport pick-up.

### StockTaking {#stocktaking}

> `readonly` **StockTaking**: `"stock_taking"` = `"stock_taking"`

Counting objects within a location following established rules for accounting purposes.

### Stocking {#stocking}

> `readonly` **Stocking**: `"stocking"` = `"stocking"`

Activity within a location to make an object available to customers or order
fulfilment.

### Storing {#storing}

> `readonly` **Storing**: `"storing"` = `"storing"`

Moving an object into and out of storage within a location.

### Transporting {#transporting}

> `readonly` **Transporting**: `"transporting"` = `"transporting"`

Moving an object from one location to another using a vehicle.

### Unloading {#unloading}

> `readonly` **Unloading**: `"unloading"` = `"unloading"`

Unloading an object from a shipping conveyance.

### Unpacking {#unpacking}

> `readonly` **Unpacking**: `"unpacking"` = `"unpacking"`

Removing products from a larger container, usually after receiving or
accepting.

### VoidShipping {#voidshipping}

> `readonly` **VoidShipping**: `"void_shipping"` = `"void_shipping"`

Declaring that objects in a prior outbound process were not shipped as previously indicated.

### SensorReporting {#sensorreporting}

> `readonly` **SensorReporting**: `"sensor_reporting"` = `"sensor_reporting"`

Returning sensor data about the physical properties or condition of an object or location.

### Sampling {#sampling}

> `readonly` **Sampling**: `"sampling"` = `"sampling"`

Testing activity where portions of an object are examined, rendering the
sampled object no longer viable.
