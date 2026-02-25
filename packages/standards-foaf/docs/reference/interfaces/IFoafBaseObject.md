# Interface: IFoafBaseObject

Core FOAF Properties

## See

http://xmlns.com/foaf/0.1/

## Extended by

- [`IFoafAgent`](IFoafAgent.md)
- [`IFoafDocument`](IFoafDocument.md)

## Properties

### @context?

> `optional` **@context**: [`FoafContextType`](../type-aliases/FoafContextType.md)

The LD Context.

***

### @id?

> `optional` **@id**: `string`

The unique identifier for the FOAF object.

***

### name?

> `optional` **name**: `string`

A name for some thing.

#### See

http://xmlns.com/foaf/spec/#term_name

***

### title?

> `optional` **title**: `string`

Title (Mr, Mrs, Ms, Dr. etc)

#### See

http://xmlns.com/foaf/spec/#term_title

***

### mbox?

> `optional` **mbox**: `string`

A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox

#### See

http://xmlns.com/foaf/spec/#term_mbox

***

### homepage?

> `optional` **homepage**: `string`

A homepage for some thing.

#### See

http://xmlns.com/foaf/spec/#term_homepage

***

### depiction?

> `optional` **depiction**: [`IFoafImage`](IFoafImage.md)

A depiction of some thing.

#### See

http://xmlns.com/foaf/spec/#term_depiction
