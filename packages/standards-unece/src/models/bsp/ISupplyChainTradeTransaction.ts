// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDeliverySchedule } from "./IDeliverySchedule.js";
import type { IDocument } from "./IDocument.js";
import type { IDocumentLineDocument } from "./IDocumentLineDocument.js";
import type { IFinancingRequestResultDocument } from "./IFinancingRequestResultDocument.js";
import type { IHeaderTradeAgreement } from "./IHeaderTradeAgreement.js";
import type { IHeaderTradeDelivery } from "./IHeaderTradeDelivery.js";
import type { IHeaderTradeSettlement } from "./IHeaderTradeSettlement.js";
import type { INote } from "./INote.js";
import type { IPackage } from "./IPackage.js";
import type { IProductGroup } from "./IProductGroup.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISpecifiedPeriod } from "./ISpecifiedPeriod.js";
import type { IStandard } from "./IStandard.js";
import type { ISupplyChainTradeLineItem } from "./ISupplyChainTradeLineItem.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of supply chain trade line items, trade agreement, trade delivery and trade settlement details.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeTransaction
 */
export interface ISupplyChainTradeTransaction extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyChainTradeTransaction;

	/**
	 * A trade agreement header applicable to this supply chain trade transaction, such as payment or delivery terms.
	 * @see https://vocabulary.uncefact.org/applicableHeaderTradeAgreement
	 */
	applicableHeaderTradeAgreement?: IHeaderTradeAgreement[];

	/**
	 * A trade delivery header applicable to this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/applicableHeaderTradeDelivery
	 */
	applicableHeaderTradeDelivery?: IHeaderTradeDelivery[];

	/**
	 * A period applicable to this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: ISpecifiedPeriod[];

	/**
	 * The trade settlement header applicable to this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/applicableTradeSettlement
	 */
	applicableTradeSettlement?: IHeaderTradeSettlement[];

	/**
	 * A referenced document associated with this supply chain trade transaction, such as the purchase order, invoice or
	 * packing list.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * The document line associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedDocumentLineDocument
	 */
	associatedDocumentLineDocument?: IDocumentLineDocument[];

	/**
	 * The financing request result document associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedFinancingRequestResultDocument
	 */
	associatedFinancingRequestResultDocument?: IFinancingRequestResultDocument[];

	/**
	 * A referenced standard associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	associatedStandard?: IStandard[];

	/**
	 * The Uniform Resource Locator (URL) of the web location of the document for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/documentURLId
	 */
	documentURLId?: string;

	/**
	 * A unique identifier for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Delivery scheduling details included in a defined forecast period for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedDeliverySchedule
	 */
	includedDeliverySchedule?: IDeliverySchedule[];

	/**
	 * A note included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: INote[];

	/**
	 * A product group included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedProductGroup
	 */
	includedProductGroup?: IProductGroup[];

	/**
	 * A trade line item included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	includedSupplyChainTradeLineItem?: ISupplyChainTradeLineItem[];

	/**
	 * A trade product included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	includedTradeProduct?: ITradeProduct[];

	/**
	 * Information, expressed as text, for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The date, time, date time or other date time value for the issuance of this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The number of line items for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/lineItemQuantity
	 */
	lineItemQuantity?: IQuantityType[];

	/**
	 * The unique identifier assigned by the sales agent to identify this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/salesAgentAssignedId
	 */
	salesAgentAssignedId?: string;

	/**
	 * The sender-recipient sequence identifier for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/senderRecipientSequenceId
	 */
	senderRecipientSequenceId?: string;

	/**
	 * An identifier, such as the Unique Consignment Reference (UCR), for the shipment which is the subject of this supply
	 * chain trade transaction.
	 * @see https://vocabulary.uncefact.org/shipmentId
	 */
	shipmentId?: string;

	/**
	 * A logistics package specified for this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/specifiedPackage
	 */
	specifiedPackage?: IPackage[];

	/**
	 * The code specifying the type of supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
