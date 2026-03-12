# Interface: IUneceClassification

A systematic arrangement of products in classes or categories according to established criteria.

## See

https://vocabulary.uncefact.org/Classification

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Classification"`

JSON-LD Type.

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)

The referenced standard that is applicable to this product classification.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### classCharacteristic? {#classcharacteristic}

> `optional` **classCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product class characteristic for this product classification.

#### See

https://vocabulary.uncefact.org/classCharacteristic

***

### classCode? {#classcode}

> `optional` **classCode**: `string`

The code specifying the class for this product classification.

#### See

https://vocabulary.uncefact.org/classCode

***

### classContentTypeDescription? {#classcontenttypedescription}

> `optional` **classContentTypeDescription**: `string`

The textual description for the class content type of this product classification.

#### See

https://vocabulary.uncefact.org/classContentTypeDescription

***

### classContentTypeDescriptionCode? {#classcontenttypedescriptioncode}

> `optional` **classContentTypeDescriptionCode**: `string`

The code specifying the description of the class content type of this product classification.

#### See

https://vocabulary.uncefact.org/classContentTypeDescriptionCode

***

### className? {#classname}

> `optional` **className**: `string`

A class name, expressed as text, for this product classification.

#### See

https://vocabulary.uncefact.org/className

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this product classification.

#### See

https://vocabulary.uncefact.org/description

***

### subClassCode? {#subclasscode}

> `optional` **subClassCode**: `string`

The code specifying the sub class for this product classification.

#### See

https://vocabulary.uncefact.org/subClassCode

***

### systemId? {#systemid}

> `optional` **systemId**: `string` \| `IJsonLdValueObject`

The unique identifier of the classification system for this product classification.

#### See

https://vocabulary.uncefact.org/systemId

***

### systemName? {#systemname}

> `optional` **systemName**: `string`

A name, expressed as text, of the classification system for this product classification.

#### See

https://vocabulary.uncefact.org/systemName

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of product classification.

#### See

https://vocabulary.uncefact.org/typeCode
