# Interface: IEpcisHeader

EPCIS 2.0 Header carrying optional master data alongside an EPCIS document.

## See

https://ref.gs1.org/epcis/EPCISHeader

## Properties

### epcisMasterData? {#epcismasterdata}

> `optional` **epcisMasterData**: `IJsonLdNodeObject` & `object`

EPCIS master data.

#### Type Declaration

##### vocabularyList?

> `optional` **vocabularyList**: [`IEpcisVocabulary`](IEpcisVocabulary.md)[]

Vocabulary list.
