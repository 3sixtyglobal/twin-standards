# Variable: DataspaceProtocolEndpointType

> `const` **DataspaceProtocolEndpointType**: `object`

W3ID-based endpoint type identifiers from the IDSA namespace.

These persistent identifiers follow the W3ID (https://w3id.org) system
used by the International Data Spaces Association (IDSA) to provide
stable, semantic identifiers for data space endpoint types.

W3ID URLs are designed to be:
- Persistent (permanent identifiers that don't break)
- Resolvable (can be dereferenced to get definitions)
- Semantic (provide meaning through linked data)

References:
- IDSA W3ID Namespace: https://w3id.org/idsa/
- IDS Information Model: https://github.com/International-Data-Spaces-Association/InformationModel
- DSP Specification: https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/

## Type Declaration

### HTTP

> `readonly` **HTTP**: `"https://w3id.org/idsa/v4.1/HTTP"` = `"https://w3id.org/idsa/v4.1/HTTP"`

HTTP endpoint (IDSA W3ID v4.1).

Persistent identifier for HTTP-based data access endpoints.
This W3ID URL is used as a semantic identifier in JSON-LD contexts.

#### See

 - https://w3id.org/idsa/v4.1/HTTP
 - https://github.com/International-Data-Spaces-Association/InformationModel

### HTTPS

> `readonly` **HTTPS**: `"https://w3id.org/idsa/v4.1/HTTPS"` = `"https://w3id.org/idsa/v4.1/HTTPS"`

HTTPS endpoint (IDSA W3ID v4.1).

Persistent identifier for HTTPS-based secure data access endpoints.
This W3ID URL is used as a semantic identifier in JSON-LD contexts.

#### See

 - https://w3id.org/idsa/v4.1/HTTPS
 - https://github.com/International-Data-Spaces-Association/InformationModel

### HttpsActivityStream

> `readonly` **HttpsActivityStream**: `"Https-Activity-Stream-Endpoint"` = `"Https-Activity-Stream-Endpoint"`

HTTPS Activity Stream endpoint (Activity Streams 2.0).

Used for ActivityPub/Activity Streams protocol endpoints.
This is used in PUSH transfer scenarios where the provider
sends data to the consumer's Activity Stream inbox.

#### See

 - https://www.w3.org/TR/activitystreams-core/
 - https://www.w3.org/TR/activitypub/

### S3

> `readonly` **S3**: `"S3"` = `"S3"`

Amazon S3 bucket endpoint.

Used for S3-based data transfer (both PULL and PUSH).
Note: Not currently part of IDSA W3ID namespace.

#### See

https://aws.amazon.com/s3/

### AzureStorage

> `readonly` **AzureStorage**: `"AzureStorage"` = `"AzureStorage"`

Azure Blob Storage endpoint.

Used for Azure cloud storage-based data transfer.
Note: Not currently part of IDSA W3ID namespace.

#### See

https://azure.microsoft.com/en-us/products/storage/blobs

### Kafka

> `readonly` **Kafka**: `"Kafka"` = `"Kafka"`

Apache Kafka topic endpoint.

Used for streaming data via Kafka message broker.
Note: Not currently part of IDSA W3ID namespace.

#### See

https://kafka.apache.org/

### SFTP

> `readonly` **SFTP**: `"SFTP"` = `"SFTP"`

SFTP (SSH File Transfer Protocol) endpoint.

Used for secure file transfer over SSH.
Note: Not currently part of IDSA W3ID namespace.

#### See

https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol
