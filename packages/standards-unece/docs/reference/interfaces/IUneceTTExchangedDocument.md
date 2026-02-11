# Interface: IUneceTTExchangedDocument

A collection of data for a piece of written, printed or electronic matter that is exchanged between two or more parties
for Track and Trace (TT) purposes.

## See

https://vocabulary.uncefact.org/TTExchangedDocument

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"TTExchangedDocument"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/description

***

### identifier

> **identifier**: `string`

The identifier for this TT exchanged document.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value of the issuance of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### receiverSpecifiedParty

> **receiverSpecifiedParty**: [`IUneceTTParty`](IUneceTTParty.md)

The receiving party specified for this TT exchanged document.

#### See

https://vocabulary.uncefact.org/receiverSpecifiedParty

***

### senderSpecifiedParty

> **senderSpecifiedParty**: [`IUneceTTParty`](IUneceTTParty.md)

The sending party specified for this TT exchanged document.

#### See

https://vocabulary.uncefact.org/senderSpecifiedParty

***

### tTExchangedDocumentPurposeCode?

> `optional` **tTExchangedDocumentPurposeCode**: `string`

The code specifying a purpose of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/tTExchangedDocumentPurposeCode

***

### tTExchangedDocumentStatusCode?

> `optional` **tTExchangedDocumentStatusCode**: `string`

The code specifying the status of this TT exchanged document.

#### See

https://vocabulary.uncefact.org/tTExchangedDocumentStatusCode

***

### tTExchangedDocumentTypeCode?

> `optional` **tTExchangedDocumentTypeCode**: `string`

The code specifying the type of TT exchanged document.

#### See

https://vocabulary.uncefact.org/tTExchangedDocumentTypeCode
