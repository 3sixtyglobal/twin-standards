// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IIssue } from "./IIssue.js";
import type { INegotiationContext } from "./INegotiationContext.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An offer exchanged between parties for an electronic negotiation.
 * @see https://vocabulary.uncefact.org/NegotiationExchange
 */
export interface INegotiationExchange extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.NegotiationExchange;

	/**
	 * The code specifying the type of the protocol for this electronic negotiation exchange, such as Alternating Offer
	 * Protocol, Continuous Offer Protocol, Withdrawable Alternating Offer Protocol, Withdrawable Continuous Offer Protocol.
	 * @see https://vocabulary.uncefact.org/protocolTypeCode
	 */
	protocolTypeCode?: string;

	/**
	 * The date or date time value when the response is due for this electronic negotiation exchange.
	 * @see https://vocabulary.uncefact.org/responseDueDateTime
	 */
	responseDueDateTime?: string;

	/**
	 * The sequence number for this electronic negotiation exchange.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The identifier of the session for this electronic negotiation exchange.
	 * @see https://vocabulary.uncefact.org/sessionId
	 */
	sessionId?: string;

	/**
	 * A context specified for this electronic negotiation exchange.
	 * @see https://vocabulary.uncefact.org/specifiedContext
	 */
	specifiedContext?: INegotiationContext[];

	/**
	 * A target issue specified for this electronic negotiation exchange.
	 * @see https://vocabulary.uncefact.org/specifiedIssue
	 */
	specifiedIssue?: IIssue[];

	/**
	 * The code specifying the type of electronic negotiation exchange, such as prerequisite, offer, suggestion or withdrawal.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
