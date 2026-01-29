// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaBargeTransportCall } from "./IDcsaBargeTransportCall.js";
import type { IDcsaRailTransportCall } from "./IDcsaRailTransportCall.js";
import type { IDcsaTruckTransportCall } from "./IDcsaTruckTransportCall.js";
import type { IDcsaVesselTransportCall } from "./IDcsaVesselTransportCall.js";

/**
 * Transport call.
 *
 * Discriminator: `modeOfTransport`.
 *
 * Source: `transportCall` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaTransportCall =
	| IDcsaVesselTransportCall
	| IDcsaBargeTransportCall
	| IDcsaRailTransportCall
	| IDcsaTruckTransportCall;
