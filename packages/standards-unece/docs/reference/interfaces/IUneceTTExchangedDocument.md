# Interface: IUneceTTExchangedDocument

A collection of data for a piece of written, printed or electronic matter that is exchanged between two or more parties
for Track and Trace (TT) purposes.

## See

https://vocabulary.uncefact.org/TTExchangedDocument

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TTExchangedDocument"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/description

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this TT exchanged document.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

The date, time, date time, or other date time value of the issuance of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### receiverSpecifiedParty {#receiverspecifiedparty}

> **receiverSpecifiedParty**: [`IUneceTTParty`](IUneceTTParty.md)

The receiving party specified for this TT exchanged document.

#### See

https://vocabulary.uncefact.org/receiverSpecifiedParty

***

### senderSpecifiedParty {#senderspecifiedparty}

> **senderSpecifiedParty**: [`IUneceTTParty`](IUneceTTParty.md)

The sending party specified for this TT exchanged document.

#### See

https://vocabulary.uncefact.org/senderSpecifiedParty

***

### tTExchangedDocumentPurposeCode? {#ttexchangeddocumentpurposecode}

> `optional` **tTExchangedDocumentPurposeCode?**: `string`

The code specifying a purpose of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/tTExchangedDocumentPurposeCode

***

### tTExchangedDocumentStatusCode? {#ttexchangeddocumentstatuscode}

> `optional` **tTExchangedDocumentStatusCode?**: `string`

The code specifying the status of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/tTExchangedDocumentStatusCode

***

### tTExchangedDocumentTypeCode? {#ttexchangeddocumenttypecode}

> `optional` **tTExchangedDocumentTypeCode?**: `string`

The code specifying the type of TT exchanged document.

#### See

https://vocabulary.uncefact.org/tTExchangedDocumentTypeCode
