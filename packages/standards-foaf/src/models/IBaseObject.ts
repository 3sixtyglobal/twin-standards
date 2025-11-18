// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { FoafContextType } from "./foafContextType.js";
import type { IImage } from "./IImage.js";

/**
 * Core FOAF Properties
 * @see http://xmlns.com/foaf/0.1/
 */
export interface IBaseObject extends IJsonLdNodeObject {
	/**
	 * The LD Context.
	 */
	"@context"?: FoafContextType;

	/**
	 * A name for some thing.
	 * @see http://xmlns.com/foaf/spec/#term_name
	 */
	name?: string;

	/**
	 * Title (Mr, Mrs, Ms, Dr. etc)
	 * @see http://xmlns.com/foaf/spec/#term_title
	 */
	title?: string;

	/**
	 * A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox
	 * @see http://xmlns.com/foaf/spec/#term_mbox
	 */
	mbox?: string;

	/**
	 * A homepage for some thing.
	 * @see http://xmlns.com/foaf/spec/#term_homepage
	 */
	homepage?: string;

	/**
	 * A depiction of some thing.
	 * @see http://xmlns.com/foaf/spec/#term_depiction
	 */
	depiction?: IImage;
}
