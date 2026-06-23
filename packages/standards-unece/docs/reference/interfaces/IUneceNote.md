# Interface: IUneceNote

A textual or coded description, such as a remark or additional information.

## See

https://vocabulary.uncefact.org/Note

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Note"`

JSON-LD Type.

***

### content? {#content}

> `optional` **content?**: `string`

A content, expressed as text, of this note.

#### See

https://vocabulary.uncefact.org/content

***

### contentCode? {#contentcode}

> `optional` **contentCode?**: `string`

A code specifying the content of this note.

#### See

https://vocabulary.uncefact.org/contentCode

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime?**: `string`

The date, time, date time, or other date time value for the creation of this note.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier for this note.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this note.

#### See

https://vocabulary.uncefact.org/name

***

### noteSubjectCode? {#notesubjectcode}

> `optional` **noteSubjectCode?**: `string`

A code specifying the subject of this note.

#### See

https://vocabulary.uncefact.org/noteSubjectCode

***

### subject? {#subject}

> `optional` **subject?**: `string`

The subject, expressed as text, of this note.

#### See

https://vocabulary.uncefact.org/subject
