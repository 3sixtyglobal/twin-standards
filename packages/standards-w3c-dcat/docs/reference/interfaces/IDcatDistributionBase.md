# Interface: IDcatDistributionBase

Base interface for DCAT Distribution without JSON-LD context.
This is the context-free variant of IDcatDistribution, intended for embedding
distribution objects inline within datasets where the context is provided by the enclosing document.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution

## Extended by

- [`IDcatDistribution`](IDcatDistribution.md)

## Properties

### @type {#type}

> **@type**: `"dcat:Distribution"`

The type identifier, typically "Distribution".

***

### @id? {#id}

> `optional` **@id**: `string`

The unique identifier for the distribution object.

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>

A name given to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description**: `ObjectOrArray`\<`string`\>

A free-text account of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued**: `string`

Date of formal issuance of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified**: `string`

Most recent date on which the distribution was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license**: `string`

A legal document under which the distribution is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_license

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights**: `string`

Information about who can access the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_rights

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights**: `string`

Information about rights held in and over the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_rights

***

### dcat:accessURL? {#dcataccessurl}

> `optional` **dcat:accessURL**: `string`

A URL of the resource that gives access to a distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_url

***

### dcat:accessService? {#dcataccessservice}

> `optional` **dcat:accessService**: `string`

A data service that gives access to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_service

***

### dcat:downloadURL? {#dcatdownloadurl}

> `optional` **dcat:downloadURL**: `string`

The URL of the downloadable file in a given format.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_download_url

***

### dcat:byteSize? {#dcatbytesize}

> `optional` **dcat:byteSize**: `number`

The size of the distribution in bytes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_byte_size

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters**: `number`

The minimum spatial separation resolvable in a distribution, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the distribution conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_conforms_to

***

### dcat:mediaType? {#dcatmediatype}

> `optional` **dcat:mediaType**: `string`

The media type of the distribution as defined by IANA.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_media_type

***

### dcterms:format? {#dctermsformat}

> `optional` **dcterms:format**: `string`

The file format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_format

***

### dcat:compressFormat? {#dcatcompressformat}

> `optional` **dcat:compressFormat**: `string`

The compression format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_compression_format

***

### dcat:packageFormat? {#dcatpackageformat}

> `optional` **dcat:packageFormat**: `string`

The package format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_packaging_format

***

### spdx:checksum? {#spdxchecksum}

> `optional` **spdx:checksum**: `string`

The checksum property provides a mechanism to verify the data integrity.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_has_policy
