# Interface: IDcatDistribution

Interface for DCAT Distribution.
A specific representation of a dataset. A dataset might be available in multiple
serializations that may differ in various ways.

## See

https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution

## Extends

- [`IDcatDistributionBase`](IDcatDistributionBase.md)

## Properties

### @context {#context}

> **@context**: [`DcatContextType`](../type-aliases/DcatContextType.md)

The JSON-LD context for the resource.

***

### @type {#type}

> **@type**: `"dcat:Distribution"`

The type identifier, typically "Distribution".

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`@type`](IDcatDistributionBase.md#type)

***

### @id? {#id}

> `optional` **@id**: `string`

The unique identifier for the distribution object.

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`@id`](IDcatDistributionBase.md#id)

***

### dcterms:title? {#dctermstitle}

> `optional` **dcterms:title**: `ObjectOrArray`\<`string`\>

A name given to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:title`](IDcatDistributionBase.md#dctermstitle)

***

### dcterms:description? {#dctermsdescription}

> `optional` **dcterms:description**: `ObjectOrArray`\<`string`\>

A free-text account of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:description`](IDcatDistributionBase.md#dctermsdescription)

***

### dcterms:issued? {#dctermsissued}

> `optional` **dcterms:issued**: `string`

Date of formal issuance of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:issued`](IDcatDistributionBase.md#dctermsissued)

***

### dcterms:modified? {#dctermsmodified}

> `optional` **dcterms:modified**: `string`

Most recent date on which the distribution was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:modified`](IDcatDistributionBase.md#dctermsmodified)

***

### dcterms:license? {#dctermslicense}

> `optional` **dcterms:license**: `string`

A legal document under which the distribution is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_license

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:license`](IDcatDistributionBase.md#dctermslicense)

***

### dcterms:accessRights? {#dctermsaccessrights}

> `optional` **dcterms:accessRights**: `string`

Information about who can access the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_rights

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:accessRights`](IDcatDistributionBase.md#dctermsaccessrights)

***

### dcterms:rights? {#dctermsrights}

> `optional` **dcterms:rights**: `string`

Information about rights held in and over the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_rights

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:rights`](IDcatDistributionBase.md#dctermsrights)

***

### dcat:accessURL? {#dcataccessurl}

> `optional` **dcat:accessURL**: `string`

A URL of the resource that gives access to a distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_url

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:accessURL`](IDcatDistributionBase.md#dcataccessurl)

***

### dcat:accessService? {#dcataccessservice}

> `optional` **dcat:accessService**: `string`

A data service that gives access to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_service

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:accessService`](IDcatDistributionBase.md#dcataccessservice)

***

### dcat:downloadURL? {#dcatdownloadurl}

> `optional` **dcat:downloadURL**: `string`

The URL of the downloadable file in a given format.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_download_url

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:downloadURL`](IDcatDistributionBase.md#dcatdownloadurl)

***

### dcat:byteSize? {#dcatbytesize}

> `optional` **dcat:byteSize**: `number`

The size of the distribution in bytes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_byte_size

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:byteSize`](IDcatDistributionBase.md#dcatbytesize)

***

### dcat:spatialResolutionInMeters? {#dcatspatialresolutioninmeters}

> `optional` **dcat:spatialResolutionInMeters**: `number`

The minimum spatial separation resolvable in a distribution, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:spatialResolutionInMeters`](IDcatDistributionBase.md#dcatspatialresolutioninmeters)

***

### dcat:temporalResolution? {#dcattemporalresolution}

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:temporalResolution`](IDcatDistributionBase.md#dcattemporalresolution)

***

### dcterms:conformsTo? {#dctermsconformsto}

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the distribution conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_conforms_to

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:conformsTo`](IDcatDistributionBase.md#dctermsconformsto)

***

### dcat:mediaType? {#dcatmediatype}

> `optional` **dcat:mediaType**: `string`

The media type of the distribution as defined by IANA.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_media_type

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:mediaType`](IDcatDistributionBase.md#dcatmediatype)

***

### dcterms:format? {#dctermsformat}

> `optional` **dcterms:format**: `string`

The file format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_format

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcterms:format`](IDcatDistributionBase.md#dctermsformat)

***

### dcat:compressFormat? {#dcatcompressformat}

> `optional` **dcat:compressFormat**: `string`

The compression format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_compression_format

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:compressFormat`](IDcatDistributionBase.md#dcatcompressformat)

***

### dcat:packageFormat? {#dcatpackageformat}

> `optional` **dcat:packageFormat**: `string`

The package format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_packaging_format

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`dcat:packageFormat`](IDcatDistributionBase.md#dcatpackageformat)

***

### spdx:checksum? {#spdxchecksum}

> `optional` **spdx:checksum**: `string`

The checksum property provides a mechanism to verify the data integrity.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`spdx:checksum`](IDcatDistributionBase.md#spdxchecksum)

***

### odrl:hasPolicy? {#odrlhaspolicy}

> `optional` **odrl:hasPolicy**: `IOdrlPolicy`

An ODRL conformant policy expressing the rights associated with the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_has_policy

#### Inherited from

[`IDcatDistributionBase`](IDcatDistributionBase.md).[`odrl:hasPolicy`](IDcatDistributionBase.md#odrlhaspolicy)
