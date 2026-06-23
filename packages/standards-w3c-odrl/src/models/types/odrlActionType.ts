// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Actions.
 * Simple action types (for direct string usage)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OdrlActionType = {
	// Core actions

	/**
	 * The act of using an asset, covering any general usage where ownership does not change.
	 * This is the parent term for most permissions and prohibitions.
	 */
	Use: "use",

	/**
	 * The act of transferring the ownership of an asset in perpetuity to a third party.
	 */
	Transfer: "transfer",

	// Sub-actions of 'use'

	/**
	 * The act of using an asset (or parts of it) as part of a composite collection.
	 */
	Aggregate: "aggregate",

	/**
	 * The act of adding explanatory notations/commentaries to the asset.
	 */
	Annotate: "annotate",

	/**
	 * The act of anonymising all or parts of the asset, for example, to remove identifying particulars.
	 */
	Anonymize: "anonymize",

	/**
	 * The act of persistently storing the asset in a non-transient form.
	 */
	Archive: "archive",

	/**
	 * The act of multiple concurrent use of the asset.
	 */
	ConcurrentUse: "concurrentUse",

	/**
	 * The act of using the asset in a business environment where it may be traded for profit.
	 */
	Commercialize: "commercialize",

	/**
	 * The act of making an exact reproduction of the asset. Also identified as `reproduce`.
	 */
	Copy: "copy",

	/**
	 * The act of creating a new derivative asset from the original and editing or modifying it.
	 */
	Derive: "derive",

	/**
	 * The act of producing a digital copy of an asset from its analogue form.
	 */
	Digitize: "digitize",

	/**
	 * The act of making a transient visible rendering of the asset, such as displaying an image on a screen.
	 * Also identified as `present` in earlier versions.
	 */
	Display: "display",

	/**
	 * The act of publicly distributing, displaying, or performing the asset.
	 */
	Distribute: "distribute",

	/**
	 * The act of executing the asset, such as running a program or application.
	 */
	Execute: "execute",

	/**
	 * The act of extracting (replicating) unchanged parts of the asset for reuse.
	 */
	Extract: "extract",

	/**
	 * The act of extracting unchanged character(s) from the asset.
	 */
	ExtractChar: "extractChar",

	/**
	 * The act of extracting unchanged word(s) from the asset.
	 */
	ExtractWord: "extractWord",

	/**
	 * The act of extracting unchanged page(s) from the asset.
	 */
	ExtractPage: "extractPage",

	/**
	 * The act of recording the asset in an index, for example, a search engine database.
	 */
	Index: "index",

	/**
	 * The act of loading the asset onto a storage device ready for operation.
	 */
	Install: "install",

	/**
	 * The act of granting the use of the asset to third parties. Also identified as `sublicense` in earlier versions.
	 */
	License: "license",

	/**
	 * The act of making the asset available to a third-party for a fixed period with exchange of value.
	 */
	Lease: "lease",

	/**
	 * The act of making the asset available to a third-party for a fixed period without exchange of value.
	 */
	Lend: "lend",

	/**
	 * The act of updating existing content of the asset without creating a new one.
	 */
	Modify: "modify",

	/**
	 * The act of moving the asset from one digital location to another and deleting the original.
	 */
	Move: "move",

	/**
	 * The act of rendering the asset into audio and/or video form.
	 */
	Play: "play",

	/**
	 * The act of providing a short preview of the asset.
	 */
	Preview: "preview",

	/**
	 * The act of rendering the asset onto paper or hard copy form.
	 */
	Print: "print",

	/**
	 * The act of obtaining data from the asset, such as a database record.
	 */
	Read: "read",

	/**
	 * The act of using the asset for a purpose other than its intended purpose.
	 */
	SecondaryUse: "secondaryUse",

	/**
	 * The act of non-commercial reproduction and distribution of the asset to third-parties.
	 */
	Share: "share",

	/**
	 * The act of sharing the asset to parties in close proximity to the owner.
	 */
	AdhocShare: "adhocShare",

	/**
	 * The act of distributing any derivative asset under the same terms as the original.
	 */
	ShareAlike: "shareAlike",

	/**
	 * The act of a system reading the text of the asset out loud.
	 */
	TextToSpeech: "textToSpeech",

	/**
	 * The act of translating the asset's original language into another, creating a new derivative asset.
	 */
	Translate: "translate",

	/**
	 * The act of transforming the asset into a different digital format.
	 */
	Transform: "transform",

	/**
	 * The act of unloading the asset from a storage device, making it no longer accessible.
	 */
	Uninstall: "uninstall",

	/**
	 * The act of applying a watermark to the asset.
	 */
	Watermark: "watermark",

	/**
	 * The act of writing to or modifying the asset.
	 */
	Write: "write",

	/**
	 * The act of adding to the end of an asset, for example, a database record.
	 * Also identified as `appendTo`.
	 */
	Append: "append",

	// Sub-actions of 'transfer'

	/**
	 * The act of giving away the asset in perpetuity without exchange of value, requiring the original to be deleted.
	 */
	Give: "give",

	/**
	 * The act of trading the asset in exchange for compensation, requiring the original to be deleted.
	 */
	Sell: "sell",

	// Actions typically used in Duties

	/**
	 * The act of accepting that the use of the asset may be tracked by a specified party.
	 */
	AcceptTracking: "acceptTracking",

	/**
	 * The act of keeping a policy notice attached to the asset.
	 */
	AttachPolicy: "attachPolicy",

	/**
	 * The act of attaching the source of the asset and its derivatives.
	 */
	AttachSource: "attachSource",

	/**
	 * The act of attributing the asset to a specified party.
	 */
	Attribute: "attribute",

	/**
	 * The act of compensating a specified party by some amount for use of the asset.
	 */
	Compensate: "compensate",

	/**
	 * The act of permanently removing all copies of the asset.
	 */
	Delete: "delete",

	/**
	 * The act of requiring the assigner to ensure a permission is exclusive to the assignee.
	 */
	EnsureExclusivity: "ensureExclusivity",

	/**
	 * The act of including other related assets to fulfil the function.
	 */
	Include: "include",

	/**
	 * The act of informing a party that an action has been performed on the asset.
	 */
	Inform: "inform",

	/**
	 * The act of specifying a policy for third-party use of the asset.
	 */
	NextPolicy: "nextPolicy",

	/**
	 * The act of requiring explicit consent from a party to perform an action.
	 */
	ObtainConsent: "obtainConsent",

	/**
	 * The act of paying a financial amount to a party for use of the asset.
	 */
	Pay: "pay",

	/**
	 * The act of performing a manual review of the terms associated with the asset.
	 */
	ReviewPolicy: "reviewPolicy"
} as const;

/**
 * The types for ODRL Actions.
 */
export type OdrlActionType = (typeof OdrlActionType)[keyof typeof OdrlActionType];
