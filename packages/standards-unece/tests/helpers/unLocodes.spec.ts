// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { UnLocodes } from "../../src/helpers/unLocodes.js";

describe("UnLocodes", () => {
	test("Can get the country information", async () => {
		const countries = await UnLocodes.getCountries();

		expect(countries.length).toEqual(249);
		expect(countries[0]).toHaveProperty("uri");
		expect(countries[0]).toHaveProperty("label");
		expect(countries[0]).toHaveProperty("value");
	});

	test("Can get country by URI", async () => {
		const country = await UnLocodes.getCountryByUri("unlcdc:AD");

		expect(country).toBeDefined();
		expect(country?.uri).toEqual("unlcdc:AD");
		expect(country?.value).toEqual("AD");
		expect(country?.label).toEqual("ANDORRA");
	});

	test("Returns undefined when country URI not found", async () => {
		const country = await UnLocodes.getCountryByUri("unlcdc:XX");

		expect(country).toBeUndefined();
	});

	test("Throws error when URI is empty string", async () => {
		await expect(UnLocodes.getCountryByUri("")).rejects.toThrow();
	});

	test("Can get country by value", async () => {
		const country = await UnLocodes.getCountryByValue("AD");

		expect(country).toBeDefined();
		expect(country?.value).toEqual("AD");
		expect(country?.uri).toEqual("unlcdc:AD");
		expect(country?.label).toEqual("ANDORRA");
	});

	test("Returns undefined when country value not found", async () => {
		const country = await UnLocodes.getCountryByValue("XX");

		expect(country).toBeUndefined();
	});

	test("Throws error when value is empty string", async () => {
		await expect(UnLocodes.getCountryByValue("")).rejects.toThrow();
	});

	test("Can get the function information", async () => {
		const functions = await UnLocodes.getFunctions();

		expect(functions.length).toEqual(11);
		expect(functions[0]).toHaveProperty("uri");
		expect(functions[0]).toHaveProperty("label");
		expect(functions[0]).toHaveProperty("comment");
		expect(functions[0]).toHaveProperty("value");
	});

	test("Can get function by URI", async () => {
		const func = await UnLocodes.getFunctionByUri("unlcdf:1");

		expect(func).toBeDefined();
		expect(func?.uri).toEqual("unlcdf:1");
		expect(func?.value).toEqual("1");
		expect(func?.label).toEqual("Maritime transport (sea port or maritime port)");
	});

	test("Returns undefined when function URI not found", async () => {
		const func = await UnLocodes.getFunctionByUri("unlcdf:Z");

		expect(func).toBeUndefined();
	});

	test("Throws error when function URI is empty string", async () => {
		await expect(UnLocodes.getFunctionByUri("")).rejects.toThrow();
	});

	test("Can get function by value", async () => {
		const func = await UnLocodes.getFunctionByValue("1");

		expect(func).toBeDefined();
		expect(func?.value).toEqual("1");
		expect(func?.uri).toEqual("unlcdf:1");
		expect(func?.label).toEqual("Maritime transport (sea port or maritime port)");
	});

	test("Returns undefined when function value not found", async () => {
		const func = await UnLocodes.getFunctionByValue("Z");

		expect(func).toBeUndefined();
	});

	test("Throws error when function value is empty string", async () => {
		await expect(UnLocodes.getFunctionByValue("")).rejects.toThrow();
	});

	test("Can get location by code", async () => {
		const location = await UnLocodes.getLocationByCode("ADALV");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
		expect(location?.locodeUri).toEqual("unlcd:ADALV");
		expect(location?.label).toEqual("Andorra la Vella");
		expect(location?.countryCodeUri).toEqual("unlcdc:AD");
		expect(location?.functions).toEqual(["unlcdf:3", "unlcdf:4", "unlcdf:6"]);
	});

	test("Can get location by URI", async () => {
		const location = await UnLocodes.getLocationByUri("unlcd:ADALV");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
		expect(location?.label).toEqual("Andorra la Vella");
	});

	test("Can get location by label", async () => {
		const location = await UnLocodes.getLocationByLabel("andorra la vella");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
		expect(location?.label).toEqual("Andorra la Vella");
	});

	test("Returns undefined when location code not found", async () => {
		const location = await UnLocodes.getLocationByCode("ADZZZ");

		expect(location).toBeUndefined();
	});

	test("Throws error when location code is empty string", async () => {
		await expect(UnLocodes.getLocationByCode("")).rejects.toThrow();
	});

	test("Returns undefined when location code is too short", async () => {
		const location = await UnLocodes.getLocationByCode("AD");

		expect(location).toBeUndefined();
	});

	test("Returns undefined when location code has invalid country", async () => {
		const location = await UnLocodes.getLocationByCode("ZZALV");

		expect(location).toBeUndefined();
	});

	test("Can get location by URI without prefix", async () => {
		const location = await UnLocodes.getLocationByUri("ADALV");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
	});

	test("Can get location by URI with mixed case", async () => {
		const location = await UnLocodes.getLocationByUri("unlcd:ADALV");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
	});

	test("Returns undefined when location URI not found", async () => {
		const location = await UnLocodes.getLocationByUri("unlcd:ADZZZ");

		expect(location).toBeUndefined();
	});

	test("Throws error when location URI is empty string", async () => {
		await expect(UnLocodes.getLocationByUri("")).rejects.toThrow();
	});

	test("Can get location by label with mixed case", async () => {
		const location = await UnLocodes.getLocationByLabel("ANDORRA LA VELLA");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
		expect(location?.label).toEqual("Andorra la Vella");
	});

	test("Can get location by label with surrounding whitespace", async () => {
		const location = await UnLocodes.getLocationByLabel("  andorra la vella  ");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADALV");
	});

	test("Returns undefined when location label not found", async () => {
		const location = await UnLocodes.getLocationByLabel("Nonexistent Location");

		expect(location).toBeUndefined();
	});

	test("Throws error when location label is empty string", async () => {
		await expect(UnLocodes.getLocationByLabel("")).rejects.toThrow();
	});

	test("Can get country locations", async () => {
		const locations = await UnLocodes.getLocations("AD");

		expect(locations).toBeDefined();
		expect(Array.isArray(locations)).toBe(true);
		expect(locations.length).toBeGreaterThan(0);
		expect(locations[0]).toHaveProperty("locode");
		expect(locations[0]).toHaveProperty("locodeUri");
		expect(locations[0]).toHaveProperty("label");
		expect(locations[0]).toHaveProperty("countryCodeUri");
	});

	test("Can get country locations with URI prefix", async () => {
		const locations = await UnLocodes.getLocations("unlcdc:AD");

		expect(locations).toBeDefined();
		expect(Array.isArray(locations)).toBe(true);
		expect(locations.length).toBeGreaterThan(0);
	});

	test("Can get country subdivisions", async () => {
		const subdivisions = await UnLocodes.getSubdivisions("AD");

		expect(subdivisions).toBeDefined();
		expect(Array.isArray(subdivisions)).toBe(true);
		expect(subdivisions.length).toBeGreaterThan(0);
		expect(subdivisions[0]).toHaveProperty("code");
		expect(subdivisions[0]).toHaveProperty("subdivisionUri");
		expect(subdivisions[0]).toHaveProperty("label");
	});

	test("Can get country subdivisions with URI prefix", async () => {
		const subdivisions = await UnLocodes.getSubdivisions("unlcdc:AD");

		expect(subdivisions).toBeDefined();
		expect(Array.isArray(subdivisions)).toBe(true);
		expect(subdivisions.length).toBeGreaterThan(0);
	});

	test("Country subdivisions are cached after first load", async () => {
		const subdivisions1 = await UnLocodes.getSubdivisions("AD");
		const subdivisions2 = await UnLocodes.getSubdivisions("AD");

		expect(subdivisions1).toBe(subdivisions2);
	});

	test("Returns empty array for invalid country subdivisions code", async () => {
		const subdivisions = await UnLocodes.getSubdivisions("XX");

		expect(subdivisions).toBeDefined();
		expect(Array.isArray(subdivisions)).toBe(true);
		expect(subdivisions.length).toEqual(0);
	});

	test("Can get subdivision by code", async () => {
		const subdivision = await UnLocodes.getSubdivisionByCode("AD02");

		expect(subdivision).toBeDefined();
		expect(subdivision?.code).toEqual("02");
		expect(subdivision?.subdivisionUri).toEqual("unlcds:AD02");
		expect(subdivision?.label).toEqual("Canillo");
		expect(subdivision?.type).toEqual("Parish");
	});

	test("Can get subdivision by URI", async () => {
		const subdivision = await UnLocodes.getSubdivisionByUri("unlcds:AD02");

		expect(subdivision).toBeDefined();
		expect(subdivision?.code).toEqual("02");
		expect(subdivision?.label).toEqual("Canillo");
	});

	test("Returns undefined when subdivision code not found", async () => {
		const subdivision = await UnLocodes.getSubdivisionByCode("AD99");

		expect(subdivision).toBeUndefined();
	});

	test("Throws error when subdivision code is empty string", async () => {
		await expect(UnLocodes.getSubdivisionByCode("")).rejects.toThrow();
	});

	test("Returns undefined when subdivision URI not found", async () => {
		const subdivision = await UnLocodes.getSubdivisionByUri("unlcds:AD99");

		expect(subdivision).toBeUndefined();
	});

	test("Throws error when subdivision URI is empty string", async () => {
		await expect(UnLocodes.getSubdivisionByUri("")).rejects.toThrow();
	});

	test("Country locations are cached after first load", async () => {
		const locations1 = await UnLocodes.getLocations("AD");
		const locations2 = await UnLocodes.getLocations("AD");

		expect(locations1).toBe(locations2);
	});

	test("Can get country locations for different countries", async () => {
		const locationsAD = await UnLocodes.getLocations("AD");
		const locationsAE = await UnLocodes.getLocations("AE");

		expect(locationsAD).toBeDefined();
		expect(locationsAE).toBeDefined();
		expect(locationsAD.length).toBeGreaterThan(0);
		expect(locationsAE.length).toBeGreaterThan(0);
	});

	test("Returns empty array for invalid country code", async () => {
		const locations = await UnLocodes.getLocations("XX");

		expect(locations).toBeDefined();
		expect(Array.isArray(locations)).toBe(true);
		expect(locations.length).toEqual(0);
	});

	test("Country locations have proper structure with geo coordinates", async () => {
		const locations = await UnLocodes.getLocations("AD");
		const locationWithGeo = locations.find(loc => loc.geoCoordinates);

		expect(locationWithGeo).toBeDefined();
		expect(locationWithGeo?.geoCoordinates).toHaveProperty("latitude");
		expect(locationWithGeo?.geoCoordinates).toHaveProperty("longitude");
		expect(typeof locationWithGeo?.geoCoordinates?.latitude).toBe("number");
		expect(typeof locationWithGeo?.geoCoordinates?.longitude).toBe("number");
	});

	test("Country locations have functions array", async () => {
		const locations = await UnLocodes.getLocations("AD");
		const locationWithFunctions = locations.find(loc => loc.functions.length > 0);

		expect(locationWithFunctions).toBeDefined();
		expect(Array.isArray(locationWithFunctions?.functions)).toBe(true);
		expect(locationWithFunctions?.functions.every(f => f.startsWith("unlcdf:"))).toBe(true);
	});

	test("Throws error when country code is empty string", async () => {
		await expect(UnLocodes.getLocations("")).rejects.toThrow();
	});

	test("Can get location ADEAC and verify all properties", async () => {
		const location = await UnLocodes.getLocationByUri("unlcd:ADEAC");

		expect(location).toBeDefined();
		expect(location?.locode).toEqual("ADEAC");
		expect(location?.locodeUri).toEqual("unlcd:ADEAC");
		expect(location?.label).toEqual("Escàs");
		expect(location?.labelWithDiacritics).toEqual("Escas");
		expect(location?.countryCodeUri).toEqual("unlcdc:AD");
		expect(location?.countrySubdivisionUri).toEqual("unlcds:AD04");
		expect(location?.functions).toEqual(["unlcdf:3"]);
		expect(location?.geoCoordinates).toBeDefined();
		expect(location?.geoCoordinates?.latitude).toEqual(42.55);
		expect(location?.geoCoordinates?.longitude).toEqual(1.516667);
	});
});
