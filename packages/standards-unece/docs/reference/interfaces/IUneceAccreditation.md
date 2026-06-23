# Interface: IUneceAccreditation

A certified recognition that provides evidence of a level of competency in a given area, such as certifying a level of
skill in a trade.

## See

https://vocabulary.uncefact.org/Accreditation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Accreditation"`

JSON-LD Type.

***

### accreditingBodyName? {#accreditingbodyname}

> `optional` **accreditingBodyName?**: `string`

The name of the accrediting body, expressed as text, for this certified accreditation.

#### See

https://vocabulary.uncefact.org/accreditingBodyName

***

### authenticationMethodCode? {#authenticationmethodcode}

> `optional` **authenticationMethodCode?**: `string`

A code specifying an authentication method for this certified accreditation.

#### See

https://vocabulary.uncefact.org/authenticationMethodCode

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

The code specifying the category of this certified accreditation, such as driving or academic.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this certified accreditation.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime?**: `string`

The date, time, date time or other date time value when this certified accreditation expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this certified accreditation.

#### See

https://vocabulary.uncefact.org/identifier

***

### obtainedDateTime? {#obtaineddatetime}

> `optional` **obtainedDateTime?**: `string`

The date, time, date time or other date time value when this certified accreditation was obtained.

#### See

https://vocabulary.uncefact.org/obtainedDateTime

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of this certified accreditation, such as a type of driving license.

#### See

https://vocabulary.uncefact.org/typeCode
