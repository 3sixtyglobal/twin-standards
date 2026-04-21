# Variable: DataspaceProtocolTransferFormat

> `const` **DataspaceProtocolTransferFormat**: `object`

DSP transfer format identifiers used in TransferRequestMessage.format.
See RFC-006 Data Transfer Profile Vocabulary.

## Type Declaration

### HttpPullQueryFormat {#httppullqueryformat}

> `readonly` **HttpPullQueryFormat**: `"Http-Pull-Query-Format"` = `"Http-Pull-Query-Format"`

PULL mode: consumer queries data via a bearer-token-protected endpoint.

### HttpPushActivityStreamFormat {#httppushactivitystreamformat}

> `readonly` **HttpPushActivityStreamFormat**: `"Http-Push-Activity-Stream-Format"` = `"Http-Push-Activity-Stream-Format"`

Consumer-initiated PUSH mode: consumer provides an /inbox endpoint; provider posts ActivityStreams objects there.

### HttpPostActivityStreamFormat {#httppostactivitystreamformat}

> `readonly` **HttpPostActivityStreamFormat**: `"Http-Post-Activity-Stream-Format"` = `"Http-Post-Activity-Stream-Format"`

Provider-initiated PUSH mode: provider returns an /inbox URL and JWT token in endpointProperties.
