// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaModeOfTransport } from "./dcsaModeOfTransport.js";
import type { IDcsaBarge } from "./IDcsaBarge.js";
import type { IDcsaTransportCallBase } from "./IDcsaTransportCallBase.js";

/**
 * Barge transport call details.
 *
 * Source: `bargeTransportCall` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaBargeTransportCall extends IDcsaTransportCallBase {
	/**
	 * Discriminator for the transport mode.
	 */
	modeOfTransport: typeof DcsaModeOfTransport.BARGE;
	/**
	 * Barge.
	 */
	barge?: IDcsaBarge;
	/**
	 * Port visit reference.
	 */
	portVisitReference?: string;
	/**
	 * Carrier service code.
	 */
	carrierServiceCode?: string;
	/**
	 * Universal service reference.
	 */
	universalServiceReference?: string;
	/**
	 * Carrier export voyage number.
	 */
	carrierExportVoyageNumber?: string;
	/**
	 * Universal export voyage reference.
	 */
	universalExportVoyageReference?: string;
	/**
	 * Carrier import voyage number.
	 */
	carrierImportVoyageNumber?: string;
	/**
	 * Universal import voyage reference.
	 */
	universalImportVoyageReference?: string;
}
