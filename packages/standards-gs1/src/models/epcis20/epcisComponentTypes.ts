// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `component` values.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisComponentTypes = {
	/**
	 * Component or projection along the x axis in Cartesian coordinates (X, Y, Z).
	 */
	X: "x",

	/**
	 * Component or projection along the y axis in Cartesian coordinates (X, Y, Z).
	 */
	Y: "y",

	/**
	 * Component or projection along the z axis in Cartesian coordinates (X, Y, Z).
	 */
	Z: "z",

	/**
	 * Radial distance from the cylindrical axis in a cylindrical polar coordinate
	 * system.
	 */
	AxialDistance: "axial_distance",

	/**
	 * Angle measured in the XY plane, anticlockwise from the X axis to the plane
	 * containing the vector and the Z axis.
	 */
	Azimuth: "azimuth",

	/**
	 * Height parallel to the cylindrical axis in a cylindrical polar coordinate
	 * system.
	 */
	Height: "height",

	/**
	 * Radial distance from the centre of a sphere in a spherical polar coordinate
	 * system.
	 */
	SphericalRadius: "spherical_radius",

	/**
	 * Angle measured from the Z axis to the vector in a spherical polar coordinate
	 * system.
	 */
	PolarAngle: "polar_angle",

	/**
	 * Angle measured from the XY plane to the vector in a spherical polar coordinate
	 * system.
	 */
	ElevationAngle: "elevation_angle",

	/**
	 * Component or projection along an east-pointing axis in a geographic Cartesian
	 * coordinate system.
	 */
	Easting: "easting",

	/**
	 * Component or projection along a north-pointing axis in a geographic Cartesian
	 * coordinate system.
	 */
	Northing: "northing",

	/**
	 * Angle of elevation from the equatorial plane in a geographic coordinate
	 * system.
	 */
	Latitude: "latitude",

	/**
	 * Angle, measured within the equatorial plane, east of the prime meridian in a
	 * geographic coordinate system.
	 */
	Longitude: "longitude",

	/**
	 * Height above a defined surface (such as mean sea level) in a geographic
	 * coordinate system.
	 */
	Altitude: "altitude"
} as const;

/**
 * Supported EPCIS 2.0 `component` values.
 */
export type EpcisComponentTypes = (typeof EpcisComponentTypes)[keyof typeof EpcisComponentTypes];
