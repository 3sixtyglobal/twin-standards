// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaShipmentPayload } from "./IDcsaShipmentPayload.js";

/**
 * Base shipment event attributes.
 *
 * Note: In the upstream OpenAPI, `shipmentPayload` is defined as `baseEvent` +
 * `baseShipmentEvent`. In this package, those are already represented by
 * `IDcsaShipmentPayload` extending `IDcsaBaseEvent`.
 *
 * Source: `baseShipmentEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaBaseShipmentEvent = IDcsaShipmentPayload;
