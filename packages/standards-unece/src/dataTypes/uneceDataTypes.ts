// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@twin.org/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
import { UneceContexts } from "../models/uneceContexts.js";
import { UneceTypes } from "../models/uneceTypes.js";
import UneceAcademicQualificationSchema from "../schemas/UneceAcademicQualification.json" with { type: "json" };
import UneceAccessRightsTypeCodeListSchema from "../schemas/UneceAccessRightsTypeCodeList.json" with { type: "json" };
import UneceAccountingAccountSchema from "../schemas/UneceAccountingAccount.json" with { type: "json" };
import UneceAccountingAccountBalanceReopeningTypeCodeListSchema from "../schemas/UneceAccountingAccountBalanceReopeningTypeCodeList.json" with { type: "json" };
import UneceAccountingAccountClassificationCodeListSchema from "../schemas/UneceAccountingAccountClassificationCodeList.json" with { type: "json" };
import UneceAccountingAccountNatureTypeCodeListSchema from "../schemas/UneceAccountingAccountNatureTypeCodeList.json" with { type: "json" };
import UneceAccountingAccountStatusCodeListSchema from "../schemas/UneceAccountingAccountStatusCodeList.json" with { type: "json" };
import UneceAccountingAccountTypeCodeListSchema from "../schemas/UneceAccountingAccountTypeCodeList.json" with { type: "json" };
import UneceAccountingAmountQualifierCodeListSchema from "../schemas/UneceAccountingAmountQualifierCodeList.json" with { type: "json" };
import UneceAccountingAmountTypeCodeListSchema from "../schemas/UneceAccountingAmountTypeCodeList.json" with { type: "json" };
import UneceAccountingContactCodeListSchema from "../schemas/UneceAccountingContactCodeList.json" with { type: "json" };
import UneceAccountingDebitCreditStatusCodeListSchema from "../schemas/UneceAccountingDebitCreditStatusCodeList.json" with { type: "json" };
import UneceAccountingDocumentCodeListSchema from "../schemas/UneceAccountingDocumentCodeList.json" with { type: "json" };
import UneceAccountingDocumentTypeCodeListSchema from "../schemas/UneceAccountingDocumentTypeCodeList.json" with { type: "json" };
import UneceAccountingEntryCategoryCodeListSchema from "../schemas/UneceAccountingEntryCategoryCodeList.json" with { type: "json" };
import UneceAccountingEntryLineCategoryCodeListSchema from "../schemas/UneceAccountingEntryLineCategoryCodeList.json" with { type: "json" };
import UneceAccountingEntryLineSourceCodeListSchema from "../schemas/UneceAccountingEntryLineSourceCodeList.json" with { type: "json" };
import UneceAccountingEntryProcessingCodeListSchema from "../schemas/UneceAccountingEntryProcessingCodeList.json" with { type: "json" };
import UneceAccountingJournalCategoryCodeListSchema from "../schemas/UneceAccountingJournalCategoryCodeList.json" with { type: "json" };
import UneceAccountingJournalCodeListSchema from "../schemas/UneceAccountingJournalCodeList.json" with { type: "json" };
import UneceAccountingPeriodFunctionCodeListSchema from "../schemas/UneceAccountingPeriodFunctionCodeList.json" with { type: "json" };
import UneceAccountingPerquisiteCodeListSchema from "../schemas/UneceAccountingPerquisiteCodeList.json" with { type: "json" };
import UneceAccountingVoucherMediumCodeListSchema from "../schemas/UneceAccountingVoucherMediumCodeList.json" with { type: "json" };
import UneceAccreditationSchema from "../schemas/UneceAccreditation.json" with { type: "json" };
import UneceAccreditationTypeCodeListSchema from "../schemas/UneceAccreditationTypeCodeList.json" with { type: "json" };
import UneceAcknowledgementCodeListSchema from "../schemas/UneceAcknowledgementCodeList.json" with { type: "json" };
import UneceAcknowledgementDocumentSchema from "../schemas/UneceAcknowledgementDocument.json" with { type: "json" };
import UneceAdditionalPostponementCodeListSchema from "../schemas/UneceAdditionalPostponementCodeList.json" with { type: "json" };
import UneceAddressFormatTypeCodeListSchema from "../schemas/UneceAddressFormatTypeCodeList.json" with { type: "json" };
import UneceAddressTypeCodeListSchema from "../schemas/UneceAddressTypeCodeList.json" with { type: "json" };
import UneceAdjustmentReasonCodeListSchema from "../schemas/UneceAdjustmentReasonCodeList.json" with { type: "json" };
import UneceAdvancePaymentSchema from "../schemas/UneceAdvancePayment.json" with { type: "json" };
import UneceAgriculturalApplicationSchema from "../schemas/UneceAgriculturalApplication.json" with { type: "json" };
import UneceAgriculturalCertificateSchema from "../schemas/UneceAgriculturalCertificate.json" with { type: "json" };
import UneceAgriculturalCharacteristicSchema from "../schemas/UneceAgriculturalCharacteristic.json" with { type: "json" };
import UneceAgriculturalCharacteristicTypeCodeListSchema from "../schemas/UneceAgriculturalCharacteristicTypeCodeList.json" with { type: "json" };
import UneceAgriculturalProcessSchema from "../schemas/UneceAgriculturalProcess.json" with { type: "json" };
import UneceAgriculturalProcessTypeCodeListSchema from "../schemas/UneceAgriculturalProcessTypeCodeList.json" with { type: "json" };
import UneceAgriculturalZoneAreaSchema from "../schemas/UneceAgriculturalZoneArea.json" with { type: "json" };
import UneceAirFlowUnitMeasureCodeSchema from "../schemas/UneceAirFlowUnitMeasureCode.json" with { type: "json" };
import UneceAirFlowUnitMeasureTypeSchema from "../schemas/UneceAirFlowUnitMeasureType.json" with { type: "json" };
import UneceAllergySchema from "../schemas/UneceAllergy.json" with { type: "json" };
import UneceAllergyTypeCodeListSchema from "../schemas/UneceAllergyTypeCodeList.json" with { type: "json" };
import UneceAllowanceChargeIdCodeListSchema from "../schemas/UneceAllowanceChargeIdCodeList.json" with { type: "json" };
import UneceAllowanceChargeReasonCodeListSchema from "../schemas/UneceAllowanceChargeReasonCodeList.json" with { type: "json" };
import UneceAlternateCurrencyAmountTypeCodeListSchema from "../schemas/UneceAlternateCurrencyAmountTypeCodeList.json" with { type: "json" };
import UneceAmortizationMethodCodeListSchema from "../schemas/UneceAmortizationMethodCodeList.json" with { type: "json" };
import UneceAmountCurrencySchema from "../schemas/UneceAmountCurrency.json" with { type: "json" };
import UneceAmountTypeSchema from "../schemas/UneceAmountType.json" with { type: "json" };
import UneceAmountWeightTypeCodeListSchema from "../schemas/UneceAmountWeightTypeCodeList.json" with { type: "json" };
import UneceAnimalBatchSchema from "../schemas/UneceAnimalBatch.json" with { type: "json" };
import UneceAnimalCertificateSchema from "../schemas/UneceAnimalCertificate.json" with { type: "json" };
import UneceAnimalCertificationSchema from "../schemas/UneceAnimalCertification.json" with { type: "json" };
import UneceAnimalHoldingEventSchema from "../schemas/UneceAnimalHoldingEvent.json" with { type: "json" };
import UneceAnimalHoldingEventTypeCodeListSchema from "../schemas/UneceAnimalHoldingEventTypeCodeList.json" with { type: "json" };
import UneceAnimalIdentitySchema from "../schemas/UneceAnimalIdentity.json" with { type: "json" };
import UneceAppliedAllowanceChargeSchema from "../schemas/UneceAppliedAllowanceCharge.json" with { type: "json" };
import UneceAppliedChemicalTreatmentSchema from "../schemas/UneceAppliedChemicalTreatment.json" with { type: "json" };
import UneceAppliedTaxSchema from "../schemas/UneceAppliedTax.json" with { type: "json" };
import UneceAreaSchema from "../schemas/UneceArea.json" with { type: "json" };
import UneceAssertionSchema from "../schemas/UneceAssertion.json" with { type: "json" };
import UneceAssessmentSchema from "../schemas/UneceAssessment.json" with { type: "json" };
import UneceAssessmentTypeCodeListSchema from "../schemas/UneceAssessmentTypeCodeList.json" with { type: "json" };
import UneceAssociatedTransportEquipmentSchema from "../schemas/UneceAssociatedTransportEquipment.json" with { type: "json" };
import UneceAttachedTransportEquipmentSchema from "../schemas/UneceAttachedTransportEquipment.json" with { type: "json" };
import UneceAuthenticationSchema from "../schemas/UneceAuthentication.json" with { type: "json" };
import UneceAuthoritativeSignatoryPersonSchema from "../schemas/UneceAuthoritativeSignatoryPerson.json" with { type: "json" };
import UneceAutomaticDataCaptureMethodCodeListSchema from "../schemas/UneceAutomaticDataCaptureMethodCodeList.json" with { type: "json" };
import UneceAvailablePeriodSchema from "../schemas/UneceAvailablePeriod.json" with { type: "json" };
import UneceBasicWorkItemSchema from "../schemas/UneceBasicWorkItem.json" with { type: "json" };
import UneceBasicWorkItemTypeCodeListSchema from "../schemas/UneceBasicWorkItemTypeCodeList.json" with { type: "json" };
import UneceBillingDocumentCodeListSchema from "../schemas/UneceBillingDocumentCodeList.json" with { type: "json" };
import UneceBinaryFileSchema from "../schemas/UneceBinaryFile.json" with { type: "json" };
import UneceBinaryObjectCharacterSetCodeListSchema from "../schemas/UneceBinaryObjectCharacterSetCodeList.json" with { type: "json" };
import UneceBinaryObjectEncodingCodeListSchema from "../schemas/UneceBinaryObjectEncodingCodeList.json" with { type: "json" };
import UneceBirthAddressSchema from "../schemas/UneceBirthAddress.json" with { type: "json" };
import UneceBookingSchema from "../schemas/UneceBooking.json" with { type: "json" };
import UneceBotanicalCropSchema from "../schemas/UneceBotanicalCrop.json" with { type: "json" };
import UneceBranchFinancialInstitutionSchema from "../schemas/UneceBranchFinancialInstitution.json" with { type: "json" };
import UneceBreakdownStatementSchema from "../schemas/UneceBreakdownStatement.json" with { type: "json" };
import UneceCalculatedPriceSchema from "../schemas/UneceCalculatedPrice.json" with { type: "json" };
import UneceCalibratedMeasurementSchema from "../schemas/UneceCalibratedMeasurement.json" with { type: "json" };
import UneceCalibratedMeasurementTypeCodeListSchema from "../schemas/UneceCalibratedMeasurementTypeCodeList.json" with { type: "json" };
import UneceCancellationStatusSchema from "../schemas/UneceCancellationStatus.json" with { type: "json" };
import UneceCargoSchema from "../schemas/UneceCargo.json" with { type: "json" };
import UneceCargoCategoryCodeListSchema from "../schemas/UneceCargoCategoryCodeList.json" with { type: "json" };
import UneceCargoCommodityCategoryCodeListSchema from "../schemas/UneceCargoCommodityCategoryCodeList.json" with { type: "json" };
import UneceCargoInsuranceSchema from "../schemas/UneceCargoInsurance.json" with { type: "json" };
import UneceCargoOperationalCategoryCodeListSchema from "../schemas/UneceCargoOperationalCategoryCodeList.json" with { type: "json" };
import UneceCargoTypeClassificationCodeListSchema from "../schemas/UneceCargoTypeClassificationCodeList.json" with { type: "json" };
import UneceCarriedEquipmentSchema from "../schemas/UneceCarriedEquipment.json" with { type: "json" };
import UneceCarriedEquipmentTypeCodeListSchema from "../schemas/UneceCarriedEquipmentTypeCodeList.json" with { type: "json" };
import UneceCashSchema from "../schemas/UneceCash.json" with { type: "json" };
import UneceCashTypeCodeListSchema from "../schemas/UneceCashTypeCodeList.json" with { type: "json" };
import UneceCertificateTypeCodeListSchema from "../schemas/UneceCertificateTypeCodeList.json" with { type: "json" };
import UneceChargePayingPartyRoleCodeListSchema from "../schemas/UneceChargePayingPartyRoleCodeList.json" with { type: "json" };
import UneceChemicalSchema from "../schemas/UneceChemical.json" with { type: "json" };
import UneceChemicalTypeCodeListSchema from "../schemas/UneceChemicalTypeCodeList.json" with { type: "json" };
import UneceChequeSchema from "../schemas/UneceCheque.json" with { type: "json" };
import UneceChequeTypeCodeListSchema from "../schemas/UneceChequeTypeCodeList.json" with { type: "json" };
import UneceCircleSchema from "../schemas/UneceCircle.json" with { type: "json" };
import UneceClassificationSchema from "../schemas/UneceClassification.json" with { type: "json" };
import UneceClassificationTypeCodeListSchema from "../schemas/UneceClassificationTypeCodeList.json" with { type: "json" };
import UneceClauseSchema from "../schemas/UneceClause.json" with { type: "json" };
import UneceCodeListResponsibleAgencyCodeListSchema from "../schemas/UneceCodeListResponsibleAgencyCodeList.json" with { type: "json" };
import UneceColourSchema from "../schemas/UneceColour.json" with { type: "json" };
import UneceColourTypeCodeListSchema from "../schemas/UneceColourTypeCodeList.json" with { type: "json" };
import UneceCommitmentLevelCodeListSchema from "../schemas/UneceCommitmentLevelCodeList.json" with { type: "json" };
import UneceCommunicationSchema from "../schemas/UneceCommunication.json" with { type: "json" };
import UneceCommunicationChannelCodeListSchema from "../schemas/UneceCommunicationChannelCodeList.json" with { type: "json" };
import UneceCommunicationEventSchema from "../schemas/UneceCommunicationEvent.json" with { type: "json" };
import UneceCommunicationEventTypeCodeListSchema from "../schemas/UneceCommunicationEventTypeCodeList.json" with { type: "json" };
import UneceComplexDescriptionSchema from "../schemas/UneceComplexDescription.json" with { type: "json" };
import UneceConformanceCertificateSchema from "../schemas/UneceConformanceCertificate.json" with { type: "json" };
import UneceConsignmentSchema from "../schemas/UneceConsignment.json" with { type: "json" };
import UneceConsignmentItemSchema from "../schemas/UneceConsignmentItem.json" with { type: "json" };
import UneceContactPersonSchema from "../schemas/UneceContactPerson.json" with { type: "json" };
import UneceContactTypeCodeListSchema from "../schemas/UneceContactTypeCodeList.json" with { type: "json" };
import UneceContextTypeSchema from "../schemas/UneceContextType.json" with { type: "json" };
import UneceContractSchema from "../schemas/UneceContract.json" with { type: "json" };
import UneceControlSettingParameterSchema from "../schemas/UneceControlSettingParameter.json" with { type: "json" };
import UneceControlSettingParameterTypeCodeListSchema from "../schemas/UneceControlSettingParameterTypeCodeList.json" with { type: "json" };
import UneceConvoySchema from "../schemas/UneceConvoy.json" with { type: "json" };
import UneceCooperatingOrganizationSchema from "../schemas/UneceCooperatingOrganization.json" with { type: "json" };
import UneceCoordinateReferenceSystemSchema from "../schemas/UneceCoordinateReferenceSystem.json" with { type: "json" };
import UneceCoordinateSourceSystemSchema from "../schemas/UneceCoordinateSourceSystem.json" with { type: "json" };
import UneceCorrectiveActionSchema from "../schemas/UneceCorrectiveAction.json" with { type: "json" };
import UneceCorrectiveActionTypeCodeListSchema from "../schemas/UneceCorrectiveActionTypeCodeList.json" with { type: "json" };
import UneceCorrectiveEventSchema from "../schemas/UneceCorrectiveEvent.json" with { type: "json" };
import UneceCountrySchema from "../schemas/UneceCountry.json" with { type: "json" };
import UneceCountryIdSchema from "../schemas/UneceCountryId.json" with { type: "json" };
import UneceCountrySubDivisionSchema from "../schemas/UneceCountrySubDivision.json" with { type: "json" };
import UneceCountrySubDivisionTypeCodeListSchema from "../schemas/UneceCountrySubDivisionTypeCodeList.json" with { type: "json" };
import UneceCreditorFinancialAccountSchema from "../schemas/UneceCreditorFinancialAccount.json" with { type: "json" };
import UneceCreditorFinancialInstitutionSchema from "../schemas/UneceCreditorFinancialInstitution.json" with { type: "json" };
import UneceCropMixtureConstituentSchema from "../schemas/UneceCropMixtureConstituent.json" with { type: "json" };
import UneceCropProduceBatchSchema from "../schemas/UneceCropProduceBatch.json" with { type: "json" };
import UneceCropProduceBatchTypeCodeListSchema from "../schemas/UneceCropProduceBatchTypeCodeList.json" with { type: "json" };
import UneceCropProtectionTreatmentSchema from "../schemas/UneceCropProtectionTreatment.json" with { type: "json" };
import UneceCropProtectionTreatmentTypeCodeListSchema from "../schemas/UneceCropProtectionTreatmentTypeCodeList.json" with { type: "json" };
import UneceCurrencyCodeListSchema from "../schemas/UneceCurrencyCodeList.json" with { type: "json" };
import UneceCurrencyExchangeSchema from "../schemas/UneceCurrencyExchange.json" with { type: "json" };
import UneceCustomerClassSchema from "../schemas/UneceCustomerClass.json" with { type: "json" };
import UneceCustomsDutyRegimeTypeCodeListSchema from "../schemas/UneceCustomsDutyRegimeTypeCodeList.json" with { type: "json" };
import UneceCustomsProcedureGuaranteeCodeListSchema from "../schemas/UneceCustomsProcedureGuaranteeCodeList.json" with { type: "json" };
import UneceCustomsValuationSchema from "../schemas/UneceCustomsValuation.json" with { type: "json" };
import UneceCustomsValuationTypeCodeListSchema from "../schemas/UneceCustomsValuationTypeCodeList.json" with { type: "json" };
import UneceDangerousGoodsSchema from "../schemas/UneceDangerousGoods.json" with { type: "json" };
import UneceDangerousGoodsPackagingLevelCodeListSchema from "../schemas/UneceDangerousGoodsPackagingLevelCodeList.json" with { type: "json" };
import UneceDangerousGoodsRegulationCodeListSchema from "../schemas/UneceDangerousGoodsRegulationCodeList.json" with { type: "json" };
import UneceDateTimePeriodFunctionCodeListSchema from "../schemas/UneceDateTimePeriodFunctionCodeList.json" with { type: "json" };
import UneceDebtorFinancialAccountSchema from "../schemas/UneceDebtorFinancialAccount.json" with { type: "json" };
import UneceDebtorFinancialInstitutionSchema from "../schemas/UneceDebtorFinancialInstitution.json" with { type: "json" };
import UneceDelimitedPeriodSchema from "../schemas/UneceDelimitedPeriod.json" with { type: "json" };
import UneceDeliveryAdjustmentSchema from "../schemas/UneceDeliveryAdjustment.json" with { type: "json" };
import UneceDeliveryInstructionsSchema from "../schemas/UneceDeliveryInstructions.json" with { type: "json" };
import UneceDeliveryScheduleSchema from "../schemas/UneceDeliverySchedule.json" with { type: "json" };
import UneceDeliveryTermsSchema from "../schemas/UneceDeliveryTerms.json" with { type: "json" };
import UneceDeliveryTermsCodeListSchema from "../schemas/UneceDeliveryTermsCodeList.json" with { type: "json" };
import UneceDeliveryTermsFunctionCodeListSchema from "../schemas/UneceDeliveryTermsFunctionCodeList.json" with { type: "json" };
import UneceDigitalMethodSchema from "../schemas/UneceDigitalMethod.json" with { type: "json" };
import UneceDigitalMethodTypeCodeListSchema from "../schemas/UneceDigitalMethodTypeCodeList.json" with { type: "json" };
import UneceDimensionTypeCodeListSchema from "../schemas/UneceDimensionTypeCodeList.json" with { type: "json" };
import UneceDirectPositionSchema from "../schemas/UneceDirectPosition.json" with { type: "json" };
import UneceDisabilitySchema from "../schemas/UneceDisability.json" with { type: "json" };
import UneceDisabilityTypeCodeListSchema from "../schemas/UneceDisabilityTypeCodeList.json" with { type: "json" };
import UneceDisposalInstructionsSchema from "../schemas/UneceDisposalInstructions.json" with { type: "json" };
import UneceDocumentSchema from "../schemas/UneceDocument.json" with { type: "json" };
import UneceDocumentCharacteristicSchema from "../schemas/UneceDocumentCharacteristic.json" with { type: "json" };
import UneceDocumentCharacteristicTypeCodeListSchema from "../schemas/UneceDocumentCharacteristicTypeCodeList.json" with { type: "json" };
import UneceDocumentCodeListSchema from "../schemas/UneceDocumentCodeList.json" with { type: "json" };
import UneceDocumentContextParameterSchema from "../schemas/UneceDocumentContextParameter.json" with { type: "json" };
import UneceDocumentHandlingInstructionsSchema from "../schemas/UneceDocumentHandlingInstructions.json" with { type: "json" };
import UneceDocumentLineDocumentSchema from "../schemas/UneceDocumentLineDocument.json" with { type: "json" };
import UneceDocumentStatusSchema from "../schemas/UneceDocumentStatus.json" with { type: "json" };
import UneceDocumentStatusCodeListSchema from "../schemas/UneceDocumentStatusCodeList.json" with { type: "json" };
import UneceDurationUnitMeasureCodeSchema from "../schemas/UneceDurationUnitMeasureCode.json" with { type: "json" };
import UneceDurationUnitMeasureTypeSchema from "../schemas/UneceDurationUnitMeasureType.json" with { type: "json" };
import UneceEmissionSchema from "../schemas/UneceEmission.json" with { type: "json" };
import UneceEmissionTypeCodeListSchema from "../schemas/UneceEmissionTypeCodeList.json" with { type: "json" };
import UneceEmployerIdentitySchema from "../schemas/UneceEmployerIdentity.json" with { type: "json" };
import UneceEnvelopeSchema from "../schemas/UneceEnvelope.json" with { type: "json" };
import UneceEquipmentSchema from "../schemas/UneceEquipment.json" with { type: "json" };
import UneceEquipmentTypeCodeListSchema from "../schemas/UneceEquipmentTypeCodeList.json" with { type: "json" };
import UneceErrorSchema from "../schemas/UneceError.json" with { type: "json" };
import UneceEventElementSchema from "../schemas/UneceEventElement.json" with { type: "json" };
import UneceExchangedDeclarationSchema from "../schemas/UneceExchangedDeclaration.json" with { type: "json" };
import UneceExchangedDocumentSchema from "../schemas/UneceExchangedDocument.json" with { type: "json" };
import UneceExchangedDocumentContextSchema from "../schemas/UneceExchangedDocumentContext.json" with { type: "json" };
import UneceExperienceEventSchema from "../schemas/UneceExperienceEvent.json" with { type: "json" };
import UneceExperienceFacilitySchema from "../schemas/UneceExperienceFacility.json" with { type: "json" };
import UneceExperienceItemSchema from "../schemas/UneceExperienceItem.json" with { type: "json" };
import UneceExperienceProductSchema from "../schemas/UneceExperienceProduct.json" with { type: "json" };
import UneceExperienceProgramActionSchema from "../schemas/UneceExperienceProgramAction.json" with { type: "json" };
import UneceFieldCropSchema from "../schemas/UneceFieldCrop.json" with { type: "json" };
import UneceFileSizeUnitMeasureCodeSchema from "../schemas/UneceFileSizeUnitMeasureCode.json" with { type: "json" };
import UneceFileSizeUnitMeasureTypeSchema from "../schemas/UneceFileSizeUnitMeasureType.json" with { type: "json" };
import UneceFinancialAccountTypeCodeListSchema from "../schemas/UneceFinancialAccountTypeCodeList.json" with { type: "json" };
import UneceFinancialAdjustmentSchema from "../schemas/UneceFinancialAdjustment.json" with { type: "json" };
import UneceFinancialAdjustmentReasonCodeListSchema from "../schemas/UneceFinancialAdjustmentReasonCodeList.json" with { type: "json" };
import UneceFinancialCardSchema from "../schemas/UneceFinancialCard.json" with { type: "json" };
import UneceFinancialCardTypeCodeListSchema from "../schemas/UneceFinancialCardTypeCodeList.json" with { type: "json" };
import UneceFinancialIdentitySchema from "../schemas/UneceFinancialIdentity.json" with { type: "json" };
import UneceFinancialInstitutionAddressSchema from "../schemas/UneceFinancialInstitutionAddress.json" with { type: "json" };
import UneceFinancialInstitutionRoleCodeListSchema from "../schemas/UneceFinancialInstitutionRoleCodeList.json" with { type: "json" };
import UneceFinancingFinancialAccountSchema from "../schemas/UneceFinancingFinancialAccount.json" with { type: "json" };
import UneceFinancingRequestDocumentSchema from "../schemas/UneceFinancingRequestDocument.json" with { type: "json" };
import UneceFinancingRequestResultDocumentSchema from "../schemas/UneceFinancingRequestResultDocument.json" with { type: "json" };
import UneceFinancingStatusSchema from "../schemas/UneceFinancingStatus.json" with { type: "json" };
import UneceFinancingSummaryDocumentSchema from "../schemas/UneceFinancingSummaryDocument.json" with { type: "json" };
import UneceFoodChoiceSchema from "../schemas/UneceFoodChoice.json" with { type: "json" };
import UneceFoodChoiceTypeCodeListSchema from "../schemas/UneceFoodChoiceTypeCodeList.json" with { type: "json" };
import UneceForecastTermsSchema from "../schemas/UneceForecastTerms.json" with { type: "json" };
import UneceFreightChargeTariffClassCodeListSchema from "../schemas/UneceFreightChargeTariffClassCodeList.json" with { type: "json" };
import UneceFreightChargeTypeIdSchema from "../schemas/UneceFreightChargeTypeId.json" with { type: "json" };
import UneceFuelSchema from "../schemas/UneceFuel.json" with { type: "json" };
import UneceFuelTypeCodeListSchema from "../schemas/UneceFuelTypeCodeList.json" with { type: "json" };
import UneceGeographicalAreaSchema from "../schemas/UneceGeographicalArea.json" with { type: "json" };
import UneceGeographicalCoordinateSchema from "../schemas/UneceGeographicalCoordinate.json" with { type: "json" };
import UneceGeographicalFeatureSchema from "../schemas/UneceGeographicalFeature.json" with { type: "json" };
import UneceGeographicalGridSchema from "../schemas/UneceGeographicalGrid.json" with { type: "json" };
import UneceGeographicalLineSchema from "../schemas/UneceGeographicalLine.json" with { type: "json" };
import UneceGeographicalMultiCurveSchema from "../schemas/UneceGeographicalMultiCurve.json" with { type: "json" };
import UneceGeographicalMultiPointSchema from "../schemas/UneceGeographicalMultiPoint.json" with { type: "json" };
import UneceGeographicalMultiSurfaceSchema from "../schemas/UneceGeographicalMultiSurface.json" with { type: "json" };
import UneceGeographicalObjectCharacteristicSchema from "../schemas/UneceGeographicalObjectCharacteristic.json" with { type: "json" };
import UneceGeographicalPointSchema from "../schemas/UneceGeographicalPoint.json" with { type: "json" };
import UneceGeographicalSurfaceSchema from "../schemas/UneceGeographicalSurface.json" with { type: "json" };
import UneceGeopoliticalRegionSchema from "../schemas/UneceGeopoliticalRegion.json" with { type: "json" };
import UneceGeopoliticalRegionTypeCodeListSchema from "../schemas/UneceGeopoliticalRegionTypeCodeList.json" with { type: "json" };
import UneceGoodsCharacteristicSchema from "../schemas/UneceGoodsCharacteristic.json" with { type: "json" };
import UneceGoodsCharacteristicTypeCodeListSchema from "../schemas/UneceGoodsCharacteristicTypeCodeList.json" with { type: "json" };
import UneceGoodsTypeCodeListSchema from "../schemas/UneceGoodsTypeCodeList.json" with { type: "json" };
import UneceGoodsTypeExtensionCodeListSchema from "../schemas/UneceGoodsTypeExtensionCodeList.json" with { type: "json" };
import UneceGovernmentActionCodeListSchema from "../schemas/UneceGovernmentActionCodeList.json" with { type: "json" };
import UneceGovernmentRegistrationSchema from "../schemas/UneceGovernmentRegistration.json" with { type: "json" };
import UneceGovernmentRegistrationTypeCodeListSchema from "../schemas/UneceGovernmentRegistrationTypeCodeList.json" with { type: "json" };
import UneceGroupedWorkItemSchema from "../schemas/UneceGroupedWorkItem.json" with { type: "json" };
import UneceGroupedWorkItemTypeCodeListSchema from "../schemas/UneceGroupedWorkItemTypeCodeList.json" with { type: "json" };
import UneceGuaranteeSchema from "../schemas/UneceGuarantee.json" with { type: "json" };
import UneceGuestArrivalSchema from "../schemas/UneceGuestArrival.json" with { type: "json" };
import UneceGuestHealthIndicationSchema from "../schemas/UneceGuestHealthIndication.json" with { type: "json" };
import UneceGuestHealthIndicationTypeCodeListSchema from "../schemas/UneceGuestHealthIndicationTypeCodeList.json" with { type: "json" };
import UneceGuestPersonSchema from "../schemas/UneceGuestPerson.json" with { type: "json" };
import UneceHandlingInstructionsSchema from "../schemas/UneceHandlingInstructions.json" with { type: "json" };
import UneceHaulageInstructionsSchema from "../schemas/UneceHaulageInstructions.json" with { type: "json" };
import UneceHazardousMaterialSchema from "../schemas/UneceHazardousMaterial.json" with { type: "json" };
import UneceHeaderBalanceOutSchema from "../schemas/UneceHeaderBalanceOut.json" with { type: "json" };
import UneceHeaderTradeAgreementSchema from "../schemas/UneceHeaderTradeAgreement.json" with { type: "json" };
import UneceHeaderTradeDeliverySchema from "../schemas/UneceHeaderTradeDelivery.json" with { type: "json" };
import UneceHeaderTradeSettlementSchema from "../schemas/UneceHeaderTradeSettlement.json" with { type: "json" };
import UneceIdentifiedFaultSchema from "../schemas/UneceIdentifiedFault.json" with { type: "json" };
import UneceIllnessSchema from "../schemas/UneceIllness.json" with { type: "json" };
import UneceIndividualTTAnimalSchema from "../schemas/UneceIndividualTTAnimal.json" with { type: "json" };
import UneceInformationSourceSchema from "../schemas/UneceInformationSource.json" with { type: "json" };
import UneceIngredientRangeMeasurementSchema from "../schemas/UneceIngredientRangeMeasurement.json" with { type: "json" };
import UneceInspectionEventSchema from "../schemas/UneceInspectionEvent.json" with { type: "json" };
import UneceInspectionEventTypeCodeListSchema from "../schemas/UneceInspectionEventTypeCodeList.json" with { type: "json" };
import UneceInspectionInstructionsSchema from "../schemas/UneceInspectionInstructions.json" with { type: "json" };
import UneceInspectionNoteSchema from "../schemas/UneceInspectionNote.json" with { type: "json" };
import UneceInspectionPersonSchema from "../schemas/UneceInspectionPerson.json" with { type: "json" };
import UneceInspectionReferenceSchema from "../schemas/UneceInspectionReference.json" with { type: "json" };
import UneceInspectionResultSchema from "../schemas/UneceInspectionResult.json" with { type: "json" };
import UneceInspectionResultCharacteristicSchema from "../schemas/UneceInspectionResultCharacteristic.json" with { type: "json" };
import UneceInspectionStatusSchema from "../schemas/UneceInspectionStatus.json" with { type: "json" };
import UneceInstalmentPaymentSchema from "../schemas/UneceInstalmentPayment.json" with { type: "json" };
import UneceInstalmentPlanSchema from "../schemas/UneceInstalmentPlan.json" with { type: "json" };
import UneceInstructedTemperatureSchema from "../schemas/UneceInstructedTemperature.json" with { type: "json" };
import UneceInvoiceDocumentCodeListSchema from "../schemas/UneceInvoiceDocumentCodeList.json" with { type: "json" };
import UneceIOTDeviceSchema from "../schemas/UneceIOTDevice.json" with { type: "json" };
import UneceIOTDeviceTypeCodeListSchema from "../schemas/UneceIOTDeviceTypeCodeList.json" with { type: "json" };
import UneceIssueSchema from "../schemas/UneceIssue.json" with { type: "json" };
import UneceIssueTypeCodeListSchema from "../schemas/UneceIssueTypeCodeList.json" with { type: "json" };
import UneceKeywordSchema from "../schemas/UneceKeyword.json" with { type: "json" };
import UneceLaboratoryObservationAnalysisMethodSchema from "../schemas/UneceLaboratoryObservationAnalysisMethod.json" with { type: "json" };
import UneceLaboratoryObservationContactSchema from "../schemas/UneceLaboratoryObservationContact.json" with { type: "json" };
import UneceLaboratoryObservationInstructionsSchema from "../schemas/UneceLaboratoryObservationInstructions.json" with { type: "json" };
import UneceLaboratoryObservationNoteSchema from "../schemas/UneceLaboratoryObservationNote.json" with { type: "json" };
import UneceLaboratoryObservationPartySchema from "../schemas/UneceLaboratoryObservationParty.json" with { type: "json" };
import UneceLaboratoryObservationReferenceSchema from "../schemas/UneceLaboratoryObservationReference.json" with { type: "json" };
import UneceLanguageCodeListSchema from "../schemas/UneceLanguageCodeList.json" with { type: "json" };
import UneceLanguageIdSchema from "../schemas/UneceLanguageId.json" with { type: "json" };
import UneceLanguageProficiencySchema from "../schemas/UneceLanguageProficiency.json" with { type: "json" };
import UneceLegalOrganizationSchema from "../schemas/UneceLegalOrganization.json" with { type: "json" };
import UneceLegalOrganizationTypeCodeListSchema from "../schemas/UneceLegalOrganizationTypeCodeList.json" with { type: "json" };
import UneceLegalRegistrationSchema from "../schemas/UneceLegalRegistration.json" with { type: "json" };
import UneceLegalRegistrationTypeCodeListSchema from "../schemas/UneceLegalRegistrationTypeCodeList.json" with { type: "json" };
import UneceLicenceSchema from "../schemas/UneceLicence.json" with { type: "json" };
import UneceLicenceTypeCodeListSchema from "../schemas/UneceLicenceTypeCodeList.json" with { type: "json" };
import UneceLifetimeEndCostCodeListSchema from "../schemas/UneceLifetimeEndCostCodeList.json" with { type: "json" };
import UneceLinearRingSchema from "../schemas/UneceLinearRing.json" with { type: "json" };
import UneceLinearUnitMeasureCodeSchema from "../schemas/UneceLinearUnitMeasureCode.json" with { type: "json" };
import UneceLinearUnitMeasureTypeSchema from "../schemas/UneceLinearUnitMeasureType.json" with { type: "json" };
import UneceLineStatusCodeListSchema from "../schemas/UneceLineStatusCodeList.json" with { type: "json" };
import UneceLineTradeAgreementSchema from "../schemas/UneceLineTradeAgreement.json" with { type: "json" };
import UneceLineTradeDeliverySchema from "../schemas/UneceLineTradeDelivery.json" with { type: "json" };
import UneceLineTradeSettlementSchema from "../schemas/UneceLineTradeSettlement.json" with { type: "json" };
import UneceLineTradeTransactionSchema from "../schemas/UneceLineTradeTransaction.json" with { type: "json" };
import UneceLocationSchema from "../schemas/UneceLocation.json" with { type: "json" };
import UneceLocationFunctionCodeListSchema from "../schemas/UneceLocationFunctionCodeList.json" with { type: "json" };
import UneceLocationPartySchema from "../schemas/UneceLocationParty.json" with { type: "json" };
import UneceLocationPartyTypeCodeListSchema from "../schemas/UneceLocationPartyTypeCodeList.json" with { type: "json" };
import UneceLogisticsChargeCalculationBasisCodeListSchema from "../schemas/UneceLogisticsChargeCalculationBasisCodeList.json" with { type: "json" };
import UneceLogisticsLabelSchema from "../schemas/UneceLogisticsLabel.json" with { type: "json" };
import UneceLogisticsLocationSchema from "../schemas/UneceLogisticsLocation.json" with { type: "json" };
import UneceLogisticsPackagingSchema from "../schemas/UneceLogisticsPackaging.json" with { type: "json" };
import UneceLogisticsPackagingTypeCodeListSchema from "../schemas/UneceLogisticsPackagingTypeCodeList.json" with { type: "json" };
import UneceLogisticsStatusSchema from "../schemas/UneceLogisticsStatus.json" with { type: "json" };
import UneceLogisticsStatusCodeListSchema from "../schemas/UneceLogisticsStatusCodeList.json" with { type: "json" };
import UneceLogisticsTransportEquipmentSchema from "../schemas/UneceLogisticsTransportEquipment.json" with { type: "json" };
import UneceLogisticsTransportMeansSchema from "../schemas/UneceLogisticsTransportMeans.json" with { type: "json" };
import UneceMachineSchema from "../schemas/UneceMachine.json" with { type: "json" };
import UneceMachineTypeCodeListSchema from "../schemas/UneceMachineTypeCodeList.json" with { type: "json" };
import UneceMarketplaceSchema from "../schemas/UneceMarketplace.json" with { type: "json" };
import UneceMarkingSchema from "../schemas/UneceMarking.json" with { type: "json" };
import UneceMarkingInstructionCodeListSchema from "../schemas/UneceMarkingInstructionCodeList.json" with { type: "json" };
import UneceMDHHealthIndicationSchema from "../schemas/UneceMDHHealthIndication.json" with { type: "json" };
import UneceMDHHealthIndicationTypeCodeListSchema from "../schemas/UneceMDHHealthIndicationTypeCodeList.json" with { type: "json" };
import UneceMeasureCodeSchema from "../schemas/UneceMeasureCode.json" with { type: "json" };
import UneceMeasuredAttributeCodeListSchema from "../schemas/UneceMeasuredAttributeCodeList.json" with { type: "json" };
import UneceMeasurementSchema from "../schemas/UneceMeasurement.json" with { type: "json" };
import UneceMeasurementTypeCodeListSchema from "../schemas/UneceMeasurementTypeCodeList.json" with { type: "json" };
import UneceMeasureTypeSchema from "../schemas/UneceMeasureType.json" with { type: "json" };
import UneceMembershipSchema from "../schemas/UneceMembership.json" with { type: "json" };
import UneceMessageFunctionCodeListSchema from "../schemas/UneceMessageFunctionCodeList.json" with { type: "json" };
import UneceMetricCharacteristicSchema from "../schemas/UneceMetricCharacteristic.json" with { type: "json" };
import UneceMetricCharacteristicTypeCodeListSchema from "../schemas/UneceMetricCharacteristicTypeCodeList.json" with { type: "json" };
import UneceNegotiationContextSchema from "../schemas/UneceNegotiationContext.json" with { type: "json" };
import UneceNegotiationContextTypeCodeListSchema from "../schemas/UneceNegotiationContextTypeCodeList.json" with { type: "json" };
import UneceNegotiationExchangeSchema from "../schemas/UneceNegotiationExchange.json" with { type: "json" };
import UneceNoteSchema from "../schemas/UneceNote.json" with { type: "json" };
import UneceObjectSchema from "../schemas/UneceObject.json" with { type: "json" };
import UneceObjectTypeCodeListSchema from "../schemas/UneceObjectTypeCodeList.json" with { type: "json" };
import UneceObservationSchema from "../schemas/UneceObservation.json" with { type: "json" };
import UneceObservationObjectiveParameterSchema from "../schemas/UneceObservationObjectiveParameter.json" with { type: "json" };
import UneceObservationObjectiveParameterTypeCodeListSchema from "../schemas/UneceObservationObjectiveParameterTypeCodeList.json" with { type: "json" };
import UneceObservationResultSchema from "../schemas/UneceObservationResult.json" with { type: "json" };
import UneceObservationResultCharacteristicSchema from "../schemas/UneceObservationResultCharacteristic.json" with { type: "json" };
import UneceOperationalParameterSchema from "../schemas/UneceOperationalParameter.json" with { type: "json" };
import UneceOperationalParameterTypeCodeListSchema from "../schemas/UneceOperationalParameterTypeCodeList.json" with { type: "json" };
import UneceOrganizationalCertificateSchema from "../schemas/UneceOrganizationalCertificate.json" with { type: "json" };
import UneceOrganizationalCertificationSchema from "../schemas/UneceOrganizationalCertification.json" with { type: "json" };
import UneceOrganizationCharacteristicSchema from "../schemas/UneceOrganizationCharacteristic.json" with { type: "json" };
import UneceOrganizationCharacteristicTypeCodeListSchema from "../schemas/UneceOrganizationCharacteristicTypeCodeList.json" with { type: "json" };
import UneceOrganizationFunctionTypeCodeListSchema from "../schemas/UneceOrganizationFunctionTypeCodeList.json" with { type: "json" };
import UnecePackageSchema from "../schemas/UnecePackage.json" with { type: "json" };
import UnecePackageTypeCodeListSchema from "../schemas/UnecePackageTypeCodeList.json" with { type: "json" };
import UnecePackagingInstructionsSchema from "../schemas/UnecePackagingInstructions.json" with { type: "json" };
import UnecePackagingLevelCodeListSchema from "../schemas/UnecePackagingLevelCodeList.json" with { type: "json" };
import UnecePackagingMarkingCodeListSchema from "../schemas/UnecePackagingMarkingCodeList.json" with { type: "json" };
import UnecePairingSchema from "../schemas/UnecePairing.json" with { type: "json" };
import UnecePartyRoleCodeListSchema from "../schemas/UnecePartyRoleCodeList.json" with { type: "json" };
import UnecePartyTypeCodeListSchema from "../schemas/UnecePartyTypeCodeList.json" with { type: "json" };
import UnecePayloadSchema from "../schemas/UnecePayload.json" with { type: "json" };
import UnecePayloadInstanceSchema from "../schemas/UnecePayloadInstance.json" with { type: "json" };
import UnecePaymentBalanceOutSchema from "../schemas/UnecePaymentBalanceOut.json" with { type: "json" };
import UnecePaymentDiscountTermsSchema from "../schemas/UnecePaymentDiscountTerms.json" with { type: "json" };
import UnecePaymentFinancialAccountSchema from "../schemas/UnecePaymentFinancialAccount.json" with { type: "json" };
import UnecePaymentFinancialAccountTypeCodeListSchema from "../schemas/UnecePaymentFinancialAccountTypeCodeList.json" with { type: "json" };
import UnecePaymentFinancialInstitutionSchema from "../schemas/UnecePaymentFinancialInstitution.json" with { type: "json" };
import UnecePaymentFinancialInstitutionTypeCodeListSchema from "../schemas/UnecePaymentFinancialInstitutionTypeCodeList.json" with { type: "json" };
import UnecePaymentGuaranteeMeansCodeListSchema from "../schemas/UnecePaymentGuaranteeMeansCodeList.json" with { type: "json" };
import UnecePaymentMeansSchema from "../schemas/UnecePaymentMeans.json" with { type: "json" };
import UnecePaymentMeansChannelCodeListSchema from "../schemas/UnecePaymentMeansChannelCodeList.json" with { type: "json" };
import UnecePaymentMeansCodeListSchema from "../schemas/UnecePaymentMeansCodeList.json" with { type: "json" };
import UnecePaymentMethodCodeListSchema from "../schemas/UnecePaymentMethodCodeList.json" with { type: "json" };
import UnecePaymentPenaltyTermsSchema from "../schemas/UnecePaymentPenaltyTerms.json" with { type: "json" };
import UnecePaymentTermsSchema from "../schemas/UnecePaymentTerms.json" with { type: "json" };
import UnecePaymentTermsEventTimeReferenceCodeListSchema from "../schemas/UnecePaymentTermsEventTimeReferenceCodeList.json" with { type: "json" };
import UnecePaymentTermsIdSchema from "../schemas/UnecePaymentTermsId.json" with { type: "json" };
import UnecePaymentTermsTypeCodeListSchema from "../schemas/UnecePaymentTermsTypeCodeList.json" with { type: "json" };
import UnecePaymentTradeSettlementSchema from "../schemas/UnecePaymentTradeSettlement.json" with { type: "json" };
import UnecePaymentTradeSettlementTypeCodeListSchema from "../schemas/UnecePaymentTradeSettlementTypeCodeList.json" with { type: "json" };
import UnecePersonalEffectsSchema from "../schemas/UnecePersonalEffects.json" with { type: "json" };
import UnecePersonalEffectsTypeCodeListSchema from "../schemas/UnecePersonalEffectsTypeCodeList.json" with { type: "json" };
import UnecePersonIdentitySchema from "../schemas/UnecePersonIdentity.json" with { type: "json" };
import UnecePetAnimalSchema from "../schemas/UnecePetAnimal.json" with { type: "json" };
import UnecePictureSchema from "../schemas/UnecePicture.json" with { type: "json" };
import UnecePlotSchema from "../schemas/UnecePlot.json" with { type: "json" };
import UnecePolicySchema from "../schemas/UnecePolicy.json" with { type: "json" };
import UnecePolygonSchema from "../schemas/UnecePolygon.json" with { type: "json" };
import UnecePortMovementEventSchema from "../schemas/UnecePortMovementEvent.json" with { type: "json" };
import UnecePreferenceSchema from "../schemas/UnecePreference.json" with { type: "json" };
import UnecePreventiveActionSchema from "../schemas/UnecePreventiveAction.json" with { type: "json" };
import UnecePreventiveActionTypeCodeListSchema from "../schemas/UnecePreventiveActionTypeCodeList.json" with { type: "json" };
import UnecePriceTypeCodeListSchema from "../schemas/UnecePriceTypeCodeList.json" with { type: "json" };
import UnecePrintSchema from "../schemas/UnecePrint.json" with { type: "json" };
import UnecePrintTypeCodeListSchema from "../schemas/UnecePrintTypeCodeList.json" with { type: "json" };
import UnecePriorityDescriptionCodeListSchema from "../schemas/UnecePriorityDescriptionCodeList.json" with { type: "json" };
import UneceProcessCertificateSchema from "../schemas/UneceProcessCertificate.json" with { type: "json" };
import UneceProcessCertificationSchema from "../schemas/UneceProcessCertification.json" with { type: "json" };
import UneceProcessCharacteristicSchema from "../schemas/UneceProcessCharacteristic.json" with { type: "json" };
import UneceProcessTypeCodeListSchema from "../schemas/UneceProcessTypeCodeList.json" with { type: "json" };
import UneceProcessWorkItemSchema from "../schemas/UneceProcessWorkItem.json" with { type: "json" };
import UneceProcessWorkItemTypeCodeListSchema from "../schemas/UneceProcessWorkItemTypeCodeList.json" with { type: "json" };
import UneceProduceSchema from "../schemas/UneceProduce.json" with { type: "json" };
import UneceProduceTypeCodeListSchema from "../schemas/UneceProduceTypeCodeList.json" with { type: "json" };
import UneceProductSchema from "../schemas/UneceProduct.json" with { type: "json" };
import UneceProductBatchSchema from "../schemas/UneceProductBatch.json" with { type: "json" };
import UneceProductBatchCertificateSchema from "../schemas/UneceProductBatchCertificate.json" with { type: "json" };
import UneceProductBatchCertificationSchema from "../schemas/UneceProductBatchCertification.json" with { type: "json" };
import UneceProductBatchCharacteristicSchema from "../schemas/UneceProductBatchCharacteristic.json" with { type: "json" };
import UneceProductBatchCharacteristicTypeCodeListSchema from "../schemas/UneceProductBatchCharacteristicTypeCodeList.json" with { type: "json" };
import UneceProductBatchTypeCodeListSchema from "../schemas/UneceProductBatchTypeCodeList.json" with { type: "json" };
import UneceProductCertificateSchema from "../schemas/UneceProductCertificate.json" with { type: "json" };
import UneceProductCharacteristicSchema from "../schemas/UneceProductCharacteristic.json" with { type: "json" };
import UneceProductCharacteristicConditionSchema from "../schemas/UneceProductCharacteristicCondition.json" with { type: "json" };
import UneceProductCharacteristicConditionTypeCodeListSchema from "../schemas/UneceProductCharacteristicConditionTypeCodeList.json" with { type: "json" };
import UneceProductCharacteristicTypeCodeListSchema from "../schemas/UneceProductCharacteristicTypeCodeList.json" with { type: "json" };
import UneceProductFinishingTreatmentSchema from "../schemas/UneceProductFinishingTreatment.json" with { type: "json" };
import UneceProductFinishingTreatmentTypeCodeListSchema from "../schemas/UneceProductFinishingTreatmentTypeCodeList.json" with { type: "json" };
import UneceProductGroupSchema from "../schemas/UneceProductGroup.json" with { type: "json" };
import UneceProductHandlingProcessSchema from "../schemas/UneceProductHandlingProcess.json" with { type: "json" };
import UneceProductInstanceSchema from "../schemas/UneceProductInstance.json" with { type: "json" };
import UneceProductionSchema from "../schemas/UneceProduction.json" with { type: "json" };
import UneceProductionCycleSchema from "../schemas/UneceProductionCycle.json" with { type: "json" };
import UneceProductionDeviceSchema from "../schemas/UneceProductionDevice.json" with { type: "json" };
import UneceProductionDeviceTypeCodeListSchema from "../schemas/UneceProductionDeviceTypeCodeList.json" with { type: "json" };
import UneceProductionFacilitySchema from "../schemas/UneceProductionFacility.json" with { type: "json" };
import UneceProductionProcessSchema from "../schemas/UneceProductionProcess.json" with { type: "json" };
import UneceProductionUnitSchema from "../schemas/UneceProductionUnit.json" with { type: "json" };
import UneceProductionUnitTypeCodeListSchema from "../schemas/UneceProductionUnitTypeCodeList.json" with { type: "json" };
import UneceProductionWasteMaterialSchema from "../schemas/UneceProductionWasteMaterial.json" with { type: "json" };
import UneceProductionWasteMaterialComponentSchema from "../schemas/UneceProductionWasteMaterialComponent.json" with { type: "json" };
import UneceProductionWasteMaterialComponentTypeCodeListSchema from "../schemas/UneceProductionWasteMaterialComponentTypeCodeList.json" with { type: "json" };
import UneceProductionWasteMaterialTypeCodeListSchema from "../schemas/UneceProductionWasteMaterialTypeCodeList.json" with { type: "json" };
import UneceProductionWasteRecoveryDisposalProcessSchema from "../schemas/UneceProductionWasteRecoveryDisposalProcess.json" with { type: "json" };
import UneceProductLabelSchema from "../schemas/UneceProductLabel.json" with { type: "json" };
import UneceProjectSchema from "../schemas/UneceProject.json" with { type: "json" };
import UneceProjectTypeCodeListSchema from "../schemas/UneceProjectTypeCodeList.json" with { type: "json" };
import UneceProprietaryIdentitySchema from "../schemas/UneceProprietaryIdentity.json" with { type: "json" };
import UneceProtectionMeansSchema from "../schemas/UneceProtectionMeans.json" with { type: "json" };
import UneceQuantityAnalysisSchema from "../schemas/UneceQuantityAnalysis.json" with { type: "json" };
import UneceQuantityAnalysisTypeCodeListSchema from "../schemas/UneceQuantityAnalysisTypeCodeList.json" with { type: "json" };
import UneceQuantityCodeSchema from "../schemas/UneceQuantityCode.json" with { type: "json" };
import UneceQuantityTypeSchema from "../schemas/UneceQuantityType.json" with { type: "json" };
import UneceQuarantineInstructionsSchema from "../schemas/UneceQuarantineInstructions.json" with { type: "json" };
import UneceQuotationDocumentCodeListSchema from "../schemas/UneceQuotationDocumentCodeList.json" with { type: "json" };
import UneceRadioactiveIsotopeSchema from "../schemas/UneceRadioactiveIsotope.json" with { type: "json" };
import UneceRadioactiveMaterialSchema from "../schemas/UneceRadioactiveMaterial.json" with { type: "json" };
import UneceRadioactiveMaterialTypeCodeListSchema from "../schemas/UneceRadioactiveMaterialTypeCodeList.json" with { type: "json" };
import UneceRadionuclideSchema from "../schemas/UneceRadionuclide.json" with { type: "json" };
import UneceRangeSchema from "../schemas/UneceRange.json" with { type: "json" };
import UneceRangeTypeCodeListSchema from "../schemas/UneceRangeTypeCodeList.json" with { type: "json" };
import UneceRecordedStatusSchema from "../schemas/UneceRecordedStatus.json" with { type: "json" };
import UneceReferenceCodeListSchema from "../schemas/UneceReferenceCodeList.json" with { type: "json" };
import UneceReferencePriceSchema from "../schemas/UneceReferencePrice.json" with { type: "json" };
import UneceRefundMethodCodeListSchema from "../schemas/UneceRefundMethodCodeList.json" with { type: "json" };
import UneceRegisteredTaxSchema from "../schemas/UneceRegisteredTax.json" with { type: "json" };
import UneceRegulatedGoodsSchema from "../schemas/UneceRegulatedGoods.json" with { type: "json" };
import UneceRegulatoryProcedureSchema from "../schemas/UneceRegulatoryProcedure.json" with { type: "json" };
import UneceRemittanceDocumentCodeListSchema from "../schemas/UneceRemittanceDocumentCodeList.json" with { type: "json" };
import UneceRepresentativePersonSchema from "../schemas/UneceRepresentativePerson.json" with { type: "json" };
import UneceRequestingPartySchema from "../schemas/UneceRequestingParty.json" with { type: "json" };
import UneceRequirementSchema from "../schemas/UneceRequirement.json" with { type: "json" };
import UneceRequirementTypeCodeListSchema from "../schemas/UneceRequirementTypeCodeList.json" with { type: "json" };
import UneceResponseSchema from "../schemas/UneceResponse.json" with { type: "json" };
import UneceResponseTypeCodeListSchema from "../schemas/UneceResponseTypeCodeList.json" with { type: "json" };
import UneceResponsibleGovernmentAgencyCodeListSchema from "../schemas/UneceResponsibleGovernmentAgencyCodeList.json" with { type: "json" };
import UneceResponsibleGovernmentAgencyInvolvementCodeListSchema from "../schemas/UneceResponsibleGovernmentAgencyInvolvementCodeList.json" with { type: "json" };
import UneceReturnableAssetInstructionsSchema from "../schemas/UneceReturnableAssetInstructions.json" with { type: "json" };
import UneceRiskAnalysisResultSchema from "../schemas/UneceRiskAnalysisResult.json" with { type: "json" };
import UneceSanitaryMeasureSchema from "../schemas/UneceSanitaryMeasure.json" with { type: "json" };
import UneceSanitaryMeasureTypeCodeListSchema from "../schemas/UneceSanitaryMeasureTypeCodeList.json" with { type: "json" };
import UneceScenarioTypeCodeListSchema from "../schemas/UneceScenarioTypeCodeList.json" with { type: "json" };
import UneceScheduleSchema from "../schemas/UneceSchedule.json" with { type: "json" };
import UneceScheduleTypeCodeListSchema from "../schemas/UneceScheduleTypeCodeList.json" with { type: "json" };
import UneceSchedulingDocumentCodeListSchema from "../schemas/UneceSchedulingDocumentCodeList.json" with { type: "json" };
import UneceSealSchema from "../schemas/UneceSeal.json" with { type: "json" };
import UneceSealConditionCodeListSchema from "../schemas/UneceSealConditionCodeList.json" with { type: "json" };
import UneceSealingPartyRoleCodeListSchema from "../schemas/UneceSealingPartyRoleCodeList.json" with { type: "json" };
import UneceSectionSchema from "../schemas/UneceSection.json" with { type: "json" };
import UneceSecurityTagSchema from "../schemas/UneceSecurityTag.json" with { type: "json" };
import UneceSecurityTagTypeCodeListSchema from "../schemas/UneceSecurityTagTypeCodeList.json" with { type: "json" };
import UneceSegmentSchema from "../schemas/UneceSegment.json" with { type: "json" };
import UneceSegmentTypeCodeListSchema from "../schemas/UneceSegmentTypeCodeList.json" with { type: "json" };
import UneceSensorSchema from "../schemas/UneceSensor.json" with { type: "json" };
import UneceSensorTypeCodeListSchema from "../schemas/UneceSensorTypeCodeList.json" with { type: "json" };
import UneceServiceSchema from "../schemas/UneceService.json" with { type: "json" };
import UneceServiceChargeSchema from "../schemas/UneceServiceCharge.json" with { type: "json" };
import UneceShippingMarksSchema from "../schemas/UneceShippingMarks.json" with { type: "json" };
import UneceSoftwareUserTypeCodeListSchema from "../schemas/UneceSoftwareUserTypeCodeList.json" with { type: "json" };
import UneceSourceSchema from "../schemas/UneceSource.json" with { type: "json" };
import UneceSpatialDimensionSchema from "../schemas/UneceSpatialDimension.json" with { type: "json" };
import UneceSpecialQuerySchema from "../schemas/UneceSpecialQuery.json" with { type: "json" };
import UneceSpeciesTTAnimalSchema from "../schemas/UneceSpeciesTTAnimal.json" with { type: "json" };
import UneceSpecificationQuerySchema from "../schemas/UneceSpecificationQuery.json" with { type: "json" };
import UneceSpecificationQueryTypeCodeListSchema from "../schemas/UneceSpecificationQueryTypeCodeList.json" with { type: "json" };
import UneceSpecifiedActionSchema from "../schemas/UneceSpecifiedAction.json" with { type: "json" };
import UneceSpecifiedActionTypeCodeListSchema from "../schemas/UneceSpecifiedActionTypeCodeList.json" with { type: "json" };
import UneceSpecifiedCertificateSchema from "../schemas/UneceSpecifiedCertificate.json" with { type: "json" };
import UneceSpecifiedCertificationSchema from "../schemas/UneceSpecifiedCertification.json" with { type: "json" };
import UneceSpecifiedChemicalTreatmentSchema from "../schemas/UneceSpecifiedChemicalTreatment.json" with { type: "json" };
import UneceSpecifiedChemicalTreatmentTypeCodeListSchema from "../schemas/UneceSpecifiedChemicalTreatmentTypeCodeList.json" with { type: "json" };
import UneceSpecifiedConditionSchema from "../schemas/UneceSpecifiedCondition.json" with { type: "json" };
import UneceSpecifiedDeclarationSchema from "../schemas/UneceSpecifiedDeclaration.json" with { type: "json" };
import UneceSpecifiedDeclarationTypeCodeListSchema from "../schemas/UneceSpecifiedDeclarationTypeCodeList.json" with { type: "json" };
import UneceSpecifiedFaultSchema from "../schemas/UneceSpecifiedFault.json" with { type: "json" };
import UneceSpecifiedFaultTypeCodeListSchema from "../schemas/UneceSpecifiedFaultTypeCodeList.json" with { type: "json" };
import UneceSpecifiedFeatureSchema from "../schemas/UneceSpecifiedFeature.json" with { type: "json" };
import UneceSpecifiedFeatureTypeCodeListSchema from "../schemas/UneceSpecifiedFeatureTypeCodeList.json" with { type: "json" };
import UneceSpecifiedInspectionSchema from "../schemas/UneceSpecifiedInspection.json" with { type: "json" };
import UneceSpecifiedInspectionTypeCodeListSchema from "../schemas/UneceSpecifiedInspectionTypeCodeList.json" with { type: "json" };
import UneceSpecifiedLocationSchema from "../schemas/UneceSpecifiedLocation.json" with { type: "json" };
import UneceSpecifiedMaterialSchema from "../schemas/UneceSpecifiedMaterial.json" with { type: "json" };
import UneceSpecifiedMaterialTypeCodeListSchema from "../schemas/UneceSpecifiedMaterialTypeCodeList.json" with { type: "json" };
import UneceSpecifiedMethodSchema from "../schemas/UneceSpecifiedMethod.json" with { type: "json" };
import UneceSpecifiedNoteSchema from "../schemas/UneceSpecifiedNote.json" with { type: "json" };
import UneceSpecifiedParameterSchema from "../schemas/UneceSpecifiedParameter.json" with { type: "json" };
import UneceSpecifiedParameterTypeCodeListSchema from "../schemas/UneceSpecifiedParameterTypeCodeList.json" with { type: "json" };
import UneceSpecifiedPeriodSchema from "../schemas/UneceSpecifiedPeriod.json" with { type: "json" };
import UneceSpecifiedPeriodTypeCodeListSchema from "../schemas/UneceSpecifiedPeriodTypeCodeList.json" with { type: "json" };
import UneceSpecifiedQualificationSchema from "../schemas/UneceSpecifiedQualification.json" with { type: "json" };
import UneceSpecifiedRouteSchema from "../schemas/UneceSpecifiedRoute.json" with { type: "json" };
import UneceSpecifiedTemperatureSchema from "../schemas/UneceSpecifiedTemperature.json" with { type: "json" };
import UneceStandardSchema from "../schemas/UneceStandard.json" with { type: "json" };
import UneceStandardTypeCodeListSchema from "../schemas/UneceStandardTypeCodeList.json" with { type: "json" };
import UneceStatusCodeListSchema from "../schemas/UneceStatusCodeList.json" with { type: "json" };
import UneceStoresItemInventorySchema from "../schemas/UneceStoresItemInventory.json" with { type: "json" };
import UneceStoresItemInventoryTypeCodeListSchema from "../schemas/UneceStoresItemInventoryTypeCodeList.json" with { type: "json" };
import UneceStowawaySchema from "../schemas/UneceStowaway.json" with { type: "json" };
import UneceSubjectCodeListSchema from "../schemas/UneceSubjectCodeList.json" with { type: "json" };
import UneceSubordinateLineTradeAgreementSchema from "../schemas/UneceSubordinateLineTradeAgreement.json" with { type: "json" };
import UneceSubordinateLineTradeDeliverySchema from "../schemas/UneceSubordinateLineTradeDelivery.json" with { type: "json" };
import UneceSubordinateLineTradeSettlementSchema from "../schemas/UneceSubordinateLineTradeSettlement.json" with { type: "json" };
import UneceSubordinateLocationSchema from "../schemas/UneceSubordinateLocation.json" with { type: "json" };
import UneceSubordinateSubordinateLocationSchema from "../schemas/UneceSubordinateSubordinateLocation.json" with { type: "json" };
import UneceSubordinateTradeLineItemSchema from "../schemas/UneceSubordinateTradeLineItem.json" with { type: "json" };
import UneceSupplyChainEventSchema from "../schemas/UneceSupplyChainEvent.json" with { type: "json" };
import UneceSupplyChainEventTypeCodeListSchema from "../schemas/UneceSupplyChainEventTypeCodeList.json" with { type: "json" };
import UneceSupplyChainInventorySchema from "../schemas/UneceSupplyChainInventory.json" with { type: "json" };
import UneceSupplyChainPackagingSchema from "../schemas/UneceSupplyChainPackaging.json" with { type: "json" };
import UneceSupplyChainReferenceSchema from "../schemas/UneceSupplyChainReference.json" with { type: "json" };
import UneceSupplyChainReferenceTypeCodeListSchema from "../schemas/UneceSupplyChainReferenceTypeCodeList.json" with { type: "json" };
import UneceSupplyChainTradeLineItemSchema from "../schemas/UneceSupplyChainTradeLineItem.json" with { type: "json" };
import UneceSupplyChainTradeLineItemTypeCodeListSchema from "../schemas/UneceSupplyChainTradeLineItemTypeCodeList.json" with { type: "json" };
import UneceSupplyChainTradeTransactionSchema from "../schemas/UneceSupplyChainTradeTransaction.json" with { type: "json" };
import UneceSupplyChainTradeTransactionTypeCodeListSchema from "../schemas/UneceSupplyChainTradeTransactionTypeCodeList.json" with { type: "json" };
import UneceSupplyPlanSchema from "../schemas/UneceSupplyPlan.json" with { type: "json" };
import UneceSupplyPlanTypeCodeListSchema from "../schemas/UneceSupplyPlanTypeCodeList.json" with { type: "json" };
import UneceSustainabilityCharacteristicSchema from "../schemas/UneceSustainabilityCharacteristic.json" with { type: "json" };
import UneceSustainabilityCharacteristicTypeCodeListSchema from "../schemas/UneceSustainabilityCharacteristicTypeCodeList.json" with { type: "json" };
import UneceSustainabilityInspectionSchema from "../schemas/UneceSustainabilityInspection.json" with { type: "json" };
import UneceSustainabilityInspectionTypeCodeListSchema from "../schemas/UneceSustainabilityInspectionTypeCodeList.json" with { type: "json" };
import UneceTaxCategoryCodeListSchema from "../schemas/UneceTaxCategoryCodeList.json" with { type: "json" };
import UneceTaxExemptionReasonCodeListSchema from "../schemas/UneceTaxExemptionReasonCodeList.json" with { type: "json" };
import UneceTaxRegistrationSchema from "../schemas/UneceTaxRegistration.json" with { type: "json" };
import UneceTaxTypeCodeListSchema from "../schemas/UneceTaxTypeCodeList.json" with { type: "json" };
import UneceTechnicalCharacteristicSchema from "../schemas/UneceTechnicalCharacteristic.json" with { type: "json" };
import UneceTechnicalCharacteristicTypeCodeListSchema from "../schemas/UneceTechnicalCharacteristicTypeCodeList.json" with { type: "json" };
import UneceTemperatureSettingInstructionsSchema from "../schemas/UneceTemperatureSettingInstructions.json" with { type: "json" };
import UneceTemperatureTypeCodeListSchema from "../schemas/UneceTemperatureTypeCodeList.json" with { type: "json" };
import UneceTemperatureUnitMeasureCodeSchema from "../schemas/UneceTemperatureUnitMeasureCode.json" with { type: "json" };
import UneceTemperatureUnitMeasureTypeSchema from "../schemas/UneceTemperatureUnitMeasureType.json" with { type: "json" };
import UneceTestSpecificationReportSchema from "../schemas/UneceTestSpecificationReport.json" with { type: "json" };
import UneceTimeReferenceCodeListSchema from "../schemas/UneceTimeReferenceCodeList.json" with { type: "json" };
import UneceToleranceSchema from "../schemas/UneceTolerance.json" with { type: "json" };
import UneceTradeAddressSchema from "../schemas/UneceTradeAddress.json" with { type: "json" };
import UneceTradeAllowanceChargeSchema from "../schemas/UneceTradeAllowanceCharge.json" with { type: "json" };
import UneceTradeContactSchema from "../schemas/UneceTradeContact.json" with { type: "json" };
import UneceTradeLocationSchema from "../schemas/UneceTradeLocation.json" with { type: "json" };
import UneceTradePartySchema from "../schemas/UneceTradeParty.json" with { type: "json" };
import UneceTradePriceSchema from "../schemas/UneceTradePrice.json" with { type: "json" };
import UneceTradeProductSchema from "../schemas/UneceTradeProduct.json" with { type: "json" };
import UneceTradeProductCertificationSchema from "../schemas/UneceTradeProductCertification.json" with { type: "json" };
import UneceTradeProductFeatureSchema from "../schemas/UneceTradeProductFeature.json" with { type: "json" };
import UneceTradeProductFeatureTypeCodeListSchema from "../schemas/UneceTradeProductFeatureTypeCodeList.json" with { type: "json" };
import UneceTradeProductTypeCodeListSchema from "../schemas/UneceTradeProductTypeCodeList.json" with { type: "json" };
import UneceTradeSettlementHeaderMonetarySummationSchema from "../schemas/UneceTradeSettlementHeaderMonetarySummation.json" with { type: "json" };
import UneceTradeSettlementLineMonetarySummationSchema from "../schemas/UneceTradeSettlementLineMonetarySummation.json" with { type: "json" };
import UneceTradeSettlementMonetarySummationSchema from "../schemas/UneceTradeSettlementMonetarySummation.json" with { type: "json" };
import UneceTradeSettlementPaymentSchema from "../schemas/UneceTradeSettlementPayment.json" with { type: "json" };
import UneceTradeSettlementPaymentMonetarySummationSchema from "../schemas/UneceTradeSettlementPaymentMonetarySummation.json" with { type: "json" };
import UneceTradeTaxSchema from "../schemas/UneceTradeTax.json" with { type: "json" };
import UneceTransportationHealthSchema from "../schemas/UneceTransportationHealth.json" with { type: "json" };
import UneceTransportationWasteMaterialSchema from "../schemas/UneceTransportationWasteMaterial.json" with { type: "json" };
import UneceTransportationWasteMaterialComponentSchema from "../schemas/UneceTransportationWasteMaterialComponent.json" with { type: "json" };
import UneceTransportationWasteMaterialComponentTypeCodeListSchema from "../schemas/UneceTransportationWasteMaterialComponentTypeCodeList.json" with { type: "json" };
import UneceTransportationWasteMaterialTypeCodeListSchema from "../schemas/UneceTransportationWasteMaterialTypeCodeList.json" with { type: "json" };
import UneceTransportationWasteRecoveryDisposalProcessSchema from "../schemas/UneceTransportationWasteRecoveryDisposalProcess.json" with { type: "json" };
import UneceTransportContractMovementCodeListSchema from "../schemas/UneceTransportContractMovementCodeList.json" with { type: "json" };
import UneceTransportEquipmentCategoryCodeListSchema from "../schemas/UneceTransportEquipmentCategoryCodeList.json" with { type: "json" };
import UneceTransportEquipmentFullnessCodeListSchema from "../schemas/UneceTransportEquipmentFullnessCodeList.json" with { type: "json" };
import UneceTransportEquipmentHaulageArrangementsCodeListSchema from "../schemas/UneceTransportEquipmentHaulageArrangementsCodeList.json" with { type: "json" };
import UneceTransportEquipmentLegalStatusCodeListSchema from "../schemas/UneceTransportEquipmentLegalStatusCodeList.json" with { type: "json" };
import UneceTransportEquipmentMovementStatusCodeListSchema from "../schemas/UneceTransportEquipmentMovementStatusCodeList.json" with { type: "json" };
import UneceTransportEquipmentOperationalStatusCodeListSchema from "../schemas/UneceTransportEquipmentOperationalStatusCodeList.json" with { type: "json" };
import UneceTransportEquipmentSizeTypeCodeListSchema from "../schemas/UneceTransportEquipmentSizeTypeCodeList.json" with { type: "json" };
import UneceTransportEquipmentSupplierPartyRoleCodeListSchema from "../schemas/UneceTransportEquipmentSupplierPartyRoleCodeList.json" with { type: "json" };
import UneceTransportEventSchema from "../schemas/UneceTransportEvent.json" with { type: "json" };
import UneceTransportEventTypeCodeListSchema from "../schemas/UneceTransportEventTypeCodeList.json" with { type: "json" };
import UneceTransportInstructionsSchema from "../schemas/UneceTransportInstructions.json" with { type: "json" };
import UneceTransportMeansSchema from "../schemas/UneceTransportMeans.json" with { type: "json" };
import UneceTransportMeansDirectionCodeListSchema from "../schemas/UneceTransportMeansDirectionCodeList.json" with { type: "json" };
import UneceTransportMeansTypeCodeListSchema from "../schemas/UneceTransportMeansTypeCodeList.json" with { type: "json" };
import UneceTransportModeCodeListSchema from "../schemas/UneceTransportModeCodeList.json" with { type: "json" };
import UneceTransportMovementSchema from "../schemas/UneceTransportMovement.json" with { type: "json" };
import UneceTransportMovementStageCodeListSchema from "../schemas/UneceTransportMovementStageCodeList.json" with { type: "json" };
import UneceTransportMovementTypeCodeListSchema from "../schemas/UneceTransportMovementTypeCodeList.json" with { type: "json" };
import UneceTransportPersonSchema from "../schemas/UneceTransportPerson.json" with { type: "json" };
import UneceTransportRouteSchema from "../schemas/UneceTransportRoute.json" with { type: "json" };
import UneceTransportServiceCategoryCodeListSchema from "../schemas/UneceTransportServiceCategoryCodeList.json" with { type: "json" };
import UneceTransportServiceConditionCodeListSchema from "../schemas/UneceTransportServiceConditionCodeList.json" with { type: "json" };
import UneceTransportServiceLocationSchema from "../schemas/UneceTransportServiceLocation.json" with { type: "json" };
import UneceTransportServicePaymentArrangementCodeListSchema from "../schemas/UneceTransportServicePaymentArrangementCodeList.json" with { type: "json" };
import UneceTransportServicePriorityCodeListSchema from "../schemas/UneceTransportServicePriorityCodeList.json" with { type: "json" };
import UneceTransportServiceRequirementCodeListSchema from "../schemas/UneceTransportServiceRequirementCodeList.json" with { type: "json" };
import UneceTransportSettingTemperatureSchema from "../schemas/UneceTransportSettingTemperature.json" with { type: "json" };
import UneceTTAggregationEventSchema from "../schemas/UneceTTAggregationEvent.json" with { type: "json" };
import UneceTTAnimalSchema from "../schemas/UneceTTAnimal.json" with { type: "json" };
import UneceTTExchangedDocumentSchema from "../schemas/UneceTTExchangedDocument.json" with { type: "json" };
import UneceTTLocationSchema from "../schemas/UneceTTLocation.json" with { type: "json" };
import UneceTTObjectEventSchema from "../schemas/UneceTTObjectEvent.json" with { type: "json" };
import UneceTTPartySchema from "../schemas/UneceTTParty.json" with { type: "json" };
import UneceTTTradeTransactionSchema from "../schemas/UneceTTTradeTransaction.json" with { type: "json" };
import UneceTTTransactionEventSchema from "../schemas/UneceTTTransactionEvent.json" with { type: "json" };
import UneceTTTransformationEventSchema from "../schemas/UneceTTTransformationEvent.json" with { type: "json" };
import UneceUnitMeasureCodeSchema from "../schemas/UneceUnitMeasureCode.json" with { type: "json" };
import UneceUnitMeasureTypeSchema from "../schemas/UneceUnitMeasureType.json" with { type: "json" };
import UneceUsageConditionSchema from "../schemas/UneceUsageCondition.json" with { type: "json" };
import UneceValidationDocumentStatusCodeListSchema from "../schemas/UneceValidationDocumentStatusCodeList.json" with { type: "json" };
import UneceValidationStatusSchema from "../schemas/UneceValidationStatus.json" with { type: "json" };
import UneceVersionSchema from "../schemas/UneceVersion.json" with { type: "json" };
import UneceVolumeUnitMeasureCodeSchema from "../schemas/UneceVolumeUnitMeasureCode.json" with { type: "json" };
import UneceVolumeUnitMeasureTypeSchema from "../schemas/UneceVolumeUnitMeasureType.json" with { type: "json" };
import UneceVoucherSchema from "../schemas/UneceVoucher.json" with { type: "json" };
import UneceVoucherTypeCodeListSchema from "../schemas/UneceVoucherTypeCodeList.json" with { type: "json" };
import UneceWasteMaterialRecoveryDisposalProcessSchema from "../schemas/UneceWasteMaterialRecoveryDisposalProcess.json" with { type: "json" };
import UneceWasteOriginProcessSchema from "../schemas/UneceWasteOriginProcess.json" with { type: "json" };
import UneceWeightUnitMeasureCodeSchema from "../schemas/UneceWeightUnitMeasureCode.json" with { type: "json" };
import UneceWeightUnitMeasureTypeSchema from "../schemas/UneceWeightUnitMeasureType.json" with { type: "json" };
import UneceWorkflowObjectSchema from "../schemas/UneceWorkflowObject.json" with { type: "json" };
import UneceWorkflowStatusCodeListSchema from "../schemas/UneceWorkflowStatusCodeList.json" with { type: "json" };
import UneceWorkItemDimensionSchema from "../schemas/UneceWorkItemDimension.json" with { type: "json" };
import UneceXHEContextSchema from "../schemas/UneceXHEContext.json" with { type: "json" };
import UneceXHEDocumentSchema from "../schemas/UneceXHEDocument.json" with { type: "json" };
import UneceXHEIdentitySchema from "../schemas/UneceXHEIdentity.json" with { type: "json" };
import UneceXHEParameterSchema from "../schemas/UneceXHEParameter.json" with { type: "json" };
import UneceXHEParameterTypeCodeListSchema from "../schemas/UneceXHEParameterTypeCodeList.json" with { type: "json" };
import UneceXHEPartySchema from "../schemas/UneceXHEParty.json" with { type: "json" };
import UneceXHEReferenceSchema from "../schemas/UneceXHEReference.json" with { type: "json" };

