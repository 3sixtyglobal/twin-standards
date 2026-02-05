# Interface: IUnLocodeLocation

UN/LOCODE Location information.

## Properties

### locode

> **locode**: `string`

The locode of the UN/LOCODE.

***

### locodeUri

> **locodeUri**: `string`

The locodeUri of the UN/LOCODE.

***

### label

> **label**: `string`

The label of the UN/LOCODE.

***

### labelWithDiacritics

> **labelWithDiacritics**: `string`

The label of the UN/LOCODE with diacritics.

***

### geoCoordinates?

> `optional` **geoCoordinates**: `object`

The coordinates of the UN/LOCODE.

#### latitude

> **latitude**: `number`

#### longitude

> **longitude**: `number`

***

### countryCodeUri

> **countryCodeUri**: [`UnLocodeCountriesList`](../type-aliases/UnLocodeCountriesList.md)

The country code uri of the UN/LOCODE.

***

### countrySubdivisionUri

> **countrySubdivisionUri**: `string`

The country subdivision uri of the UN/LOCODE.

***

### functions

> **functions**: [`UnLocodeFunctionsList`](../type-aliases/UnLocodeFunctionsList.md)[]

The functions of the UN/LOCODE.
