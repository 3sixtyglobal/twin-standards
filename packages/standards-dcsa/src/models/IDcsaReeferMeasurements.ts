// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Measured reefer values.
 *
 * Source: `reeferMeasurements` schema in the DCSA Event Domain (v3.1.0).
 *
 * Note: The OpenAPI references value ranges and units from DCSA_DOMAIN; this package models values as numbers and
 * unit fields as strings.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaReeferMeasurements {
	/**
	 * Ambient temperature.
	 */
	ambientTemperature?: number;
	/**
	 * Temperature.
	 */
	temperature?: number;
	/**
	 * Temperature unit.
	 */
	temperatureUnit?: string;
	/**
	 * O2 measurement.
	 */
	o2?: number;
	/**
	 * CO2 measurement.
	 */
	co2?: number;
	/**
	 * Humidity measurement.
	 */
	humidity?: number;
	/**
	 * Air exchange measurement.
	 */
	airExchange?: number;
	/**
	 * Air exchange unit.
	 */
	airExchangeUnit?: string;
}
