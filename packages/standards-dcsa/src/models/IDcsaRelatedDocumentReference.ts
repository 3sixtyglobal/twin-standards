// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DcsaDocumentTypeCodes } from "./dcsaDocumentTypeCodes.js";

/**
 * A related document reference.
 *
 * Source: `relatedDocumentReferences` schema in the DCSA Event Domain (v3.1.0).
 * @see https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
 */
export interface IDcsaRelatedDocumentReference {
	/**
	 * Document type code.
	 */
	type: DcsaDocumentTypeCodes;
	/**
	 * Document reference value.
	 */
	value: string;
}
