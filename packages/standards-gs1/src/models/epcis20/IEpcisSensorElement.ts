// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IEpcisSensorMetadata } from "./IEpcisSensorMetadata.js";
import type { IEpcisSensorReport } from "./IEpcisSensorReport.js";

/**
 * EPCIS 2.0 SensorElement grouping metadata and one or more SensorReport
 * entries.
 * @see https://ref.gs1.org/epcis/SensorElement
 */
export interface IEpcisSensorElement extends IJsonLdNodeObject {
	/**
	 * (Optional) Element containing metadata attributes applicable to all
	 * sensorReport entries within this sensorElement.
	 */
	sensorMetadata?: IEpcisSensorMetadata;

	/**
	 * An element containing one or several attributes that pertain to a specific
	 * sensor observation.
	 */
	sensorReport: IEpcisSensorReport[];
}
