// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaEquipmentPayload } from "./IDcsaEquipmentPayload.js";

/**
 * Base equipment event attributes.
 *
 * Note: In the upstream OpenAPI, `equipmentPayload` is defined as `baseEvent` +
 * `baseEquipmentEvent`. In this package, those are already represented by
 * `IDcsaEquipmentPayload` extending `IDcsaBaseEvent`.
 *
 * Source: `baseEquipmentEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaBaseEquipmentEvent = IDcsaEquipmentPayload;
