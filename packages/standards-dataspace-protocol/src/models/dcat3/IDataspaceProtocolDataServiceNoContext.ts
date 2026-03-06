// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolDataService } from "./IDataspaceProtocolDataService.js";

/**
 * Data Service interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolDataServiceNoContext = Omit<
	IDataspaceProtocolDataService,
	"@context"
>;
