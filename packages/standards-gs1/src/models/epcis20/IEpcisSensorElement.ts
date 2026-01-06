// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ISensorMetadata } from "./IEpcisSensorMetadata.js";
import type { ISensorReport } from "./IEpcisSensorReport.js";

/**
 * EPCIS SensorElement.
 */
export interface ISensorElement {
	/**
	 * Sensor metadata.
	 */
	sensorMetadata?: ISensorMetadata;

	/**
	 * Sensor report.
	 */
	sensorReport: ISensorReport[];
}
