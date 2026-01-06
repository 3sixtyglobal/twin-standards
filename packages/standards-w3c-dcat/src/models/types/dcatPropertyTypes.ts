// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Common type aliases for DCAT properties.
 * These provide type safety while maintaining flexibility for JSON-LD data.
 */

/**
 * Literal values can be strings or arrays of strings (for multi-valued properties).
 */
export type DcatLiteralType = string | string[];

/**
 * IRI references - can be a single IRI or array of IRIs.
 */
export type DcatIriType = string | string[];

/**
 * Date/time values in ISO 8601 format.
 * Can be xsd:date, xsd:dateTime, or xsd:gYear.
 */
export type DcatDateTimeType = string;

/**
 * Duration values in ISO 8601 duration format (xsd:duration).
 */
export type DcatDurationType = string;

/**
 * Decimal number values (xsd:decimal).
 */
export type DcatDecimalType = number;

/**
 * Non-negative integer values (xsd:nonNegativeInteger).
 */
export type DcatNonNegativeIntegerType = number;
