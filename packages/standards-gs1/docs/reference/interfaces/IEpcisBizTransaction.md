# Interface: IEpcisBizTransaction

EPCIS 2.0 BizTransaction element identifying a business document and its type.

## See

https://ref.gs1.org/epcis/BizTransaction

## Properties

### type?

> `optional` **type**: `string`

Identifier that indicates the type of BizTransaction document (e.g. Purchase
Order, Despatch Advice).

Use [EpcisBizTransactionTypes](../variables/EpcisBizTransactionTypes.md) for known values.

***

### bizTransaction

> **bizTransaction**: `string`

URI identifier of the specific business transaction document (alias of id in
JSON or XML).
