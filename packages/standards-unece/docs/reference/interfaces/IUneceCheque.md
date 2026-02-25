# Interface: IUneceCheque

A written payment order to a bank to pay the stated sum from the drawer's account.

## See

https://vocabulary.uncefact.org/Cheque

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Cheque"`

JSON-LD Type.

***

### applicableIndicator?

> `optional` **applicableIndicator**: `boolean`

The indication of whether or not this payment cheque is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### clearingRegion?

> `optional` **clearingRegion**: `string`

The clearing region, expressed as text, for this payment cheque.

#### See

https://vocabulary.uncefact.org/clearingRegion

***

### deliveryMethod?

> `optional` **deliveryMethod**: `string`

A delivery method, expressed as text, for this payment cheque.

#### See

https://vocabulary.uncefact.org/deliveryMethod

***

### deliveryMethodCode?

> `optional` **deliveryMethodCode**: `string`

The code specifying the delivery method for this payment cheque.

#### See

https://vocabulary.uncefact.org/deliveryMethodCode

***

### description?

> `optional` **description**: `string`

A textual description of this payment cheque.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this payment cheque.

#### See

https://vocabulary.uncefact.org/identifier

***

### instructionPriorityCode?

> `optional` **instructionPriorityCode**: `string`

The code specifying the instruction priority for this payment cheque, such as the urgency or order of importance for the
processing of the payment cheque.

#### See

https://vocabulary.uncefact.org/instructionPriorityCode

***

### layoutDescription?

> `optional` **layoutDescription**: `string`

The textual description of the layout for this payment cheque, such as a description of the company logo and digitized
signature printed on the cheque.

#### See

https://vocabulary.uncefact.org/layoutDescription

***

### maturityDateTime?

> `optional` **maturityDateTime**: `string`

The date, time, date time, or other date time value when this payment cheque reaches maturity.

#### See

https://vocabulary.uncefact.org/maturityDateTime

***

### memoField?

> `optional` **memoField**: `string`

A memo field, expressed as text, on this payment cheque.

#### See

https://vocabulary.uncefact.org/memoField

***

### number?

> `optional` **number**: `string`

The number, expressed as text, of this payment cheque.

#### See

https://vocabulary.uncefact.org/number

***

### printLocation?

> `optional` **printLocation**: `string`

The print location, expressed as text, for this payment cheque.

#### See

https://vocabulary.uncefact.org/printLocation

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of payment cheque.

#### See

https://vocabulary.uncefact.org/typeCode
