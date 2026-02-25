# Interface: IUneceCommunication

The exchange of thoughts, messages, or information, as universally exchanged by speech, signals, writing, or behaviour
between persons and/or organizations.

## See

https://vocabulary.uncefact.org/Communication

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Communication"`

JSON-LD Type.

***

### access?

> `optional` **access**: `string`

Access information, expressed as text, for the mode of universal communication such as 9 or *70 for a telephone network.

#### See

https://vocabulary.uncefact.org/access

***

### areaNumberCode?

> `optional` **areaNumberCode**: `string`

The code specifying the area number for this universal communication.

#### See

https://vocabulary.uncefact.org/areaNumberCode

***

### communicationChannelCode?

> `optional` **communicationChannelCode**: [`UneceCommunicationChannelCodeList`](../type-aliases/UneceCommunicationChannelCodeList.md)

The code specifying the channel or manner in which a universal communication can be made, such as telephone or email.

#### See

https://vocabulary.uncefact.org/communicationChannelCode

***

### completeNumber?

> `optional` **completeNumber**: `string`

The text string of characters that make up the complete number for this universal communication.

#### See

https://vocabulary.uncefact.org/completeNumber

***

### countryNumberCode?

> `optional` **countryNumberCode**: `string`

The country access code for this universal communication number such as 44, 1, 353 etc.

#### See

https://vocabulary.uncefact.org/countryNumberCode

***

### description?

> `optional` **description**: `string`

A textual description of this universal communication.

#### See

https://vocabulary.uncefact.org/description

***

### emailURIId?

> `optional` **emailURIId**: `string`

The Uniform Resource Identifier (URI) of the email for this universal communication.

#### See

https://vocabulary.uncefact.org/emailURIId

***

### extensionNumber?

> `optional` **extensionNumber**: `string`

The extension number, expressed as text, assigned to this universal communication number to enable a caller to reach a
specific party.

#### See

https://vocabulary.uncefact.org/extensionNumber

***

### hTMLPreferredIndicator?

> `optional` **hTMLPreferredIndicator**: `boolean`

The indication of whether or not HTML format is preferred by the recipient for email universal communications.

#### See

https://vocabulary.uncefact.org/hTMLPreferredIndicator

***

### invalidIndicator?

> `optional` **invalidIndicator**: `boolean`

The indication of whether or not this universal communication is invalid.

#### See

https://vocabulary.uncefact.org/invalidIndicator

***

### localNumber?

> `optional` **localNumber**: `string`

The universal communication number, expressed as text and not including country access code or the area number code, for
this communication.

#### See

https://vocabulary.uncefact.org/localNumber

***

### uRIId?

> `optional` **uRIId**: `string`

The Uniform Resource Identifier (URI), such as a web or an email address, for this universal communication.

#### See

https://vocabulary.uncefact.org/uRIId

***

### useCode?

> `optional` **useCode**: `string`

The code specifying the use of this universal communication such as for business purposes or private.

#### See

https://vocabulary.uncefact.org/useCode

***

### websiteURIId?

> `optional` **websiteURIId**: `string`

The Uniform Resource Identifier (URI) of the website for this universal communication.

#### See

https://vocabulary.uncefact.org/websiteURIId
