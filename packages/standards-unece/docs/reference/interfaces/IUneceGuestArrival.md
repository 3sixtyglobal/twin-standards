# Interface: IUneceGuestArrival

The act of coming to or reaching a place by a specified guest.

## See

https://vocabulary.uncefact.org/GuestArrival

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"GuestArrival"`

JSON-LD Type.

***

### carrierId?

> `optional` **carrierId**: `string`

The identifier of the carrier for this specified guest arrival.

#### See

https://vocabulary.uncefact.org/carrierId

***

### carrierName?

> `optional` **carrierName**: `string`

A carrier's name, expressed as text, related to this specified guest arrival.

#### See

https://vocabulary.uncefact.org/carrierName

***

### expectedDateTime?

> `optional` **expectedDateTime**: `string`

The date, time, date time, or other date time value when this specified guest arrival is expected.

#### See

https://vocabulary.uncefact.org/expectedDateTime

***

### transportModeCode?

> `optional` **transportModeCode**: [`UneceTransportModeCodeList`](../type-aliases/UneceTransportModeCodeList.md)

The code specifying the transport mode of this specified guest arrival.

#### See

https://vocabulary.uncefact.org/transportModeCode
