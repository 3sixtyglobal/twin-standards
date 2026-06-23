# Interface: IEpcisQueryResultsBody

EPCIS 2.0 QueryResultsBody containing events and optional master data.

## See

https://ref.gs1.org/epcis/QueryResultsBody

## Properties

### eventList {#eventlist}

> **eventList**: [`EpcisEvents`](../type-aliases/EpcisEvents.md)[]

The list of events.

***

### vocabularyList? {#vocabularylist}

> `optional` **vocabularyList?**: [`IEpcisVocabulary`](IEpcisVocabulary.md)[]

Optional master data.
