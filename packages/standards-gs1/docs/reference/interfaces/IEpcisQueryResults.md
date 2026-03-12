# Interface: IEpcisQueryResults

EPCIS 2.0 QueryResults payload returned from a repository query.

## See

https://ref.gs1.org/epcis/QueryResults

## Properties

### subscriptionID? {#subscriptionid}

> `optional` **subscriptionID**: `string`

The concerned subscription.

***

### queryName {#queryname}

> **queryName**: `string`

The concerned query.

***

### resultsBody {#resultsbody}

> **resultsBody**: [`IEpcisQueryResultsBody`](IEpcisQueryResultsBody.md)

The query results payload.
