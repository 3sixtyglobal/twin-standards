# Interface: IUnLocodeLocation

UN/LOCODE Location information.

## Properties

### locode {#locode}

> **locode**: `string`

The locode of the UN/LOCODE.

***

### locodeUri {#locodeuri}

> **locodeUri**: `string`

The locodeUri of the UN/LOCODE.

***

### label {#label}

> **label**: `string`

The label of the UN/LOCODE.

***

### labelWithDiacritics {#labelwithdiacritics}

> **labelWithDiacritics**: `string`

The label of the UN/LOCODE with diacritics.

***

### geoCoordinates? {#geocoordinates}

> `optional` **geoCoordinates?**: `object`

The coordinates of the UN/LOCODE.

#### latitude

> **latitude**: `number`

#### longitude

> **longitude**: `number`

***

### countryCodeUri {#countrycodeuri}

> **countryCodeUri**: [`UnLocodeCountriesList`](../type-aliases/UnLocodeCountriesList.md)

The country code uri of the UN/LOCODE.

***

### countrySubdivisionUri {#countrysubdivisionuri}

> **countrySubdivisionUri**: `string`

The country subdivision uri of the UN/LOCODE.

***

### functions {#functions}

> **functions**: [`UnLocodeFunctionsList`](../type-aliases/UnLocodeFunctionsList.md)[]

The functions of the UN/LOCODE.
