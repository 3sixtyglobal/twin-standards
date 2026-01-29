// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaBaseEvent } from "./IDcsaBaseEvent.js";
import type { IDcsaBaseReeferEvent } from "./IDcsaBaseReeferEvent.js";

/**
 * Reefer payload.
 *
 * Source: `reeferPayload` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaReeferPayload = IDcsaBaseEvent & IDcsaBaseReeferEvent;
