# Interface: IEpcisSource

EPCIS 2.0 Source element identifying the origin of a business transfer.

## See

https://ref.gs1.org/epcis/SourceOrDestination

## Properties

### type {#type}

> **type**: `string`

Identifier indicating the role of SourceOrDestination in a transfer (Owning
Party, Possessing Party, or Location).

Use [EpcisSourceDestTypes](../variables/EpcisSourceDestTypes.md) for known values.

***

### source {#source}

> **source**: `string`

Identifier that denotes the specific source or destination of a business
transfer; must correlate with the selected type.
