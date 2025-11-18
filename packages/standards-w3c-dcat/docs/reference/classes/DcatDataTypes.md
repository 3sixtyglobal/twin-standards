# Class: DcatDataTypes

Class providing DCAT data type utilities and JSON-LD redirect registration.

## Constructors

### Constructor

> **new DcatDataTypes**(): `DcatDataTypes`

#### Returns

`DcatDataTypes`

## Methods

### registerRedirects()

> `static` **registerRedirects**(): `void`

Register redirects for DCAT namespace to enable offline JSON-LD processing.
This maps the W3C DCAT namespace to a local redirect URL for faster resolution.

#### Returns

`void`

***

### registerTypes()

> `static` **registerTypes**(): `void`

Register all the DCAT data types with their JSON schemas.

#### Returns

`void`
