# Interface: IUneceCropProduceBatch

A group of crop produce considered or dealt with together.

## See

https://vocabulary.uncefact.org/CropProduceBatch

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CropProduceBatch"`

JSON-LD Type.

***

### appliedTreatment? {#appliedtreatment}

> `optional` **appliedTreatment**: `string`

A treatment, expressed as text, applied to this crop produce batch.

#### See

https://vocabulary.uncefact.org/appliedTreatment

***

### breakUpDateTime? {#breakupdatetime}

> `optional` **breakUpDateTime**: `string`

The date, time, date time, or other date time value of the break up of this crop produce batch.

#### See

https://vocabulary.uncefact.org/breakUpDateTime

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this crop produce batch.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this crop produce batch.

#### See

https://vocabulary.uncefact.org/identifier

***

### nominalSizeNumeric? {#nominalsizenumeric}

> `optional` **nominalSizeNumeric**: `string`

The value of the nominal size for this crop produce batch.

#### See

https://vocabulary.uncefact.org/nominalSizeNumeric

***

### productName? {#productname}

> `optional` **productName**: `string`

The product name, expressed as text, for this crop produce batch.

#### See

https://vocabulary.uncefact.org/productName

***

### sizeMeasure? {#sizemeasure}

> `optional` **sizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The size, expressed as a measure, for this crop produce batch.

#### See

https://vocabulary.uncefact.org/sizeMeasure

***

### specifiedAgriculturalCertificate? {#specifiedagriculturalcertificate}

> `optional` **specifiedAgriculturalCertificate**: [`IUneceAgriculturalCertificate`](IUneceAgriculturalCertificate.md)[]

An agricultural certificate specified for this crop produce batch.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCertificate

***

### specifiedAgriculturalCharacteristic? {#specifiedagriculturalcharacteristic}

> `optional` **specifiedAgriculturalCharacteristic**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this crop produce batch.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedProduce? {#specifiedproduce}

> `optional` **specifiedProduce**: [`IUneceProduce`](IUneceProduce.md)[]

A crop produce specified for this crop produce batch.

#### See

https://vocabulary.uncefact.org/specifiedProduce

***

### specifiedQuantity? {#specifiedquantity}

> `optional` **specifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity specified for this crop produce batch.

#### See

https://vocabulary.uncefact.org/specifiedQuantity

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of crop produce batch.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units, expressed as a quantity, for this crop produce batch.

#### See

https://vocabulary.uncefact.org/unitQuantity
