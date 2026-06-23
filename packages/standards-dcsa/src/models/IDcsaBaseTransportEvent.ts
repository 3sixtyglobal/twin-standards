// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaTransportPayload } from "./IDcsaTransportPayload.js";

/**
 * Base transport event attributes.
 *
 * Note: In the upstream OpenAPI, `transportPayload` is defined as `baseEvent` +
 * `baseTransportEvent`. In this package, those are already represented by
 * `IDcsaTransportPayload` extending `IDcsaBaseEvent`.
 *
 * Source: `baseTransportEvent` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaBaseTransportEvent = IDcsaTransportPayload;
