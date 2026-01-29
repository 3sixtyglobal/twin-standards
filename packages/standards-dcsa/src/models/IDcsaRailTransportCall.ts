// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaModeOfTransport } from "./dcsaModeOfTransport.js";
import type { IDcsaTransportCallBase } from "./IDcsaTransportCallBase.js";

/**
 * Rail transport call details.
 *
 * Source: `railTransportCall` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaRailTransportCall extends IDcsaTransportCallBase {
	/**
	 * Discriminator for the transport mode.
	 */
	modeOfTransport: typeof DcsaModeOfTransport.RAIL;
	/**
	 * Departure reference ID.
	 */
	departureID?: string;
	/**
	 * Rail service number.
	 */
	railService?: string;
	/**
	 * Railcar identifier.
	 */
	railCar?: string;
}
