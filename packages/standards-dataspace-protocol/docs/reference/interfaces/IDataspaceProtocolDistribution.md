# Interface: IDataspaceProtocolDistribution

Distribution interface compliant with Eclipse Data Space Protocol.

This interface extends IDistribution  and enforces DS Protocol-specific requirements
by overriding properties with more specific types and constraints.

**Requirements per DS Protocol:**
- `@id` MUST be present for dataset identification (REQUIRED)
- `odrl:hasPolicy` MIGHT be present as an array of ODRL Offers (OPTIONAL)
- Array MUST contain at least one IOdrlOffer
- Each Offer MUST have `@type`: "Offer"
- `format` is REQUIRED.

**Type System Design:**
- W3C DCAT spec defines `odrl:hasPolicy` as optional singular `IOdrlPolicy`
- DS Protocol requires it as a REQUIRED array of `IOdrlOffer`
- Interface extension allows TypeScript to override inherited property types
- Standards packages (@twin.org/standards-w3c-*) follow W3C specs exactly
- DS Protocol-specific constraints are defined here

**Future Compatibility:**
- Currently only one Offer per dataset is supported
- Array structure allows future support for multiple offers

## See

 - https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 - https://www.w3.org/TR/vocab-dcat-3/ - W3C DCAT v3 spec
 - IOdrlOffer from @twin.org/standards-w3c-odrl
 - IResource.odrl:hasPolicy from @twin.org/standards-w3c-dcat

## Extends

- `Omit`\<`IDcatDistribution`, `"odrl:hasPolicy"` \| `"@type"` \| `"@context"` \| `"dcterms:format"`\>

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context. Required per Eclipse Data Space Protocol.

***

### @type

> **@type**: `"Distribution"`

The type identifier for the Distribution.
REQUIRED per Eclipse Data Space Protocol.

***

### @id

> **@id**: `string`

Unique identifier for the dataset.
REQUIRED per Eclipse Data Space Protocol.

#### Overrides

`Omit.@id`

***

### hasPolicy?

> `optional` **hasPolicy**: `ObjectOrArray`\<`Omit`\<`IOdrlOffer`, `"@context"`\>\>

Array of ODRL policies (Offers) as required by DS Protocol.

REQUIRED per Eclipse Data Space Protocol spec.
Must contain at least one IOdrlOffer.
Currently only single offer is supported, but array structure
allows for future multi-offer support.

***

### accessService

> **accessService**: `string` \| `Omit`\<[`IDataspaceProtocolDataService`](IDataspaceProtocolDataService.md), `"@context"`\>

Access service.
It can be a URI pointing to an access service or inline the access service itself

***

### format

> **format**: `string`

Distribution format.
REQUIRED per Eclipse Data Space Protocol.

***

### dcterms:title?

> `optional` **dcterms:title**: `DcatLiteralType`

A name given to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title

#### Inherited from

`Omit.dcterms:title`

***

### dcterms:description?

> `optional` **dcterms:description**: `DcatLiteralType`

A free-text account of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description

#### Inherited from

`Omit.dcterms:description`

***

### dcterms:issued?

> `optional` **dcterms:issued**: `string`

Date of formal issuance of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date

#### Inherited from

`Omit.dcterms:issued`

***

### dcterms:modified?

> `optional` **dcterms:modified**: `string`

Most recent date on which the distribution was changed, updated or modified.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date

#### Inherited from

`Omit.dcterms:modified`

***

### dcterms:license?

> `optional` **dcterms:license**: `string`

A legal document under which the distribution is made available.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_license

#### Inherited from

`Omit.dcterms:license`

***

### dcterms:accessRights?

> `optional` **dcterms:accessRights**: `string`

Information about who can access the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_rights

#### Inherited from

`Omit.dcterms:accessRights`

***

### dcterms:rights?

> `optional` **dcterms:rights**: `string`

Information about rights held in and over the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_rights

#### Inherited from

`Omit.dcterms:rights`

***

### dcat:accessURL?

> `optional` **dcat:accessURL**: `string`

A URL of the resource that gives access to a distribution of the dataset.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_url

#### Inherited from

`Omit.dcat:accessURL`

***

### dcat:accessService?

> `optional` **dcat:accessService**: `string`

A data service that gives access to the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_service

#### Inherited from

`Omit.dcat:accessService`

***

### dcat:downloadURL?

> `optional` **dcat:downloadURL**: `string`

The URL of the downloadable file in a given format.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_download_url

#### Inherited from

`Omit.dcat:downloadURL`

***

### dcat:byteSize?

> `optional` **dcat:byteSize**: `number`

The size of the distribution in bytes.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_byte_size

#### Inherited from

`Omit.dcat:byteSize`

***

### dcat:spatialResolutionInMeters?

> `optional` **dcat:spatialResolutionInMeters**: `number`

The minimum spatial separation resolvable in a distribution, measured in meters.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution

#### Inherited from

`Omit.dcat:spatialResolutionInMeters`

***

### dcat:temporalResolution?

> `optional` **dcat:temporalResolution**: `string`

Minimum time period resolvable in the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution

#### Inherited from

`Omit.dcat:temporalResolution`

***

### dcterms:conformsTo?

> `optional` **dcterms:conformsTo**: `ObjectOrArray`\<`string`\>

An established standard to which the distribution conforms.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_conforms_to

#### Inherited from

`Omit.dcterms:conformsTo`

***

### dcat:mediaType?

> `optional` **dcat:mediaType**: `string`

The media type of the distribution as defined by IANA.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_media_type

#### Inherited from

`Omit.dcat:mediaType`

***

### dcat:compressFormat?

> `optional` **dcat:compressFormat**: `string`

The compression format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_compression_format

#### Inherited from

`Omit.dcat:compressFormat`

***

### dcat:packageFormat?

> `optional` **dcat:packageFormat**: `string`

The package format of the distribution.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_packaging_format

#### Inherited from

`Omit.dcat:packageFormat`

***

### spdx:checksum?

> `optional` **spdx:checksum**: `string`

The checksum property provides a mechanism to verify the data integrity.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum

#### Inherited from

`Omit.spdx:checksum`
