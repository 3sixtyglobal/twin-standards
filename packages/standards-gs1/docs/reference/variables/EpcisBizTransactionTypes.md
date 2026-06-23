# Variable: EpcisBizTransactionTypes

> `const` **EpcisBizTransactionTypes**: `object`

Supported EPCIS 2.0 `bizTransaction-type` values.

## Type Declaration

### Bol {#bol}

> `readonly` **Bol**: `"bol"` = `"bol"`

A document issued by a carrier to a shipper, listing and acknowledging receipt
of goods for transport and specifying terms of delivery.

### Cert {#cert}

> `readonly` **Cert**: `"cert"` = `"cert"`

A document confirming certain characteristics of an object, person, or
organisation, typically issued by a third party.

### Desadv {#desadv}

> `readonly` **Desadv**: `"desadv"` = `"desadv"`

A document/message by which the seller or consignor informs the consignee
about the despatch of goods (Advanced Shipment Notice).

### Inv {#inv}

> `readonly` **Inv**: `"inv"` = `"inv"`

A document/message claiming payment for goods or services supplied under agreed
conditions.

### Pedigree {#pedigree}

> `readonly` **Pedigree**: `"pedigree"` = `"pedigree"`

A record that traces the ownership or custody and transactions of a product as
it moves among trading partners.

### Po {#po}

> `readonly` **Po**: `"po"` = `"po"`

A document/message that specifies details for goods and services ordered under
agreed conditions.

### Poc {#poc}

> `readonly` **Poc**: `"poc"` = `"poc"`

A document that provides confirmation from an external supplier to the request
of a purchaser to deliver a specified quantity/service.

### Prodorder {#prodorder}

> `readonly` **Prodorder**: `"prodorder"` = `"prodorder"`

An organisation-internal document or message issued by a producer that
initiates a manufacturing process of goods.

### Recadv {#recadv}

> `readonly` **Recadv**: `"recadv"` = `"recadv"`

A document/message that lets the receiver inform the shipper of actual goods
received compared to what was advised.

### Rma {#rma}

> `readonly` **Rma**: `"rma"` = `"rma"`

A document issued by the seller that authorises a buyer to return merchandise
for credit determination.

### Testprd {#testprd}

> `readonly` **Testprd**: `"testprd"` = `"testprd"`

A document that provides a formal specification of a sequence of instructions
for verifying one or several criteria.

### Testres {#testres}

> `readonly` **Testres**: `"testres"` = `"testres"`

A document that includes the outcome of the execution of a given test
procedure.

### Upevt {#upevt}

> `readonly` **Upevt**: `"upevt"` = `"upevt"`

Event ID URI(s) of event(s) provided by an upstream supplier, such as packing
and shipping events.
