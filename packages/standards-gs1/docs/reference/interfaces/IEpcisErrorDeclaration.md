# Interface: IEpcisErrorDeclaration

EPCIS 2.0 ErrorDeclaration describing corrections to previously captured
events.

## See

https://ref.gs1.org/epcis/ErrorDeclaration

## Properties

### declarationTime {#declarationtime}

> **declarationTime**: `string`

The date and time at which the declaration of error is made.

***

### reason? {#reason}

> `optional` **reason?**: `string`

Reason for the error.

Use [EpcisErrorReasonTypes](../variables/EpcisErrorReasonTypes.md) for known values.

***

### correctiveEventIDs? {#correctiveeventids}

> `optional` **correctiveEventIDs?**: `string`[]

(Optional) If present, indicates that the events having the specified URIs as
the value of their eventID fields are to be considered as "corrections" to
the event declared erroneous by this event.
