# Class: UnLocodes

A class handling UN/LOCODEs.

## See

https://vocabulary.uncefact.org/unlocode-about

## Constructors

### Constructor

> **new UnLocodes**(): `UnLocodes`

#### Returns

`UnLocodes`

## Methods

### getCountries() {#getcountries}

> `static` **getCountries**(): `Promise`\<[`IUnLocodeCountry`](../interfaces/IUnLocodeCountry.md)[]\>

Get the list of UN/LOCODE countries.

#### Returns

`Promise`\<[`IUnLocodeCountry`](../interfaces/IUnLocodeCountry.md)[]\>

The list of UN/LOCODE countries.

#### See

https://vocabulary.uncefact.org/unlocode-countries

***

### getCountryByUri() {#getcountrybyuri}

> `static` **getCountryByUri**(`countryUri`): `Promise`\<[`IUnLocodeCountry`](../interfaces/IUnLocodeCountry.md) \| `undefined`\>

Get the country by its uri.

#### Parameters

##### countryUri

`string`

The country URI.

#### Returns

`Promise`\<[`IUnLocodeCountry`](../interfaces/IUnLocodeCountry.md) \| `undefined`\>

The country information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-countries

***

### getCountryByValue() {#getcountrybyvalue}

> `static` **getCountryByValue**(`countryValue`): `Promise`\<[`IUnLocodeCountry`](../interfaces/IUnLocodeCountry.md) \| `undefined`\>

Get the country by its value.

#### Parameters

##### countryValue

`string`

The country value.

#### Returns

`Promise`\<[`IUnLocodeCountry`](../interfaces/IUnLocodeCountry.md) \| `undefined`\>

The country information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-countries

***

### getFunctions() {#getfunctions}

> `static` **getFunctions**(): `Promise`\<[`IUnLocodeFunction`](../interfaces/IUnLocodeFunction.md)[]\>

Get the list of UN/LOCODE functions.

#### Returns

`Promise`\<[`IUnLocodeFunction`](../interfaces/IUnLocodeFunction.md)[]\>

The list of UN/LOCODE functions.

#### See

https://vocabulary.uncefact.org/unlocode-functions

***

### getFunctionByUri() {#getfunctionbyuri}

> `static` **getFunctionByUri**(`functionUri`): `Promise`\<[`IUnLocodeFunction`](../interfaces/IUnLocodeFunction.md) \| `undefined`\>

Get the function by its uri.

#### Parameters

##### functionUri

`string`

The function URI.

#### Returns

`Promise`\<[`IUnLocodeFunction`](../interfaces/IUnLocodeFunction.md) \| `undefined`\>

The function information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-functions

***

### getFunctionByValue() {#getfunctionbyvalue}

> `static` **getFunctionByValue**(`functionValue`): `Promise`\<[`IUnLocodeFunction`](../interfaces/IUnLocodeFunction.md) \| `undefined`\>

Get the function by its value.

#### Parameters

##### functionValue

`string`

The function value.

#### Returns

`Promise`\<[`IUnLocodeFunction`](../interfaces/IUnLocodeFunction.md) \| `undefined`\>

The function information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-functions

***

### getLocationByCode() {#getlocationbycode}

> `static` **getLocationByCode**(`unLocode`): `Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md) \| `undefined`\>

Get the location by its UN/LOCODE.

#### Parameters

##### unLocode

`string`

The UN/LOCODE value.

#### Returns

`Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md) \| `undefined`\>

The location information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-about

***

### getLocationByUri() {#getlocationbyuri}

> `static` **getLocationByUri**(`unLocodeUri`): `Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md) \| `undefined`\>

Get the location by its UN/LOCODE uri.

#### Parameters

##### unLocodeUri

`string`

The UN/LOCODE URI.

#### Returns

`Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md) \| `undefined`\>

The location information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-about

***

### getLocationByLabel() {#getlocationbylabel}

> `static` **getLocationByLabel**(`label`): `Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md) \| `undefined`\>

Get the location by its label.

#### Parameters

##### label

`string`

The location label.

#### Returns

`Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md) \| `undefined`\>

The location information or undefined if not found.

#### See

https://vocabulary.uncefact.org/unlocode-about

***

### getSubdivisionByCode() {#getsubdivisionbycode}

> `static` **getSubdivisionByCode**(`subdivisionCode`): `Promise`\<[`IUnLocodeSubdivision`](../interfaces/IUnLocodeSubdivision.md) \| `undefined`\>

Get the subdivision by its code.

#### Parameters

##### subdivisionCode

`string`

The subdivision code (e.g., "AD04").

#### Returns

`Promise`\<[`IUnLocodeSubdivision`](../interfaces/IUnLocodeSubdivision.md) \| `undefined`\>

The subdivision information or undefined if not found.

***

### getSubdivisionByUri() {#getsubdivisionbyuri}

> `static` **getSubdivisionByUri**(`subdivisionUri`): `Promise`\<[`IUnLocodeSubdivision`](../interfaces/IUnLocodeSubdivision.md) \| `undefined`\>

Get the subdivision by its URI.

#### Parameters

##### subdivisionUri

`string`

The subdivision URI (e.g., "unlcds:AD04").

#### Returns

`Promise`\<[`IUnLocodeSubdivision`](../interfaces/IUnLocodeSubdivision.md) \| `undefined`\>

The subdivision information or undefined if not found.

***

### getLocations() {#getlocations}

> `static` **getLocations**(`countryCode`): `Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md)[]\>

Get the locations for a given country code.

#### Parameters

##### countryCode

`string`

The country code.

#### Returns

`Promise`\<[`IUnLocodeLocation`](../interfaces/IUnLocodeLocation.md)[]\>

The list of locations for the country.

#### Throws

Error if the country code is invalid or if the data file cannot be loaded.

***

### getSubdivisions() {#getsubdivisions}

> `static` **getSubdivisions**(`countryCode`): `Promise`\<[`IUnLocodeSubdivision`](../interfaces/IUnLocodeSubdivision.md)[]\>

Get the subdivisions for a given country code.

#### Parameters

##### countryCode

`string`

The country code.

#### Returns

`Promise`\<[`IUnLocodeSubdivision`](../interfaces/IUnLocodeSubdivision.md)[]\>

The list of subdivisions for the country.

#### Throws

Error if the country code is invalid or if the data file cannot be loaded.
