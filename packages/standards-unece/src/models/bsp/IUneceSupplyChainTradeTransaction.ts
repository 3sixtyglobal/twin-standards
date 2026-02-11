// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceDeliverySchedule } from "./IUneceDeliverySchedule.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceDocumentLineDocument } from "./IUneceDocumentLineDocument.js";
import type { IUneceFinancingRequestResultDocument } from "./IUneceFinancingRequestResultDocument.js";
import type { IUneceHeaderTradeAgreement } from "./IUneceHeaderTradeAgreement.js";
import type { IUneceHeaderTradeDelivery } from "./IUneceHeaderTradeDelivery.js";
import type { IUneceHeaderTradeSettlement } from "./IUneceHeaderTradeSettlement.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUneceProductGroup } from "./IUneceProductGroup.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSpecifiedPeriod } from "./IUneceSpecifiedPeriod.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSupplyChainTradeLineItem } from "./IUneceSupplyChainTradeLineItem.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceSupplyChainTradeTransactionTypeCodeList } from "../typeCodes/uneceSupplyChainTradeTransactionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A group of supply chain trade line items, trade agreement, trade delivery and trade settlement details.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeTransaction
 */
export interface IUneceSupplyChainTradeTransaction extends IJsonLdNodeObject {
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
	applicableHeaderTradeAgreement?: IUneceHeaderTradeAgreement[];

	/**
	 * A trade delivery header applicable to this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/applicableHeaderTradeDelivery
	 */
	applicableHeaderTradeDelivery?: IUneceHeaderTradeDelivery[];

	/**
	 * A period applicable to this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/applicablePeriod
	 */
	applicablePeriod?: IUneceSpecifiedPeriod[];

	/**
	 * The trade settlement header applicable to this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/applicableTradeSettlement
	 */
	applicableTradeSettlement?: IUneceHeaderTradeSettlement;

	/**
	 * A referenced document associated with this supply chain trade transaction, such as the purchase order, invoice or
	 * packing list.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument[];

	/**
	 * The document line associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedDocumentLineDocument
	 */
	associatedDocumentLineDocument?: IUneceDocumentLineDocument;

	/**
	 * The financing request result document associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedFinancingRequestResultDocument
	 */
	associatedFinancingRequestResultDocument?: IUneceFinancingRequestResultDocument;

	/**
	 * A referenced standard associated with this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/associatedStandard
	 */
	associatedStandard?: IUneceStandard[];

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
	includedDeliverySchedule?: IUneceDeliverySchedule[];

	/**
	 * A note included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: IUneceNote[];

	/**
	 * A product group included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedProductGroup
	 */
	includedProductGroup?: IUneceProductGroup[];

	/**
	 * A trade line item included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem
	 */
	includedSupplyChainTradeLineItem?: IUneceSupplyChainTradeLineItem[];

	/**
	 * A trade product included in this supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/includedTradeProduct
	 */
	includedTradeProduct?: IUneceTradeProduct[];

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
	lineItemQuantity?: IUneceQuantityType;

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
	specifiedPackage?: IUnecePackage[];

	/**
	 * The code specifying the type of supply chain trade transaction.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSupplyChainTradeTransactionTypeCodeList | string;
}
