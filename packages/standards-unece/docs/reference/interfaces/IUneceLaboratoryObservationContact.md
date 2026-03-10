# Interface: IUneceLaboratoryObservationContact

A person or department that acts as a point of contact for laboratory observations.

## See

https://vocabulary.uncefact.org/LaboratoryObservationContact

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"LaboratoryObservationContact"`

JSON-LD Type.

***

### departmentName?

> `optional` **departmentName**: `string`

The name, expressed as text, of the department to which this laboratory observation contact belongs.

#### See

https://vocabulary.uncefact.org/departmentName

***

### emailCommunication?

> `optional` **emailCommunication**: [`IUneceCommunication`](IUneceCommunication.md)

The email address of this laboratory observation contact.

#### See

https://vocabulary.uncefact.org/emailCommunication

***

### faxCommunication?

> `optional` **faxCommunication**: [`IUneceCommunication`](IUneceCommunication.md)

The fax number of this laboratory observation contact.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### identifier

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this laboratory observation contact.

#### See

https://vocabulary.uncefact.org/identifier

***

### mobileTelephoneCommunication?

> `optional` **mobileTelephoneCommunication**: [`IUneceCommunication`](IUneceCommunication.md)

The mobile phone number of this laboratory observation contact.

#### See

https://vocabulary.uncefact.org/mobileTelephoneCommunication

***

### personName?

> `optional` **personName**: `string`

The name, expressed as text, of the person for this laboratory observation contact.

#### See

https://vocabulary.uncefact.org/personName

***

### telephoneCommunication?

> `optional` **telephoneCommunication**: [`IUneceCommunication`](IUneceCommunication.md)

The telephone number of this laboratory observation contact.

#### See

https://vocabulary.uncefact.org/telephoneCommunication
