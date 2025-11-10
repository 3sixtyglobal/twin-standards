// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataIntegrityProof } from "./IDataIntegrityProof.js";
import type { IJsonWebSignature2020Proof } from "./IJsonWebSignature2020Proof.js";

/**
 * Interface describing a proof.
 */
export type IProof = IDataIntegrityProof | IJsonWebSignature2020Proof;