/**
 * Handle all the data types for UN/CEFACT.
 */
export class UneceDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https:\/\/vocabulary\.uncefact\.org\/?/,
			UneceContexts.JsonLdContext
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();

		const types = [
			{
				type: UneceTypes.AcademicQualification,
				schema: UneceAcademicQualificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceAcademicQualification
			},
			{
				type: UneceTypes.AccessRightsTypeCodeList,
				schema: UneceAccessRightsTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccessRightsTypeCodeList
			},
			{
				type: UneceTypes.AccountingAccount,
				schema: UneceAccountingAccountSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAccount
			},
			{
				type: UneceTypes.AccountingAccountBalanceReopeningTypeCodeList,
				schema: UneceAccountingAccountBalanceReopeningTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAccountBalanceReopeningTypeCodeList
			},
			{
				type: UneceTypes.AccountingAccountClassificationCodeList,
				schema: UneceAccountingAccountClassificationCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAccountClassificationCodeList
			},
			{
				type: UneceTypes.AccountingAccountNatureTypeCodeList,
				schema: UneceAccountingAccountNatureTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAccountNatureTypeCodeList
			},
			{
				type: UneceTypes.AccountingAccountStatusCodeList,
				schema: UneceAccountingAccountStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAccountStatusCodeList
			},
			{
				type: UneceTypes.AccountingAccountTypeCodeList,
				schema: UneceAccountingAccountTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAccountTypeCodeList
			},
			{
				type: UneceTypes.AccountingAmountQualifierCodeList,
				schema: UneceAccountingAmountQualifierCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAmountQualifierCodeList
			},
			{
				type: UneceTypes.AccountingAmountTypeCodeList,
				schema: UneceAccountingAmountTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingAmountTypeCodeList
			},
			{
				type: UneceTypes.AccountingContactCodeList,
				schema: UneceAccountingContactCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingContactCodeList
			},
			{
				type: UneceTypes.AccountingDebitCreditStatusCodeList,
				schema: UneceAccountingDebitCreditStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingDebitCreditStatusCodeList
			},
			{
				type: UneceTypes.AccountingDocumentCodeList,
				schema: UneceAccountingDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingDocumentCodeList
			},
			{
				type: UneceTypes.AccountingDocumentTypeCodeList,
				schema: UneceAccountingDocumentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingDocumentTypeCodeList
			},
			{
				type: UneceTypes.AccountingEntryCategoryCodeList,
				schema: UneceAccountingEntryCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingEntryCategoryCodeList
			},
			{
				type: UneceTypes.AccountingEntryLineCategoryCodeList,
				schema: UneceAccountingEntryLineCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingEntryLineCategoryCodeList
			},
			{
				type: UneceTypes.AccountingEntryLineSourceCodeList,
				schema: UneceAccountingEntryLineSourceCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingEntryLineSourceCodeList
			},
			{
				type: UneceTypes.AccountingEntryProcessingCodeList,
				schema: UneceAccountingEntryProcessingCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingEntryProcessingCodeList
			},
			{
				type: UneceTypes.AccountingJournalCategoryCodeList,
				schema: UneceAccountingJournalCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingJournalCategoryCodeList
			},
			{
				type: UneceTypes.AccountingJournalCodeList,
				schema: UneceAccountingJournalCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingJournalCodeList
			},
			{
				type: UneceTypes.AccountingPeriodFunctionCodeList,
				schema: UneceAccountingPeriodFunctionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingPeriodFunctionCodeList
			},
			{
				type: UneceTypes.AccountingPerquisiteCodeList,
				schema: UneceAccountingPerquisiteCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingPerquisiteCodeList
			},
			{
				type: UneceTypes.AccountingVoucherMediumCodeList,
				schema: UneceAccountingVoucherMediumCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccountingVoucherMediumCodeList
			},
			{
				type: UneceTypes.Accreditation,
				schema: UneceAccreditationSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccreditation
			},
			{
				type: UneceTypes.AccreditationTypeCodeList,
				schema: UneceAccreditationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAccreditationTypeCodeList
			},
			{
				type: UneceTypes.AcknowledgementCodeList,
				schema: UneceAcknowledgementCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAcknowledgementCodeList
			},
			{
				type: UneceTypes.AcknowledgementDocument,
				schema: UneceAcknowledgementDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceAcknowledgementDocument
			},
			{
				type: UneceTypes.AdditionalPostponementCodeList,
				schema: UneceAdditionalPostponementCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAdditionalPostponementCodeList
			},
			{
				type: UneceTypes.AddressFormatTypeCodeList,
				schema: UneceAddressFormatTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAddressFormatTypeCodeList
			},
			{
				type: UneceTypes.AddressTypeCodeList,
				schema: UneceAddressTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAddressTypeCodeList
			},
			{
				type: UneceTypes.AdjustmentReasonCodeList,
				schema: UneceAdjustmentReasonCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAdjustmentReasonCodeList
			},
			{
				type: UneceTypes.AdvancePayment,
				schema: UneceAdvancePaymentSchema,
				compiledValidator: CompiledValidators.CompiledUneceAdvancePayment
			},
			{
				type: UneceTypes.AgriculturalApplication,
				schema: UneceAgriculturalApplicationSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalApplication
			},
			{
				type: UneceTypes.AgriculturalCertificate,
				schema: UneceAgriculturalCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalCertificate
			},
			{
				type: UneceTypes.AgriculturalCharacteristic,
				schema: UneceAgriculturalCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalCharacteristic
			},
			{
				type: UneceTypes.AgriculturalCharacteristicTypeCodeList,
				schema: UneceAgriculturalCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.AgriculturalProcess,
				schema: UneceAgriculturalProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalProcess
			},
			{
				type: UneceTypes.AgriculturalProcessTypeCodeList,
				schema: UneceAgriculturalProcessTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalProcessTypeCodeList
			},
			{
				type: UneceTypes.AgriculturalZoneArea,
				schema: UneceAgriculturalZoneAreaSchema,
				compiledValidator: CompiledValidators.CompiledUneceAgriculturalZoneArea
			},
			{
				type: UneceTypes.AirFlowUnitMeasureCode,
				schema: UneceAirFlowUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceAirFlowUnitMeasureCode
			},
			{
				type: UneceTypes.AirFlowUnitMeasureType,
				schema: UneceAirFlowUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceAirFlowUnitMeasureType
			},
			{
				type: UneceTypes.Allergy,
				schema: UneceAllergySchema,
				compiledValidator: CompiledValidators.CompiledUneceAllergy
			},
			{
				type: UneceTypes.AllergyTypeCodeList,
				schema: UneceAllergyTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAllergyTypeCodeList
			},
			{
				type: UneceTypes.AllowanceChargeIdCodeList,
				schema: UneceAllowanceChargeIdCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAllowanceChargeIdCodeList
			},
			{
				type: UneceTypes.AllowanceChargeReasonCodeList,
				schema: UneceAllowanceChargeReasonCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAllowanceChargeReasonCodeList
			},
			{
				type: UneceTypes.AlternateCurrencyAmountTypeCodeList,
				schema: UneceAlternateCurrencyAmountTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAlternateCurrencyAmountTypeCodeList
			},
			{
				type: UneceTypes.AmortizationMethodCodeList,
				schema: UneceAmortizationMethodCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAmortizationMethodCodeList
			},
			{
				type: UneceTypes.AmountCurrency,
				schema: UneceAmountCurrencySchema,
				compiledValidator: CompiledValidators.CompiledUneceAmountCurrency
			},
			{
				type: UneceTypes.AmountType,
				schema: UneceAmountTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceAmountType
			},
			{
				type: UneceTypes.AmountWeightTypeCodeList,
				schema: UneceAmountWeightTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAmountWeightTypeCodeList
			},
			{
				type: UneceTypes.AnimalBatch,
				schema: UneceAnimalBatchSchema,
				compiledValidator: CompiledValidators.CompiledUneceAnimalBatch
			},
			{
				type: UneceTypes.AnimalCertificate,
				schema: UneceAnimalCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceAnimalCertificate
			},
			{
				type: UneceTypes.AnimalCertification,
				schema: UneceAnimalCertificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceAnimalCertification
			},
			{
				type: UneceTypes.AnimalHoldingEvent,
				schema: UneceAnimalHoldingEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceAnimalHoldingEvent
			},
			{
				type: UneceTypes.AnimalHoldingEventTypeCodeList,
				schema: UneceAnimalHoldingEventTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAnimalHoldingEventTypeCodeList
			},
			{
				type: UneceTypes.AnimalIdentity,
				schema: UneceAnimalIdentitySchema,
				compiledValidator: CompiledValidators.CompiledUneceAnimalIdentity
			},
			{
				type: UneceTypes.AppliedAllowanceCharge,
				schema: UneceAppliedAllowanceChargeSchema,
				compiledValidator: CompiledValidators.CompiledUneceAppliedAllowanceCharge
			},
			{
				type: UneceTypes.AppliedChemicalTreatment,
				schema: UneceAppliedChemicalTreatmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceAppliedChemicalTreatment
			},
			{
				type: UneceTypes.AppliedTax,
				schema: UneceAppliedTaxSchema,
				compiledValidator: CompiledValidators.CompiledUneceAppliedTax
			},
			{
				type: UneceTypes.Area,
				schema: UneceAreaSchema,
				compiledValidator: CompiledValidators.CompiledUneceArea
			},
			{
				type: UneceTypes.Assertion,
				schema: UneceAssertionSchema,
				compiledValidator: CompiledValidators.CompiledUneceAssertion
			},
			{
				type: UneceTypes.Assessment,
				schema: UneceAssessmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceAssessment
			},
			{
				type: UneceTypes.AssessmentTypeCodeList,
				schema: UneceAssessmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAssessmentTypeCodeList
			},
			{
				type: UneceTypes.AssociatedTransportEquipment,
				schema: UneceAssociatedTransportEquipmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceAssociatedTransportEquipment
			},
			{
				type: UneceTypes.AttachedTransportEquipment,
				schema: UneceAttachedTransportEquipmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceAttachedTransportEquipment
			},
			{
				type: UneceTypes.Authentication,
				schema: UneceAuthenticationSchema,
				compiledValidator: CompiledValidators.CompiledUneceAuthentication
			},
			{
				type: UneceTypes.AuthoritativeSignatoryPerson,
				schema: UneceAuthoritativeSignatoryPersonSchema,
				compiledValidator: CompiledValidators.CompiledUneceAuthoritativeSignatoryPerson
			},
			{
				type: UneceTypes.AutomaticDataCaptureMethodCodeList,
				schema: UneceAutomaticDataCaptureMethodCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceAutomaticDataCaptureMethodCodeList
			},
			{
				type: UneceTypes.AvailablePeriod,
				schema: UneceAvailablePeriodSchema,
				compiledValidator: CompiledValidators.CompiledUneceAvailablePeriod
			},
			{
				type: UneceTypes.BasicWorkItem,
				schema: UneceBasicWorkItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceBasicWorkItem
			},
			{
				type: UneceTypes.BasicWorkItemTypeCodeList,
				schema: UneceBasicWorkItemTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceBasicWorkItemTypeCodeList
			},
			{
				type: UneceTypes.BillingDocumentCodeList,
				schema: UneceBillingDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceBillingDocumentCodeList
			},
			{
				type: UneceTypes.BinaryFile,
				schema: UneceBinaryFileSchema,
				compiledValidator: CompiledValidators.CompiledUneceBinaryFile
			},
			{
				type: UneceTypes.BinaryObjectCharacterSetCodeList,
				schema: UneceBinaryObjectCharacterSetCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceBinaryObjectCharacterSetCodeList
			},
			{
				type: UneceTypes.BinaryObjectEncodingCodeList,
				schema: UneceBinaryObjectEncodingCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceBinaryObjectEncodingCodeList
			},
			{
				type: UneceTypes.BirthAddress,
				schema: UneceBirthAddressSchema,
				compiledValidator: CompiledValidators.CompiledUneceBirthAddress
			},
			{
				type: UneceTypes.Booking,
				schema: UneceBookingSchema,
				compiledValidator: CompiledValidators.CompiledUneceBooking
			},
			{
				type: UneceTypes.BotanicalCrop,
				schema: UneceBotanicalCropSchema,
				compiledValidator: CompiledValidators.CompiledUneceBotanicalCrop
			},
			{
				type: UneceTypes.BranchFinancialInstitution,
				schema: UneceBranchFinancialInstitutionSchema,
				compiledValidator: CompiledValidators.CompiledUneceBranchFinancialInstitution
			},
			{
				type: UneceTypes.BreakdownStatement,
				schema: UneceBreakdownStatementSchema,
				compiledValidator: CompiledValidators.CompiledUneceBreakdownStatement
			},
			{
				type: UneceTypes.CalculatedPrice,
				schema: UneceCalculatedPriceSchema,
				compiledValidator: CompiledValidators.CompiledUneceCalculatedPrice
			},
			{
				type: UneceTypes.CalibratedMeasurement,
				schema: UneceCalibratedMeasurementSchema,
				compiledValidator: CompiledValidators.CompiledUneceCalibratedMeasurement
			},
			{
				type: UneceTypes.CalibratedMeasurementTypeCodeList,
				schema: UneceCalibratedMeasurementTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCalibratedMeasurementTypeCodeList
			},
			{
				type: UneceTypes.CancellationStatus,
				schema: UneceCancellationStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceCancellationStatus
			},
			{
				type: UneceTypes.Cargo,
				schema: UneceCargoSchema,
				compiledValidator: CompiledValidators.CompiledUneceCargo
			},
			{
				type: UneceTypes.CargoCategoryCodeList,
				schema: UneceCargoCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCargoCategoryCodeList
			},
			{
				type: UneceTypes.CargoCommodityCategoryCodeList,
				schema: UneceCargoCommodityCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCargoCommodityCategoryCodeList
			},
			{
				type: UneceTypes.CargoInsurance,
				schema: UneceCargoInsuranceSchema,
				compiledValidator: CompiledValidators.CompiledUneceCargoInsurance
			},
			{
				type: UneceTypes.CargoOperationalCategoryCodeList,
				schema: UneceCargoOperationalCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCargoOperationalCategoryCodeList
			},
			{
				type: UneceTypes.CargoTypeClassificationCodeList,
				schema: UneceCargoTypeClassificationCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCargoTypeClassificationCodeList
			},
			{
				type: UneceTypes.CarriedEquipment,
				schema: UneceCarriedEquipmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceCarriedEquipment
			},
			{
				type: UneceTypes.CarriedEquipmentTypeCodeList,
				schema: UneceCarriedEquipmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCarriedEquipmentTypeCodeList
			},
			{
				type: UneceTypes.Cash,
				schema: UneceCashSchema,
				compiledValidator: CompiledValidators.CompiledUneceCash
			},
			{
				type: UneceTypes.CashTypeCodeList,
				schema: UneceCashTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCashTypeCodeList
			},
			{
				type: UneceTypes.CertificateTypeCodeList,
				schema: UneceCertificateTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCertificateTypeCodeList
			},
			{
				type: UneceTypes.ChargePayingPartyRoleCodeList,
				schema: UneceChargePayingPartyRoleCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceChargePayingPartyRoleCodeList
			},
			{
				type: UneceTypes.Chemical,
				schema: UneceChemicalSchema,
				compiledValidator: CompiledValidators.CompiledUneceChemical
			},
			{
				type: UneceTypes.ChemicalTypeCodeList,
				schema: UneceChemicalTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceChemicalTypeCodeList
			},
			{
				type: UneceTypes.Cheque,
				schema: UneceChequeSchema,
				compiledValidator: CompiledValidators.CompiledUneceCheque
			},
			{
				type: UneceTypes.ChequeTypeCodeList,
				schema: UneceChequeTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceChequeTypeCodeList
			},
			{
				type: UneceTypes.Circle,
				schema: UneceCircleSchema,
				compiledValidator: CompiledValidators.CompiledUneceCircle
			},
			{
				type: UneceTypes.Classification,
				schema: UneceClassificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceClassification
			},
			{
				type: UneceTypes.ClassificationTypeCodeList,
				schema: UneceClassificationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceClassificationTypeCodeList
			},
			{
				type: UneceTypes.Clause,
				schema: UneceClauseSchema,
				compiledValidator: CompiledValidators.CompiledUneceClause
			},
			{
				type: UneceTypes.CodeListResponsibleAgencyCodeList,
				schema: UneceCodeListResponsibleAgencyCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCodeListResponsibleAgencyCodeList
			},
			{
				type: UneceTypes.Colour,
				schema: UneceColourSchema,
				compiledValidator: CompiledValidators.CompiledUneceColour
			},
			{
				type: UneceTypes.ColourTypeCodeList,
				schema: UneceColourTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceColourTypeCodeList
			},
			{
				type: UneceTypes.CommitmentLevelCodeList,
				schema: UneceCommitmentLevelCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCommitmentLevelCodeList
			},
			{
				type: UneceTypes.Communication,
				schema: UneceCommunicationSchema,
				compiledValidator: CompiledValidators.CompiledUneceCommunication
			},
			{
				type: UneceTypes.CommunicationChannelCodeList,
				schema: UneceCommunicationChannelCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCommunicationChannelCodeList
			},
			{
				type: UneceTypes.CommunicationEvent,
				schema: UneceCommunicationEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceCommunicationEvent
			},
			{
				type: UneceTypes.CommunicationEventTypeCodeList,
				schema: UneceCommunicationEventTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCommunicationEventTypeCodeList
			},
			{
				type: UneceTypes.ComplexDescription,
				schema: UneceComplexDescriptionSchema,
				compiledValidator: CompiledValidators.CompiledUneceComplexDescription
			},
			{
				type: UneceTypes.ConformanceCertificate,
				schema: UneceConformanceCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceConformanceCertificate
			},
			{
				type: UneceTypes.Consignment,
				schema: UneceConsignmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceConsignment
			},
			{
				type: UneceTypes.ConsignmentItem,
				schema: UneceConsignmentItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceConsignmentItem
			},
			{
				type: UneceTypes.ContactPerson,
				schema: UneceContactPersonSchema,
				compiledValidator: CompiledValidators.CompiledUneceContactPerson
			},
			{
				type: UneceTypes.ContactTypeCodeList,
				schema: UneceContactTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceContactTypeCodeList
			},
			{
				type: "UneceContextType",
				schema: UneceContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceContextType
			},
			{
				type: UneceTypes.Contract,
				schema: UneceContractSchema,
				compiledValidator: CompiledValidators.CompiledUneceContract
			},
			{
				type: UneceTypes.ControlSettingParameter,
				schema: UneceControlSettingParameterSchema,
				compiledValidator: CompiledValidators.CompiledUneceControlSettingParameter
			},
			{
				type: UneceTypes.ControlSettingParameterTypeCodeList,
				schema: UneceControlSettingParameterTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceControlSettingParameterTypeCodeList
			},
			{
				type: UneceTypes.Convoy,
				schema: UneceConvoySchema,
				compiledValidator: CompiledValidators.CompiledUneceConvoy
			},
			{
				type: UneceTypes.CooperatingOrganization,
				schema: UneceCooperatingOrganizationSchema,
				compiledValidator: CompiledValidators.CompiledUneceCooperatingOrganization
			},
			{
				type: UneceTypes.CoordinateReferenceSystem,
				schema: UneceCoordinateReferenceSystemSchema,
				compiledValidator: CompiledValidators.CompiledUneceCoordinateReferenceSystem
			},
			{
				type: UneceTypes.CoordinateSourceSystem,
				schema: UneceCoordinateSourceSystemSchema,
				compiledValidator: CompiledValidators.CompiledUneceCoordinateSourceSystem
			},
			{
				type: UneceTypes.CorrectiveAction,
				schema: UneceCorrectiveActionSchema,
				compiledValidator: CompiledValidators.CompiledUneceCorrectiveAction
			},
			{
				type: UneceTypes.CorrectiveActionTypeCodeList,
				schema: UneceCorrectiveActionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCorrectiveActionTypeCodeList
			},
			{
				type: UneceTypes.CorrectiveEvent,
				schema: UneceCorrectiveEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceCorrectiveEvent
			},
			{
				type: UneceTypes.Country,
				schema: UneceCountrySchema,
				compiledValidator: CompiledValidators.CompiledUneceCountry
			},
			{
				type: UneceTypes.CountryId,
				schema: UneceCountryIdSchema,
				compiledValidator: CompiledValidators.CompiledUneceCountryId
			},
			{
				type: UneceTypes.CountrySubDivision,
				schema: UneceCountrySubDivisionSchema,
				compiledValidator: CompiledValidators.CompiledUneceCountrySubDivision
			},
			{
				type: UneceTypes.CountrySubDivisionTypeCodeList,
				schema: UneceCountrySubDivisionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCountrySubDivisionTypeCodeList
			},
			{
				type: UneceTypes.CreditorFinancialAccount,
				schema: UneceCreditorFinancialAccountSchema,
				compiledValidator: CompiledValidators.CompiledUneceCreditorFinancialAccount
			},
			{
				type: UneceTypes.CreditorFinancialInstitution,
				schema: UneceCreditorFinancialInstitutionSchema,
				compiledValidator: CompiledValidators.CompiledUneceCreditorFinancialInstitution
			},
			{
				type: UneceTypes.CropMixtureConstituent,
				schema: UneceCropMixtureConstituentSchema,
				compiledValidator: CompiledValidators.CompiledUneceCropMixtureConstituent
			},
			{
				type: UneceTypes.CropProduceBatch,
				schema: UneceCropProduceBatchSchema,
				compiledValidator: CompiledValidators.CompiledUneceCropProduceBatch
			},
			{
				type: UneceTypes.CropProduceBatchTypeCodeList,
				schema: UneceCropProduceBatchTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCropProduceBatchTypeCodeList
			},
			{
				type: UneceTypes.CropProtectionTreatment,
				schema: UneceCropProtectionTreatmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceCropProtectionTreatment
			},
			{
				type: UneceTypes.CropProtectionTreatmentTypeCodeList,
				schema: UneceCropProtectionTreatmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCropProtectionTreatmentTypeCodeList
			},
			{
				type: UneceTypes.CurrencyCodeList,
				schema: UneceCurrencyCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCurrencyCodeList
			},
			{
				type: UneceTypes.CurrencyExchange,
				schema: UneceCurrencyExchangeSchema,
				compiledValidator: CompiledValidators.CompiledUneceCurrencyExchange
			},
			{
				type: UneceTypes.CustomerClass,
				schema: UneceCustomerClassSchema,
				compiledValidator: CompiledValidators.CompiledUneceCustomerClass
			},
			{
				type: UneceTypes.CustomsDutyRegimeTypeCodeList,
				schema: UneceCustomsDutyRegimeTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCustomsDutyRegimeTypeCodeList
			},
			{
				type: UneceTypes.CustomsProcedureGuaranteeCodeList,
				schema: UneceCustomsProcedureGuaranteeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCustomsProcedureGuaranteeCodeList
			},
			{
				type: UneceTypes.CustomsValuation,
				schema: UneceCustomsValuationSchema,
				compiledValidator: CompiledValidators.CompiledUneceCustomsValuation
			},
			{
				type: UneceTypes.CustomsValuationTypeCodeList,
				schema: UneceCustomsValuationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceCustomsValuationTypeCodeList
			},
			{
				type: UneceTypes.DangerousGoods,
				schema: UneceDangerousGoodsSchema,
				compiledValidator: CompiledValidators.CompiledUneceDangerousGoods
			},
			{
				type: UneceTypes.DangerousGoodsPackagingLevelCodeList,
				schema: UneceDangerousGoodsPackagingLevelCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDangerousGoodsPackagingLevelCodeList
			},
			{
				type: UneceTypes.DangerousGoodsRegulationCodeList,
				schema: UneceDangerousGoodsRegulationCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDangerousGoodsRegulationCodeList
			},
			{
				type: UneceTypes.DateTimePeriodFunctionCodeList,
				schema: UneceDateTimePeriodFunctionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDateTimePeriodFunctionCodeList
			},
			{
				type: UneceTypes.DebtorFinancialAccount,
				schema: UneceDebtorFinancialAccountSchema,
				compiledValidator: CompiledValidators.CompiledUneceDebtorFinancialAccount
			},
			{
				type: UneceTypes.DebtorFinancialInstitution,
				schema: UneceDebtorFinancialInstitutionSchema,
				compiledValidator: CompiledValidators.CompiledUneceDebtorFinancialInstitution
			},
			{
				type: UneceTypes.DelimitedPeriod,
				schema: UneceDelimitedPeriodSchema,
				compiledValidator: CompiledValidators.CompiledUneceDelimitedPeriod
			},
			{
				type: UneceTypes.DeliveryAdjustment,
				schema: UneceDeliveryAdjustmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceDeliveryAdjustment
			},
			{
				type: UneceTypes.DeliveryInstructions,
				schema: UneceDeliveryInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceDeliveryInstructions
			},
			{
				type: UneceTypes.DeliverySchedule,
				schema: UneceDeliveryScheduleSchema,
				compiledValidator: CompiledValidators.CompiledUneceDeliverySchedule
			},
			{
				type: UneceTypes.DeliveryTerms,
				schema: UneceDeliveryTermsSchema,
				compiledValidator: CompiledValidators.CompiledUneceDeliveryTerms
			},
			{
				type: UneceTypes.DeliveryTermsCodeList,
				schema: UneceDeliveryTermsCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDeliveryTermsCodeList
			},
			{
				type: UneceTypes.DeliveryTermsFunctionCodeList,
				schema: UneceDeliveryTermsFunctionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDeliveryTermsFunctionCodeList
			},
			{
				type: UneceTypes.DigitalMethod,
				schema: UneceDigitalMethodSchema,
				compiledValidator: CompiledValidators.CompiledUneceDigitalMethod
			},
			{
				type: UneceTypes.DigitalMethodTypeCodeList,
				schema: UneceDigitalMethodTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDigitalMethodTypeCodeList
			},
			{
				type: UneceTypes.DimensionTypeCodeList,
				schema: UneceDimensionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDimensionTypeCodeList
			},
			{
				type: UneceTypes.DirectPosition,
				schema: UneceDirectPositionSchema,
				compiledValidator: CompiledValidators.CompiledUneceDirectPosition
			},
			{
				type: UneceTypes.Disability,
				schema: UneceDisabilitySchema,
				compiledValidator: CompiledValidators.CompiledUneceDisability
			},
			{
				type: UneceTypes.DisabilityTypeCodeList,
				schema: UneceDisabilityTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDisabilityTypeCodeList
			},
			{
				type: UneceTypes.DisposalInstructions,
				schema: UneceDisposalInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceDisposalInstructions
			},
			{
				type: UneceTypes.Document,
				schema: UneceDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocument
			},
			{
				type: UneceTypes.DocumentCharacteristic,
				schema: UneceDocumentCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentCharacteristic
			},
			{
				type: UneceTypes.DocumentCharacteristicTypeCodeList,
				schema: UneceDocumentCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.DocumentCodeList,
				schema: UneceDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentCodeList
			},
			{
				type: UneceTypes.DocumentContextParameter,
				schema: UneceDocumentContextParameterSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentContextParameter
			},
			{
				type: UneceTypes.DocumentHandlingInstructions,
				schema: UneceDocumentHandlingInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentHandlingInstructions
			},
			{
				type: UneceTypes.DocumentLineDocument,
				schema: UneceDocumentLineDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentLineDocument
			},
			{
				type: UneceTypes.DocumentStatus,
				schema: UneceDocumentStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentStatus
			},
			{
				type: UneceTypes.DocumentStatusCodeList,
				schema: UneceDocumentStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceDocumentStatusCodeList
			},
			{
				type: UneceTypes.DurationUnitMeasureCode,
				schema: UneceDurationUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceDurationUnitMeasureCode
			},
			{
				type: UneceTypes.DurationUnitMeasureType,
				schema: UneceDurationUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceDurationUnitMeasureType
			},
			{
				type: UneceTypes.Emission,
				schema: UneceEmissionSchema,
				compiledValidator: CompiledValidators.CompiledUneceEmission
			},
			{
				type: UneceTypes.EmissionTypeCodeList,
				schema: UneceEmissionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceEmissionTypeCodeList
			},
			{
				type: UneceTypes.EmployerIdentity,
				schema: UneceEmployerIdentitySchema,
				compiledValidator: CompiledValidators.CompiledUneceEmployerIdentity
			},
			{
				type: UneceTypes.Envelope,
				schema: UneceEnvelopeSchema,
				compiledValidator: CompiledValidators.CompiledUneceEnvelope
			},
			{
				type: UneceTypes.Equipment,
				schema: UneceEquipmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceEquipment
			},
			{
				type: UneceTypes.EquipmentTypeCodeList,
				schema: UneceEquipmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceEquipmentTypeCodeList
			},
			{
				type: UneceTypes.Error,
				schema: UneceErrorSchema,
				compiledValidator: CompiledValidators.CompiledUneceError
			},
			{
				type: UneceTypes.EventElement,
				schema: UneceEventElementSchema,
				compiledValidator: CompiledValidators.CompiledUneceEventElement
			},
			{
				type: UneceTypes.ExchangedDeclaration,
				schema: UneceExchangedDeclarationSchema,
				compiledValidator: CompiledValidators.CompiledUneceExchangedDeclaration
			},
			{
				type: UneceTypes.ExchangedDocument,
				schema: UneceExchangedDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceExchangedDocument
			},
			{
				type: UneceTypes.ExchangedDocumentContext,
				schema: UneceExchangedDocumentContextSchema,
				compiledValidator: CompiledValidators.CompiledUneceExchangedDocumentContext
			},
			{
				type: UneceTypes.ExperienceEvent,
				schema: UneceExperienceEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceExperienceEvent
			},
			{
				type: UneceTypes.ExperienceFacility,
				schema: UneceExperienceFacilitySchema,
				compiledValidator: CompiledValidators.CompiledUneceExperienceFacility
			},
			{
				type: UneceTypes.ExperienceItem,
				schema: UneceExperienceItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceExperienceItem
			},
			{
				type: UneceTypes.ExperienceProduct,
				schema: UneceExperienceProductSchema,
				compiledValidator: CompiledValidators.CompiledUneceExperienceProduct
			},
			{
				type: UneceTypes.ExperienceProgramAction,
				schema: UneceExperienceProgramActionSchema,
				compiledValidator: CompiledValidators.CompiledUneceExperienceProgramAction
			},
			{
				type: UneceTypes.FieldCrop,
				schema: UneceFieldCropSchema,
				compiledValidator: CompiledValidators.CompiledUneceFieldCrop
			},
			{
				type: UneceTypes.FileSizeUnitMeasureCode,
				schema: UneceFileSizeUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceFileSizeUnitMeasureCode
			},
			{
				type: UneceTypes.FileSizeUnitMeasureType,
				schema: UneceFileSizeUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceFileSizeUnitMeasureType
			},
			{
				type: UneceTypes.FinancialAccountTypeCodeList,
				schema: UneceFinancialAccountTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialAccountTypeCodeList
			},
			{
				type: UneceTypes.FinancialAdjustment,
				schema: UneceFinancialAdjustmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialAdjustment
			},
			{
				type: UneceTypes.FinancialAdjustmentReasonCodeList,
				schema: UneceFinancialAdjustmentReasonCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialAdjustmentReasonCodeList
			},
			{
				type: UneceTypes.FinancialCard,
				schema: UneceFinancialCardSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialCard
			},
			{
				type: UneceTypes.FinancialCardTypeCodeList,
				schema: UneceFinancialCardTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialCardTypeCodeList
			},
			{
				type: UneceTypes.FinancialIdentity,
				schema: UneceFinancialIdentitySchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialIdentity
			},
			{
				type: UneceTypes.FinancialInstitutionAddress,
				schema: UneceFinancialInstitutionAddressSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialInstitutionAddress
			},
			{
				type: UneceTypes.FinancialInstitutionRoleCodeList,
				schema: UneceFinancialInstitutionRoleCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancialInstitutionRoleCodeList
			},
			{
				type: UneceTypes.FinancingFinancialAccount,
				schema: UneceFinancingFinancialAccountSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancingFinancialAccount
			},
			{
				type: UneceTypes.FinancingRequestDocument,
				schema: UneceFinancingRequestDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancingRequestDocument
			},
			{
				type: UneceTypes.FinancingRequestResultDocument,
				schema: UneceFinancingRequestResultDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancingRequestResultDocument
			},
			{
				type: UneceTypes.FinancingStatus,
				schema: UneceFinancingStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancingStatus
			},
			{
				type: UneceTypes.FinancingSummaryDocument,
				schema: UneceFinancingSummaryDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceFinancingSummaryDocument
			},
			{
				type: UneceTypes.FoodChoice,
				schema: UneceFoodChoiceSchema,
				compiledValidator: CompiledValidators.CompiledUneceFoodChoice
			},
			{
				type: UneceTypes.FoodChoiceTypeCodeList,
				schema: UneceFoodChoiceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFoodChoiceTypeCodeList
			},
			{
				type: UneceTypes.ForecastTerms,
				schema: UneceForecastTermsSchema,
				compiledValidator: CompiledValidators.CompiledUneceForecastTerms
			},
			{
				type: UneceTypes.FreightChargeTariffClassCodeList,
				schema: UneceFreightChargeTariffClassCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFreightChargeTariffClassCodeList
			},
			{
				type: UneceTypes.FreightChargeTypeId,
				schema: UneceFreightChargeTypeIdSchema,
				compiledValidator: CompiledValidators.CompiledUneceFreightChargeTypeId
			},
			{
				type: UneceTypes.Fuel,
				schema: UneceFuelSchema,
				compiledValidator: CompiledValidators.CompiledUneceFuel
			},
			{
				type: UneceTypes.FuelTypeCodeList,
				schema: UneceFuelTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceFuelTypeCodeList
			},
			{
				type: UneceTypes.GeographicalArea,
				schema: UneceGeographicalAreaSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalArea
			},
			{
				type: UneceTypes.GeographicalCoordinate,
				schema: UneceGeographicalCoordinateSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalCoordinate
			},
			{
				type: UneceTypes.GeographicalFeature,
				schema: UneceGeographicalFeatureSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalFeature
			},
			{
				type: UneceTypes.GeographicalGrid,
				schema: UneceGeographicalGridSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalGrid
			},
			{
				type: UneceTypes.GeographicalLine,
				schema: UneceGeographicalLineSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalLine
			},
			{
				type: UneceTypes.GeographicalMultiCurve,
				schema: UneceGeographicalMultiCurveSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalMultiCurve
			},
			{
				type: UneceTypes.GeographicalMultiPoint,
				schema: UneceGeographicalMultiPointSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalMultiPoint
			},
			{
				type: UneceTypes.GeographicalMultiSurface,
				schema: UneceGeographicalMultiSurfaceSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalMultiSurface
			},
			{
				type: UneceTypes.GeographicalObjectCharacteristic,
				schema: UneceGeographicalObjectCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalObjectCharacteristic
			},
			{
				type: UneceTypes.GeographicalPoint,
				schema: UneceGeographicalPointSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalPoint
			},
			{
				type: UneceTypes.GeographicalSurface,
				schema: UneceGeographicalSurfaceSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeographicalSurface
			},
			{
				type: UneceTypes.GeopoliticalRegion,
				schema: UneceGeopoliticalRegionSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeopoliticalRegion
			},
			{
				type: UneceTypes.GeopoliticalRegionTypeCodeList,
				schema: UneceGeopoliticalRegionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGeopoliticalRegionTypeCodeList
			},
			{
				type: UneceTypes.GoodsCharacteristic,
				schema: UneceGoodsCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceGoodsCharacteristic
			},
			{
				type: UneceTypes.GoodsCharacteristicTypeCodeList,
				schema: UneceGoodsCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGoodsCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.GoodsTypeCodeList,
				schema: UneceGoodsTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGoodsTypeCodeList
			},
			{
				type: UneceTypes.GoodsTypeExtensionCodeList,
				schema: UneceGoodsTypeExtensionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGoodsTypeExtensionCodeList
			},
			{
				type: UneceTypes.GovernmentActionCodeList,
				schema: UneceGovernmentActionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGovernmentActionCodeList
			},
			{
				type: UneceTypes.GovernmentRegistration,
				schema: UneceGovernmentRegistrationSchema,
				compiledValidator: CompiledValidators.CompiledUneceGovernmentRegistration
			},
			{
				type: UneceTypes.GovernmentRegistrationTypeCodeList,
				schema: UneceGovernmentRegistrationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGovernmentRegistrationTypeCodeList
			},
			{
				type: UneceTypes.GroupedWorkItem,
				schema: UneceGroupedWorkItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceGroupedWorkItem
			},
			{
				type: UneceTypes.GroupedWorkItemTypeCodeList,
				schema: UneceGroupedWorkItemTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGroupedWorkItemTypeCodeList
			},
			{
				type: UneceTypes.Guarantee,
				schema: UneceGuaranteeSchema,
				compiledValidator: CompiledValidators.CompiledUneceGuarantee
			},
			{
				type: UneceTypes.GuestArrival,
				schema: UneceGuestArrivalSchema,
				compiledValidator: CompiledValidators.CompiledUneceGuestArrival
			},
			{
				type: UneceTypes.GuestHealthIndication,
				schema: UneceGuestHealthIndicationSchema,
				compiledValidator: CompiledValidators.CompiledUneceGuestHealthIndication
			},
			{
				type: UneceTypes.GuestHealthIndicationTypeCodeList,
				schema: UneceGuestHealthIndicationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceGuestHealthIndicationTypeCodeList
			},
			{
				type: UneceTypes.GuestPerson,
				schema: UneceGuestPersonSchema,
				compiledValidator: CompiledValidators.CompiledUneceGuestPerson
			},
			{
				type: UneceTypes.HandlingInstructions,
				schema: UneceHandlingInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceHandlingInstructions
			},
			{
				type: UneceTypes.HaulageInstructions,
				schema: UneceHaulageInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceHaulageInstructions
			},
			{
				type: UneceTypes.HazardousMaterial,
				schema: UneceHazardousMaterialSchema,
				compiledValidator: CompiledValidators.CompiledUneceHazardousMaterial
			},
			{
				type: UneceTypes.HeaderBalanceOut,
				schema: UneceHeaderBalanceOutSchema,
				compiledValidator: CompiledValidators.CompiledUneceHeaderBalanceOut
			},
			{
				type: UneceTypes.HeaderTradeAgreement,
				schema: UneceHeaderTradeAgreementSchema,
				compiledValidator: CompiledValidators.CompiledUneceHeaderTradeAgreement
			},
			{
				type: UneceTypes.HeaderTradeDelivery,
				schema: UneceHeaderTradeDeliverySchema,
				compiledValidator: CompiledValidators.CompiledUneceHeaderTradeDelivery
			},
			{
				type: UneceTypes.HeaderTradeSettlement,
				schema: UneceHeaderTradeSettlementSchema,
				compiledValidator: CompiledValidators.CompiledUneceHeaderTradeSettlement
			},
			{
				type: UneceTypes.IdentifiedFault,
				schema: UneceIdentifiedFaultSchema,
				compiledValidator: CompiledValidators.CompiledUneceIdentifiedFault
			},
			{
				type: UneceTypes.Illness,
				schema: UneceIllnessSchema,
				compiledValidator: CompiledValidators.CompiledUneceIllness
			},
			{
				type: UneceTypes.IndividualTTAnimal,
				schema: UneceIndividualTTAnimalSchema,
				compiledValidator: CompiledValidators.CompiledUneceIndividualTTAnimal
			},
			{
				type: UneceTypes.InformationSource,
				schema: UneceInformationSourceSchema,
				compiledValidator: CompiledValidators.CompiledUneceInformationSource
			},
			{
				type: UneceTypes.IngredientRangeMeasurement,
				schema: UneceIngredientRangeMeasurementSchema,
				compiledValidator: CompiledValidators.CompiledUneceIngredientRangeMeasurement
			},
			{
				type: UneceTypes.InspectionEvent,
				schema: UneceInspectionEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionEvent
			},
			{
				type: UneceTypes.InspectionEventTypeCodeList,
				schema: UneceInspectionEventTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionEventTypeCodeList
			},
			{
				type: UneceTypes.InspectionInstructions,
				schema: UneceInspectionInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionInstructions
			},
			{
				type: UneceTypes.InspectionNote,
				schema: UneceInspectionNoteSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionNote
			},
			{
				type: UneceTypes.InspectionPerson,
				schema: UneceInspectionPersonSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionPerson
			},
			{
				type: UneceTypes.InspectionReference,
				schema: UneceInspectionReferenceSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionReference
			},
			{
				type: UneceTypes.InspectionResult,
				schema: UneceInspectionResultSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionResult
			},
			{
				type: UneceTypes.InspectionResultCharacteristic,
				schema: UneceInspectionResultCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionResultCharacteristic
			},
			{
				type: UneceTypes.InspectionStatus,
				schema: UneceInspectionStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceInspectionStatus
			},
			{
				type: UneceTypes.InstalmentPayment,
				schema: UneceInstalmentPaymentSchema,
				compiledValidator: CompiledValidators.CompiledUneceInstalmentPayment
			},
			{
				type: UneceTypes.InstalmentPlan,
				schema: UneceInstalmentPlanSchema,
				compiledValidator: CompiledValidators.CompiledUneceInstalmentPlan
			},
			{
				type: UneceTypes.InstructedTemperature,
				schema: UneceInstructedTemperatureSchema,
				compiledValidator: CompiledValidators.CompiledUneceInstructedTemperature
			},
			{
				type: UneceTypes.InvoiceDocumentCodeList,
				schema: UneceInvoiceDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceInvoiceDocumentCodeList
			},
			{
				type: UneceTypes.IOTDevice,
				schema: UneceIOTDeviceSchema,
				compiledValidator: CompiledValidators.CompiledUneceIOTDevice
			},
			{
				type: UneceTypes.IOTDeviceTypeCodeList,
				schema: UneceIOTDeviceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceIOTDeviceTypeCodeList
			},
			{
				type: UneceTypes.Issue,
				schema: UneceIssueSchema,
				compiledValidator: CompiledValidators.CompiledUneceIssue
			},
			{
				type: UneceTypes.IssueTypeCodeList,
				schema: UneceIssueTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceIssueTypeCodeList
			},
			{
				type: UneceTypes.Keyword,
				schema: UneceKeywordSchema,
				compiledValidator: CompiledValidators.CompiledUneceKeyword
			},
			{
				type: UneceTypes.LaboratoryObservationAnalysisMethod,
				schema: UneceLaboratoryObservationAnalysisMethodSchema,
				compiledValidator: CompiledValidators.CompiledUneceLaboratoryObservationAnalysisMethod
			},
			{
				type: UneceTypes.LaboratoryObservationContact,
				schema: UneceLaboratoryObservationContactSchema,
				compiledValidator: CompiledValidators.CompiledUneceLaboratoryObservationContact
			},
			{
				type: UneceTypes.LaboratoryObservationInstructions,
				schema: UneceLaboratoryObservationInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceLaboratoryObservationInstructions
			},
			{
				type: UneceTypes.LaboratoryObservationNote,
				schema: UneceLaboratoryObservationNoteSchema,
				compiledValidator: CompiledValidators.CompiledUneceLaboratoryObservationNote
			},
			{
				type: UneceTypes.LaboratoryObservationParty,
				schema: UneceLaboratoryObservationPartySchema,
				compiledValidator: CompiledValidators.CompiledUneceLaboratoryObservationParty
			},
			{
				type: UneceTypes.LaboratoryObservationReference,
				schema: UneceLaboratoryObservationReferenceSchema,
				compiledValidator: CompiledValidators.CompiledUneceLaboratoryObservationReference
			},
			{
				type: UneceTypes.LanguageCodeList,
				schema: UneceLanguageCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLanguageCodeList
			},
			{
				type: UneceTypes.LanguageId,
				schema: UneceLanguageIdSchema,
				compiledValidator: CompiledValidators.CompiledUneceLanguageId
			},
			{
				type: UneceTypes.LanguageProficiency,
				schema: UneceLanguageProficiencySchema,
				compiledValidator: CompiledValidators.CompiledUneceLanguageProficiency
			},
			{
				type: UneceTypes.LegalOrganization,
				schema: UneceLegalOrganizationSchema,
				compiledValidator: CompiledValidators.CompiledUneceLegalOrganization
			},
			{
				type: UneceTypes.LegalOrganizationTypeCodeList,
				schema: UneceLegalOrganizationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLegalOrganizationTypeCodeList
			},
			{
				type: UneceTypes.LegalRegistration,
				schema: UneceLegalRegistrationSchema,
				compiledValidator: CompiledValidators.CompiledUneceLegalRegistration
			},
			{
				type: UneceTypes.LegalRegistrationTypeCodeList,
				schema: UneceLegalRegistrationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLegalRegistrationTypeCodeList
			},
			{
				type: UneceTypes.Licence,
				schema: UneceLicenceSchema,
				compiledValidator: CompiledValidators.CompiledUneceLicence
			},
			{
				type: UneceTypes.LicenceTypeCodeList,
				schema: UneceLicenceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLicenceTypeCodeList
			},
			{
				type: UneceTypes.LifetimeEndCostCodeList,
				schema: UneceLifetimeEndCostCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLifetimeEndCostCodeList
			},
			{
				type: UneceTypes.LinearRing,
				schema: UneceLinearRingSchema,
				compiledValidator: CompiledValidators.CompiledUneceLinearRing
			},
			{
				type: UneceTypes.LinearUnitMeasureCode,
				schema: UneceLinearUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceLinearUnitMeasureCode
			},
			{
				type: UneceTypes.LinearUnitMeasureType,
				schema: UneceLinearUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceLinearUnitMeasureType
			},
			{
				type: UneceTypes.LineStatusCodeList,
				schema: UneceLineStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLineStatusCodeList
			},
			{
				type: UneceTypes.LineTradeAgreement,
				schema: UneceLineTradeAgreementSchema,
				compiledValidator: CompiledValidators.CompiledUneceLineTradeAgreement
			},
			{
				type: UneceTypes.LineTradeDelivery,
				schema: UneceLineTradeDeliverySchema,
				compiledValidator: CompiledValidators.CompiledUneceLineTradeDelivery
			},
			{
				type: UneceTypes.LineTradeSettlement,
				schema: UneceLineTradeSettlementSchema,
				compiledValidator: CompiledValidators.CompiledUneceLineTradeSettlement
			},
			{
				type: UneceTypes.LineTradeTransaction,
				schema: UneceLineTradeTransactionSchema,
				compiledValidator: CompiledValidators.CompiledUneceLineTradeTransaction
			},
			{
				type: UneceTypes.Location,
				schema: UneceLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceLocation
			},
			{
				type: UneceTypes.LocationFunctionCodeList,
				schema: UneceLocationFunctionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLocationFunctionCodeList
			},
			{
				type: UneceTypes.LocationParty,
				schema: UneceLocationPartySchema,
				compiledValidator: CompiledValidators.CompiledUneceLocationParty
			},
			{
				type: UneceTypes.LocationPartyTypeCodeList,
				schema: UneceLocationPartyTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLocationPartyTypeCodeList
			},
			{
				type: UneceTypes.LogisticsChargeCalculationBasisCodeList,
				schema: UneceLogisticsChargeCalculationBasisCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsChargeCalculationBasisCodeList
			},
			{
				type: UneceTypes.LogisticsLabel,
				schema: UneceLogisticsLabelSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsLabel
			},
			{
				type: UneceTypes.LogisticsLocation,
				schema: UneceLogisticsLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsLocation
			},
			{
				type: UneceTypes.LogisticsPackaging,
				schema: UneceLogisticsPackagingSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsPackaging
			},
			{
				type: UneceTypes.LogisticsPackagingTypeCodeList,
				schema: UneceLogisticsPackagingTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsPackagingTypeCodeList
			},
			{
				type: UneceTypes.LogisticsStatus,
				schema: UneceLogisticsStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsStatus
			},
			{
				type: UneceTypes.LogisticsStatusCodeList,
				schema: UneceLogisticsStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsStatusCodeList
			},
			{
				type: UneceTypes.LogisticsTransportEquipment,
				schema: UneceLogisticsTransportEquipmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsTransportEquipment
			},
			{
				type: UneceTypes.LogisticsTransportMeans,
				schema: UneceLogisticsTransportMeansSchema,
				compiledValidator: CompiledValidators.CompiledUneceLogisticsTransportMeans
			},
			{
				type: UneceTypes.Machine,
				schema: UneceMachineSchema,
				compiledValidator: CompiledValidators.CompiledUneceMachine
			},
			{
				type: UneceTypes.MachineTypeCodeList,
				schema: UneceMachineTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMachineTypeCodeList
			},
			{
				type: UneceTypes.Marketplace,
				schema: UneceMarketplaceSchema,
				compiledValidator: CompiledValidators.CompiledUneceMarketplace
			},
			{
				type: UneceTypes.Marking,
				schema: UneceMarkingSchema,
				compiledValidator: CompiledValidators.CompiledUneceMarking
			},
			{
				type: UneceTypes.MarkingInstructionCodeList,
				schema: UneceMarkingInstructionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMarkingInstructionCodeList
			},
			{
				type: UneceTypes.MDHHealthIndication,
				schema: UneceMDHHealthIndicationSchema,
				compiledValidator: CompiledValidators.CompiledUneceMDHHealthIndication
			},
			{
				type: UneceTypes.MDHHealthIndicationTypeCodeList,
				schema: UneceMDHHealthIndicationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMDHHealthIndicationTypeCodeList
			},
			{
				type: UneceTypes.MeasureCode,
				schema: UneceMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceMeasureCode
			},
			{
				type: UneceTypes.MeasuredAttributeCodeList,
				schema: UneceMeasuredAttributeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMeasuredAttributeCodeList
			},
			{
				type: UneceTypes.Measurement,
				schema: UneceMeasurementSchema,
				compiledValidator: CompiledValidators.CompiledUneceMeasurement
			},
			{
				type: UneceTypes.MeasurementTypeCodeList,
				schema: UneceMeasurementTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMeasurementTypeCodeList
			},
			{
				type: UneceTypes.MeasureType,
				schema: UneceMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceMeasureType
			},
			{
				type: UneceTypes.Membership,
				schema: UneceMembershipSchema,
				compiledValidator: CompiledValidators.CompiledUneceMembership
			},
			{
				type: UneceTypes.MessageFunctionCodeList,
				schema: UneceMessageFunctionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMessageFunctionCodeList
			},
			{
				type: UneceTypes.MetricCharacteristic,
				schema: UneceMetricCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceMetricCharacteristic
			},
			{
				type: UneceTypes.MetricCharacteristicTypeCodeList,
				schema: UneceMetricCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceMetricCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.NegotiationContext,
				schema: UneceNegotiationContextSchema,
				compiledValidator: CompiledValidators.CompiledUneceNegotiationContext
			},
			{
				type: UneceTypes.NegotiationContextTypeCodeList,
				schema: UneceNegotiationContextTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceNegotiationContextTypeCodeList
			},
			{
				type: UneceTypes.NegotiationExchange,
				schema: UneceNegotiationExchangeSchema,
				compiledValidator: CompiledValidators.CompiledUneceNegotiationExchange
			},
			{
				type: UneceTypes.Note,
				schema: UneceNoteSchema,
				compiledValidator: CompiledValidators.CompiledUneceNote
			},
			{
				type: UneceTypes.Object,
				schema: UneceObjectSchema,
				compiledValidator: CompiledValidators.CompiledUneceObject
			},
			{
				type: UneceTypes.ObjectTypeCodeList,
				schema: UneceObjectTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceObjectTypeCodeList
			},
			{
				type: UneceTypes.Observation,
				schema: UneceObservationSchema,
				compiledValidator: CompiledValidators.CompiledUneceObservation
			},
			{
				type: UneceTypes.ObservationObjectiveParameter,
				schema: UneceObservationObjectiveParameterSchema,
				compiledValidator: CompiledValidators.CompiledUneceObservationObjectiveParameter
			},
			{
				type: UneceTypes.ObservationObjectiveParameterTypeCodeList,
				schema: UneceObservationObjectiveParameterTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceObservationObjectiveParameterTypeCodeList
			},
			{
				type: UneceTypes.ObservationResult,
				schema: UneceObservationResultSchema,
				compiledValidator: CompiledValidators.CompiledUneceObservationResult
			},
			{
				type: UneceTypes.ObservationResultCharacteristic,
				schema: UneceObservationResultCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceObservationResultCharacteristic
			},
			{
				type: UneceTypes.OperationalParameter,
				schema: UneceOperationalParameterSchema,
				compiledValidator: CompiledValidators.CompiledUneceOperationalParameter
			},
			{
				type: UneceTypes.OperationalParameterTypeCodeList,
				schema: UneceOperationalParameterTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceOperationalParameterTypeCodeList
			},
			{
				type: UneceTypes.OrganizationalCertificate,
				schema: UneceOrganizationalCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceOrganizationalCertificate
			},
			{
				type: UneceTypes.OrganizationalCertification,
				schema: UneceOrganizationalCertificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceOrganizationalCertification
			},
			{
				type: UneceTypes.OrganizationCharacteristic,
				schema: UneceOrganizationCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceOrganizationCharacteristic
			},
			{
				type: UneceTypes.OrganizationCharacteristicTypeCodeList,
				schema: UneceOrganizationCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceOrganizationCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.OrganizationFunctionTypeCodeList,
				schema: UneceOrganizationFunctionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceOrganizationFunctionTypeCodeList
			},
			{
				type: UneceTypes.Package,
				schema: UnecePackageSchema,
				compiledValidator: CompiledValidators.CompiledUnecePackage
			},
			{
				type: UneceTypes.PackageTypeCodeList,
				schema: UnecePackageTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePackageTypeCodeList
			},
			{
				type: UneceTypes.PackagingInstructions,
				schema: UnecePackagingInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUnecePackagingInstructions
			},
			{
				type: UneceTypes.PackagingLevelCodeList,
				schema: UnecePackagingLevelCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePackagingLevelCodeList
			},
			{
				type: UneceTypes.PackagingMarkingCodeList,
				schema: UnecePackagingMarkingCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePackagingMarkingCodeList
			},
			{
				type: UneceTypes.Pairing,
				schema: UnecePairingSchema,
				compiledValidator: CompiledValidators.CompiledUnecePairing
			},
			{
				type: UneceTypes.PartyRoleCodeList,
				schema: UnecePartyRoleCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePartyRoleCodeList
			},
			{
				type: UneceTypes.PartyTypeCodeList,
				schema: UnecePartyTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePartyTypeCodeList
			},
			{
				type: UneceTypes.Payload,
				schema: UnecePayloadSchema,
				compiledValidator: CompiledValidators.CompiledUnecePayload
			},
			{
				type: UneceTypes.PayloadInstance,
				schema: UnecePayloadInstanceSchema,
				compiledValidator: CompiledValidators.CompiledUnecePayloadInstance
			},
			{
				type: UneceTypes.PaymentBalanceOut,
				schema: UnecePaymentBalanceOutSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentBalanceOut
			},
			{
				type: UneceTypes.PaymentDiscountTerms,
				schema: UnecePaymentDiscountTermsSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentDiscountTerms
			},
			{
				type: UneceTypes.PaymentFinancialAccount,
				schema: UnecePaymentFinancialAccountSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentFinancialAccount
			},
			{
				type: UneceTypes.PaymentFinancialAccountTypeCodeList,
				schema: UnecePaymentFinancialAccountTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentFinancialAccountTypeCodeList
			},
			{
				type: UneceTypes.PaymentFinancialInstitution,
				schema: UnecePaymentFinancialInstitutionSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentFinancialInstitution
			},
			{
				type: UneceTypes.PaymentFinancialInstitutionTypeCodeList,
				schema: UnecePaymentFinancialInstitutionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentFinancialInstitutionTypeCodeList
			},
			{
				type: UneceTypes.PaymentGuaranteeMeansCodeList,
				schema: UnecePaymentGuaranteeMeansCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentGuaranteeMeansCodeList
			},
			{
				type: UneceTypes.PaymentMeans,
				schema: UnecePaymentMeansSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentMeans
			},
			{
				type: UneceTypes.PaymentMeansChannelCodeList,
				schema: UnecePaymentMeansChannelCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentMeansChannelCodeList
			},
			{
				type: UneceTypes.PaymentMeansCodeList,
				schema: UnecePaymentMeansCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentMeansCodeList
			},
			{
				type: UneceTypes.PaymentMethodCodeList,
				schema: UnecePaymentMethodCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentMethodCodeList
			},
			{
				type: UneceTypes.PaymentPenaltyTerms,
				schema: UnecePaymentPenaltyTermsSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentPenaltyTerms
			},
			{
				type: UneceTypes.PaymentTerms,
				schema: UnecePaymentTermsSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentTerms
			},
			{
				type: UneceTypes.PaymentTermsEventTimeReferenceCodeList,
				schema: UnecePaymentTermsEventTimeReferenceCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentTermsEventTimeReferenceCodeList
			},
			{
				type: UneceTypes.PaymentTermsId,
				schema: UnecePaymentTermsIdSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentTermsId
			},
			{
				type: UneceTypes.PaymentTermsTypeCodeList,
				schema: UnecePaymentTermsTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentTermsTypeCodeList
			},
			{
				type: UneceTypes.PaymentTradeSettlement,
				schema: UnecePaymentTradeSettlementSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentTradeSettlement
			},
			{
				type: UneceTypes.PaymentTradeSettlementTypeCodeList,
				schema: UnecePaymentTradeSettlementTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePaymentTradeSettlementTypeCodeList
			},
			{
				type: UneceTypes.PersonalEffects,
				schema: UnecePersonalEffectsSchema,
				compiledValidator: CompiledValidators.CompiledUnecePersonalEffects
			},
			{
				type: UneceTypes.PersonalEffectsTypeCodeList,
				schema: UnecePersonalEffectsTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePersonalEffectsTypeCodeList
			},
			{
				type: UneceTypes.PersonIdentity,
				schema: UnecePersonIdentitySchema,
				compiledValidator: CompiledValidators.CompiledUnecePersonIdentity
			},
			{
				type: UneceTypes.PetAnimal,
				schema: UnecePetAnimalSchema,
				compiledValidator: CompiledValidators.CompiledUnecePetAnimal
			},
			{
				type: UneceTypes.Picture,
				schema: UnecePictureSchema,
				compiledValidator: CompiledValidators.CompiledUnecePicture
			},
			{
				type: UneceTypes.Plot,
				schema: UnecePlotSchema,
				compiledValidator: CompiledValidators.CompiledUnecePlot
			},
			{
				type: UneceTypes.Policy,
				schema: UnecePolicySchema,
				compiledValidator: CompiledValidators.CompiledUnecePolicy
			},
			{
				type: UneceTypes.Polygon,
				schema: UnecePolygonSchema,
				compiledValidator: CompiledValidators.CompiledUnecePolygon
			},
			{
				type: UneceTypes.PortMovementEvent,
				schema: UnecePortMovementEventSchema,
				compiledValidator: CompiledValidators.CompiledUnecePortMovementEvent
			},
			{
				type: UneceTypes.Preference,
				schema: UnecePreferenceSchema,
				compiledValidator: CompiledValidators.CompiledUnecePreference
			},
			{
				type: UneceTypes.PreventiveAction,
				schema: UnecePreventiveActionSchema,
				compiledValidator: CompiledValidators.CompiledUnecePreventiveAction
			},
			{
				type: UneceTypes.PreventiveActionTypeCodeList,
				schema: UnecePreventiveActionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePreventiveActionTypeCodeList
			},
			{
				type: UneceTypes.PriceTypeCodeList,
				schema: UnecePriceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePriceTypeCodeList
			},
			{
				type: UneceTypes.Print,
				schema: UnecePrintSchema,
				compiledValidator: CompiledValidators.CompiledUnecePrint
			},
			{
				type: UneceTypes.PrintTypeCodeList,
				schema: UnecePrintTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePrintTypeCodeList
			},
			{
				type: UneceTypes.PriorityDescriptionCodeList,
				schema: UnecePriorityDescriptionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUnecePriorityDescriptionCodeList
			},
			{
				type: UneceTypes.ProcessCertificate,
				schema: UneceProcessCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceProcessCertificate
			},
			{
				type: UneceTypes.ProcessCertification,
				schema: UneceProcessCertificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceProcessCertification
			},
			{
				type: UneceTypes.ProcessCharacteristic,
				schema: UneceProcessCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceProcessCharacteristic
			},
			{
				type: UneceTypes.ProcessTypeCodeList,
				schema: UneceProcessTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProcessTypeCodeList
			},
			{
				type: UneceTypes.ProcessWorkItem,
				schema: UneceProcessWorkItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceProcessWorkItem
			},
			{
				type: UneceTypes.ProcessWorkItemTypeCodeList,
				schema: UneceProcessWorkItemTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProcessWorkItemTypeCodeList
			},
			{
				type: UneceTypes.Produce,
				schema: UneceProduceSchema,
				compiledValidator: CompiledValidators.CompiledUneceProduce
			},
			{
				type: UneceTypes.ProduceTypeCodeList,
				schema: UneceProduceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProduceTypeCodeList
			},
			{
				type: UneceTypes.Product,
				schema: UneceProductSchema,
				compiledValidator: CompiledValidators.CompiledUneceProduct
			},
			{
				type: UneceTypes.ProductBatch,
				schema: UneceProductBatchSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductBatch
			},
			{
				type: UneceTypes.ProductBatchCertificate,
				schema: UneceProductBatchCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductBatchCertificate
			},
			{
				type: UneceTypes.ProductBatchCertification,
				schema: UneceProductBatchCertificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductBatchCertification
			},
			{
				type: UneceTypes.ProductBatchCharacteristic,
				schema: UneceProductBatchCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductBatchCharacteristic
			},
			{
				type: UneceTypes.ProductBatchCharacteristicTypeCodeList,
				schema: UneceProductBatchCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductBatchCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.ProductBatchTypeCodeList,
				schema: UneceProductBatchTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductBatchTypeCodeList
			},
			{
				type: UneceTypes.ProductCertificate,
				schema: UneceProductCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductCertificate
			},
			{
				type: UneceTypes.ProductCharacteristic,
				schema: UneceProductCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductCharacteristic
			},
			{
				type: UneceTypes.ProductCharacteristicCondition,
				schema: UneceProductCharacteristicConditionSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductCharacteristicCondition
			},
			{
				type: UneceTypes.ProductCharacteristicConditionTypeCodeList,
				schema: UneceProductCharacteristicConditionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductCharacteristicConditionTypeCodeList
			},
			{
				type: UneceTypes.ProductCharacteristicTypeCodeList,
				schema: UneceProductCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.ProductFinishingTreatment,
				schema: UneceProductFinishingTreatmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductFinishingTreatment
			},
			{
				type: UneceTypes.ProductFinishingTreatmentTypeCodeList,
				schema: UneceProductFinishingTreatmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductFinishingTreatmentTypeCodeList
			},
			{
				type: UneceTypes.ProductGroup,
				schema: UneceProductGroupSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductGroup
			},
			{
				type: UneceTypes.ProductHandlingProcess,
				schema: UneceProductHandlingProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductHandlingProcess
			},
			{
				type: UneceTypes.ProductInstance,
				schema: UneceProductInstanceSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductInstance
			},
			{
				type: UneceTypes.Production,
				schema: UneceProductionSchema,
				compiledValidator: CompiledValidators.CompiledUneceProduction
			},
			{
				type: UneceTypes.ProductionCycle,
				schema: UneceProductionCycleSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionCycle
			},
			{
				type: UneceTypes.ProductionDevice,
				schema: UneceProductionDeviceSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionDevice
			},
			{
				type: UneceTypes.ProductionDeviceTypeCodeList,
				schema: UneceProductionDeviceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionDeviceTypeCodeList
			},
			{
				type: UneceTypes.ProductionFacility,
				schema: UneceProductionFacilitySchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionFacility
			},
			{
				type: UneceTypes.ProductionProcess,
				schema: UneceProductionProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionProcess
			},
			{
				type: UneceTypes.ProductionUnit,
				schema: UneceProductionUnitSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionUnit
			},
			{
				type: UneceTypes.ProductionUnitTypeCodeList,
				schema: UneceProductionUnitTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionUnitTypeCodeList
			},
			{
				type: UneceTypes.ProductionWasteMaterial,
				schema: UneceProductionWasteMaterialSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionWasteMaterial
			},
			{
				type: UneceTypes.ProductionWasteMaterialComponent,
				schema: UneceProductionWasteMaterialComponentSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionWasteMaterialComponent
			},
			{
				type: UneceTypes.ProductionWasteMaterialComponentTypeCodeList,
				schema: UneceProductionWasteMaterialComponentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionWasteMaterialComponentTypeCodeList
			},
			{
				type: UneceTypes.ProductionWasteMaterialTypeCodeList,
				schema: UneceProductionWasteMaterialTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionWasteMaterialTypeCodeList
			},
			{
				type: UneceTypes.ProductionWasteRecoveryDisposalProcess,
				schema: UneceProductionWasteRecoveryDisposalProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductionWasteRecoveryDisposalProcess
			},
			{
				type: UneceTypes.ProductLabel,
				schema: UneceProductLabelSchema,
				compiledValidator: CompiledValidators.CompiledUneceProductLabel
			},
			{
				type: UneceTypes.Project,
				schema: UneceProjectSchema,
				compiledValidator: CompiledValidators.CompiledUneceProject
			},
			{
				type: UneceTypes.ProjectTypeCodeList,
				schema: UneceProjectTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceProjectTypeCodeList
			},
			{
				type: UneceTypes.ProprietaryIdentity,
				schema: UneceProprietaryIdentitySchema,
				compiledValidator: CompiledValidators.CompiledUneceProprietaryIdentity
			},
			{
				type: UneceTypes.ProtectionMeans,
				schema: UneceProtectionMeansSchema,
				compiledValidator: CompiledValidators.CompiledUneceProtectionMeans
			},
			{
				type: UneceTypes.QuantityAnalysis,
				schema: UneceQuantityAnalysisSchema,
				compiledValidator: CompiledValidators.CompiledUneceQuantityAnalysis
			},
			{
				type: UneceTypes.QuantityAnalysisTypeCodeList,
				schema: UneceQuantityAnalysisTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceQuantityAnalysisTypeCodeList
			},
			{
				type: UneceTypes.QuantityCode,
				schema: UneceQuantityCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceQuantityCode
			},
			{
				type: UneceTypes.QuantityType,
				schema: UneceQuantityTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceQuantityType
			},
			{
				type: UneceTypes.QuarantineInstructions,
				schema: UneceQuarantineInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceQuarantineInstructions
			},
			{
				type: UneceTypes.QuotationDocumentCodeList,
				schema: UneceQuotationDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceQuotationDocumentCodeList
			},
			{
				type: UneceTypes.RadioactiveIsotope,
				schema: UneceRadioactiveIsotopeSchema,
				compiledValidator: CompiledValidators.CompiledUneceRadioactiveIsotope
			},
			{
				type: UneceTypes.RadioactiveMaterial,
				schema: UneceRadioactiveMaterialSchema,
				compiledValidator: CompiledValidators.CompiledUneceRadioactiveMaterial
			},
			{
				type: UneceTypes.RadioactiveMaterialTypeCodeList,
				schema: UneceRadioactiveMaterialTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceRadioactiveMaterialTypeCodeList
			},
			{
				type: UneceTypes.Radionuclide,
				schema: UneceRadionuclideSchema,
				compiledValidator: CompiledValidators.CompiledUneceRadionuclide
			},
			{
				type: UneceTypes.Range,
				schema: UneceRangeSchema,
				compiledValidator: CompiledValidators.CompiledUneceRange
			},
			{
				type: UneceTypes.RangeTypeCodeList,
				schema: UneceRangeTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceRangeTypeCodeList
			},
			{
				type: UneceTypes.RecordedStatus,
				schema: UneceRecordedStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceRecordedStatus
			},
			{
				type: UneceTypes.ReferenceCodeList,
				schema: UneceReferenceCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceReferenceCodeList
			},
			{
				type: UneceTypes.ReferencePrice,
				schema: UneceReferencePriceSchema,
				compiledValidator: CompiledValidators.CompiledUneceReferencePrice
			},
			{
				type: UneceTypes.RefundMethodCodeList,
				schema: UneceRefundMethodCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceRefundMethodCodeList
			},
			{
				type: UneceTypes.RegisteredTax,
				schema: UneceRegisteredTaxSchema,
				compiledValidator: CompiledValidators.CompiledUneceRegisteredTax
			},
			{
				type: UneceTypes.RegulatedGoods,
				schema: UneceRegulatedGoodsSchema,
				compiledValidator: CompiledValidators.CompiledUneceRegulatedGoods
			},
			{
				type: UneceTypes.RegulatoryProcedure,
				schema: UneceRegulatoryProcedureSchema,
				compiledValidator: CompiledValidators.CompiledUneceRegulatoryProcedure
			},
			{
				type: UneceTypes.RemittanceDocumentCodeList,
				schema: UneceRemittanceDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceRemittanceDocumentCodeList
			},
			{
				type: UneceTypes.RepresentativePerson,
				schema: UneceRepresentativePersonSchema,
				compiledValidator: CompiledValidators.CompiledUneceRepresentativePerson
			},
			{
				type: UneceTypes.RequestingParty,
				schema: UneceRequestingPartySchema,
				compiledValidator: CompiledValidators.CompiledUneceRequestingParty
			},
			{
				type: UneceTypes.Requirement,
				schema: UneceRequirementSchema,
				compiledValidator: CompiledValidators.CompiledUneceRequirement
			},
			{
				type: UneceTypes.RequirementTypeCodeList,
				schema: UneceRequirementTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceRequirementTypeCodeList
			},
			{
				type: UneceTypes.Response,
				schema: UneceResponseSchema,
				compiledValidator: CompiledValidators.CompiledUneceResponse
			},
			{
				type: UneceTypes.ResponseTypeCodeList,
				schema: UneceResponseTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceResponseTypeCodeList
			},
			{
				type: UneceTypes.ResponsibleGovernmentAgencyCodeList,
				schema: UneceResponsibleGovernmentAgencyCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceResponsibleGovernmentAgencyCodeList
			},
			{
				type: UneceTypes.ResponsibleGovernmentAgencyInvolvementCodeList,
				schema: UneceResponsibleGovernmentAgencyInvolvementCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceResponsibleGovernmentAgencyInvolvementCodeList
			},
			{
				type: UneceTypes.ReturnableAssetInstructions,
				schema: UneceReturnableAssetInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceReturnableAssetInstructions
			},
			{
				type: UneceTypes.RiskAnalysisResult,
				schema: UneceRiskAnalysisResultSchema,
				compiledValidator: CompiledValidators.CompiledUneceRiskAnalysisResult
			},
			{
				type: UneceTypes.SanitaryMeasure,
				schema: UneceSanitaryMeasureSchema,
				compiledValidator: CompiledValidators.CompiledUneceSanitaryMeasure
			},
			{
				type: UneceTypes.SanitaryMeasureTypeCodeList,
				schema: UneceSanitaryMeasureTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSanitaryMeasureTypeCodeList
			},
			{
				type: UneceTypes.ScenarioTypeCodeList,
				schema: UneceScenarioTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceScenarioTypeCodeList
			},
			{
				type: UneceTypes.Schedule,
				schema: UneceScheduleSchema,
				compiledValidator: CompiledValidators.CompiledUneceSchedule
			},
			{
				type: UneceTypes.ScheduleTypeCodeList,
				schema: UneceScheduleTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceScheduleTypeCodeList
			},
			{
				type: UneceTypes.SchedulingDocumentCodeList,
				schema: UneceSchedulingDocumentCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSchedulingDocumentCodeList
			},
			{
				type: UneceTypes.Seal,
				schema: UneceSealSchema,
				compiledValidator: CompiledValidators.CompiledUneceSeal
			},
			{
				type: UneceTypes.SealConditionCodeList,
				schema: UneceSealConditionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSealConditionCodeList
			},
			{
				type: UneceTypes.SealingPartyRoleCodeList,
				schema: UneceSealingPartyRoleCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSealingPartyRoleCodeList
			},
			{
				type: UneceTypes.Section,
				schema: UneceSectionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSection
			},
			{
				type: UneceTypes.SecurityTag,
				schema: UneceSecurityTagSchema,
				compiledValidator: CompiledValidators.CompiledUneceSecurityTag
			},
			{
				type: UneceTypes.SecurityTagTypeCodeList,
				schema: UneceSecurityTagTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSecurityTagTypeCodeList
			},
			{
				type: UneceTypes.Segment,
				schema: UneceSegmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceSegment
			},
			{
				type: UneceTypes.SegmentTypeCodeList,
				schema: UneceSegmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSegmentTypeCodeList
			},
			{
				type: UneceTypes.Sensor,
				schema: UneceSensorSchema,
				compiledValidator: CompiledValidators.CompiledUneceSensor
			},
			{
				type: UneceTypes.SensorTypeCodeList,
				schema: UneceSensorTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSensorTypeCodeList
			},
			{
				type: UneceTypes.Service,
				schema: UneceServiceSchema,
				compiledValidator: CompiledValidators.CompiledUneceService
			},
			{
				type: UneceTypes.ServiceCharge,
				schema: UneceServiceChargeSchema,
				compiledValidator: CompiledValidators.CompiledUneceServiceCharge
			},
			{
				type: UneceTypes.ShippingMarks,
				schema: UneceShippingMarksSchema,
				compiledValidator: CompiledValidators.CompiledUneceShippingMarks
			},
			{
				type: UneceTypes.SoftwareUserTypeCodeList,
				schema: UneceSoftwareUserTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSoftwareUserTypeCodeList
			},
			{
				type: UneceTypes.Source,
				schema: UneceSourceSchema,
				compiledValidator: CompiledValidators.CompiledUneceSource
			},
			{
				type: UneceTypes.SpatialDimension,
				schema: UneceSpatialDimensionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpatialDimension
			},
			{
				type: UneceTypes.SpecialQuery,
				schema: UneceSpecialQuerySchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecialQuery
			},
			{
				type: UneceTypes.SpeciesTTAnimal,
				schema: UneceSpeciesTTAnimalSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpeciesTTAnimal
			},
			{
				type: UneceTypes.SpecificationQuery,
				schema: UneceSpecificationQuerySchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecificationQuery
			},
			{
				type: UneceTypes.SpecificationQueryTypeCodeList,
				schema: UneceSpecificationQueryTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecificationQueryTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedAction,
				schema: UneceSpecifiedActionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedAction
			},
			{
				type: UneceTypes.SpecifiedActionTypeCodeList,
				schema: UneceSpecifiedActionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedActionTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedCertificate,
				schema: UneceSpecifiedCertificateSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedCertificate
			},
			{
				type: UneceTypes.SpecifiedCertification,
				schema: UneceSpecifiedCertificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedCertification
			},
			{
				type: UneceTypes.SpecifiedChemicalTreatment,
				schema: UneceSpecifiedChemicalTreatmentSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedChemicalTreatment
			},
			{
				type: UneceTypes.SpecifiedChemicalTreatmentTypeCodeList,
				schema: UneceSpecifiedChemicalTreatmentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedChemicalTreatmentTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedCondition,
				schema: UneceSpecifiedConditionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedCondition
			},
			{
				type: UneceTypes.SpecifiedDeclaration,
				schema: UneceSpecifiedDeclarationSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedDeclaration
			},
			{
				type: UneceTypes.SpecifiedDeclarationTypeCodeList,
				schema: UneceSpecifiedDeclarationTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedDeclarationTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedFault,
				schema: UneceSpecifiedFaultSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedFault
			},
			{
				type: UneceTypes.SpecifiedFaultTypeCodeList,
				schema: UneceSpecifiedFaultTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedFaultTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedFeature,
				schema: UneceSpecifiedFeatureSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedFeature
			},
			{
				type: UneceTypes.SpecifiedFeatureTypeCodeList,
				schema: UneceSpecifiedFeatureTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedFeatureTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedInspection,
				schema: UneceSpecifiedInspectionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedInspection
			},
			{
				type: UneceTypes.SpecifiedInspectionTypeCodeList,
				schema: UneceSpecifiedInspectionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedInspectionTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedLocation,
				schema: UneceSpecifiedLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedLocation
			},
			{
				type: UneceTypes.SpecifiedMaterial,
				schema: UneceSpecifiedMaterialSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedMaterial
			},
			{
				type: UneceTypes.SpecifiedMaterialTypeCodeList,
				schema: UneceSpecifiedMaterialTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedMaterialTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedMethod,
				schema: UneceSpecifiedMethodSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedMethod
			},
			{
				type: UneceTypes.SpecifiedNote,
				schema: UneceSpecifiedNoteSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedNote
			},
			{
				type: UneceTypes.SpecifiedParameter,
				schema: UneceSpecifiedParameterSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedParameter
			},
			{
				type: UneceTypes.SpecifiedParameterTypeCodeList,
				schema: UneceSpecifiedParameterTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedParameterTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedPeriod,
				schema: UneceSpecifiedPeriodSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedPeriod
			},
			{
				type: UneceTypes.SpecifiedPeriodTypeCodeList,
				schema: UneceSpecifiedPeriodTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedPeriodTypeCodeList
			},
			{
				type: UneceTypes.SpecifiedQualification,
				schema: UneceSpecifiedQualificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedQualification
			},
			{
				type: UneceTypes.SpecifiedRoute,
				schema: UneceSpecifiedRouteSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedRoute
			},
			{
				type: UneceTypes.SpecifiedTemperature,
				schema: UneceSpecifiedTemperatureSchema,
				compiledValidator: CompiledValidators.CompiledUneceSpecifiedTemperature
			},
			{
				type: UneceTypes.Standard,
				schema: UneceStandardSchema,
				compiledValidator: CompiledValidators.CompiledUneceStandard
			},
			{
				type: UneceTypes.StandardTypeCodeList,
				schema: UneceStandardTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceStandardTypeCodeList
			},
			{
				type: UneceTypes.StatusCodeList,
				schema: UneceStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceStatusCodeList
			},
			{
				type: UneceTypes.StoresItemInventory,
				schema: UneceStoresItemInventorySchema,
				compiledValidator: CompiledValidators.CompiledUneceStoresItemInventory
			},
			{
				type: UneceTypes.StoresItemInventoryTypeCodeList,
				schema: UneceStoresItemInventoryTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceStoresItemInventoryTypeCodeList
			},
			{
				type: UneceTypes.Stowaway,
				schema: UneceStowawaySchema,
				compiledValidator: CompiledValidators.CompiledUneceStowaway
			},
			{
				type: UneceTypes.SubjectCodeList,
				schema: UneceSubjectCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSubjectCodeList
			},
			{
				type: UneceTypes.SubordinateLineTradeAgreement,
				schema: UneceSubordinateLineTradeAgreementSchema,
				compiledValidator: CompiledValidators.CompiledUneceSubordinateLineTradeAgreement
			},
			{
				type: UneceTypes.SubordinateLineTradeDelivery,
				schema: UneceSubordinateLineTradeDeliverySchema,
				compiledValidator: CompiledValidators.CompiledUneceSubordinateLineTradeDelivery
			},
			{
				type: UneceTypes.SubordinateLineTradeSettlement,
				schema: UneceSubordinateLineTradeSettlementSchema,
				compiledValidator: CompiledValidators.CompiledUneceSubordinateLineTradeSettlement
			},
			{
				type: UneceTypes.SubordinateLocation,
				schema: UneceSubordinateLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceSubordinateLocation
			},
			{
				type: UneceTypes.SubordinateSubordinateLocation,
				schema: UneceSubordinateSubordinateLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceSubordinateSubordinateLocation
			},
			{
				type: UneceTypes.SubordinateTradeLineItem,
				schema: UneceSubordinateTradeLineItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceSubordinateTradeLineItem
			},
			{
				type: UneceTypes.SupplyChainEvent,
				schema: UneceSupplyChainEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainEvent
			},
			{
				type: UneceTypes.SupplyChainEventTypeCodeList,
				schema: UneceSupplyChainEventTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainEventTypeCodeList
			},
			{
				type: UneceTypes.SupplyChainInventory,
				schema: UneceSupplyChainInventorySchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainInventory
			},
			{
				type: UneceTypes.SupplyChainPackaging,
				schema: UneceSupplyChainPackagingSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainPackaging
			},
			{
				type: UneceTypes.SupplyChainReference,
				schema: UneceSupplyChainReferenceSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainReference
			},
			{
				type: UneceTypes.SupplyChainReferenceTypeCodeList,
				schema: UneceSupplyChainReferenceTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainReferenceTypeCodeList
			},
			{
				type: UneceTypes.SupplyChainTradeLineItem,
				schema: UneceSupplyChainTradeLineItemSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainTradeLineItem
			},
			{
				type: UneceTypes.SupplyChainTradeLineItemTypeCodeList,
				schema: UneceSupplyChainTradeLineItemTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainTradeLineItemTypeCodeList
			},
			{
				type: UneceTypes.SupplyChainTradeTransaction,
				schema: UneceSupplyChainTradeTransactionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainTradeTransaction
			},
			{
				type: UneceTypes.SupplyChainTradeTransactionTypeCodeList,
				schema: UneceSupplyChainTradeTransactionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyChainTradeTransactionTypeCodeList
			},
			{
				type: UneceTypes.SupplyPlan,
				schema: UneceSupplyPlanSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyPlan
			},
			{
				type: UneceTypes.SupplyPlanTypeCodeList,
				schema: UneceSupplyPlanTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSupplyPlanTypeCodeList
			},
			{
				type: UneceTypes.SustainabilityCharacteristic,
				schema: UneceSustainabilityCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceSustainabilityCharacteristic
			},
			{
				type: UneceTypes.SustainabilityCharacteristicTypeCodeList,
				schema: UneceSustainabilityCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSustainabilityCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.SustainabilityInspection,
				schema: UneceSustainabilityInspectionSchema,
				compiledValidator: CompiledValidators.CompiledUneceSustainabilityInspection
			},
			{
				type: UneceTypes.SustainabilityInspectionTypeCodeList,
				schema: UneceSustainabilityInspectionTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceSustainabilityInspectionTypeCodeList
			},
			{
				type: UneceTypes.TaxCategoryCodeList,
				schema: UneceTaxCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTaxCategoryCodeList
			},
			{
				type: UneceTypes.TaxExemptionReasonCodeList,
				schema: UneceTaxExemptionReasonCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTaxExemptionReasonCodeList
			},
			{
				type: UneceTypes.TaxRegistration,
				schema: UneceTaxRegistrationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTaxRegistration
			},
			{
				type: UneceTypes.TaxTypeCodeList,
				schema: UneceTaxTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTaxTypeCodeList
			},
			{
				type: UneceTypes.TechnicalCharacteristic,
				schema: UneceTechnicalCharacteristicSchema,
				compiledValidator: CompiledValidators.CompiledUneceTechnicalCharacteristic
			},
			{
				type: UneceTypes.TechnicalCharacteristicTypeCodeList,
				schema: UneceTechnicalCharacteristicTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTechnicalCharacteristicTypeCodeList
			},
			{
				type: UneceTypes.TemperatureSettingInstructions,
				schema: UneceTemperatureSettingInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceTemperatureSettingInstructions
			},
			{
				type: UneceTypes.TemperatureTypeCodeList,
				schema: UneceTemperatureTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTemperatureTypeCodeList
			},
			{
				type: UneceTypes.TemperatureUnitMeasureCode,
				schema: UneceTemperatureUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceTemperatureUnitMeasureCode
			},
			{
				type: UneceTypes.TemperatureUnitMeasureType,
				schema: UneceTemperatureUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceTemperatureUnitMeasureType
			},
			{
				type: UneceTypes.TestSpecificationReport,
				schema: UneceTestSpecificationReportSchema,
				compiledValidator: CompiledValidators.CompiledUneceTestSpecificationReport
			},
			{
				type: UneceTypes.TimeReferenceCodeList,
				schema: UneceTimeReferenceCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTimeReferenceCodeList
			},
			{
				type: UneceTypes.Tolerance,
				schema: UneceToleranceSchema,
				compiledValidator: CompiledValidators.CompiledUneceTolerance
			},
			{
				type: UneceTypes.TradeAddress,
				schema: UneceTradeAddressSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeAddress
			},
			{
				type: UneceTypes.TradeAllowanceCharge,
				schema: UneceTradeAllowanceChargeSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeAllowanceCharge
			},
			{
				type: UneceTypes.TradeContact,
				schema: UneceTradeContactSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeContact
			},
			{
				type: UneceTypes.TradeLocation,
				schema: UneceTradeLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeLocation
			},
			{
				type: UneceTypes.TradeParty,
				schema: UneceTradePartySchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeParty
			},
			{
				type: UneceTypes.TradePrice,
				schema: UneceTradePriceSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradePrice
			},
			{
				type: UneceTypes.TradeProduct,
				schema: UneceTradeProductSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeProduct
			},
			{
				type: UneceTypes.TradeProductCertification,
				schema: UneceTradeProductCertificationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeProductCertification
			},
			{
				type: UneceTypes.TradeProductFeature,
				schema: UneceTradeProductFeatureSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeProductFeature
			},
			{
				type: UneceTypes.TradeProductFeatureTypeCodeList,
				schema: UneceTradeProductFeatureTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeProductFeatureTypeCodeList
			},
			{
				type: UneceTypes.TradeProductTypeCodeList,
				schema: UneceTradeProductTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeProductTypeCodeList
			},
			{
				type: UneceTypes.TradeSettlementHeaderMonetarySummation,
				schema: UneceTradeSettlementHeaderMonetarySummationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeSettlementHeaderMonetarySummation
			},
			{
				type: UneceTypes.TradeSettlementLineMonetarySummation,
				schema: UneceTradeSettlementLineMonetarySummationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeSettlementLineMonetarySummation
			},
			{
				type: UneceTypes.TradeSettlementMonetarySummation,
				schema: UneceTradeSettlementMonetarySummationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeSettlementMonetarySummation
			},
			{
				type: UneceTypes.TradeSettlementPayment,
				schema: UneceTradeSettlementPaymentSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeSettlementPayment
			},
			{
				type: UneceTypes.TradeSettlementPaymentMonetarySummation,
				schema: UneceTradeSettlementPaymentMonetarySummationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeSettlementPaymentMonetarySummation
			},
			{
				type: UneceTypes.TradeTax,
				schema: UneceTradeTaxSchema,
				compiledValidator: CompiledValidators.CompiledUneceTradeTax
			},
			{
				type: UneceTypes.TransportationHealth,
				schema: UneceTransportationHealthSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportationHealth
			},
			{
				type: UneceTypes.TransportationWasteMaterial,
				schema: UneceTransportationWasteMaterialSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportationWasteMaterial
			},
			{
				type: UneceTypes.TransportationWasteMaterialComponent,
				schema: UneceTransportationWasteMaterialComponentSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportationWasteMaterialComponent
			},
			{
				type: UneceTypes.TransportationWasteMaterialComponentTypeCodeList,
				schema: UneceTransportationWasteMaterialComponentTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportationWasteMaterialComponentTypeCodeList
			},
			{
				type: UneceTypes.TransportationWasteMaterialTypeCodeList,
				schema: UneceTransportationWasteMaterialTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportationWasteMaterialTypeCodeList
			},
			{
				type: UneceTypes.TransportationWasteRecoveryDisposalProcess,
				schema: UneceTransportationWasteRecoveryDisposalProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportationWasteRecoveryDisposalProcess
			},
			{
				type: UneceTypes.TransportContractMovementCodeList,
				schema: UneceTransportContractMovementCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportContractMovementCodeList
			},
			{
				type: UneceTypes.TransportEquipmentCategoryCodeList,
				schema: UneceTransportEquipmentCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentCategoryCodeList
			},
			{
				type: UneceTypes.TransportEquipmentFullnessCodeList,
				schema: UneceTransportEquipmentFullnessCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentFullnessCodeList
			},
			{
				type: UneceTypes.TransportEquipmentHaulageArrangementsCodeList,
				schema: UneceTransportEquipmentHaulageArrangementsCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentHaulageArrangementsCodeList
			},
			{
				type: UneceTypes.TransportEquipmentLegalStatusCodeList,
				schema: UneceTransportEquipmentLegalStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentLegalStatusCodeList
			},
			{
				type: UneceTypes.TransportEquipmentMovementStatusCodeList,
				schema: UneceTransportEquipmentMovementStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentMovementStatusCodeList
			},
			{
				type: UneceTypes.TransportEquipmentOperationalStatusCodeList,
				schema: UneceTransportEquipmentOperationalStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentOperationalStatusCodeList
			},
			{
				type: UneceTypes.TransportEquipmentSizeTypeCodeList,
				schema: UneceTransportEquipmentSizeTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentSizeTypeCodeList
			},
			{
				type: UneceTypes.TransportEquipmentSupplierPartyRoleCodeList,
				schema: UneceTransportEquipmentSupplierPartyRoleCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEquipmentSupplierPartyRoleCodeList
			},
			{
				type: UneceTypes.TransportEvent,
				schema: UneceTransportEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEvent
			},
			{
				type: UneceTypes.TransportEventTypeCodeList,
				schema: UneceTransportEventTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportEventTypeCodeList
			},
			{
				type: UneceTypes.TransportInstructions,
				schema: UneceTransportInstructionsSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportInstructions
			},
			{
				type: UneceTypes.TransportMeans,
				schema: UneceTransportMeansSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportMeans
			},
			{
				type: UneceTypes.TransportMeansDirectionCodeList,
				schema: UneceTransportMeansDirectionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportMeansDirectionCodeList
			},
			{
				type: UneceTypes.TransportMeansTypeCodeList,
				schema: UneceTransportMeansTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportMeansTypeCodeList
			},
			{
				type: UneceTypes.TransportModeCodeList,
				schema: UneceTransportModeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportModeCodeList
			},
			{
				type: UneceTypes.TransportMovement,
				schema: UneceTransportMovementSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportMovement
			},
			{
				type: UneceTypes.TransportMovementStageCodeList,
				schema: UneceTransportMovementStageCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportMovementStageCodeList
			},
			{
				type: UneceTypes.TransportMovementTypeCodeList,
				schema: UneceTransportMovementTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportMovementTypeCodeList
			},
			{
				type: UneceTypes.TransportPerson,
				schema: UneceTransportPersonSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportPerson
			},
			{
				type: UneceTypes.TransportRoute,
				schema: UneceTransportRouteSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportRoute
			},
			{
				type: UneceTypes.TransportServiceCategoryCodeList,
				schema: UneceTransportServiceCategoryCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportServiceCategoryCodeList
			},
			{
				type: UneceTypes.TransportServiceConditionCodeList,
				schema: UneceTransportServiceConditionCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportServiceConditionCodeList
			},
			{
				type: UneceTypes.TransportServiceLocation,
				schema: UneceTransportServiceLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportServiceLocation
			},
			{
				type: UneceTypes.TransportServicePaymentArrangementCodeList,
				schema: UneceTransportServicePaymentArrangementCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportServicePaymentArrangementCodeList
			},
			{
				type: UneceTypes.TransportServicePriorityCodeList,
				schema: UneceTransportServicePriorityCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportServicePriorityCodeList
			},
			{
				type: UneceTypes.TransportServiceRequirementCodeList,
				schema: UneceTransportServiceRequirementCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportServiceRequirementCodeList
			},
			{
				type: UneceTypes.TransportSettingTemperature,
				schema: UneceTransportSettingTemperatureSchema,
				compiledValidator: CompiledValidators.CompiledUneceTransportSettingTemperature
			},
			{
				type: UneceTypes.TTAggregationEvent,
				schema: UneceTTAggregationEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTAggregationEvent
			},
			{
				type: UneceTypes.TTAnimal,
				schema: UneceTTAnimalSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTAnimal
			},
			{
				type: UneceTypes.TTExchangedDocument,
				schema: UneceTTExchangedDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTExchangedDocument
			},
			{
				type: UneceTypes.TTLocation,
				schema: UneceTTLocationSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTLocation
			},
			{
				type: UneceTypes.TTObjectEvent,
				schema: UneceTTObjectEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTObjectEvent
			},
			{
				type: UneceTypes.TTParty,
				schema: UneceTTPartySchema,
				compiledValidator: CompiledValidators.CompiledUneceTTParty
			},
			{
				type: UneceTypes.TTTradeTransaction,
				schema: UneceTTTradeTransactionSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTTradeTransaction
			},
			{
				type: UneceTypes.TTTransactionEvent,
				schema: UneceTTTransactionEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTTransactionEvent
			},
			{
				type: UneceTypes.TTTransformationEvent,
				schema: UneceTTTransformationEventSchema,
				compiledValidator: CompiledValidators.CompiledUneceTTTransformationEvent
			},
			{
				type: UneceTypes.UnitMeasureCode,
				schema: UneceUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceUnitMeasureCode
			},
			{
				type: UneceTypes.UnitMeasureType,
				schema: UneceUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceUnitMeasureType
			},
			{
				type: UneceTypes.UsageCondition,
				schema: UneceUsageConditionSchema,
				compiledValidator: CompiledValidators.CompiledUneceUsageCondition
			},
			{
				type: UneceTypes.ValidationDocumentStatusCodeList,
				schema: UneceValidationDocumentStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceValidationDocumentStatusCodeList
			},
			{
				type: UneceTypes.ValidationStatus,
				schema: UneceValidationStatusSchema,
				compiledValidator: CompiledValidators.CompiledUneceValidationStatus
			},
			{
				type: UneceTypes.Version,
				schema: UneceVersionSchema,
				compiledValidator: CompiledValidators.CompiledUneceVersion
			},
			{
				type: UneceTypes.VolumeUnitMeasureCode,
				schema: UneceVolumeUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceVolumeUnitMeasureCode
			},
			{
				type: UneceTypes.VolumeUnitMeasureType,
				schema: UneceVolumeUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceVolumeUnitMeasureType
			},
			{
				type: UneceTypes.Voucher,
				schema: UneceVoucherSchema,
				compiledValidator: CompiledValidators.CompiledUneceVoucher
			},
			{
				type: UneceTypes.VoucherTypeCodeList,
				schema: UneceVoucherTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceVoucherTypeCodeList
			},
			{
				type: UneceTypes.WasteMaterialRecoveryDisposalProcess,
				schema: UneceWasteMaterialRecoveryDisposalProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceWasteMaterialRecoveryDisposalProcess
			},
			{
				type: UneceTypes.WasteOriginProcess,
				schema: UneceWasteOriginProcessSchema,
				compiledValidator: CompiledValidators.CompiledUneceWasteOriginProcess
			},
			{
				type: UneceTypes.WeightUnitMeasureCode,
				schema: UneceWeightUnitMeasureCodeSchema,
				compiledValidator: CompiledValidators.CompiledUneceWeightUnitMeasureCode
			},
			{
				type: UneceTypes.WeightUnitMeasureType,
				schema: UneceWeightUnitMeasureTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceWeightUnitMeasureType
			},
			{
				type: UneceTypes.WorkflowObject,
				schema: UneceWorkflowObjectSchema,
				compiledValidator: CompiledValidators.CompiledUneceWorkflowObject
			},
			{
				type: UneceTypes.WorkflowStatusCodeList,
				schema: UneceWorkflowStatusCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceWorkflowStatusCodeList
			},
			{
				type: UneceTypes.WorkItemDimension,
				schema: UneceWorkItemDimensionSchema,
				compiledValidator: CompiledValidators.CompiledUneceWorkItemDimension
			},
			{
				type: UneceTypes.XHEContext,
				schema: UneceXHEContextSchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEContext
			},
			{
				type: UneceTypes.XHEDocument,
				schema: UneceXHEDocumentSchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEDocument
			},
			{
				type: UneceTypes.XHEIdentity,
				schema: UneceXHEIdentitySchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEIdentity
			},
			{
				type: UneceTypes.XHEParameter,
				schema: UneceXHEParameterSchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEParameter
			},
			{
				type: UneceTypes.XHEParameterTypeCodeList,
				schema: UneceXHEParameterTypeCodeListSchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEParameterTypeCodeList
			},
			{
				type: UneceTypes.XHEParty,
				schema: UneceXHEPartySchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEParty
			},
			{
				type: UneceTypes.XHEReference,
				schema: UneceXHEReferenceSchema,
				compiledValidator: CompiledValidators.CompiledUneceXHEReference
			},
			{
				type: "ContextType",
				schema: UneceContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledUneceContextType
			}
		];

		DataTypeHelper.registerTypes(UneceContexts.Namespace, UneceContexts.JsonLdContext, types);
		DataTypeHelper.registerTypes(
			UneceContexts.JsonSchemaNamespace,
			UneceContexts.JsonLdContext,
			types.map(t => ({ type: `Unece${t.type}`, schema: t.schema, compiledValidator: t.compiledValidator }))
		);
	}
}
