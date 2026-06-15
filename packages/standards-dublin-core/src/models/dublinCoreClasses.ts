// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Dublin Core DCMI type class identifiers.
 * @see http://purl.org/dc/dcmitype
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DublinCoreClasses = {
	/**
	 * A collection of resources.
	 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/dcmitype/Collection
	 */
	Collection: "Collection",

	/**
	 * An interval of time named or defined by its start and end dates.
	 * @see https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/PeriodOfTime
	 */
	PeriodOfTime: "PeriodOfTime"
} as const;

/**
 * Union of all Dublin Core class identifier values.
 */
export type DublinCoreClasses = (typeof DublinCoreClasses)[keyof typeof DublinCoreClasses];
