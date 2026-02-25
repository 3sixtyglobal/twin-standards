// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * EPCIS 2.0 SensorMetadata describing timing, device, and processing details for
 * sensor observations.
 * @see https://ref.gs1.org/epcis/SensorMetadata
 */
export interface IEpcisSensorMetadata {
	/**
	 * (Optional) The actual point in time of an observation as transmitted by a
	 * sensor device.
	 */
	time?: string;

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
	 * (Optional) The lowest (earliest) value of a given observation period as
	 * transmitted by a sensor device.
	 */
	startTime?: string;

	/**
	 * (Optional) The highest (most recent) value of a given observation period, as
	 * transmitted by a sensor device.
	 */
	endTime?: string;

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
}
