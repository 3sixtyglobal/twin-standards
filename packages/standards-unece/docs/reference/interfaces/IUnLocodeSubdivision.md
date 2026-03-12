# Interface: IUnLocodeSubdivision

Interface for a UN/LOCODE subdivision.

## Properties

### code {#code}

> **code**: `string`

The subdivision code (e.g., "04" for Andorra).

***

### subdivisionUri {#subdivisionuri}

> **subdivisionUri**: `string`

The subdivision URI (e.g., "unlcds:AD04").

***

### label {#label}

> **label**: `string`

The subdivision label (e.g., "Aberdeenshire").

***

### type? {#type}

> `optional` **type**: `string`

The subdivision type (e.g., "Province", "Parish", "State").

***

### countryCodeUri? {#countrycodeuri}

> `optional` **countryCodeUri**: [`UnLocodeCountriesList`](../type-aliases/UnLocodeCountriesList.md)

The country URI (e.g., "unlcdc:AD").
