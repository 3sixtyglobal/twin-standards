// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IClassification } from "./IClassification.js";
import type { IDocument } from "./IDocument.js";
import type { IGoodsCharacteristic } from "./IGoodsCharacteristic.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { INote } from "./INote.js";
import type { IProductCharacteristic } from "./IProductCharacteristic.js";
import type { IProductHandlingProcess } from "./IProductHandlingProcess.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual trade product or batch of similar trade products produced by human or mechanical effort or by a natural
 * process.
 * @see https://vocabulary.uncefact.org/ProductInstance
 */
export interface IProductInstance extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductInstance;

	/**
	 * The actual quantity of items in this trade product instance.
	 * @see https://vocabulary.uncefact.org/actualQuantity
	 */
	actualQuantity?: IQuantityType;

	/**
	 * A unique ammunition identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/ammunitionId
	 */
	ammunitionId?: string;

	/**
	 * A product classification applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableClassification
	 */
	applicableClassification?: IClassification[];

	/**
	 * A distinguishing material feature applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IGoodsCharacteristic[];

	/**
	 * A product characteristic applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IProductCharacteristic[];

	/**
	 * A product handling process applied to this trade product instance, such as manufacturing or storage.
	 * @see https://vocabulary.uncefact.org/appliedProcess
	 */
	appliedProcess?: IProductHandlingProcess[];

	/**
	 * The unique batch identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/batchId
	 */
	batchId?: string;

	/**
	 * The date, time, date time, or other date time value before which it is best to consume the items contained in this trade
	 * product instance.
	 * @see https://vocabulary.uncefact.org/bestBeforeDateTime
	 */
	bestBeforeDateTime?: string;

	/**
	 * An additional brand name information note for this trade product instance.
	 * @see https://vocabulary.uncefact.org/brandNameAdditionalInformationNote
	 */
	brandNameAdditionalInformationNote?: INote[];

	/**
	 * The ceramic capacitor identifier of this trade product instance.
	 * @see https://vocabulary.uncefact.org/ceramicCapacitorId
	 */
	ceramicCapacitorId?: string;

	/**
	 * A referenced document providing evidence of certification for this trade product instance.
	 * @see https://vocabulary.uncefact.org/certificationEvidenceDocument
	 */
	certificationEvidenceDocument?: IDocument[];

	/**
	 * A common name, expressed as text, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/commonName
	 */
	commonName?: string;

	/**
	 * The DNA marker identifier of this trade product instance.
	 * @see https://vocabulary.uncefact.org/dNAMarkerId
	 */
	dNAMarkerId?: string;

	/**
	 * A code specifying a disposal reason for this trade product instance.
	 * @see https://vocabulary.uncefact.org/disposalReasonCode
	 */
	disposalReasonCode?: string;

	/**
	 * The EPC (Electronic Product Code) identifier of this trade product instance.
	 * @see https://vocabulary.uncefact.org/ePCId
	 */
	ePCId?: string;

	/**
	 * A unique equipment identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/equipmentId
	 */
	equipmentId?: string;

	/**
	 * The date, time, date time, or other date time value of expiry of the items contained in the trade product instance.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The unique global serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/globalSerialId
	 */
	globalSerialId?: string;

	/**
	 * A unique Department of Defense Item Unique Identifier (IUID) for this trade product instance.
	 * @see https://vocabulary.uncefact.org/iUIDId
	 */
	iUIDId?: string;

	/**
	 * A unique identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A note providing additional ingredient information for this trade product instance.
	 * @see https://vocabulary.uncefact.org/ingredientAdditionalInformationNote
	 */
	ingredientAdditionalInformationNote?: INote[];

	/**
	 * A referenced inspection document for this trade product instance.
	 * @see https://vocabulary.uncefact.org/inspectionDocument
	 */
	inspectionDocument?: IDocument[];

	/**
	 * The inspection event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/inspectionEvent
	 */
	inspectionEvent?: ISupplyChainEvent[];

	/**
	 * An intended use, expressed as text, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/intendedUse
	 */
	intendedUse?: string;

	/**
	 * The unique kanban identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/kanbanId
	 */
	kanbanId?: string;

	/**
	 * The unique lot identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/lotId
	 */
	lotId?: string;

	/**
	 * The unique manufacturer assigned serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedSerialId
	 */
	manufacturerAssignedSerialId?: string;

	/**
	 * A location of origin for this supply chain product instance.
	 * @see https://vocabulary.uncefact.org/originLocation
	 */
	originLocation?: ILogisticsLocation[];

	/**
	 * The packaging event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/packagingEvent
	 */
	packagingEvent?: ISupplyChainEvent[];

	/**
	 * The processing event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/processingEvent
	 */
	processingEvent?: ISupplyChainEvent[];

	/**
	 * A product characteristic for this trade product instance.
	 * @see https://vocabulary.uncefact.org/productCharacteristic
	 */
	productCharacteristic?: IProductCharacteristic[];

	/**
	 * The production event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/productionEvent
	 */
	productionEvent?: ISupplyChainEvent[];

	/**
	 * A note providing additional quality grade information for this trade product instance.
	 * @see https://vocabulary.uncefact.org/qualityGradeAdditionalInformationNote
	 */
	qualityGradeAdditionalInformationNote?: INote[];

	/**
	 * A reclassification supply chain event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/reclassificationEvent
	 */
	reclassificationEvent?: ISupplyChainEvent[];

	/**
	 * A unique registration identifier, such as a vehicle licence plate identification, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/registrationId
	 */
	registrationId?: string;

	/**
	 * A scientific name, expressed as text, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/scientificName
	 */
	scientificName?: string;

	/**
	 * The date, time, date time, or other date time value by after which the items contained in the trade product instance
	 * should not be sold.
	 * @see https://vocabulary.uncefact.org/sellByDateTime
	 */
	sellByDateTime?: string;

	/**
	 * A unique serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/serialId
	 */
	serialId?: string;

	/**
	 * The unique supplier assigned serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/supplierAssignedSerialId
	 */
	supplierAssignedSerialId?: string;

	/**
	 * Packaging used for this trade product instance.
	 * @see https://vocabulary.uncefact.org/usedPackaging
	 */
	usedPackaging?: ISupplyChainPackaging[];
}
