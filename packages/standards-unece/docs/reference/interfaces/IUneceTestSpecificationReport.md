# Interface: IUneceTestSpecificationReport

A report that specifies a certification test and its attributes.

## See

https://vocabulary.uncefact.org/TestSpecificationReport

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"TestSpecificationReport"`

JSON-LD Type.

***

### result?

> `optional` **result**: `string`

A result, expressed as text, reported in this certification test specification report.

#### See

https://vocabulary.uncefact.org/result

***

### standardName?

> `optional` **standardName**: `string`

The name, expressed as text, of the standard applicable for this certification test specification report.

#### See

https://vocabulary.uncefact.org/standardName

***

### testName?

> `optional` **testName**: `string`

A test name, expressed as text, for this certification test specification report.

#### See

https://vocabulary.uncefact.org/testName
