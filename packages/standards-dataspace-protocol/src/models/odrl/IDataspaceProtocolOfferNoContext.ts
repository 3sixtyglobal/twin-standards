// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolOffer } from "./IDataspaceProtocolOffer.js";

/**
 * Offer interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolOfferNoContext = Omit<IDataspaceProtocolOffer, "@context">;
