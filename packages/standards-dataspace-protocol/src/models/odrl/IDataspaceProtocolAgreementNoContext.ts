// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolAgreement } from "./IDataspaceProtocolAgreement.js";

/**
 * Agreement interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolAgreementNoContext = Omit<IDataspaceProtocolAgreement, "@context">;
