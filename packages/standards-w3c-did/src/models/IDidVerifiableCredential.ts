// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidVerifiableCredentialV1 } from "./IDidVerifiableCredentialV1.js";
import type { IDidVerifiableCredentialV2 } from "./IDidVerifiableCredentialV2.js";

/**
 * Interface describing a verifiable credential.
 */
export type IDidVerifiableCredential = IDidVerifiableCredentialV1 | IDidVerifiableCredentialV2;
