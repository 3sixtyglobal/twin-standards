// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
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
import UneceAgriculturalProcessSchema from "../schemas/UneceAgriculturalProcess.json" with { type: "json" };
import UneceAgriculturalZoneAreaSchema from "../schemas/UneceAgriculturalZoneArea.json" with { type: "json" };
import UneceAirFlowUnitMeasureCodeSchema from "../schemas/UneceAirFlowUnitMeasureCode.json" with { type: "json" };
import UneceAirFlowUnitMeasureTypeSchema from "../schemas/UneceAirFlowUnitMeasureType.json" with { type: "json" };
import UneceAllergySchema from "../schemas/UneceAllergy.json" with { type: "json" };
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
import UneceAnimalIdentitySchema from "../schemas/UneceAnimalIdentity.json" with { type: "json" };
import UneceAppliedAllowanceChargeSchema from "../schemas/UneceAppliedAllowanceCharge.json" with { type: "json" };
import UneceAppliedChemicalTreatmentSchema from "../schemas/UneceAppliedChemicalTreatment.json" with { type: "json" };
import UneceAppliedTaxSchema from "../schemas/UneceAppliedTax.json" with { type: "json" };
import UneceAreaSchema from "../schemas/UneceArea.json" with { type: "json" };
import UneceAssertionSchema from "../schemas/UneceAssertion.json" with { type: "json" };
import UneceAssessmentSchema from "../schemas/UneceAssessment.json" with { type: "json" };
import UneceAssociatedTransportEquipmentSchema from "../schemas/UneceAssociatedTransportEquipment.json" with { type: "json" };
import UneceAttachedTransportEquipmentSchema from "../schemas/UneceAttachedTransportEquipment.json" with { type: "json" };
import UneceAuthenticationSchema from "../schemas/UneceAuthentication.json" with { type: "json" };
import UneceAuthoritativeSignatoryPersonSchema from "../schemas/UneceAuthoritativeSignatoryPerson.json" with { type: "json" };
import UneceAutomaticDataCaptureMethodCodeListSchema from "../schemas/UneceAutomaticDataCaptureMethodCodeList.json" with { type: "json" };
import UneceAvailablePeriodSchema from "../schemas/UneceAvailablePeriod.json" with { type: "json" };
import UneceBasicWorkItemSchema from "../schemas/UneceBasicWorkItem.json" with { type: "json" };
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
import UneceCancellationStatusSchema from "../schemas/UneceCancellationStatus.json" with { type: "json" };
import UneceCargoSchema from "../schemas/UneceCargo.json" with { type: "json" };
import UneceCargoCategoryCodeListSchema from "../schemas/UneceCargoCategoryCodeList.json" with { type: "json" };
import UneceCargoCommodityCategoryCodeListSchema from "../schemas/UneceCargoCommodityCategoryCodeList.json" with { type: "json" };
import UneceCargoInsuranceSchema from "../schemas/UneceCargoInsurance.json" with { type: "json" };
import UneceCargoOperationalCategoryCodeListSchema from "../schemas/UneceCargoOperationalCategoryCodeList.json" with { type: "json" };
import UneceCargoTypeClassificationCodeListSchema from "../schemas/UneceCargoTypeClassificationCodeList.json" with { type: "json" };
import UneceCarriedEquipmentSchema from "../schemas/UneceCarriedEquipment.json" with { type: "json" };
import UneceCashSchema from "../schemas/UneceCash.json" with { type: "json" };
import UneceCertificateTypeCodeListSchema from "../schemas/UneceCertificateTypeCodeList.json" with { type: "json" };
import UneceChargePayingPartyRoleCodeListSchema from "../schemas/UneceChargePayingPartyRoleCodeList.json" with { type: "json" };
import UneceChemicalSchema from "../schemas/UneceChemical.json" with { type: "json" };
import UneceChequeSchema from "../schemas/UneceCheque.json" with { type: "json" };
import UneceCircleSchema from "../schemas/UneceCircle.json" with { type: "json" };
import UneceClassificationSchema from "../schemas/UneceClassification.json" with { type: "json" };
import UneceClauseSchema from "../schemas/UneceClause.json" with { type: "json" };
import UneceCodeListResponsibleAgencyCodeListSchema from "../schemas/UneceCodeListResponsibleAgencyCodeList.json" with { type: "json" };
import UneceColourSchema from "../schemas/UneceColour.json" with { type: "json" };
import UneceCommitmentLevelCodeListSchema from "../schemas/UneceCommitmentLevelCodeList.json" with { type: "json" };
import UneceCommunicationSchema from "../schemas/UneceCommunication.json" with { type: "json" };
import UneceCommunicationChannelCodeListSchema from "../schemas/UneceCommunicationChannelCodeList.json" with { type: "json" };
import UneceCommunicationEventSchema from "../schemas/UneceCommunicationEvent.json" with { type: "json" };
import UneceComplexDescriptionSchema from "../schemas/UneceComplexDescription.json" with { type: "json" };
import UneceConformanceCertificateSchema from "../schemas/UneceConformanceCertificate.json" with { type: "json" };
import UneceConsignmentSchema from "../schemas/UneceConsignment.json" with { type: "json" };
import UneceConsignmentItemSchema from "../schemas/UneceConsignmentItem.json" with { type: "json" };
import UneceContactPersonSchema from "../schemas/UneceContactPerson.json" with { type: "json" };
import UneceContactTypeCodeListSchema from "../schemas/UneceContactTypeCodeList.json" with { type: "json" };
import UneceContractSchema from "../schemas/UneceContract.json" with { type: "json" };
import UneceControlSettingParameterSchema from "../schemas/UneceControlSettingParameter.json" with { type: "json" };
import UneceConvoySchema from "../schemas/UneceConvoy.json" with { type: "json" };
import UneceCooperatingOrganizationSchema from "../schemas/UneceCooperatingOrganization.json" with { type: "json" };
import UneceCoordinateReferenceSystemSchema from "../schemas/UneceCoordinateReferenceSystem.json" with { type: "json" };
import UneceCoordinateSourceSystemSchema from "../schemas/UneceCoordinateSourceSystem.json" with { type: "json" };
import UneceCorrectiveActionSchema from "../schemas/UneceCorrectiveAction.json" with { type: "json" };
import UneceCorrectiveEventSchema from "../schemas/UneceCorrectiveEvent.json" with { type: "json" };
import UneceCountrySchema from "../schemas/UneceCountry.json" with { type: "json" };
import UneceCountryIdSchema from "../schemas/UneceCountryId.json" with { type: "json" };
import UneceCountrySubDivisionSchema from "../schemas/UneceCountrySubDivision.json" with { type: "json" };
import UneceCreditorFinancialAccountSchema from "../schemas/UneceCreditorFinancialAccount.json" with { type: "json" };
import UneceCreditorFinancialInstitutionSchema from "../schemas/UneceCreditorFinancialInstitution.json" with { type: "json" };
import UneceCropMixtureConstituentSchema from "../schemas/UneceCropMixtureConstituent.json" with { type: "json" };
import UneceCropProduceBatchSchema from "../schemas/UneceCropProduceBatch.json" with { type: "json" };
import UneceCropProtectionTreatmentSchema from "../schemas/UneceCropProtectionTreatment.json" with { type: "json" };
import UneceCurrencyCodeListSchema from "../schemas/UneceCurrencyCodeList.json" with { type: "json" };
import UneceCurrencyExchangeSchema from "../schemas/UneceCurrencyExchange.json" with { type: "json" };
import UneceCustomerClassSchema from "../schemas/UneceCustomerClass.json" with { type: "json" };
import UneceCustomsDutyRegimeTypeCodeListSchema from "../schemas/UneceCustomsDutyRegimeTypeCodeList.json" with { type: "json" };
import UneceCustomsProcedureGuaranteeCodeListSchema from "../schemas/UneceCustomsProcedureGuaranteeCodeList.json" with { type: "json" };
import UneceCustomsValuationSchema from "../schemas/UneceCustomsValuation.json" with { type: "json" };
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
import UneceDimensionTypeCodeListSchema from "../schemas/UneceDimensionTypeCodeList.json" with { type: "json" };
import UneceDirectPositionSchema from "../schemas/UneceDirectPosition.json" with { type: "json" };
import UneceDisabilitySchema from "../schemas/UneceDisability.json" with { type: "json" };
import UneceDisposalInstructionsSchema from "../schemas/UneceDisposalInstructions.json" with { type: "json" };
import UneceDocumentSchema from "../schemas/UneceDocument.json" with { type: "json" };
import UneceDocumentCharacteristicSchema from "../schemas/UneceDocumentCharacteristic.json" with { type: "json" };
import UneceDocumentCodeListSchema from "../schemas/UneceDocumentCodeList.json" with { type: "json" };
import UneceDocumentContextParameterSchema from "../schemas/UneceDocumentContextParameter.json" with { type: "json" };
import UneceDocumentHandlingInstructionsSchema from "../schemas/UneceDocumentHandlingInstructions.json" with { type: "json" };
import UneceDocumentLineDocumentSchema from "../schemas/UneceDocumentLineDocument.json" with { type: "json" };
import UneceDocumentStatusSchema from "../schemas/UneceDocumentStatus.json" with { type: "json" };
import UneceDocumentStatusCodeListSchema from "../schemas/UneceDocumentStatusCodeList.json" with { type: "json" };
import UneceDurationUnitMeasureCodeSchema from "../schemas/UneceDurationUnitMeasureCode.json" with { type: "json" };
import UneceDurationUnitMeasureTypeSchema from "../schemas/UneceDurationUnitMeasureType.json" with { type: "json" };
import UneceEmissionSchema from "../schemas/UneceEmission.json" with { type: "json" };
import UneceEmployerIdentitySchema from "../schemas/UneceEmployerIdentity.json" with { type: "json" };
import UneceEnvelopeSchema from "../schemas/UneceEnvelope.json" with { type: "json" };
import UneceEquipmentSchema from "../schemas/UneceEquipment.json" with { type: "json" };
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
import UneceFinancialIdentitySchema from "../schemas/UneceFinancialIdentity.json" with { type: "json" };
import UneceFinancialInstitutionAddressSchema from "../schemas/UneceFinancialInstitutionAddress.json" with { type: "json" };
import UneceFinancialInstitutionRoleCodeListSchema from "../schemas/UneceFinancialInstitutionRoleCodeList.json" with { type: "json" };
import UneceFinancingFinancialAccountSchema from "../schemas/UneceFinancingFinancialAccount.json" with { type: "json" };
import UneceFinancingRequestDocumentSchema from "../schemas/UneceFinancingRequestDocument.json" with { type: "json" };
import UneceFinancingRequestResultDocumentSchema from "../schemas/UneceFinancingRequestResultDocument.json" with { type: "json" };
import UneceFinancingStatusSchema from "../schemas/UneceFinancingStatus.json" with { type: "json" };
import UneceFinancingSummaryDocumentSchema from "../schemas/UneceFinancingSummaryDocument.json" with { type: "json" };
import UneceFoodChoiceSchema from "../schemas/UneceFoodChoice.json" with { type: "json" };
import UneceForecastTermsSchema from "../schemas/UneceForecastTerms.json" with { type: "json" };
import UneceFreightChargeTariffClassCodeListSchema from "../schemas/UneceFreightChargeTariffClassCodeList.json" with { type: "json" };
import UneceFreightChargeTypeIdSchema from "../schemas/UneceFreightChargeTypeId.json" with { type: "json" };
import UneceFuelSchema from "../schemas/UneceFuel.json" with { type: "json" };
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
import UneceGoodsCharacteristicSchema from "../schemas/UneceGoodsCharacteristic.json" with { type: "json" };
import UneceGoodsTypeCodeListSchema from "../schemas/UneceGoodsTypeCodeList.json" with { type: "json" };
import UneceGoodsTypeExtensionCodeListSchema from "../schemas/UneceGoodsTypeExtensionCodeList.json" with { type: "json" };
import UneceGovernmentActionCodeListSchema from "../schemas/UneceGovernmentActionCodeList.json" with { type: "json" };
import UneceGovernmentRegistrationSchema from "../schemas/UneceGovernmentRegistration.json" with { type: "json" };
import UneceGroupedWorkItemSchema from "../schemas/UneceGroupedWorkItem.json" with { type: "json" };
import UneceGuaranteeSchema from "../schemas/UneceGuarantee.json" with { type: "json" };
import UneceGuestArrivalSchema from "../schemas/UneceGuestArrival.json" with { type: "json" };
import UneceGuestHealthIndicationSchema from "../schemas/UneceGuestHealthIndication.json" with { type: "json" };
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
import UneceIssueSchema from "../schemas/UneceIssue.json" with { type: "json" };
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
import UneceLegalRegistrationSchema from "../schemas/UneceLegalRegistration.json" with { type: "json" };
import UneceLicenceSchema from "../schemas/UneceLicence.json" with { type: "json" };
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
import UneceLogisticsChargeCalculationBasisCodeListSchema from "../schemas/UneceLogisticsChargeCalculationBasisCodeList.json" with { type: "json" };
import UneceLogisticsLabelSchema from "../schemas/UneceLogisticsLabel.json" with { type: "json" };
import UneceLogisticsLocationSchema from "../schemas/UneceLogisticsLocation.json" with { type: "json" };
import UneceLogisticsPackagingSchema from "../schemas/UneceLogisticsPackaging.json" with { type: "json" };
import UneceLogisticsStatusSchema from "../schemas/UneceLogisticsStatus.json" with { type: "json" };
import UneceLogisticsStatusCodeListSchema from "../schemas/UneceLogisticsStatusCodeList.json" with { type: "json" };
import UneceLogisticsTransportEquipmentSchema from "../schemas/UneceLogisticsTransportEquipment.json" with { type: "json" };
import UneceLogisticsTransportMeansSchema from "../schemas/UneceLogisticsTransportMeans.json" with { type: "json" };
import UneceMachineSchema from "../schemas/UneceMachine.json" with { type: "json" };
import UneceMarketplaceSchema from "../schemas/UneceMarketplace.json" with { type: "json" };
import UneceMarkingSchema from "../schemas/UneceMarking.json" with { type: "json" };
import UneceMarkingInstructionCodeListSchema from "../schemas/UneceMarkingInstructionCodeList.json" with { type: "json" };
import UneceMDHHealthIndicationSchema from "../schemas/UneceMDHHealthIndication.json" with { type: "json" };
import UneceMeasureCodeSchema from "../schemas/UneceMeasureCode.json" with { type: "json" };
import UneceMeasuredAttributeCodeListSchema from "../schemas/UneceMeasuredAttributeCodeList.json" with { type: "json" };
import UneceMeasurementSchema from "../schemas/UneceMeasurement.json" with { type: "json" };
import UneceMeasureTypeSchema from "../schemas/UneceMeasureType.json" with { type: "json" };
import UneceMembershipSchema from "../schemas/UneceMembership.json" with { type: "json" };
import UneceMessageFunctionCodeListSchema from "../schemas/UneceMessageFunctionCodeList.json" with { type: "json" };
import UneceMetricCharacteristicSchema from "../schemas/UneceMetricCharacteristic.json" with { type: "json" };
import UneceNegotiationContextSchema from "../schemas/UneceNegotiationContext.json" with { type: "json" };
import UneceNegotiationExchangeSchema from "../schemas/UneceNegotiationExchange.json" with { type: "json" };
import UneceNoteSchema from "../schemas/UneceNote.json" with { type: "json" };
import UneceObjectSchema from "../schemas/UneceObject.json" with { type: "json" };
import UneceObservationSchema from "../schemas/UneceObservation.json" with { type: "json" };
import UneceObservationObjectiveParameterSchema from "../schemas/UneceObservationObjectiveParameter.json" with { type: "json" };
import UneceObservationResultSchema from "../schemas/UneceObservationResult.json" with { type: "json" };
import UneceObservationResultCharacteristicSchema from "../schemas/UneceObservationResultCharacteristic.json" with { type: "json" };
import UneceOperationalParameterSchema from "../schemas/UneceOperationalParameter.json" with { type: "json" };
import UneceOrganizationalCertificateSchema from "../schemas/UneceOrganizationalCertificate.json" with { type: "json" };
import UneceOrganizationalCertificationSchema from "../schemas/UneceOrganizationalCertification.json" with { type: "json" };
import UneceOrganizationCharacteristicSchema from "../schemas/UneceOrganizationCharacteristic.json" with { type: "json" };
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
import UnecePaymentFinancialInstitutionSchema from "../schemas/UnecePaymentFinancialInstitution.json" with { type: "json" };
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
import UnecePersonalEffectsSchema from "../schemas/UnecePersonalEffects.json" with { type: "json" };
import UnecePersonIdentitySchema from "../schemas/UnecePersonIdentity.json" with { type: "json" };
import UnecePetAnimalSchema from "../schemas/UnecePetAnimal.json" with { type: "json" };
import UnecePictureSchema from "../schemas/UnecePicture.json" with { type: "json" };
import UnecePlotSchema from "../schemas/UnecePlot.json" with { type: "json" };
import UnecePolicySchema from "../schemas/UnecePolicy.json" with { type: "json" };
import UnecePolygonSchema from "../schemas/UnecePolygon.json" with { type: "json" };
import UnecePortMovementEventSchema from "../schemas/UnecePortMovementEvent.json" with { type: "json" };
import UnecePreferenceSchema from "../schemas/UnecePreference.json" with { type: "json" };
import UnecePreventiveActionSchema from "../schemas/UnecePreventiveAction.json" with { type: "json" };
import UnecePriceTypeCodeListSchema from "../schemas/UnecePriceTypeCodeList.json" with { type: "json" };
import UnecePrintSchema from "../schemas/UnecePrint.json" with { type: "json" };
import UnecePriorityDescriptionCodeListSchema from "../schemas/UnecePriorityDescriptionCodeList.json" with { type: "json" };
import UneceProcessCertificateSchema from "../schemas/UneceProcessCertificate.json" with { type: "json" };
import UneceProcessCertificationSchema from "../schemas/UneceProcessCertification.json" with { type: "json" };
import UneceProcessCharacteristicSchema from "../schemas/UneceProcessCharacteristic.json" with { type: "json" };
import UneceProcessTypeCodeListSchema from "../schemas/UneceProcessTypeCodeList.json" with { type: "json" };
import UneceProcessWorkItemSchema from "../schemas/UneceProcessWorkItem.json" with { type: "json" };
import UneceProduceSchema from "../schemas/UneceProduce.json" with { type: "json" };
import UneceProductSchema from "../schemas/UneceProduct.json" with { type: "json" };
import UneceProductBatchSchema from "../schemas/UneceProductBatch.json" with { type: "json" };
import UneceProductBatchCertificateSchema from "../schemas/UneceProductBatchCertificate.json" with { type: "json" };
import UneceProductBatchCertificationSchema from "../schemas/UneceProductBatchCertification.json" with { type: "json" };
import UneceProductBatchCharacteristicSchema from "../schemas/UneceProductBatchCharacteristic.json" with { type: "json" };
import UneceProductCertificateSchema from "../schemas/UneceProductCertificate.json" with { type: "json" };
import UneceProductCharacteristicSchema from "../schemas/UneceProductCharacteristic.json" with { type: "json" };
import UneceProductCharacteristicConditionSchema from "../schemas/UneceProductCharacteristicCondition.json" with { type: "json" };
import UneceProductFinishingTreatmentSchema from "../schemas/UneceProductFinishingTreatment.json" with { type: "json" };
import UneceProductGroupSchema from "../schemas/UneceProductGroup.json" with { type: "json" };
import UneceProductHandlingProcessSchema from "../schemas/UneceProductHandlingProcess.json" with { type: "json" };
import UneceProductInstanceSchema from "../schemas/UneceProductInstance.json" with { type: "json" };
import UneceProductionSchema from "../schemas/UneceProduction.json" with { type: "json" };
import UneceProductionCycleSchema from "../schemas/UneceProductionCycle.json" with { type: "json" };
import UneceProductionDeviceSchema from "../schemas/UneceProductionDevice.json" with { type: "json" };
import UneceProductionFacilitySchema from "../schemas/UneceProductionFacility.json" with { type: "json" };
import UneceProductionProcessSchema from "../schemas/UneceProductionProcess.json" with { type: "json" };
import UneceProductionUnitSchema from "../schemas/UneceProductionUnit.json" with { type: "json" };
import UneceProductionWasteMaterialSchema from "../schemas/UneceProductionWasteMaterial.json" with { type: "json" };
import UneceProductionWasteMaterialComponentSchema from "../schemas/UneceProductionWasteMaterialComponent.json" with { type: "json" };
import UneceProductionWasteRecoveryDisposalProcessSchema from "../schemas/UneceProductionWasteRecoveryDisposalProcess.json" with { type: "json" };
import UneceProductLabelSchema from "../schemas/UneceProductLabel.json" with { type: "json" };
import UneceProjectSchema from "../schemas/UneceProject.json" with { type: "json" };
import UneceProprietaryIdentitySchema from "../schemas/UneceProprietaryIdentity.json" with { type: "json" };
import UneceProtectionMeansSchema from "../schemas/UneceProtectionMeans.json" with { type: "json" };
import UneceQuantityAnalysisSchema from "../schemas/UneceQuantityAnalysis.json" with { type: "json" };
import UneceQuantityCodeSchema from "../schemas/UneceQuantityCode.json" with { type: "json" };
import UneceQuantityTypeSchema from "../schemas/UneceQuantityType.json" with { type: "json" };
import UneceQuarantineInstructionsSchema from "../schemas/UneceQuarantineInstructions.json" with { type: "json" };
import UneceQuotationDocumentCodeListSchema from "../schemas/UneceQuotationDocumentCodeList.json" with { type: "json" };
import UneceRadioactiveIsotopeSchema from "../schemas/UneceRadioactiveIsotope.json" with { type: "json" };
import UneceRadioactiveMaterialSchema from "../schemas/UneceRadioactiveMaterial.json" with { type: "json" };
import UneceRadionuclideSchema from "../schemas/UneceRadionuclide.json" with { type: "json" };
import UneceRangeSchema from "../schemas/UneceRange.json" with { type: "json" };
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
import UneceResponseSchema from "../schemas/UneceResponse.json" with { type: "json" };
import UneceResponseTypeCodeListSchema from "../schemas/UneceResponseTypeCodeList.json" with { type: "json" };
import UneceResponsibleGovernmentAgencyCodeListSchema from "../schemas/UneceResponsibleGovernmentAgencyCodeList.json" with { type: "json" };
import UneceResponsibleGovernmentAgencyInvolvementCodeListSchema from "../schemas/UneceResponsibleGovernmentAgencyInvolvementCodeList.json" with { type: "json" };
import UneceReturnableAssetInstructionsSchema from "../schemas/UneceReturnableAssetInstructions.json" with { type: "json" };
import UneceRiskAnalysisResultSchema from "../schemas/UneceRiskAnalysisResult.json" with { type: "json" };
import UneceSanitaryMeasureSchema from "../schemas/UneceSanitaryMeasure.json" with { type: "json" };
import UneceScenarioTypeCodeListSchema from "../schemas/UneceScenarioTypeCodeList.json" with { type: "json" };
import UneceScheduleSchema from "../schemas/UneceSchedule.json" with { type: "json" };
import UneceSchedulingDocumentCodeListSchema from "../schemas/UneceSchedulingDocumentCodeList.json" with { type: "json" };
import UneceSealSchema from "../schemas/UneceSeal.json" with { type: "json" };
import UneceSealConditionCodeListSchema from "../schemas/UneceSealConditionCodeList.json" with { type: "json" };
import UneceSealingPartyRoleCodeListSchema from "../schemas/UneceSealingPartyRoleCodeList.json" with { type: "json" };
import UneceSectionSchema from "../schemas/UneceSection.json" with { type: "json" };
import UneceSecurityTagSchema from "../schemas/UneceSecurityTag.json" with { type: "json" };
import UneceSegmentSchema from "../schemas/UneceSegment.json" with { type: "json" };
import UneceSensorSchema from "../schemas/UneceSensor.json" with { type: "json" };
import UneceServiceSchema from "../schemas/UneceService.json" with { type: "json" };
import UneceServiceChargeSchema from "../schemas/UneceServiceCharge.json" with { type: "json" };
import UneceShippingMarksSchema from "../schemas/UneceShippingMarks.json" with { type: "json" };
import UneceSoftwareUserTypeCodeListSchema from "../schemas/UneceSoftwareUserTypeCodeList.json" with { type: "json" };
import UneceSourceSchema from "../schemas/UneceSource.json" with { type: "json" };
import UneceSpatialDimensionSchema from "../schemas/UneceSpatialDimension.json" with { type: "json" };
import UneceSpecialQuerySchema from "../schemas/UneceSpecialQuery.json" with { type: "json" };
import UneceSpeciesTTAnimalSchema from "../schemas/UneceSpeciesTTAnimal.json" with { type: "json" };
import UneceSpecificationQuerySchema from "../schemas/UneceSpecificationQuery.json" with { type: "json" };
import UneceSpecifiedActionSchema from "../schemas/UneceSpecifiedAction.json" with { type: "json" };
import UneceSpecifiedCertificateSchema from "../schemas/UneceSpecifiedCertificate.json" with { type: "json" };
import UneceSpecifiedCertificationSchema from "../schemas/UneceSpecifiedCertification.json" with { type: "json" };
import UneceSpecifiedChemicalTreatmentSchema from "../schemas/UneceSpecifiedChemicalTreatment.json" with { type: "json" };
import UneceSpecifiedConditionSchema from "../schemas/UneceSpecifiedCondition.json" with { type: "json" };
import UneceSpecifiedDeclarationSchema from "../schemas/UneceSpecifiedDeclaration.json" with { type: "json" };
import UneceSpecifiedFaultSchema from "../schemas/UneceSpecifiedFault.json" with { type: "json" };
import UneceSpecifiedFeatureSchema from "../schemas/UneceSpecifiedFeature.json" with { type: "json" };
import UneceSpecifiedInspectionSchema from "../schemas/UneceSpecifiedInspection.json" with { type: "json" };
import UneceSpecifiedLocationSchema from "../schemas/UneceSpecifiedLocation.json" with { type: "json" };
import UneceSpecifiedMaterialSchema from "../schemas/UneceSpecifiedMaterial.json" with { type: "json" };
import UneceSpecifiedMethodSchema from "../schemas/UneceSpecifiedMethod.json" with { type: "json" };
import UneceSpecifiedNoteSchema from "../schemas/UneceSpecifiedNote.json" with { type: "json" };
import UneceSpecifiedParameterSchema from "../schemas/UneceSpecifiedParameter.json" with { type: "json" };
import UneceSpecifiedPeriodSchema from "../schemas/UneceSpecifiedPeriod.json" with { type: "json" };
import UneceSpecifiedQualificationSchema from "../schemas/UneceSpecifiedQualification.json" with { type: "json" };
import UneceSpecifiedRouteSchema from "../schemas/UneceSpecifiedRoute.json" with { type: "json" };
import UneceSpecifiedTemperatureSchema from "../schemas/UneceSpecifiedTemperature.json" with { type: "json" };
import UneceStandardSchema from "../schemas/UneceStandard.json" with { type: "json" };
import UneceStatusCodeListSchema from "../schemas/UneceStatusCodeList.json" with { type: "json" };
import UneceStoresItemInventorySchema from "../schemas/UneceStoresItemInventory.json" with { type: "json" };
import UneceStowawaySchema from "../schemas/UneceStowaway.json" with { type: "json" };
import UneceSubjectCodeListSchema from "../schemas/UneceSubjectCodeList.json" with { type: "json" };
import UneceSubordinateLineTradeAgreementSchema from "../schemas/UneceSubordinateLineTradeAgreement.json" with { type: "json" };
import UneceSubordinateLineTradeDeliverySchema from "../schemas/UneceSubordinateLineTradeDelivery.json" with { type: "json" };
import UneceSubordinateLineTradeSettlementSchema from "../schemas/UneceSubordinateLineTradeSettlement.json" with { type: "json" };
import UneceSubordinateLocationSchema from "../schemas/UneceSubordinateLocation.json" with { type: "json" };
import UneceSubordinateSubordinateLocationSchema from "../schemas/UneceSubordinateSubordinateLocation.json" with { type: "json" };
import UneceSubordinateTradeLineItemSchema from "../schemas/UneceSubordinateTradeLineItem.json" with { type: "json" };
import UneceSupplyChainEventSchema from "../schemas/UneceSupplyChainEvent.json" with { type: "json" };
import UneceSupplyChainInventorySchema from "../schemas/UneceSupplyChainInventory.json" with { type: "json" };
import UneceSupplyChainPackagingSchema from "../schemas/UneceSupplyChainPackaging.json" with { type: "json" };
import UneceSupplyChainReferenceSchema from "../schemas/UneceSupplyChainReference.json" with { type: "json" };
import UneceSupplyChainTradeLineItemSchema from "../schemas/UneceSupplyChainTradeLineItem.json" with { type: "json" };
import UneceSupplyChainTradeTransactionSchema from "../schemas/UneceSupplyChainTradeTransaction.json" with { type: "json" };
import UneceSupplyPlanSchema from "../schemas/UneceSupplyPlan.json" with { type: "json" };
import UneceSustainabilityCharacteristicSchema from "../schemas/UneceSustainabilityCharacteristic.json" with { type: "json" };
import UneceSustainabilityInspectionSchema from "../schemas/UneceSustainabilityInspection.json" with { type: "json" };
import UneceTaxCategoryCodeListSchema from "../schemas/UneceTaxCategoryCodeList.json" with { type: "json" };
import UneceTaxExemptionReasonCodeListSchema from "../schemas/UneceTaxExemptionReasonCodeList.json" with { type: "json" };
import UneceTaxRegistrationSchema from "../schemas/UneceTaxRegistration.json" with { type: "json" };
import UneceTaxTypeCodeListSchema from "../schemas/UneceTaxTypeCodeList.json" with { type: "json" };
import UneceTechnicalCharacteristicSchema from "../schemas/UneceTechnicalCharacteristic.json" with { type: "json" };
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
import UneceTradeSettlementHeaderMonetarySummationSchema from "../schemas/UneceTradeSettlementHeaderMonetarySummation.json" with { type: "json" };
import UneceTradeSettlementLineMonetarySummationSchema from "../schemas/UneceTradeSettlementLineMonetarySummation.json" with { type: "json" };
import UneceTradeSettlementMonetarySummationSchema from "../schemas/UneceTradeSettlementMonetarySummation.json" with { type: "json" };
import UneceTradeSettlementPaymentSchema from "../schemas/UneceTradeSettlementPayment.json" with { type: "json" };
import UneceTradeSettlementPaymentMonetarySummationSchema from "../schemas/UneceTradeSettlementPaymentMonetarySummation.json" with { type: "json" };
import UneceTradeTaxSchema from "../schemas/UneceTradeTax.json" with { type: "json" };
import UneceTransportationHealthSchema from "../schemas/UneceTransportationHealth.json" with { type: "json" };
import UneceTransportationWasteMaterialSchema from "../schemas/UneceTransportationWasteMaterial.json" with { type: "json" };
import UneceTransportationWasteMaterialComponentSchema from "../schemas/UneceTransportationWasteMaterialComponent.json" with { type: "json" };
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
		const types = [
			{
				type: UneceTypes.AcademicQualification,
				schema: UneceAcademicQualificationSchema
			},
			{
				type: UneceTypes.AccessRightsTypeCodeList,
				schema: UneceAccessRightsTypeCodeListSchema
			},
			{
				type: UneceTypes.AccountingAccount,
				schema: UneceAccountingAccountSchema
			},
			{
				type: UneceTypes.AccountingAccountBalanceReopeningTypeCodeList,
				schema: UneceAccountingAccountBalanceReopeningTypeCodeListSchema
			},
			{
				type: UneceTypes.AccountingAccountClassificationCodeList,
				schema: UneceAccountingAccountClassificationCodeListSchema
			},
			{
				type: UneceTypes.AccountingAccountNatureTypeCodeList,
				schema: UneceAccountingAccountNatureTypeCodeListSchema
			},
			{
				type: UneceTypes.AccountingAccountStatusCodeList,
				schema: UneceAccountingAccountStatusCodeListSchema
			},
			{
				type: UneceTypes.AccountingAccountTypeCodeList,
				schema: UneceAccountingAccountTypeCodeListSchema
			},
			{
				type: UneceTypes.AccountingAmountQualifierCodeList,
				schema: UneceAccountingAmountQualifierCodeListSchema
			},
			{
				type: UneceTypes.AccountingAmountTypeCodeList,
				schema: UneceAccountingAmountTypeCodeListSchema
			},
			{
				type: UneceTypes.AccountingContactCodeList,
				schema: UneceAccountingContactCodeListSchema
			},
			{
				type: UneceTypes.AccountingDebitCreditStatusCodeList,
				schema: UneceAccountingDebitCreditStatusCodeListSchema
			},
			{
				type: UneceTypes.AccountingDocumentCodeList,
				schema: UneceAccountingDocumentCodeListSchema
			},
			{
				type: UneceTypes.AccountingDocumentTypeCodeList,
				schema: UneceAccountingDocumentTypeCodeListSchema
			},
			{
				type: UneceTypes.AccountingEntryCategoryCodeList,
				schema: UneceAccountingEntryCategoryCodeListSchema
			},
			{
				type: UneceTypes.AccountingEntryLineCategoryCodeList,
				schema: UneceAccountingEntryLineCategoryCodeListSchema
			},
			{
				type: UneceTypes.AccountingEntryLineSourceCodeList,
				schema: UneceAccountingEntryLineSourceCodeListSchema
			},
			{
				type: UneceTypes.AccountingEntryProcessingCodeList,
				schema: UneceAccountingEntryProcessingCodeListSchema
			},
			{
				type: UneceTypes.AccountingJournalCategoryCodeList,
				schema: UneceAccountingJournalCategoryCodeListSchema
			},
			{
				type: UneceTypes.AccountingJournalCodeList,
				schema: UneceAccountingJournalCodeListSchema
			},
			{
				type: UneceTypes.AccountingPeriodFunctionCodeList,
				schema: UneceAccountingPeriodFunctionCodeListSchema
			},
			{
				type: UneceTypes.AccountingPerquisiteCodeList,
				schema: UneceAccountingPerquisiteCodeListSchema
			},
			{
				type: UneceTypes.AccountingVoucherMediumCodeList,
				schema: UneceAccountingVoucherMediumCodeListSchema
			},
			{
				type: UneceTypes.Accreditation,
				schema: UneceAccreditationSchema
			},
			{
				type: UneceTypes.AcknowledgementCodeList,
				schema: UneceAcknowledgementCodeListSchema
			},
			{
				type: UneceTypes.AcknowledgementDocument,
				schema: UneceAcknowledgementDocumentSchema
			},
			{
				type: UneceTypes.AdditionalPostponementCodeList,
				schema: UneceAdditionalPostponementCodeListSchema
			},
			{
				type: UneceTypes.AddressFormatTypeCodeList,
				schema: UneceAddressFormatTypeCodeListSchema
			},
			{
				type: UneceTypes.AddressTypeCodeList,
				schema: UneceAddressTypeCodeListSchema
			},
			{
				type: UneceTypes.AdjustmentReasonCodeList,
				schema: UneceAdjustmentReasonCodeListSchema
			},
			{
				type: UneceTypes.AdvancePayment,
				schema: UneceAdvancePaymentSchema
			},
			{
				type: UneceTypes.AgriculturalApplication,
				schema: UneceAgriculturalApplicationSchema
			},
			{
				type: UneceTypes.AgriculturalCertificate,
				schema: UneceAgriculturalCertificateSchema
			},
			{
				type: UneceTypes.AgriculturalCharacteristic,
				schema: UneceAgriculturalCharacteristicSchema
			},
			{
				type: UneceTypes.AgriculturalProcess,
				schema: UneceAgriculturalProcessSchema
			},
			{
				type: UneceTypes.AgriculturalZoneArea,
				schema: UneceAgriculturalZoneAreaSchema
			},
			{
				type: UneceTypes.AirFlowUnitMeasureCode,
				schema: UneceAirFlowUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.AirFlowUnitMeasureType,
				schema: UneceAirFlowUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.Allergy,
				schema: UneceAllergySchema
			},
			{
				type: UneceTypes.AllowanceChargeIdCodeList,
				schema: UneceAllowanceChargeIdCodeListSchema
			},
			{
				type: UneceTypes.AllowanceChargeReasonCodeList,
				schema: UneceAllowanceChargeReasonCodeListSchema
			},
			{
				type: UneceTypes.AlternateCurrencyAmountTypeCodeList,
				schema: UneceAlternateCurrencyAmountTypeCodeListSchema
			},
			{
				type: UneceTypes.AmortizationMethodCodeList,
				schema: UneceAmortizationMethodCodeListSchema
			},
			{
				type: UneceTypes.AmountCurrency,
				schema: UneceAmountCurrencySchema
			},
			{
				type: UneceTypes.AmountType,
				schema: UneceAmountTypeSchema
			},
			{
				type: UneceTypes.AmountWeightTypeCodeList,
				schema: UneceAmountWeightTypeCodeListSchema
			},
			{
				type: UneceTypes.AnimalBatch,
				schema: UneceAnimalBatchSchema
			},
			{
				type: UneceTypes.AnimalCertificate,
				schema: UneceAnimalCertificateSchema
			},
			{
				type: UneceTypes.AnimalCertification,
				schema: UneceAnimalCertificationSchema
			},
			{
				type: UneceTypes.AnimalHoldingEvent,
				schema: UneceAnimalHoldingEventSchema
			},
			{
				type: UneceTypes.AnimalIdentity,
				schema: UneceAnimalIdentitySchema
			},
			{
				type: UneceTypes.AppliedAllowanceCharge,
				schema: UneceAppliedAllowanceChargeSchema
			},
			{
				type: UneceTypes.AppliedChemicalTreatment,
				schema: UneceAppliedChemicalTreatmentSchema
			},
			{
				type: UneceTypes.AppliedTax,
				schema: UneceAppliedTaxSchema
			},
			{
				type: UneceTypes.Area,
				schema: UneceAreaSchema
			},
			{
				type: UneceTypes.Assertion,
				schema: UneceAssertionSchema
			},
			{
				type: UneceTypes.Assessment,
				schema: UneceAssessmentSchema
			},
			{
				type: UneceTypes.AssociatedTransportEquipment,
				schema: UneceAssociatedTransportEquipmentSchema
			},
			{
				type: UneceTypes.AttachedTransportEquipment,
				schema: UneceAttachedTransportEquipmentSchema
			},
			{
				type: UneceTypes.Authentication,
				schema: UneceAuthenticationSchema
			},
			{
				type: UneceTypes.AuthoritativeSignatoryPerson,
				schema: UneceAuthoritativeSignatoryPersonSchema
			},
			{
				type: UneceTypes.AutomaticDataCaptureMethodCodeList,
				schema: UneceAutomaticDataCaptureMethodCodeListSchema
			},
			{
				type: UneceTypes.AvailablePeriod,
				schema: UneceAvailablePeriodSchema
			},
			{
				type: UneceTypes.BasicWorkItem,
				schema: UneceBasicWorkItemSchema
			},
			{
				type: UneceTypes.BillingDocumentCodeList,
				schema: UneceBillingDocumentCodeListSchema
			},
			{
				type: UneceTypes.BinaryFile,
				schema: UneceBinaryFileSchema
			},
			{
				type: UneceTypes.BinaryObjectCharacterSetCodeList,
				schema: UneceBinaryObjectCharacterSetCodeListSchema
			},
			{
				type: UneceTypes.BinaryObjectEncodingCodeList,
				schema: UneceBinaryObjectEncodingCodeListSchema
			},
			{
				type: UneceTypes.BirthAddress,
				schema: UneceBirthAddressSchema
			},
			{
				type: UneceTypes.Booking,
				schema: UneceBookingSchema
			},
			{
				type: UneceTypes.BotanicalCrop,
				schema: UneceBotanicalCropSchema
			},
			{
				type: UneceTypes.BranchFinancialInstitution,
				schema: UneceBranchFinancialInstitutionSchema
			},
			{
				type: UneceTypes.BreakdownStatement,
				schema: UneceBreakdownStatementSchema
			},
			{
				type: UneceTypes.CalculatedPrice,
				schema: UneceCalculatedPriceSchema
			},
			{
				type: UneceTypes.CalibratedMeasurement,
				schema: UneceCalibratedMeasurementSchema
			},
			{
				type: UneceTypes.CancellationStatus,
				schema: UneceCancellationStatusSchema
			},
			{
				type: UneceTypes.Cargo,
				schema: UneceCargoSchema
			},
			{
				type: UneceTypes.CargoCategoryCodeList,
				schema: UneceCargoCategoryCodeListSchema
			},
			{
				type: UneceTypes.CargoCommodityCategoryCodeList,
				schema: UneceCargoCommodityCategoryCodeListSchema
			},
			{
				type: UneceTypes.CargoInsurance,
				schema: UneceCargoInsuranceSchema
			},
			{
				type: UneceTypes.CargoOperationalCategoryCodeList,
				schema: UneceCargoOperationalCategoryCodeListSchema
			},
			{
				type: UneceTypes.CargoTypeClassificationCodeList,
				schema: UneceCargoTypeClassificationCodeListSchema
			},
			{
				type: UneceTypes.CarriedEquipment,
				schema: UneceCarriedEquipmentSchema
			},
			{
				type: UneceTypes.Cash,
				schema: UneceCashSchema
			},
			{
				type: UneceTypes.CertificateTypeCodeList,
				schema: UneceCertificateTypeCodeListSchema
			},
			{
				type: UneceTypes.ChargePayingPartyRoleCodeList,
				schema: UneceChargePayingPartyRoleCodeListSchema
			},
			{
				type: UneceTypes.Chemical,
				schema: UneceChemicalSchema
			},
			{
				type: UneceTypes.Cheque,
				schema: UneceChequeSchema
			},
			{
				type: UneceTypes.Circle,
				schema: UneceCircleSchema
			},
			{
				type: UneceTypes.Classification,
				schema: UneceClassificationSchema
			},
			{
				type: UneceTypes.Clause,
				schema: UneceClauseSchema
			},
			{
				type: UneceTypes.CodeListResponsibleAgencyCodeList,
				schema: UneceCodeListResponsibleAgencyCodeListSchema
			},
			{
				type: UneceTypes.Colour,
				schema: UneceColourSchema
			},
			{
				type: UneceTypes.CommitmentLevelCodeList,
				schema: UneceCommitmentLevelCodeListSchema
			},
			{
				type: UneceTypes.Communication,
				schema: UneceCommunicationSchema
			},
			{
				type: UneceTypes.CommunicationChannelCodeList,
				schema: UneceCommunicationChannelCodeListSchema
			},
			{
				type: UneceTypes.CommunicationEvent,
				schema: UneceCommunicationEventSchema
			},
			{
				type: UneceTypes.ComplexDescription,
				schema: UneceComplexDescriptionSchema
			},
			{
				type: UneceTypes.ConformanceCertificate,
				schema: UneceConformanceCertificateSchema
			},
			{
				type: UneceTypes.Consignment,
				schema: UneceConsignmentSchema
			},
			{
				type: UneceTypes.ConsignmentItem,
				schema: UneceConsignmentItemSchema
			},
			{
				type: UneceTypes.ContactPerson,
				schema: UneceContactPersonSchema
			},
			{
				type: UneceTypes.ContactTypeCodeList,
				schema: UneceContactTypeCodeListSchema
			},
			{
				type: UneceTypes.Contract,
				schema: UneceContractSchema
			},
			{
				type: UneceTypes.ControlSettingParameter,
				schema: UneceControlSettingParameterSchema
			},
			{
				type: UneceTypes.Convoy,
				schema: UneceConvoySchema
			},
			{
				type: UneceTypes.CooperatingOrganization,
				schema: UneceCooperatingOrganizationSchema
			},
			{
				type: UneceTypes.CoordinateReferenceSystem,
				schema: UneceCoordinateReferenceSystemSchema
			},
			{
				type: UneceTypes.CoordinateSourceSystem,
				schema: UneceCoordinateSourceSystemSchema
			},
			{
				type: UneceTypes.CorrectiveAction,
				schema: UneceCorrectiveActionSchema
			},
			{
				type: UneceTypes.CorrectiveEvent,
				schema: UneceCorrectiveEventSchema
			},
			{
				type: UneceTypes.Country,
				schema: UneceCountrySchema
			},
			{
				type: UneceTypes.CountryId,
				schema: UneceCountryIdSchema
			},
			{
				type: UneceTypes.CountrySubDivision,
				schema: UneceCountrySubDivisionSchema
			},
			{
				type: UneceTypes.CreditorFinancialAccount,
				schema: UneceCreditorFinancialAccountSchema
			},
			{
				type: UneceTypes.CreditorFinancialInstitution,
				schema: UneceCreditorFinancialInstitutionSchema
			},
			{
				type: UneceTypes.CropMixtureConstituent,
				schema: UneceCropMixtureConstituentSchema
			},
			{
				type: UneceTypes.CropProduceBatch,
				schema: UneceCropProduceBatchSchema
			},
			{
				type: UneceTypes.CropProtectionTreatment,
				schema: UneceCropProtectionTreatmentSchema
			},
			{
				type: UneceTypes.CurrencyCodeList,
				schema: UneceCurrencyCodeListSchema
			},
			{
				type: UneceTypes.CurrencyExchange,
				schema: UneceCurrencyExchangeSchema
			},
			{
				type: UneceTypes.CustomerClass,
				schema: UneceCustomerClassSchema
			},
			{
				type: UneceTypes.CustomsDutyRegimeTypeCodeList,
				schema: UneceCustomsDutyRegimeTypeCodeListSchema
			},
			{
				type: UneceTypes.CustomsProcedureGuaranteeCodeList,
				schema: UneceCustomsProcedureGuaranteeCodeListSchema
			},
			{
				type: UneceTypes.CustomsValuation,
				schema: UneceCustomsValuationSchema
			},
			{
				type: UneceTypes.DangerousGoods,
				schema: UneceDangerousGoodsSchema
			},
			{
				type: UneceTypes.DangerousGoodsPackagingLevelCodeList,
				schema: UneceDangerousGoodsPackagingLevelCodeListSchema
			},
			{
				type: UneceTypes.DangerousGoodsRegulationCodeList,
				schema: UneceDangerousGoodsRegulationCodeListSchema
			},
			{
				type: UneceTypes.DateTimePeriodFunctionCodeList,
				schema: UneceDateTimePeriodFunctionCodeListSchema
			},
			{
				type: UneceTypes.DebtorFinancialAccount,
				schema: UneceDebtorFinancialAccountSchema
			},
			{
				type: UneceTypes.DebtorFinancialInstitution,
				schema: UneceDebtorFinancialInstitutionSchema
			},
			{
				type: UneceTypes.DelimitedPeriod,
				schema: UneceDelimitedPeriodSchema
			},
			{
				type: UneceTypes.DeliveryAdjustment,
				schema: UneceDeliveryAdjustmentSchema
			},
			{
				type: UneceTypes.DeliveryInstructions,
				schema: UneceDeliveryInstructionsSchema
			},
			{
				type: UneceTypes.DeliverySchedule,
				schema: UneceDeliveryScheduleSchema
			},
			{
				type: UneceTypes.DeliveryTerms,
				schema: UneceDeliveryTermsSchema
			},
			{
				type: UneceTypes.DeliveryTermsCodeList,
				schema: UneceDeliveryTermsCodeListSchema
			},
			{
				type: UneceTypes.DeliveryTermsFunctionCodeList,
				schema: UneceDeliveryTermsFunctionCodeListSchema
			},
			{
				type: UneceTypes.DigitalMethod,
				schema: UneceDigitalMethodSchema
			},
			{
				type: UneceTypes.DimensionTypeCodeList,
				schema: UneceDimensionTypeCodeListSchema
			},
			{
				type: UneceTypes.DirectPosition,
				schema: UneceDirectPositionSchema
			},
			{
				type: UneceTypes.Disability,
				schema: UneceDisabilitySchema
			},
			{
				type: UneceTypes.DisposalInstructions,
				schema: UneceDisposalInstructionsSchema
			},
			{
				type: UneceTypes.Document,
				schema: UneceDocumentSchema
			},
			{
				type: UneceTypes.DocumentCharacteristic,
				schema: UneceDocumentCharacteristicSchema
			},
			{
				type: UneceTypes.DocumentCodeList,
				schema: UneceDocumentCodeListSchema
			},
			{
				type: UneceTypes.DocumentContextParameter,
				schema: UneceDocumentContextParameterSchema
			},
			{
				type: UneceTypes.DocumentHandlingInstructions,
				schema: UneceDocumentHandlingInstructionsSchema
			},
			{
				type: UneceTypes.DocumentLineDocument,
				schema: UneceDocumentLineDocumentSchema
			},
			{
				type: UneceTypes.DocumentStatus,
				schema: UneceDocumentStatusSchema
			},
			{
				type: UneceTypes.DocumentStatusCodeList,
				schema: UneceDocumentStatusCodeListSchema
			},
			{
				type: UneceTypes.DurationUnitMeasureCode,
				schema: UneceDurationUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.DurationUnitMeasureType,
				schema: UneceDurationUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.Emission,
				schema: UneceEmissionSchema
			},
			{
				type: UneceTypes.EmployerIdentity,
				schema: UneceEmployerIdentitySchema
			},
			{
				type: UneceTypes.Envelope,
				schema: UneceEnvelopeSchema
			},
			{
				type: UneceTypes.Equipment,
				schema: UneceEquipmentSchema
			},
			{
				type: UneceTypes.Error,
				schema: UneceErrorSchema
			},
			{
				type: UneceTypes.EventElement,
				schema: UneceEventElementSchema
			},
			{
				type: UneceTypes.ExchangedDeclaration,
				schema: UneceExchangedDeclarationSchema
			},
			{
				type: UneceTypes.ExchangedDocument,
				schema: UneceExchangedDocumentSchema
			},
			{
				type: UneceTypes.ExchangedDocumentContext,
				schema: UneceExchangedDocumentContextSchema
			},
			{
				type: UneceTypes.ExperienceEvent,
				schema: UneceExperienceEventSchema
			},
			{
				type: UneceTypes.ExperienceFacility,
				schema: UneceExperienceFacilitySchema
			},
			{
				type: UneceTypes.ExperienceItem,
				schema: UneceExperienceItemSchema
			},
			{
				type: UneceTypes.ExperienceProduct,
				schema: UneceExperienceProductSchema
			},
			{
				type: UneceTypes.ExperienceProgramAction,
				schema: UneceExperienceProgramActionSchema
			},
			{
				type: UneceTypes.FieldCrop,
				schema: UneceFieldCropSchema
			},
			{
				type: UneceTypes.FileSizeUnitMeasureCode,
				schema: UneceFileSizeUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.FileSizeUnitMeasureType,
				schema: UneceFileSizeUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.FinancialAccountTypeCodeList,
				schema: UneceFinancialAccountTypeCodeListSchema
			},
			{
				type: UneceTypes.FinancialAdjustment,
				schema: UneceFinancialAdjustmentSchema
			},
			{
				type: UneceTypes.FinancialAdjustmentReasonCodeList,
				schema: UneceFinancialAdjustmentReasonCodeListSchema
			},
			{
				type: UneceTypes.FinancialCard,
				schema: UneceFinancialCardSchema
			},
			{
				type: UneceTypes.FinancialIdentity,
				schema: UneceFinancialIdentitySchema
			},
			{
				type: UneceTypes.FinancialInstitutionAddress,
				schema: UneceFinancialInstitutionAddressSchema
			},
			{
				type: UneceTypes.FinancialInstitutionRoleCodeList,
				schema: UneceFinancialInstitutionRoleCodeListSchema
			},
			{
				type: UneceTypes.FinancingFinancialAccount,
				schema: UneceFinancingFinancialAccountSchema
			},
			{
				type: UneceTypes.FinancingRequestDocument,
				schema: UneceFinancingRequestDocumentSchema
			},
			{
				type: UneceTypes.FinancingRequestResultDocument,
				schema: UneceFinancingRequestResultDocumentSchema
			},
			{
				type: UneceTypes.FinancingStatus,
				schema: UneceFinancingStatusSchema
			},
			{
				type: UneceTypes.FinancingSummaryDocument,
				schema: UneceFinancingSummaryDocumentSchema
			},
			{
				type: UneceTypes.FoodChoice,
				schema: UneceFoodChoiceSchema
			},
			{
				type: UneceTypes.ForecastTerms,
				schema: UneceForecastTermsSchema
			},
			{
				type: UneceTypes.FreightChargeTariffClassCodeList,
				schema: UneceFreightChargeTariffClassCodeListSchema
			},
			{
				type: UneceTypes.FreightChargeTypeId,
				schema: UneceFreightChargeTypeIdSchema
			},
			{
				type: UneceTypes.Fuel,
				schema: UneceFuelSchema
			},
			{
				type: UneceTypes.GeographicalArea,
				schema: UneceGeographicalAreaSchema
			},
			{
				type: UneceTypes.GeographicalCoordinate,
				schema: UneceGeographicalCoordinateSchema
			},
			{
				type: UneceTypes.GeographicalFeature,
				schema: UneceGeographicalFeatureSchema
			},
			{
				type: UneceTypes.GeographicalGrid,
				schema: UneceGeographicalGridSchema
			},
			{
				type: UneceTypes.GeographicalLine,
				schema: UneceGeographicalLineSchema
			},
			{
				type: UneceTypes.GeographicalMultiCurve,
				schema: UneceGeographicalMultiCurveSchema
			},
			{
				type: UneceTypes.GeographicalMultiPoint,
				schema: UneceGeographicalMultiPointSchema
			},
			{
				type: UneceTypes.GeographicalMultiSurface,
				schema: UneceGeographicalMultiSurfaceSchema
			},
			{
				type: UneceTypes.GeographicalObjectCharacteristic,
				schema: UneceGeographicalObjectCharacteristicSchema
			},
			{
				type: UneceTypes.GeographicalPoint,
				schema: UneceGeographicalPointSchema
			},
			{
				type: UneceTypes.GeographicalSurface,
				schema: UneceGeographicalSurfaceSchema
			},
			{
				type: UneceTypes.GeopoliticalRegion,
				schema: UneceGeopoliticalRegionSchema
			},
			{
				type: UneceTypes.GoodsCharacteristic,
				schema: UneceGoodsCharacteristicSchema
			},
			{
				type: UneceTypes.GoodsTypeCodeList,
				schema: UneceGoodsTypeCodeListSchema
			},
			{
				type: UneceTypes.GoodsTypeExtensionCodeList,
				schema: UneceGoodsTypeExtensionCodeListSchema
			},
			{
				type: UneceTypes.GovernmentActionCodeList,
				schema: UneceGovernmentActionCodeListSchema
			},
			{
				type: UneceTypes.GovernmentRegistration,
				schema: UneceGovernmentRegistrationSchema
			},
			{
				type: UneceTypes.GroupedWorkItem,
				schema: UneceGroupedWorkItemSchema
			},
			{
				type: UneceTypes.Guarantee,
				schema: UneceGuaranteeSchema
			},
			{
				type: UneceTypes.GuestArrival,
				schema: UneceGuestArrivalSchema
			},
			{
				type: UneceTypes.GuestHealthIndication,
				schema: UneceGuestHealthIndicationSchema
			},
			{
				type: UneceTypes.GuestPerson,
				schema: UneceGuestPersonSchema
			},
			{
				type: UneceTypes.HandlingInstructions,
				schema: UneceHandlingInstructionsSchema
			},
			{
				type: UneceTypes.HaulageInstructions,
				schema: UneceHaulageInstructionsSchema
			},
			{
				type: UneceTypes.HazardousMaterial,
				schema: UneceHazardousMaterialSchema
			},
			{
				type: UneceTypes.HeaderBalanceOut,
				schema: UneceHeaderBalanceOutSchema
			},
			{
				type: UneceTypes.HeaderTradeAgreement,
				schema: UneceHeaderTradeAgreementSchema
			},
			{
				type: UneceTypes.HeaderTradeDelivery,
				schema: UneceHeaderTradeDeliverySchema
			},
			{
				type: UneceTypes.HeaderTradeSettlement,
				schema: UneceHeaderTradeSettlementSchema
			},
			{
				type: UneceTypes.IdentifiedFault,
				schema: UneceIdentifiedFaultSchema
			},
			{
				type: UneceTypes.Illness,
				schema: UneceIllnessSchema
			},
			{
				type: UneceTypes.IndividualTTAnimal,
				schema: UneceIndividualTTAnimalSchema
			},
			{
				type: UneceTypes.InformationSource,
				schema: UneceInformationSourceSchema
			},
			{
				type: UneceTypes.IngredientRangeMeasurement,
				schema: UneceIngredientRangeMeasurementSchema
			},
			{
				type: UneceTypes.InspectionEvent,
				schema: UneceInspectionEventSchema
			},
			{
				type: UneceTypes.InspectionInstructions,
				schema: UneceInspectionInstructionsSchema
			},
			{
				type: UneceTypes.InspectionNote,
				schema: UneceInspectionNoteSchema
			},
			{
				type: UneceTypes.InspectionPerson,
				schema: UneceInspectionPersonSchema
			},
			{
				type: UneceTypes.InspectionReference,
				schema: UneceInspectionReferenceSchema
			},
			{
				type: UneceTypes.InspectionResult,
				schema: UneceInspectionResultSchema
			},
			{
				type: UneceTypes.InspectionResultCharacteristic,
				schema: UneceInspectionResultCharacteristicSchema
			},
			{
				type: UneceTypes.InspectionStatus,
				schema: UneceInspectionStatusSchema
			},
			{
				type: UneceTypes.InstalmentPayment,
				schema: UneceInstalmentPaymentSchema
			},
			{
				type: UneceTypes.InstalmentPlan,
				schema: UneceInstalmentPlanSchema
			},
			{
				type: UneceTypes.InstructedTemperature,
				schema: UneceInstructedTemperatureSchema
			},
			{
				type: UneceTypes.InvoiceDocumentCodeList,
				schema: UneceInvoiceDocumentCodeListSchema
			},
			{
				type: UneceTypes.IOTDevice,
				schema: UneceIOTDeviceSchema
			},
			{
				type: UneceTypes.Issue,
				schema: UneceIssueSchema
			},
			{
				type: UneceTypes.Keyword,
				schema: UneceKeywordSchema
			},
			{
				type: UneceTypes.LaboratoryObservationAnalysisMethod,
				schema: UneceLaboratoryObservationAnalysisMethodSchema
			},
			{
				type: UneceTypes.LaboratoryObservationContact,
				schema: UneceLaboratoryObservationContactSchema
			},
			{
				type: UneceTypes.LaboratoryObservationInstructions,
				schema: UneceLaboratoryObservationInstructionsSchema
			},
			{
				type: UneceTypes.LaboratoryObservationNote,
				schema: UneceLaboratoryObservationNoteSchema
			},
			{
				type: UneceTypes.LaboratoryObservationParty,
				schema: UneceLaboratoryObservationPartySchema
			},
			{
				type: UneceTypes.LaboratoryObservationReference,
				schema: UneceLaboratoryObservationReferenceSchema
			},
			{
				type: UneceTypes.LanguageCodeList,
				schema: UneceLanguageCodeListSchema
			},
			{
				type: UneceTypes.LanguageId,
				schema: UneceLanguageIdSchema
			},
			{
				type: UneceTypes.LanguageProficiency,
				schema: UneceLanguageProficiencySchema
			},
			{
				type: UneceTypes.LegalOrganization,
				schema: UneceLegalOrganizationSchema
			},
			{
				type: UneceTypes.LegalRegistration,
				schema: UneceLegalRegistrationSchema
			},
			{
				type: UneceTypes.Licence,
				schema: UneceLicenceSchema
			},
			{
				type: UneceTypes.LifetimeEndCostCodeList,
				schema: UneceLifetimeEndCostCodeListSchema
			},
			{
				type: UneceTypes.LinearRing,
				schema: UneceLinearRingSchema
			},
			{
				type: UneceTypes.LinearUnitMeasureCode,
				schema: UneceLinearUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.LinearUnitMeasureType,
				schema: UneceLinearUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.LineStatusCodeList,
				schema: UneceLineStatusCodeListSchema
			},
			{
				type: UneceTypes.LineTradeAgreement,
				schema: UneceLineTradeAgreementSchema
			},
			{
				type: UneceTypes.LineTradeDelivery,
				schema: UneceLineTradeDeliverySchema
			},
			{
				type: UneceTypes.LineTradeSettlement,
				schema: UneceLineTradeSettlementSchema
			},
			{
				type: UneceTypes.LineTradeTransaction,
				schema: UneceLineTradeTransactionSchema
			},
			{
				type: UneceTypes.Location,
				schema: UneceLocationSchema
			},
			{
				type: UneceTypes.LocationFunctionCodeList,
				schema: UneceLocationFunctionCodeListSchema
			},
			{
				type: UneceTypes.LocationParty,
				schema: UneceLocationPartySchema
			},
			{
				type: UneceTypes.LogisticsChargeCalculationBasisCodeList,
				schema: UneceLogisticsChargeCalculationBasisCodeListSchema
			},
			{
				type: UneceTypes.LogisticsLabel,
				schema: UneceLogisticsLabelSchema
			},
			{
				type: UneceTypes.LogisticsLocation,
				schema: UneceLogisticsLocationSchema
			},
			{
				type: UneceTypes.LogisticsPackaging,
				schema: UneceLogisticsPackagingSchema
			},
			{
				type: UneceTypes.LogisticsStatus,
				schema: UneceLogisticsStatusSchema
			},
			{
				type: UneceTypes.LogisticsStatusCodeList,
				schema: UneceLogisticsStatusCodeListSchema
			},
			{
				type: UneceTypes.LogisticsTransportEquipment,
				schema: UneceLogisticsTransportEquipmentSchema
			},
			{
				type: UneceTypes.LogisticsTransportMeans,
				schema: UneceLogisticsTransportMeansSchema
			},
			{
				type: UneceTypes.Machine,
				schema: UneceMachineSchema
			},
			{
				type: UneceTypes.Marketplace,
				schema: UneceMarketplaceSchema
			},
			{
				type: UneceTypes.Marking,
				schema: UneceMarkingSchema
			},
			{
				type: UneceTypes.MarkingInstructionCodeList,
				schema: UneceMarkingInstructionCodeListSchema
			},
			{
				type: UneceTypes.MDHHealthIndication,
				schema: UneceMDHHealthIndicationSchema
			},
			{
				type: UneceTypes.MeasureCode,
				schema: UneceMeasureCodeSchema
			},
			{
				type: UneceTypes.MeasuredAttributeCodeList,
				schema: UneceMeasuredAttributeCodeListSchema
			},
			{
				type: UneceTypes.Measurement,
				schema: UneceMeasurementSchema
			},
			{
				type: UneceTypes.MeasureType,
				schema: UneceMeasureTypeSchema
			},
			{
				type: UneceTypes.Membership,
				schema: UneceMembershipSchema
			},
			{
				type: UneceTypes.MessageFunctionCodeList,
				schema: UneceMessageFunctionCodeListSchema
			},
			{
				type: UneceTypes.MetricCharacteristic,
				schema: UneceMetricCharacteristicSchema
			},
			{
				type: UneceTypes.NegotiationContext,
				schema: UneceNegotiationContextSchema
			},
			{
				type: UneceTypes.NegotiationExchange,
				schema: UneceNegotiationExchangeSchema
			},
			{
				type: UneceTypes.Note,
				schema: UneceNoteSchema
			},
			{
				type: UneceTypes.Object,
				schema: UneceObjectSchema
			},
			{
				type: UneceTypes.Observation,
				schema: UneceObservationSchema
			},
			{
				type: UneceTypes.ObservationObjectiveParameter,
				schema: UneceObservationObjectiveParameterSchema
			},
			{
				type: UneceTypes.ObservationResult,
				schema: UneceObservationResultSchema
			},
			{
				type: UneceTypes.ObservationResultCharacteristic,
				schema: UneceObservationResultCharacteristicSchema
			},
			{
				type: UneceTypes.OperationalParameter,
				schema: UneceOperationalParameterSchema
			},
			{
				type: UneceTypes.OrganizationalCertificate,
				schema: UneceOrganizationalCertificateSchema
			},
			{
				type: UneceTypes.OrganizationalCertification,
				schema: UneceOrganizationalCertificationSchema
			},
			{
				type: UneceTypes.OrganizationCharacteristic,
				schema: UneceOrganizationCharacteristicSchema
			},
			{
				type: UneceTypes.OrganizationFunctionTypeCodeList,
				schema: UneceOrganizationFunctionTypeCodeListSchema
			},
			{
				type: UneceTypes.Package,
				schema: UnecePackageSchema
			},
			{
				type: UneceTypes.PackageTypeCodeList,
				schema: UnecePackageTypeCodeListSchema
			},
			{
				type: UneceTypes.PackagingInstructions,
				schema: UnecePackagingInstructionsSchema
			},
			{
				type: UneceTypes.PackagingLevelCodeList,
				schema: UnecePackagingLevelCodeListSchema
			},
			{
				type: UneceTypes.PackagingMarkingCodeList,
				schema: UnecePackagingMarkingCodeListSchema
			},
			{
				type: UneceTypes.Pairing,
				schema: UnecePairingSchema
			},
			{
				type: UneceTypes.PartyRoleCodeList,
				schema: UnecePartyRoleCodeListSchema
			},
			{
				type: UneceTypes.PartyTypeCodeList,
				schema: UnecePartyTypeCodeListSchema
			},
			{
				type: UneceTypes.Payload,
				schema: UnecePayloadSchema
			},
			{
				type: UneceTypes.PayloadInstance,
				schema: UnecePayloadInstanceSchema
			},
			{
				type: UneceTypes.PaymentBalanceOut,
				schema: UnecePaymentBalanceOutSchema
			},
			{
				type: UneceTypes.PaymentDiscountTerms,
				schema: UnecePaymentDiscountTermsSchema
			},
			{
				type: UneceTypes.PaymentFinancialAccount,
				schema: UnecePaymentFinancialAccountSchema
			},
			{
				type: UneceTypes.PaymentFinancialInstitution,
				schema: UnecePaymentFinancialInstitutionSchema
			},
			{
				type: UneceTypes.PaymentGuaranteeMeansCodeList,
				schema: UnecePaymentGuaranteeMeansCodeListSchema
			},
			{
				type: UneceTypes.PaymentMeans,
				schema: UnecePaymentMeansSchema
			},
			{
				type: UneceTypes.PaymentMeansChannelCodeList,
				schema: UnecePaymentMeansChannelCodeListSchema
			},
			{
				type: UneceTypes.PaymentMeansCodeList,
				schema: UnecePaymentMeansCodeListSchema
			},
			{
				type: UneceTypes.PaymentMethodCodeList,
				schema: UnecePaymentMethodCodeListSchema
			},
			{
				type: UneceTypes.PaymentPenaltyTerms,
				schema: UnecePaymentPenaltyTermsSchema
			},
			{
				type: UneceTypes.PaymentTerms,
				schema: UnecePaymentTermsSchema
			},
			{
				type: UneceTypes.PaymentTermsEventTimeReferenceCodeList,
				schema: UnecePaymentTermsEventTimeReferenceCodeListSchema
			},
			{
				type: UneceTypes.PaymentTermsId,
				schema: UnecePaymentTermsIdSchema
			},
			{
				type: UneceTypes.PaymentTermsTypeCodeList,
				schema: UnecePaymentTermsTypeCodeListSchema
			},
			{
				type: UneceTypes.PaymentTradeSettlement,
				schema: UnecePaymentTradeSettlementSchema
			},
			{
				type: UneceTypes.PersonalEffects,
				schema: UnecePersonalEffectsSchema
			},
			{
				type: UneceTypes.PersonIdentity,
				schema: UnecePersonIdentitySchema
			},
			{
				type: UneceTypes.PetAnimal,
				schema: UnecePetAnimalSchema
			},
			{
				type: UneceTypes.Picture,
				schema: UnecePictureSchema
			},
			{
				type: UneceTypes.Plot,
				schema: UnecePlotSchema
			},
			{
				type: UneceTypes.Policy,
				schema: UnecePolicySchema
			},
			{
				type: UneceTypes.Polygon,
				schema: UnecePolygonSchema
			},
			{
				type: UneceTypes.PortMovementEvent,
				schema: UnecePortMovementEventSchema
			},
			{
				type: UneceTypes.Preference,
				schema: UnecePreferenceSchema
			},
			{
				type: UneceTypes.PreventiveAction,
				schema: UnecePreventiveActionSchema
			},
			{
				type: UneceTypes.PriceTypeCodeList,
				schema: UnecePriceTypeCodeListSchema
			},
			{
				type: UneceTypes.Print,
				schema: UnecePrintSchema
			},
			{
				type: UneceTypes.PriorityDescriptionCodeList,
				schema: UnecePriorityDescriptionCodeListSchema
			},
			{
				type: UneceTypes.ProcessCertificate,
				schema: UneceProcessCertificateSchema
			},
			{
				type: UneceTypes.ProcessCertification,
				schema: UneceProcessCertificationSchema
			},
			{
				type: UneceTypes.ProcessCharacteristic,
				schema: UneceProcessCharacteristicSchema
			},
			{
				type: UneceTypes.ProcessTypeCodeList,
				schema: UneceProcessTypeCodeListSchema
			},
			{
				type: UneceTypes.ProcessWorkItem,
				schema: UneceProcessWorkItemSchema
			},
			{
				type: UneceTypes.Produce,
				schema: UneceProduceSchema
			},
			{
				type: UneceTypes.Product,
				schema: UneceProductSchema
			},
			{
				type: UneceTypes.ProductBatch,
				schema: UneceProductBatchSchema
			},
			{
				type: UneceTypes.ProductBatchCertificate,
				schema: UneceProductBatchCertificateSchema
			},
			{
				type: UneceTypes.ProductBatchCertification,
				schema: UneceProductBatchCertificationSchema
			},
			{
				type: UneceTypes.ProductBatchCharacteristic,
				schema: UneceProductBatchCharacteristicSchema
			},
			{
				type: UneceTypes.ProductCertificate,
				schema: UneceProductCertificateSchema
			},
			{
				type: UneceTypes.ProductCharacteristic,
				schema: UneceProductCharacteristicSchema
			},
			{
				type: UneceTypes.ProductCharacteristicCondition,
				schema: UneceProductCharacteristicConditionSchema
			},
			{
				type: UneceTypes.ProductFinishingTreatment,
				schema: UneceProductFinishingTreatmentSchema
			},
			{
				type: UneceTypes.ProductGroup,
				schema: UneceProductGroupSchema
			},
			{
				type: UneceTypes.ProductHandlingProcess,
				schema: UneceProductHandlingProcessSchema
			},
			{
				type: UneceTypes.ProductInstance,
				schema: UneceProductInstanceSchema
			},
			{
				type: UneceTypes.Production,
				schema: UneceProductionSchema
			},
			{
				type: UneceTypes.ProductionCycle,
				schema: UneceProductionCycleSchema
			},
			{
				type: UneceTypes.ProductionDevice,
				schema: UneceProductionDeviceSchema
			},
			{
				type: UneceTypes.ProductionFacility,
				schema: UneceProductionFacilitySchema
			},
			{
				type: UneceTypes.ProductionProcess,
				schema: UneceProductionProcessSchema
			},
			{
				type: UneceTypes.ProductionUnit,
				schema: UneceProductionUnitSchema
			},
			{
				type: UneceTypes.ProductionWasteMaterial,
				schema: UneceProductionWasteMaterialSchema
			},
			{
				type: UneceTypes.ProductionWasteMaterialComponent,
				schema: UneceProductionWasteMaterialComponentSchema
			},
			{
				type: UneceTypes.ProductionWasteRecoveryDisposalProcess,
				schema: UneceProductionWasteRecoveryDisposalProcessSchema
			},
			{
				type: UneceTypes.ProductLabel,
				schema: UneceProductLabelSchema
			},
			{
				type: UneceTypes.Project,
				schema: UneceProjectSchema
			},
			{
				type: UneceTypes.ProprietaryIdentity,
				schema: UneceProprietaryIdentitySchema
			},
			{
				type: UneceTypes.ProtectionMeans,
				schema: UneceProtectionMeansSchema
			},
			{
				type: UneceTypes.QuantityAnalysis,
				schema: UneceQuantityAnalysisSchema
			},
			{
				type: UneceTypes.QuantityCode,
				schema: UneceQuantityCodeSchema
			},
			{
				type: UneceTypes.QuantityType,
				schema: UneceQuantityTypeSchema
			},
			{
				type: UneceTypes.QuarantineInstructions,
				schema: UneceQuarantineInstructionsSchema
			},
			{
				type: UneceTypes.QuotationDocumentCodeList,
				schema: UneceQuotationDocumentCodeListSchema
			},
			{
				type: UneceTypes.RadioactiveIsotope,
				schema: UneceRadioactiveIsotopeSchema
			},
			{
				type: UneceTypes.RadioactiveMaterial,
				schema: UneceRadioactiveMaterialSchema
			},
			{
				type: UneceTypes.Radionuclide,
				schema: UneceRadionuclideSchema
			},
			{
				type: UneceTypes.Range,
				schema: UneceRangeSchema
			},
			{
				type: UneceTypes.RecordedStatus,
				schema: UneceRecordedStatusSchema
			},
			{
				type: UneceTypes.ReferenceCodeList,
				schema: UneceReferenceCodeListSchema
			},
			{
				type: UneceTypes.ReferencePrice,
				schema: UneceReferencePriceSchema
			},
			{
				type: UneceTypes.RefundMethodCodeList,
				schema: UneceRefundMethodCodeListSchema
			},
			{
				type: UneceTypes.RegisteredTax,
				schema: UneceRegisteredTaxSchema
			},
			{
				type: UneceTypes.RegulatedGoods,
				schema: UneceRegulatedGoodsSchema
			},
			{
				type: UneceTypes.RegulatoryProcedure,
				schema: UneceRegulatoryProcedureSchema
			},
			{
				type: UneceTypes.RemittanceDocumentCodeList,
				schema: UneceRemittanceDocumentCodeListSchema
			},
			{
				type: UneceTypes.RepresentativePerson,
				schema: UneceRepresentativePersonSchema
			},
			{
				type: UneceTypes.RequestingParty,
				schema: UneceRequestingPartySchema
			},
			{
				type: UneceTypes.Requirement,
				schema: UneceRequirementSchema
			},
			{
				type: UneceTypes.Response,
				schema: UneceResponseSchema
			},
			{
				type: UneceTypes.ResponseTypeCodeList,
				schema: UneceResponseTypeCodeListSchema
			},
			{
				type: UneceTypes.ResponsibleGovernmentAgencyCodeList,
				schema: UneceResponsibleGovernmentAgencyCodeListSchema
			},
			{
				type: UneceTypes.ResponsibleGovernmentAgencyInvolvementCodeList,
				schema: UneceResponsibleGovernmentAgencyInvolvementCodeListSchema
			},
			{
				type: UneceTypes.ReturnableAssetInstructions,
				schema: UneceReturnableAssetInstructionsSchema
			},
			{
				type: UneceTypes.RiskAnalysisResult,
				schema: UneceRiskAnalysisResultSchema
			},
			{
				type: UneceTypes.SanitaryMeasure,
				schema: UneceSanitaryMeasureSchema
			},
			{
				type: UneceTypes.ScenarioTypeCodeList,
				schema: UneceScenarioTypeCodeListSchema
			},
			{
				type: UneceTypes.Schedule,
				schema: UneceScheduleSchema
			},
			{
				type: UneceTypes.SchedulingDocumentCodeList,
				schema: UneceSchedulingDocumentCodeListSchema
			},
			{
				type: UneceTypes.Seal,
				schema: UneceSealSchema
			},
			{
				type: UneceTypes.SealConditionCodeList,
				schema: UneceSealConditionCodeListSchema
			},
			{
				type: UneceTypes.SealingPartyRoleCodeList,
				schema: UneceSealingPartyRoleCodeListSchema
			},
			{
				type: UneceTypes.Section,
				schema: UneceSectionSchema
			},
			{
				type: UneceTypes.SecurityTag,
				schema: UneceSecurityTagSchema
			},
			{
				type: UneceTypes.Segment,
				schema: UneceSegmentSchema
			},
			{
				type: UneceTypes.Sensor,
				schema: UneceSensorSchema
			},
			{
				type: UneceTypes.Service,
				schema: UneceServiceSchema
			},
			{
				type: UneceTypes.ServiceCharge,
				schema: UneceServiceChargeSchema
			},
			{
				type: UneceTypes.ShippingMarks,
				schema: UneceShippingMarksSchema
			},
			{
				type: UneceTypes.SoftwareUserTypeCodeList,
				schema: UneceSoftwareUserTypeCodeListSchema
			},
			{
				type: UneceTypes.Source,
				schema: UneceSourceSchema
			},
			{
				type: UneceTypes.SpatialDimension,
				schema: UneceSpatialDimensionSchema
			},
			{
				type: UneceTypes.SpecialQuery,
				schema: UneceSpecialQuerySchema
			},
			{
				type: UneceTypes.SpeciesTTAnimal,
				schema: UneceSpeciesTTAnimalSchema
			},
			{
				type: UneceTypes.SpecificationQuery,
				schema: UneceSpecificationQuerySchema
			},
			{
				type: UneceTypes.SpecifiedAction,
				schema: UneceSpecifiedActionSchema
			},
			{
				type: UneceTypes.SpecifiedCertificate,
				schema: UneceSpecifiedCertificateSchema
			},
			{
				type: UneceTypes.SpecifiedCertification,
				schema: UneceSpecifiedCertificationSchema
			},
			{
				type: UneceTypes.SpecifiedChemicalTreatment,
				schema: UneceSpecifiedChemicalTreatmentSchema
			},
			{
				type: UneceTypes.SpecifiedCondition,
				schema: UneceSpecifiedConditionSchema
			},
			{
				type: UneceTypes.SpecifiedDeclaration,
				schema: UneceSpecifiedDeclarationSchema
			},
			{
				type: UneceTypes.SpecifiedFault,
				schema: UneceSpecifiedFaultSchema
			},
			{
				type: UneceTypes.SpecifiedFeature,
				schema: UneceSpecifiedFeatureSchema
			},
			{
				type: UneceTypes.SpecifiedInspection,
				schema: UneceSpecifiedInspectionSchema
			},
			{
				type: UneceTypes.SpecifiedLocation,
				schema: UneceSpecifiedLocationSchema
			},
			{
				type: UneceTypes.SpecifiedMaterial,
				schema: UneceSpecifiedMaterialSchema
			},
			{
				type: UneceTypes.SpecifiedMethod,
				schema: UneceSpecifiedMethodSchema
			},
			{
				type: UneceTypes.SpecifiedNote,
				schema: UneceSpecifiedNoteSchema
			},
			{
				type: UneceTypes.SpecifiedParameter,
				schema: UneceSpecifiedParameterSchema
			},
			{
				type: UneceTypes.SpecifiedPeriod,
				schema: UneceSpecifiedPeriodSchema
			},
			{
				type: UneceTypes.SpecifiedQualification,
				schema: UneceSpecifiedQualificationSchema
			},
			{
				type: UneceTypes.SpecifiedRoute,
				schema: UneceSpecifiedRouteSchema
			},
			{
				type: UneceTypes.SpecifiedTemperature,
				schema: UneceSpecifiedTemperatureSchema
			},
			{
				type: UneceTypes.Standard,
				schema: UneceStandardSchema
			},
			{
				type: UneceTypes.StatusCodeList,
				schema: UneceStatusCodeListSchema
			},
			{
				type: UneceTypes.StoresItemInventory,
				schema: UneceStoresItemInventorySchema
			},
			{
				type: UneceTypes.Stowaway,
				schema: UneceStowawaySchema
			},
			{
				type: UneceTypes.SubjectCodeList,
				schema: UneceSubjectCodeListSchema
			},
			{
				type: UneceTypes.SubordinateLineTradeAgreement,
				schema: UneceSubordinateLineTradeAgreementSchema
			},
			{
				type: UneceTypes.SubordinateLineTradeDelivery,
				schema: UneceSubordinateLineTradeDeliverySchema
			},
			{
				type: UneceTypes.SubordinateLineTradeSettlement,
				schema: UneceSubordinateLineTradeSettlementSchema
			},
			{
				type: UneceTypes.SubordinateLocation,
				schema: UneceSubordinateLocationSchema
			},
			{
				type: UneceTypes.SubordinateSubordinateLocation,
				schema: UneceSubordinateSubordinateLocationSchema
			},
			{
				type: UneceTypes.SubordinateTradeLineItem,
				schema: UneceSubordinateTradeLineItemSchema
			},
			{
				type: UneceTypes.SupplyChainEvent,
				schema: UneceSupplyChainEventSchema
			},
			{
				type: UneceTypes.SupplyChainInventory,
				schema: UneceSupplyChainInventorySchema
			},
			{
				type: UneceTypes.SupplyChainPackaging,
				schema: UneceSupplyChainPackagingSchema
			},
			{
				type: UneceTypes.SupplyChainReference,
				schema: UneceSupplyChainReferenceSchema
			},
			{
				type: UneceTypes.SupplyChainTradeLineItem,
				schema: UneceSupplyChainTradeLineItemSchema
			},
			{
				type: UneceTypes.SupplyChainTradeTransaction,
				schema: UneceSupplyChainTradeTransactionSchema
			},
			{
				type: UneceTypes.SupplyPlan,
				schema: UneceSupplyPlanSchema
			},
			{
				type: UneceTypes.SustainabilityCharacteristic,
				schema: UneceSustainabilityCharacteristicSchema
			},
			{
				type: UneceTypes.SustainabilityInspection,
				schema: UneceSustainabilityInspectionSchema
			},
			{
				type: UneceTypes.TaxCategoryCodeList,
				schema: UneceTaxCategoryCodeListSchema
			},
			{
				type: UneceTypes.TaxExemptionReasonCodeList,
				schema: UneceTaxExemptionReasonCodeListSchema
			},
			{
				type: UneceTypes.TaxRegistration,
				schema: UneceTaxRegistrationSchema
			},
			{
				type: UneceTypes.TaxTypeCodeList,
				schema: UneceTaxTypeCodeListSchema
			},
			{
				type: UneceTypes.TechnicalCharacteristic,
				schema: UneceTechnicalCharacteristicSchema
			},
			{
				type: UneceTypes.TemperatureSettingInstructions,
				schema: UneceTemperatureSettingInstructionsSchema
			},
			{
				type: UneceTypes.TemperatureTypeCodeList,
				schema: UneceTemperatureTypeCodeListSchema
			},
			{
				type: UneceTypes.TemperatureUnitMeasureCode,
				schema: UneceTemperatureUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.TemperatureUnitMeasureType,
				schema: UneceTemperatureUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.TestSpecificationReport,
				schema: UneceTestSpecificationReportSchema
			},
			{
				type: UneceTypes.TimeReferenceCodeList,
				schema: UneceTimeReferenceCodeListSchema
			},
			{
				type: UneceTypes.Tolerance,
				schema: UneceToleranceSchema
			},
			{
				type: UneceTypes.TradeAddress,
				schema: UneceTradeAddressSchema
			},
			{
				type: UneceTypes.TradeAllowanceCharge,
				schema: UneceTradeAllowanceChargeSchema
			},
			{
				type: UneceTypes.TradeContact,
				schema: UneceTradeContactSchema
			},
			{
				type: UneceTypes.TradeLocation,
				schema: UneceTradeLocationSchema
			},
			{
				type: UneceTypes.TradeParty,
				schema: UneceTradePartySchema
			},
			{
				type: UneceTypes.TradePrice,
				schema: UneceTradePriceSchema
			},
			{
				type: UneceTypes.TradeProduct,
				schema: UneceTradeProductSchema
			},
			{
				type: UneceTypes.TradeProductCertification,
				schema: UneceTradeProductCertificationSchema
			},
			{
				type: UneceTypes.TradeProductFeature,
				schema: UneceTradeProductFeatureSchema
			},
			{
				type: UneceTypes.TradeSettlementHeaderMonetarySummation,
				schema: UneceTradeSettlementHeaderMonetarySummationSchema
			},
			{
				type: UneceTypes.TradeSettlementLineMonetarySummation,
				schema: UneceTradeSettlementLineMonetarySummationSchema
			},
			{
				type: UneceTypes.TradeSettlementMonetarySummation,
				schema: UneceTradeSettlementMonetarySummationSchema
			},
			{
				type: UneceTypes.TradeSettlementPayment,
				schema: UneceTradeSettlementPaymentSchema
			},
			{
				type: UneceTypes.TradeSettlementPaymentMonetarySummation,
				schema: UneceTradeSettlementPaymentMonetarySummationSchema
			},
			{
				type: UneceTypes.TradeTax,
				schema: UneceTradeTaxSchema
			},
			{
				type: UneceTypes.TransportationHealth,
				schema: UneceTransportationHealthSchema
			},
			{
				type: UneceTypes.TransportationWasteMaterial,
				schema: UneceTransportationWasteMaterialSchema
			},
			{
				type: UneceTypes.TransportationWasteMaterialComponent,
				schema: UneceTransportationWasteMaterialComponentSchema
			},
			{
				type: UneceTypes.TransportationWasteRecoveryDisposalProcess,
				schema: UneceTransportationWasteRecoveryDisposalProcessSchema
			},
			{
				type: UneceTypes.TransportContractMovementCodeList,
				schema: UneceTransportContractMovementCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentCategoryCodeList,
				schema: UneceTransportEquipmentCategoryCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentFullnessCodeList,
				schema: UneceTransportEquipmentFullnessCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentHaulageArrangementsCodeList,
				schema: UneceTransportEquipmentHaulageArrangementsCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentLegalStatusCodeList,
				schema: UneceTransportEquipmentLegalStatusCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentMovementStatusCodeList,
				schema: UneceTransportEquipmentMovementStatusCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentOperationalStatusCodeList,
				schema: UneceTransportEquipmentOperationalStatusCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentSizeTypeCodeList,
				schema: UneceTransportEquipmentSizeTypeCodeListSchema
			},
			{
				type: UneceTypes.TransportEquipmentSupplierPartyRoleCodeList,
				schema: UneceTransportEquipmentSupplierPartyRoleCodeListSchema
			},
			{
				type: UneceTypes.TransportEvent,
				schema: UneceTransportEventSchema
			},
			{
				type: UneceTypes.TransportInstructions,
				schema: UneceTransportInstructionsSchema
			},
			{
				type: UneceTypes.TransportMeans,
				schema: UneceTransportMeansSchema
			},
			{
				type: UneceTypes.TransportMeansDirectionCodeList,
				schema: UneceTransportMeansDirectionCodeListSchema
			},
			{
				type: UneceTypes.TransportMeansTypeCodeList,
				schema: UneceTransportMeansTypeCodeListSchema
			},
			{
				type: UneceTypes.TransportModeCodeList,
				schema: UneceTransportModeCodeListSchema
			},
			{
				type: UneceTypes.TransportMovement,
				schema: UneceTransportMovementSchema
			},
			{
				type: UneceTypes.TransportMovementStageCodeList,
				schema: UneceTransportMovementStageCodeListSchema
			},
			{
				type: UneceTypes.TransportMovementTypeCodeList,
				schema: UneceTransportMovementTypeCodeListSchema
			},
			{
				type: UneceTypes.TransportPerson,
				schema: UneceTransportPersonSchema
			},
			{
				type: UneceTypes.TransportRoute,
				schema: UneceTransportRouteSchema
			},
			{
				type: UneceTypes.TransportServiceCategoryCodeList,
				schema: UneceTransportServiceCategoryCodeListSchema
			},
			{
				type: UneceTypes.TransportServiceConditionCodeList,
				schema: UneceTransportServiceConditionCodeListSchema
			},
			{
				type: UneceTypes.TransportServiceLocation,
				schema: UneceTransportServiceLocationSchema
			},
			{
				type: UneceTypes.TransportServicePaymentArrangementCodeList,
				schema: UneceTransportServicePaymentArrangementCodeListSchema
			},
			{
				type: UneceTypes.TransportServicePriorityCodeList,
				schema: UneceTransportServicePriorityCodeListSchema
			},
			{
				type: UneceTypes.TransportServiceRequirementCodeList,
				schema: UneceTransportServiceRequirementCodeListSchema
			},
			{
				type: UneceTypes.TransportSettingTemperature,
				schema: UneceTransportSettingTemperatureSchema
			},
			{
				type: UneceTypes.TTAggregationEvent,
				schema: UneceTTAggregationEventSchema
			},
			{
				type: UneceTypes.TTAnimal,
				schema: UneceTTAnimalSchema
			},
			{
				type: UneceTypes.TTExchangedDocument,
				schema: UneceTTExchangedDocumentSchema
			},
			{
				type: UneceTypes.TTLocation,
				schema: UneceTTLocationSchema
			},
			{
				type: UneceTypes.TTObjectEvent,
				schema: UneceTTObjectEventSchema
			},
			{
				type: UneceTypes.TTParty,
				schema: UneceTTPartySchema
			},
			{
				type: UneceTypes.TTTradeTransaction,
				schema: UneceTTTradeTransactionSchema
			},
			{
				type: UneceTypes.TTTransactionEvent,
				schema: UneceTTTransactionEventSchema
			},
			{
				type: UneceTypes.TTTransformationEvent,
				schema: UneceTTTransformationEventSchema
			},
			{
				type: UneceTypes.UnitMeasureCode,
				schema: UneceUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.UnitMeasureType,
				schema: UneceUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.UsageCondition,
				schema: UneceUsageConditionSchema
			},
			{
				type: UneceTypes.ValidationDocumentStatusCodeList,
				schema: UneceValidationDocumentStatusCodeListSchema
			},
			{
				type: UneceTypes.ValidationStatus,
				schema: UneceValidationStatusSchema
			},
			{
				type: UneceTypes.Version,
				schema: UneceVersionSchema
			},
			{
				type: UneceTypes.VolumeUnitMeasureCode,
				schema: UneceVolumeUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.VolumeUnitMeasureType,
				schema: UneceVolumeUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.Voucher,
				schema: UneceVoucherSchema
			},
			{
				type: UneceTypes.WasteMaterialRecoveryDisposalProcess,
				schema: UneceWasteMaterialRecoveryDisposalProcessSchema
			},
			{
				type: UneceTypes.WasteOriginProcess,
				schema: UneceWasteOriginProcessSchema
			},
			{
				type: UneceTypes.WeightUnitMeasureCode,
				schema: UneceWeightUnitMeasureCodeSchema
			},
			{
				type: UneceTypes.WeightUnitMeasureType,
				schema: UneceWeightUnitMeasureTypeSchema
			},
			{
				type: UneceTypes.WorkflowObject,
				schema: UneceWorkflowObjectSchema
			},
			{
				type: UneceTypes.WorkflowStatusCodeList,
				schema: UneceWorkflowStatusCodeListSchema
			},
			{
				type: UneceTypes.WorkItemDimension,
				schema: UneceWorkItemDimensionSchema
			},
			{
				type: UneceTypes.XHEContext,
				schema: UneceXHEContextSchema
			},
			{
				type: UneceTypes.XHEDocument,
				schema: UneceXHEDocumentSchema
			},
			{
				type: UneceTypes.XHEIdentity,
				schema: UneceXHEIdentitySchema
			},
			{
				type: UneceTypes.XHEParameter,
				schema: UneceXHEParameterSchema
			},
			{
				type: UneceTypes.XHEParty,
				schema: UneceXHEPartySchema
			},
			{
				type: UneceTypes.XHEReference,
				schema: UneceXHEReferenceSchema
			}
		];

		DataTypeHelper.registerTypes(UneceContexts.Namespace, UneceContexts.JsonLdContext, types);
		DataTypeHelper.registerTypes(
			UneceContexts.JsonSchemaNamespace,
			UneceContexts.JsonLdContext,
			types.map(t => ({ type: `Unece${t.type}`, schema: t.schema }))
		);
	}
}
