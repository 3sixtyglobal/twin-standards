# Variable: EpcisBizStepTypes

> `const` **EpcisBizStepTypes**: `object`

Supported EPCIS 2.0 `bizStep` values.

These values come from the GS1 EPCIS / CBV (Core Business Vocabulary).
Use the union type `EpcisBizStepTypes` when you want to restrict a field to known CBV values.

## Type Declaration

### Accepting

> `readonly` **Accepting**: `"accepting"` = `"accepting"`

Activity where an object changes possession and/or ownership.

### Arriving

> `readonly` **Arriving**: `"arriving"` = `"arriving"`

Activity where an object arrives at a location.

### Assembling

> `readonly` **Assembling**: `"assembling"` = `"assembling"`

Combining one or more objects to create a new finished product while originals
remain recognisable.

### Collecting

> `readonly` **Collecting**: `"collecting"` = `"collecting"`

Picking up and collecting an object for future disposal, recycling, or re-use.

### Commissioning

> `readonly` **Commissioning**: `"commissioning"` = `"commissioning"`

Associating a new instance- or class-level identifier with a specific object
for the first time.

### Consigning

> `readonly` **Consigning**: `"consigning"` = `"consigning"`

Overall process covering staging_outbound, loading, departing, and accepting
when granular steps are unknown.

### CreatingClassInstance

> `readonly` **CreatingClassInstance**: `"creating_class_instance"` = `"creating_class_instance"`

Step where an instance or increased quantity of a class-level identifier is
produced and may repeat.

### CycleCounting

> `readonly` **CycleCounting**: `"cycle_counting"` = `"cycle_counting"`

Counting objects within a location for business needs other than accounting.

### Decommissioning

> `readonly` **Decommissioning**: `"decommissioning"` = `"decommissioning"`

Disassociating an instance-level identifier from an object; it may be
re-commissioned later with a new identifier.

### Departing

> `readonly` **Departing**: `"departing"` = `"departing"`

Activity where an object leaves a location on its way to a destination.

### Destroying

> `readonly` **Destroying**: `"destroying"` = `"destroying"`

Process of terminating an object so it should not be subject of subsequent events.

### Disassembling

> `readonly` **Disassembling**: `"disassembling"` = `"disassembling"`

Breaking down an object into separate, uniquely identified component parts.

### Dispensing

> `readonly` **Dispensing**: `"dispensing"` = `"dispensing"`

Making a product available in full or part to a consumer.

### Encoding

> `readonly` **Encoding**: `"encoding"` = `"encoding"`

Writing an instance-level identifier to a barcode or RFID tag before
association with an object.

### EnteringExiting

> `readonly` **EnteringExiting**: `"entering_exiting"` = `"entering_exiting"`

Activity at a facility entrance/exit where customers leave with purchases or
enter with returns.

### Holding

> `readonly` **Holding**: `"holding"` = `"holding"`

Segregating an object for further review.

### Inspecting

> `readonly` **Inspecting**: `"inspecting"` = `"inspecting"`

Reviewing objects to address potential defects while keeping them viable in the
supply chain.

### Installing

> `readonly` **Installing**: `"installing"` = `"installing"`

Putting an object into a composite object that already exists.

### Killing

> `readonly` **Killing**: `"killing"` = `"killing"`

Terminating an RFID tag previously associated with an object while the object
continues to exist.

### Loading

> `readonly` **Loading**: `"loading"` = `"loading"`

Loading an object into a shipping conveyance.

### Other

> `readonly` **Other**: `"other"` = `"other"`

A business step not identified by the CBV list.

### Packing

> `readonly` **Packing**: `"packing"` = `"packing"`

Putting objects into a larger container for shipping, typically where
aggregation occurs.

### Picking

> `readonly` **Picking**: `"picking"` = `"picking"`

Selecting objects to fill an order.

### Receiving

> `readonly` **Receiving**: `"receiving"` = `"receiving"`

Indicating an object is being received at a location and added to inventory.

### Removing

> `readonly` **Removing**: `"removing"` = `"removing"`

Taking an object out of a composite object; opposite of installing.

### Repackaging

> `readonly` **Repackaging**: `"repackaging"` = `"repackaging"`

Changing an object's packaging configuration.

### Repairing

> `readonly` **Repairing**: `"repairing"` = `"repairing"`

Repairing a malfunctioning product without replacing it.

### Replacing

> `readonly` **Replacing**: `"replacing"` = `"replacing"`

Substituting or exchanging an object for another object.

### Reserving

> `readonly` **Reserving**: `"reserving"` = `"reserving"`

Providing a set of not-yet-commissioned instance identifiers for use by another party.

### RetailSelling

> `readonly` **RetailSelling**: `"retail_selling"` = `"retail_selling"`

Point-of-sale activity transferring ownership to a customer for value.

### Shipping

> `readonly` **Shipping**: `"shipping"` = `"shipping"`

Overall process covering staging_outbound, loading, and departing when finer
detail is unavailable.

### StagingOutbound

> `readonly` **StagingOutbound**: `"staging_outbound"` = `"staging_outbound"`

Moving an object from a facility to an area where it awaits transport pick-up.

### StockTaking

> `readonly` **StockTaking**: `"stock_taking"` = `"stock_taking"`

Counting objects within a location following established rules for accounting purposes.

### Stocking

> `readonly` **Stocking**: `"stocking"` = `"stocking"`

Activity within a location to make an object available to customers or order
fulfilment.

### Storing

> `readonly` **Storing**: `"storing"` = `"storing"`

Moving an object into and out of storage within a location.

### Transporting

> `readonly` **Transporting**: `"transporting"` = `"transporting"`

Moving an object from one location to another using a vehicle.

### Unloading

> `readonly` **Unloading**: `"unloading"` = `"unloading"`

Unloading an object from a shipping conveyance.

### Unpacking

> `readonly` **Unpacking**: `"unpacking"` = `"unpacking"`

Removing products from a larger container, usually after receiving or
accepting.

### VoidShipping

> `readonly` **VoidShipping**: `"void_shipping"` = `"void_shipping"`

Declaring that objects in a prior outbound process were not shipped as previously indicated.

### SensorReporting

> `readonly` **SensorReporting**: `"sensor_reporting"` = `"sensor_reporting"`

Returning sensor data about the physical properties or condition of an object or location.

### Sampling

> `readonly` **Sampling**: `"sampling"` = `"sampling"`

Testing activity where portions of an object are examined, rendering the
sampled object no longer viable.
