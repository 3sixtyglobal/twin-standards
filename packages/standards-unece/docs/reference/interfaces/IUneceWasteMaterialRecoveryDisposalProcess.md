# Interface: IUneceWasteMaterialRecoveryDisposalProcess

A process of either regaining substances in usable form, or of getting rid of substances regarding waste material, such
as production waste.

## See

https://vocabulary.uncefact.org/WasteMaterialRecoveryDisposalProcess

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"WasteMaterialRecoveryDisposalProcess"`

JSON-LD Type.

***

### applicableProcessCertificate?

> `optional` **applicableProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate applicable to this waste material recovery disposal process.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### description?

> `optional` **description**: `string`

A textual description of a waste material recovery disposal process.

#### See

https://vocabulary.uncefact.org/description

***

### wasteMaterialRecoveryDisposalProcessTypeCode?

> `optional` **wasteMaterialRecoveryDisposalProcessTypeCode**: `string`

The code specifying the type of waste material recovery disposal process.

#### See

https://vocabulary.uncefact.org/wasteMaterialRecoveryDisposalProcessTypeCode
