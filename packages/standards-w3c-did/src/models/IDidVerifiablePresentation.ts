// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDidVerifiablePresentationV1 } from "./IDidVerifiablePresentationV1.js";
import type { IDidVerifiablePresentationV2 } from "./IDidVerifiablePresentationV2.js";

/**
 * Interface describing a verifiable presentation.
 */
export type IDidVerifiablePresentation =
	IDidVerifiablePresentationV1 | IDidVerifiablePresentationV2;
