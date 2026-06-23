# Variable: EpcisDispositionTypes

> `const` **EpcisDispositionTypes**: `object`

Supported EPCIS 2.0 `disposition` values from the GS1 Core Business
Vocabulary (CBV).

Use the union type `EpcisDispositionTypes` to restrict a field to known CBV
values.

## Type Declaration

### Active {#active}

> `readonly` **Active**: `"active"` = `"active"`

A commissioned object has just been introduced into the supply chain.

### ContainerClosed {#containerclosed}

> `readonly` **ContainerClosed**: `"container_closed"` = `"container_closed"`

Object has been loaded onto a container, the doors closed, and the shipment
sealed.

### Damaged {#damaged}

> `readonly` **Damaged**: `"damaged"` = `"damaged"`

Object is impaired in usefulness or value due to a defect.

### Destroyed {#destroyed}

> `readonly` **Destroyed**: `"destroyed"` = `"destroyed"`

Object has been fully rendered non-usable.

### Dispensed {#dispensed}

> `readonly` **Dispensed**: `"dispensed"` = `"dispensed"`

A full quantity of product is distributed to a consumer.

### Disposed {#disposed}

> `readonly` **Disposed**: `"disposed"` = `"disposed"`

Object has been returned for disposal.

### Encoded {#encoded}

> `readonly` **Encoded**: `"encoded"` = `"encoded"`

An instance-level identifier has been written to a barcode or RFID tag, but
not yet commissioned.

### Expired {#expired}

> `readonly` **Expired**: `"expired"` = `"expired"`

Object's expiration date is in the past.

### InProgress {#inprogress}

> `readonly` **InProgress**: `"in_progress"` = `"in_progress"`

Optional disposition for objects proceeding through points in the supply
chain.

### InTransit {#intransit}

> `readonly` **InTransit**: `"in_transit"` = `"in_transit"`

Object is being shipped between two trading partners.

### Inactive {#inactive}

> `readonly` **Inactive**: `"inactive"` = `"inactive"`

Decommissioned object that may be reintroduced to the supply chain.

### NoPedigreeMatch {#nopedigreematch}

> `readonly` **NoPedigreeMatch**: `"no_pedigree_match"` = `"no_pedigree_match"`

No pedigree match was found during validation, so the product is quarantined
for investigation.

### NonSellableOther {#nonsellableother}

> `readonly` **NonSellableOther**: `"non_sellable_other"` = `"non_sellable_other"`

Object cannot be sold to a customer.

### PartiallyDispensed {#partiallydispensed}

> `readonly` **PartiallyDispensed**: `"partially_dispensed"` = `"partially_dispensed"`

A portion of a product is distributed to a customer while additional product
is retained.

### Recalled {#recalled}

> `readonly` **Recalled**: `"recalled"` = `"recalled"`

Object is non-sellable because of public safety reasons.

### Reserved {#reserved}

> `readonly` **Reserved**: `"reserved"` = `"reserved"`

Instance-level identifier has been allocated for a third party.

### RetailSold {#retailsold}

> `readonly` **RetailSold**: `"retail_sold"` = `"retail_sold"`

Product has been purchased by a customer.

### Returned {#returned}

> `readonly` **Returned**: `"returned"` = `"returned"`

Object has been sent or brought back for various reasons; it may or may not
be sellable.

### SellableAccessible {#sellableaccessible}

> `readonly` **SellableAccessible**: `"sellable_accessible"` = `"sellable_accessible"`

Product can be sold as is and a customer can access it for purchase.

### SellableNotAccessible {#sellablenotaccessible}

> `readonly` **SellableNotAccessible**: `"sellable_not_accessible"` = `"sellable_not_accessible"`

Product can be sold as is, but a customer cannot access it for purchase.

### Stolen {#stolen}

> `readonly` **Stolen**: `"stolen"` = `"stolen"`

An object has been taken without permission or right.

### Unknown {#unknown}

> `readonly` **Unknown**: `"unknown"` = `"unknown"`

An object's condition is not known.

### Available {#available}

> `readonly` **Available**: `"available"` = `"available"`

Object has been returned to service or the supply chain after repair.

### CompletenessVerified {#completenessverified}

> `readonly` **CompletenessVerified**: `"completeness_verified"` = `"completeness_verified"`

Explicitly indicates verified integrity of an aggregation when children are
unpacked or verified.

### CompletenessInferred {#completenessinferred}

> `readonly` **CompletenessInferred**: `"completeness_inferred"` = `"completeness_inferred"`

Indicates inferred integrity of an aggregation based on upstream aggregation
information.

### Conformant {#conformant}

> `readonly` **Conformant**: `"conformant"` = `"conformant"`

Outcome of a successful inspection in an inspecting or repairing step.

### ContainerOpen {#containeropen}

> `readonly` **ContainerOpen**: `"container_open"` = `"container_open"`

Container doors have been opened or a shipment seal has been broken.

### MismatchInstance {#mismatchinstance}

> `readonly` **MismatchInstance**: `"mismatch_instance"` = `"mismatch_instance"`

Instance-level identifiers do not match what was expected.

### MismatchClass {#mismatchclass}

> `readonly` **MismatchClass**: `"mismatch_class"` = `"mismatch_class"`

Class-level identifiers do not match what was expected.

### MismatchQuantity {#mismatchquantity}

> `readonly` **MismatchQuantity**: `"mismatch_quantity"` = `"mismatch_quantity"`

Quantities do not match what was expected.

### NeedsReplacement {#needsreplacement}

> `readonly` **NeedsReplacement**: `"needs_replacement"` = `"needs_replacement"`

Components or assets must be replaced to ensure functional requirements.

### NonConformant {#nonconformant}

> `readonly` **NonConformant**: `"non_conformant"` = `"non_conformant"`

Outcome of an unsuccessful inspection in an inspecting or repairing step.

### Unavailable {#unavailable}

> `readonly` **Unavailable**: `"unavailable"` = `"unavailable"`

Object has been removed from service or the supply chain, for example pending
repair.
