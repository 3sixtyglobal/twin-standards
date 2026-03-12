# Interface: IDcsaTransportPayload

Transport payload.

Source: `transportPayload` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaBaseEvent`](IDcsaBaseEvent.md)

## Properties

### eventDateTime {#eventdatetime}

> **eventDateTime**: `string`

The local date and time when the event took place (or will take place).
Format: ISO 8601 date-time.

#### Inherited from

[`IDcsaBaseEvent`](IDcsaBaseEvent.md).[`eventDateTime`](IDcsaBaseEvent.md#eventdatetime)

***

### eventClassifierCode {#eventclassifiercode}

> **eventClassifierCode**: [`DcsaEventClassifierCodeNoReq`](../type-aliases/DcsaEventClassifierCodeNoReq.md)

Event classifier code.

#### Overrides

[`IDcsaBaseEvent`](IDcsaBaseEvent.md).[`eventClassifierCode`](IDcsaBaseEvent.md#eventclassifiercode)

***

### transportEventTypeCode {#transporteventtypecode}

> **transportEventTypeCode**: [`DcsaTransportEventTypeCodes`](../type-aliases/DcsaTransportEventTypeCodes.md)

Transport event type code.

***

### transportCall {#transportcall}

> **transportCall**: [`IDcsaTransportCall`](../type-aliases/IDcsaTransportCall.md)

Transport call context.

***

### delayReasonCode? {#delayreasoncode}

> `optional` **delayReasonCode**: `string`

Delay reason code.
The authoritative schema references the shared `delayReasonCode` from DCSA_DOMAIN.

***

### changeRemark? {#changeremark}

> `optional` **changeRemark**: `string`

Free-text field to provide information as to why the TransportEvent was sent.

***

### relatedDocumentReferences? {#relateddocumentreferences}

> `optional` **relatedDocumentReferences**: [`IDcsaRelatedDocumentReference`](IDcsaRelatedDocumentReference.md)[]

Related documents.

***

### references? {#references}

> `optional` **references**: [`IDcsaReference`](IDcsaReference.md)[]

Additional references.
