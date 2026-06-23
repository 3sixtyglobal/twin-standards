// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaModeOfTransport } from "./dcsaModeOfTransport.js";
import type { IDcsaTransportCallBase } from "./IDcsaTransportCallBase.js";

/**
 * Truck transport call details.
 *
 * Source: `truckTransportCall` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaTruckTransportCall extends IDcsaTransportCallBase {
	/**
	 * Discriminator for the transport mode.
	 */
	modeOfTransport: typeof DcsaModeOfTransport.TRUCK;
	/**
	 * Truck license plate.
	 */
	licencePlate?: string;
	/**
	 * Chassis license plate.
	 */
	chassisLicencePlate?: string;
}
