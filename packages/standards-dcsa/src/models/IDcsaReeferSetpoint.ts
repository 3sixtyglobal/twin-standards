// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Reefer setpoint values.
 *
 * Source: `reeferSetpoint` schema in the DCSA Event Domain (v3.1.0).
 *
 * Note: The OpenAPI references value ranges and units from DCSA_DOMAIN; this package models values as numbers and
 * unit fields as strings.
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaReeferSetpoint {
	/**
	 * Target temperature.
	 */
	temperature?: number;
	/**
	 * Temperature unit.
	 */
	temperatureUnit?: string;
	/**
	 * Target O2.
	 */
	o2?: number;
	/**
	 * Target CO2.
	 */
	co2?: number;
	/**
	 * Target humidity.
	 */
	humidity?: number;
	/**
	 * Target air exchange.
	 */
	airExchange?: number;
	/**
	 * Air exchange unit.
	 */
	airExchangeUnit?: string;
}
