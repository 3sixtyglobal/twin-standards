// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisComponentTypes } from "./epcisComponentTypes.js";
import type { EpcisMeasurementTypes } from "./epcisMeasurementTypes.js";
import type { EpcisSensorAlertTypes } from "./epcisSensorAlertTypes.js";

/**
 * EPCIS 2.0 SensorReport containing measurement values and related sensor
 * observation details.
 * @see https://ref.gs1.org/epcis/SensorReport
 */
export interface IEpcisSensorReport {
	/**
	 * Identifier indicating what kind of measurement the SensorReport pertains to
	 * (e.g. Length, Mass, Temperature).
	 *
	 * Use {@link EpcisMeasurementTypes} for known values.
	 */
	type: EpcisMeasurementTypes | string;

	/**
	 * A sensor alert value (alarm condition or error condition); extra details may
	 * be provided via booleanValue or uriValue.
	 *
	 * Use {@link EpcisSensorAlertTypes} for known values.
	 */
	exception?: EpcisSensorAlertTypes | string;

	/**
	 * (Optional) Device from which the sensor data originates.
	 */
	deviceID?: string;

	/**
	 * (Optional) Storage location of an electronic document accommodating metadata
	 * of the device from which the sensor data originates.
	 */
	deviceMetadata?: string;

	/**
	 * (Optional) Storage/service location of the raw sensor data on which the
	 * aggregated/business-oriented data contained in the sensorElement is based.
	 */
	rawData?: string;

	/**
	 * (Optional) Storage location of an electronic document accommodating the data
	 * processing method of the contained sensor data, if applicable.
	 */
	dataProcessingMethod?: string;

	/**
	 * (Optional) Storage location of an electronic document accommodating product- or
	 * application-specific business rules on which basis the EPCIS event was
	 * triggered.
	 */
	bizRules?: string;

	/**
	 * (Optional) The actual point in time of an observation as transmitted by a
	 * sensor device.
	 */
	time?: string;

	/**
	 * (Optional) Identifies a specific microorganism species; SHALL NOT be present
	 * if chemicalSubstance is included.
	 */
	microorganism?: string;

	/**
	 * (Optional) Identifies a specific chemical substance; SHALL NOT be present
	 * together with microorganism.
	 */
	chemicalSubstance?: string;

	/**
	 * (Optional) A URI identifying the Coordinate Reference System; if omitted,
	 * WGS-84 is assumed.
	 */
	coordinateReferenceSystem?: string;

	/**
	 * (Optional) Value of the property specified by the type; if a time field is
	 * present, it pertains to that time, otherwise to the eventTime.
	 */
	value?: number;

	/**
	 * (Optional) Vector component identifier for measurements with magnitude and
	 * direction (e.g. force, pressure); repeat SensorReport per component.
	 */
	component?: EpcisComponentTypes | string;

	/**
	 * (Optional) The String value of the property specified by the type as part of
	 * the sensorReport element.
	 */
	stringValue?: string;

	/**
	 * (Optional) Similar to stringValue, for Boolean value.
	 */
	booleanValue?: boolean;

	/**
	 * (Optional) Similar to stringValue, for HexBinary value.
	 */
	hexBinaryValue?: string;

	/**
	 * (Optional) Similar to stringValue, for a URI value.
	 */
	uriValue?: string;

	/**
	 * (Optional) Minimum quantitative value of the property specified by type, as
	 * part of the sensorReport element.
	 */
	minValue?: number;

	/**
	 * (Optional) Similar to minValue, for the maximum quantitative value.
	 */
	maxValue?: number;

	/**
	 * (Optional) The arithmetic mean of the values of the property specified by the
	 * type as part of the sensorReport element.
	 */
	meanValue?: number;

	/**
	 * (Optional) Standard deviation of the values of the property specified by type,
	 * as part of the sensorReport element.
	 */
	sDev?: number;

	/**
	 * (Optional) Percentile rank, signifying the percentage of observations in a
	 * frequency distribution that are equal to or lower than it.
	 */
	percRank?: number;

	/**
	 * (Optional) The percentile value, at or below which a given percentage of
	 * observations may be found.
	 */
	percValue?: number;

	/**
	 * (Optional) Unit of measure by which the specified value(s) of the property
	 * specified by type should be interpreted.
	 */
	uom?: string;
}
