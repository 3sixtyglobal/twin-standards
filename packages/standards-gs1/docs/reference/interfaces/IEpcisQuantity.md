# Interface: IEpcisQuantity

EPCIS 2.0 QuantityElement defining class-level identifiers and amounts.

## See

https://ref.gs1.org/epcis/QuantityElement

## Properties

### epcClass {#epcclass}

> **epcClass**: `string`

A class-level identifier for the class to which the specified quantity of
objects belongs.

***

### quantity? {#quantity}

> `optional` **quantity**: `number`

(Optional) A number that specifies how many or how much of the specified
EPCClass is denoted by this QuantityElement.

***

### uom? {#uom}

> `optional` **uom**: `string`

(Optional) Unit of measure by which the specified value(s) of the property
specified by type should be interpreted.
