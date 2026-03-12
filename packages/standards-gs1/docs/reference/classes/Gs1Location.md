# Class: Gs1Location

Interface describing a GS1 Location master data.
Spec https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-1-r-2017-05-05.pdf .
Section 10.2 .

## Constructors

### Constructor

> **new Gs1Location**(): `Gs1Location`

#### Returns

`Gs1Location`

## Properties

### id {#id}

> **id**: `string`

The GS1 sgln identifier.

***

### site? {#site}

> `optional` **site**: `string`

Identifies the site in which the location is contained.

***

### sst? {#sst}

> `optional` **sst**: [`Gs1SubSiteTypes`](../type-aliases/Gs1SubSiteTypes.md)

Sub site type describes the primary business function of the sub site location.

***

### ssa? {#ssa}

> `optional` **ssa**: [`Gs1SubSiteAttributes`](../type-aliases/Gs1SubSiteAttributes.md)

Sub site attribute further qualifies the business function of the sub site location.

***

### ssd? {#ssd}

> `optional` **ssd**: `string`

Sub site detail provides additional proprietary information.

***

### name? {#name}

> `optional` **name**: `string`

The name of the location.

***

### streetAddressOne? {#streetaddressone}

> `optional` **streetAddressOne**: `string`

The street address line 1.

***

### streetAddressTwo? {#streetaddresstwo}

> `optional` **streetAddressTwo**: `string`

The street address line 2.

***

### streetAddressThree? {#streetaddressthree}

> `optional` **streetAddressThree**: `string`

The street address line 3.

***

### city? {#city}

> `optional` **city**: `string`

City.

***

### state? {#state}

> `optional` **state**: `string`

State.

***

### postalCode? {#postalcode}

> `optional` **postalCode**: `string`

Postal Code.

***

### countryCode? {#countrycode}

> `optional` **countryCode**: `string`

Country Code The ISO 3166-1 alpha-2 code specifying the country for the address.

***

### latitude? {#latitude}

> `optional` **latitude**: `number`

The latitude of the location in degrees.

***

### longitude? {#longitude}

> `optional` **longitude**: `number`

The longitude of the location in degrees.
