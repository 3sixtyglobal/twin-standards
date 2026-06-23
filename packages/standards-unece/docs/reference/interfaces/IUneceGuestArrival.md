# Interface: IUneceGuestArrival

The act of coming to or reaching a place by a specified guest.

## See

https://vocabulary.uncefact.org/GuestArrival

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GuestArrival"`

JSON-LD Type.

***

### carrierId? {#carrierid}

> `optional` **carrierId?**: `string` \| `IJsonLdValueObject`

The identifier of the carrier for this specified guest arrival.

#### See

https://vocabulary.uncefact.org/carrierId

***

### carrierName? {#carriername}

> `optional` **carrierName?**: `string`

A carrier's name, expressed as text, related to this specified guest arrival.

#### See

https://vocabulary.uncefact.org/carrierName

***

### expectedDateTime? {#expecteddatetime}

> `optional` **expectedDateTime?**: `string`

The date, time, date time, or other date time value when this specified guest arrival is expected.

#### See

https://vocabulary.uncefact.org/expectedDateTime

***

### transportModeCode? {#transportmodecode}

> `optional` **transportModeCode?**: [`UneceTransportModeCodeList`](../type-aliases/UneceTransportModeCodeList.md)

The code specifying the transport mode of this specified guest arrival.

#### See

https://vocabulary.uncefact.org/transportModeCode
