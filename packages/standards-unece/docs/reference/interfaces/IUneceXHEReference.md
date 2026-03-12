# Interface: IUneceXHEReference

Information related to an XHE (Exchange Header Envelope).

## See

https://vocabulary.uncefact.org/XHEReference

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"XHEReference"`

JSON-LD Type.

***

### endAvailabilityDateTime? {#endavailabilitydatetime}

> `optional` **endAvailabilityDateTime**: `string`

The end date, time, date time, or other date time value for the availability of this XHE reference.

#### See

https://vocabulary.uncefact.org/endAvailabilityDateTime

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this XHE reference.

#### See

https://vocabulary.uncefact.org/identifier

***

### login? {#login}

> `optional` **login**: `string`

The login, expressed as text, for this XHE reference.

#### See

https://vocabulary.uncefact.org/login

***

### password? {#password}

> `optional` **password**: `string`

The password, expressed as text, for this XHE reference.

#### See

https://vocabulary.uncefact.org/password

***

### startAvailabilityDateTime? {#startavailabilitydatetime}

> `optional` **startAvailabilityDateTime**: `string`

The start date, time, date time, or other date time value for the availability of this XHE reference.

#### See

https://vocabulary.uncefact.org/startAvailabilityDateTime
