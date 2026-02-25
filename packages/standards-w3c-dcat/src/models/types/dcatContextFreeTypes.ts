// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { JsonLdObjectWithOptionalContext } from "@twin.org/data-json-ld";
import type { IDcatCatalog } from "../IDcatCatalog.js";
import type { IDcatCatalogRecord } from "../IDcatCatalogRecord.js";
import type { IDcatDataService } from "../IDcatDataService.js";
import type { IDcatDataset } from "../IDcatDataset.js";
import type { IDcatDistribution } from "../IDcatDistribution.js";

/**
 * Type aliases for DCAT entities when LD Context is omitted
 * These provide type safety while maintaining flexibility for JSON-LD data.
 */

/**
 * Dataset omitting LD Context
 */
export type DatasetOptionalContext = JsonLdObjectWithOptionalContext<IDcatDataset>;

/**
 * DataService omitting LD Context
 */
export type DataServiceOptionalContext = JsonLdObjectWithOptionalContext<IDcatDataService>;

/**
 * Catalog omitting LD Context
 */
export type CatalogOptionalContext = JsonLdObjectWithOptionalContext<IDcatCatalog>;

/**
 * Record omitting LD Context
 */
export type CatalogRecordOptionalContext = JsonLdObjectWithOptionalContext<IDcatCatalogRecord>;

/**
 * Distribution omitting LD Context
 */
export type DistributionOptionalContext = JsonLdObjectWithOptionalContext<IDcatDistribution>;
