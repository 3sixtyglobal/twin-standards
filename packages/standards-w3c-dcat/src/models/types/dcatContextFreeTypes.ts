// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { DcatContextType } from "../dcatContextType.js";
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
export type DatasetOptionalContext = Omit<IDcatDataset, "@context"> & {
	"@context"?: DcatContextType;
};

/**
 * DataService omitting LD Context
 */
export type DataServiceOptionalContext = Omit<IDcatDataService, "@context"> & {
	"@context"?: DcatContextType;
};

/**
 * Catalog omitting LD Context
 */
export type CatalogOptionalContext = Omit<IDcatCatalog, "@context"> & {
	"@context"?: DcatContextType;
};

/**
 * Record omitting LD Context
 */
export type CatalogRecordOptionalContext = Omit<IDcatCatalogRecord, "@context"> & {
	"@context"?: DcatContextType;
};

/**
 * Distribution omitting LD Context
 */
export type DistributionOptionalContext = Omit<IDcatDistribution, "@context"> & {
	"@context"?: DcatContextType;
};
