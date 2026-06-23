// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `measurementType` values.
 *
 * These values come from the GS1 EPCIS JSON Schema enumeration.
 * Use the union type `EpcisMeasurementTypes` when you want to restrict a field to known values.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisMeasurementTypes = {
	/**
	 * Measurement type "AbsoluteHumidity".
	 */
	AbsoluteHumidity: "AbsoluteHumidity",

	/**
	 * Measurement type "AbsorbedDose".
	 */
	AbsorbedDose: "AbsorbedDose",

	/**
	 * Measurement type "AbsorbedDoseRate".
	 */
	AbsorbedDoseRate: "AbsorbedDoseRate",

	/**
	 * Measurement type "Acceleration".
	 */
	Acceleration: "Acceleration",

	/**
	 * Measurement type "Radioactivity".
	 */
	Radioactivity: "Radioactivity",

	/**
	 * Measurement type "Altitude".
	 */
	Altitude: "Altitude",

	/**
	 * Measurement type "AmountOfSubstance".
	 */
	AmountOfSubstance: "AmountOfSubstance",

	/**
	 * Measurement type "AmountOfSubstancePerUnitVolume".
	 */
	AmountOfSubstancePerUnitVolume: "AmountOfSubstancePerUnitVolume",

	/**
	 * Measurement type "Angle".
	 */
	Angle: "Angle",

	/**
	 * Measurement type "AngularAcceleration".
	 */
	AngularAcceleration: "AngularAcceleration",

	/**
	 * Measurement type "AngularMomentum".
	 */
	AngularMomentum: "AngularMomentum",

	/**
	 * Measurement type "AngularVelocity".
	 */
	AngularVelocity: "AngularVelocity",

	/**
	 * Measurement type "Area".
	 */
	Area: "Area",

	/**
	 * Measurement type "Capacitance".
	 */
	Capacitance: "Capacitance",

	/**
	 * Measurement type "Conductance".
	 */
	Conductance: "Conductance",

	/**
	 * Measurement type "Conductivity".
	 */
	Conductivity: "Conductivity",

	/**
	 * Measurement type "Count".
	 */
	Count: "Count",

	/**
	 * Measurement type "Density".
	 */
	Density: "Density",

	/**
	 * Measurement type "Dimensionless".
	 */
	Dimensionless: "Dimensionless",

	/**
	 * Measurement type "DoseEquivalent".
	 */
	DoseEquivalent: "DoseEquivalent",

	/**
	 * Measurement type "DoseEquivalentRate".
	 */
	DoseEquivalentRate: "DoseEquivalentRate",

	/**
	 * Measurement type "DynamicViscosity".
	 */
	DynamicViscosity: "DynamicViscosity",

	/**
	 * Measurement type "ElectricCharge".
	 */
	ElectricCharge: "ElectricCharge",

	/**
	 * Measurement type "ElectricCurrent".
	 */
	ElectricCurrent: "ElectricCurrent",

	/**
	 * Measurement type "ElectricCurrentDensity".
	 */
	ElectricCurrentDensity: "ElectricCurrentDensity",

	/**
	 * Measurement type "ElectricFieldStrength".
	 */
	ElectricFieldStrength: "ElectricFieldStrength",

	/**
	 * Measurement type "Energy".
	 */
	Energy: "Energy",

	/**
	 * Measurement type "Exposure".
	 */
	Exposure: "Exposure",

	/**
	 * Measurement type "Force".
	 */
	Force: "Force",

	/**
	 * Measurement type "Frequency".
	 */
	Frequency: "Frequency",

	/**
	 * Measurement type "Illuminance".
	 */
	Illuminance: "Illuminance",

	/**
	 * Measurement type "Inductance".
	 */
	Inductance: "Inductance",

	/**
	 * Measurement type "Irradiance".
	 */
	Irradiance: "Irradiance",

	/**
	 * Measurement type "KinematicViscosity".
	 */
	KinematicViscosity: "KinematicViscosity",

	/**
	 * Measurement type "Length".
	 */
	Length: "Length",

	/**
	 * Measurement type "LinearMomentum".
	 */
	LinearMomentum: "LinearMomentum",

	/**
	 * Measurement type "Luminance".
	 */
	Luminance: "Luminance",

	/**
	 * Measurement type "LuminousFlux".
	 */
	LuminousFlux: "LuminousFlux",

	/**
	 * Measurement type "LuminousIntensity".
	 */
	LuminousIntensity: "LuminousIntensity",

	/**
	 * Measurement type "MagneticFlux".
	 */
	MagneticFlux: "MagneticFlux",

	/**
	 * Measurement type "MagneticFluxDensity".
	 */
	MagneticFluxDensity: "MagneticFluxDensity",

	/**
	 * Measurement type "MagneticVectorPotential".
	 */
	MagneticVectorPotential: "MagneticVectorPotential",

	/**
	 * Measurement type "Mass".
	 */
	Mass: "Mass",

	/**
	 * Measurement type "MassConcentration".
	 */
	MassConcentration: "MassConcentration",

	/**
	 * Measurement type "MassFlowRate".
	 */
	MassFlowRate: "MassFlowRate",

	/**
	 * Measurement type "MassPerAreaTime".
	 */
	MassPerAreaTime: "MassPerAreaTime",

	/**
	 * Measurement type "MemoryCapacity".
	 */
	MemoryCapacity: "MemoryCapacity",

	/**
	 * Measurement type "MolalityOfSolute".
	 */
	MolalityOfSolute: "MolalityOfSolute",

	/**
	 * Measurement type "MolarEnergy".
	 */
	MolarEnergy: "MolarEnergy",

	/**
	 * Measurement type "MolarMass".
	 */
	MolarMass: "MolarMass",

	/**
	 * Measurement type "MolarVolume".
	 */
	MolarVolume: "MolarVolume",

	/**
	 * Measurement type "Power".
	 */
	Power: "Power",

	/**
	 * Measurement type "Pressure".
	 */
	Pressure: "Pressure",

	/**
	 * Measurement type "RadiantFlux".
	 */
	RadiantFlux: "RadiantFlux",

	/**
	 * Measurement type "RadiantIntensity".
	 */
	RadiantIntensity: "RadiantIntensity",

	/**
	 * Measurement type "RelativeHumidity".
	 */
	RelativeHumidity: "RelativeHumidity",

	/**
	 * Measurement type "Resistance".
	 */
	Resistance: "Resistance",

	/**
	 * Measurement type "Resistivity".
	 */
	Resistivity: "Resistivity",

	/**
	 * Measurement type "SolidAngle".
	 */
	SolidAngle: "SolidAngle",

	/**
	 * Measurement type "SpecificVolume".
	 */
	SpecificVolume: "SpecificVolume",

	/**
	 * Measurement type "Speed".
	 */
	Speed: "Speed",

	/**
	 * Measurement type "SurfaceDensity".
	 */
	SurfaceDensity: "SurfaceDensity",

	/**
	 * Measurement type "SurfaceTension".
	 */
	SurfaceTension: "SurfaceTension",

	/**
	 * Measurement type "Temperature".
	 */
	Temperature: "Temperature",

	/**
	 * Measurement type "Time".
	 */
	Time: "Time",

	/**
	 * Measurement type "Torque".
	 */
	Torque: "Torque",

	/**
	 * Measurement type "Voltage".
	 */
	Voltage: "Voltage",

	/**
	 * Measurement type "Volume".
	 */
	Volume: "Volume",

	/**
	 * Measurement type "VolumeFlowRate".
	 */
	VolumeFlowRate: "VolumeFlowRate",

	/**
	 * Measurement type "VolumeFraction".
	 */
	VolumeFraction: "VolumeFraction",

	/**
	 * Measurement type "VolumetricFlux".
	 */
	VolumetricFlux: "VolumetricFlux",

	/**
	 * Measurement type "Wavenumber".
	 */
	Wavenumber: "Wavenumber"
} as const;

/**
 * Supported EPCIS 2.0 `measurementType` values.
 *
 * These values come from the GS1 EPCIS JSON Schema enumeration.
 * Use the union type `EpcisMeasurementTypes` when you want to restrict a field to known values.
 */
export type EpcisMeasurementTypes =
	(typeof EpcisMeasurementTypes)[keyof typeof EpcisMeasurementTypes];
