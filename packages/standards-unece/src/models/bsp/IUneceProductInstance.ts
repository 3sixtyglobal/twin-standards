// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceClassification } from "./IUneceClassification.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceGoodsCharacteristic } from "./IUneceGoodsCharacteristic.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceProductHandlingProcess } from "./IUneceProductHandlingProcess.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainPackaging } from "./IUneceSupplyChainPackaging.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual trade product or batch of similar trade products produced by human or mechanical effort or by a natural
 * process.
 * @see https://vocabulary.uncefact.org/ProductInstance
 */
export interface IUneceProductInstance {
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
	actualQuantity?: IUneceQuantityType;

	/**
	 * A unique ammunition identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/ammunitionId
	 */
	ammunitionId?: string | IJsonLdValueObject;

	/**
	 * A product classification applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableClassification
	 */
	applicableClassification?: IUneceClassification[];

	/**
	 * A distinguishing material feature applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableGoodsCharacteristic
	 */
	applicableGoodsCharacteristic?: IUneceGoodsCharacteristic[];

	/**
	 * A product characteristic applicable to this trade product instance.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IUneceProductCharacteristic[];

	/**
	 * A product handling process applied to this trade product instance, such as manufacturing or storage.
	 * @see https://vocabulary.uncefact.org/appliedProcess
	 */
	appliedProcess?: IUneceProductHandlingProcess[];

	/**
	 * The unique batch identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/batchId
	 */
	batchId?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value before which it is best to consume the items contained in this trade
	 * product instance.
	 * @see https://vocabulary.uncefact.org/bestBeforeDateTime
	 * @format date-time
	 */
	bestBeforeDateTime?: string;

	/**
	 * An additional brand name information note for this trade product instance.
	 * @see https://vocabulary.uncefact.org/brandNameAdditionalInformationNote
	 */
	brandNameAdditionalInformationNote?: IUneceNote[];

	/**
	 * The ceramic capacitor identifier of this trade product instance.
	 * @see https://vocabulary.uncefact.org/ceramicCapacitorId
	 */
	ceramicCapacitorId?: string | IJsonLdValueObject;

	/**
	 * A referenced document providing evidence of certification for this trade product instance.
	 * @see https://vocabulary.uncefact.org/certificationEvidenceDocument
	 */
	certificationEvidenceDocument?: IUneceDocument[];

	/**
	 * A common name, expressed as text, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/commonName
	 */
	commonName?: string;

	/**
	 * The DNA marker identifier of this trade product instance.
	 * @see https://vocabulary.uncefact.org/dNAMarkerId
	 */
	dNAMarkerId?: string | IJsonLdValueObject;

	/**
	 * A code specifying a disposal reason for this trade product instance.
	 * @see https://vocabulary.uncefact.org/disposalReasonCode
	 */
	disposalReasonCode?: string;

	/**
	 * The EPC (Electronic Product Code) identifier of this trade product instance.
	 * @see https://vocabulary.uncefact.org/ePCId
	 */
	ePCId?: string | IJsonLdValueObject;

	/**
	 * A unique equipment identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/equipmentId
	 */
	equipmentId?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value of expiry of the items contained in the trade product instance.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 * @format date-time
	 */
	expiryDateTime?: string;

	/**
	 * The unique global serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/globalSerialId
	 */
	globalSerialId?: string | IJsonLdValueObject;

	/**
	 * A unique Department of Defense Item Unique Identifier (IUID) for this trade product instance.
	 * @see https://vocabulary.uncefact.org/iUIDId
	 */
	iUIDId?: string | IJsonLdValueObject;

	/**
	 * A unique identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A note providing additional ingredient information for this trade product instance.
	 * @see https://vocabulary.uncefact.org/ingredientAdditionalInformationNote
	 */
	ingredientAdditionalInformationNote?: IUneceNote[];

	/**
	 * A referenced inspection document for this trade product instance.
	 * @see https://vocabulary.uncefact.org/inspectionDocument
	 */
	inspectionDocument?: IUneceDocument[];

	/**
	 * The inspection event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/inspectionEvent
	 */
	inspectionEvent?: IUneceSupplyChainEvent;

	/**
	 * An intended use, expressed as text, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/intendedUse
	 */
	intendedUse?: string;

	/**
	 * The unique kanban identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/kanbanId
	 */
	kanbanId?: string | IJsonLdValueObject;

	/**
	 * The unique lot identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/lotId
	 */
	lotId?: string | IJsonLdValueObject;

	/**
	 * The unique manufacturer assigned serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/manufacturerAssignedSerialId
	 */
	manufacturerAssignedSerialId?: string | IJsonLdValueObject;

	/**
	 * A location of origin for this supply chain product instance.
	 * @see https://vocabulary.uncefact.org/originLocation
	 */
	originLocation?: IUneceLogisticsLocation[];

	/**
	 * The packaging event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/packagingEvent
	 */
	packagingEvent?: IUneceSupplyChainEvent;

	/**
	 * The processing event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/processingEvent
	 */
	processingEvent?: IUneceSupplyChainEvent;

	/**
	 * A product characteristic for this trade product instance.
	 * @see https://vocabulary.uncefact.org/productCharacteristic
	 */
	productCharacteristic?: IUneceProductCharacteristic[];

	/**
	 * The production event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/productionEvent
	 */
	productionEvent?: IUneceSupplyChainEvent;

	/**
	 * A note providing additional quality grade information for this trade product instance.
	 * @see https://vocabulary.uncefact.org/qualityGradeAdditionalInformationNote
	 */
	qualityGradeAdditionalInformationNote?: IUneceNote[];

	/**
	 * A reclassification supply chain event for this trade product instance.
	 * @see https://vocabulary.uncefact.org/reclassificationEvent
	 */
	reclassificationEvent?: IUneceSupplyChainEvent[];

	/**
	 * A unique registration identifier, such as a vehicle licence plate identification, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/registrationId
	 */
	registrationId?: string | IJsonLdValueObject;

	/**
	 * A scientific name, expressed as text, for this trade product instance.
	 * @see https://vocabulary.uncefact.org/scientificName
	 */
	scientificName?: string;

	/**
	 * The date, time, date time, or other date time value by after which the items contained in the trade product instance
	 * should not be sold.
	 * @see https://vocabulary.uncefact.org/sellByDateTime
	 * @format date-time
	 */
	sellByDateTime?: string;

	/**
	 * A unique serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/serialId
	 */
	serialId?: string | IJsonLdValueObject;

	/**
	 * The unique supplier assigned serial identifier for this trade product instance.
	 * @see https://vocabulary.uncefact.org/supplierAssignedSerialId
	 */
	supplierAssignedSerialId?: string | IJsonLdValueObject;

	/**
	 * Packaging used for this trade product instance.
	 * @see https://vocabulary.uncefact.org/usedPackaging
	 */
	usedPackaging?: IUneceSupplyChainPackaging;
}
