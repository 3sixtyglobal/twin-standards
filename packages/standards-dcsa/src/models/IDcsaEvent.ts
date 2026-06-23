// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaEventRetraction } from "./IDcsaEventRetraction.js";
import type { IDcsaEventWithPayload } from "./IDcsaEventWithPayload.js";

/**
 * A DCSA Event object.
 *
 * Source: `event` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export type IDcsaEvent = IDcsaEventWithPayload | IDcsaEventRetraction;
