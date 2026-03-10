# Interface: IUneceRegulatoryProcedure

A set of formal steps to satisfy a cross-border regulation, law or convention.

## See

https://vocabulary.uncefact.org/RegulatoryProcedure

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"RegulatoryProcedure"`

JSON-LD Type.

***

### acquisitionDateTime?

> `optional` **acquisitionDateTime**: `string`

The date, time, date time, or other date time value of an acquisition for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/acquisitionDateTime

***

### amendmentReasonCode?

> `optional` **amendmentReasonCode**: `string`

A code specifying a reason for an amendment to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/amendmentReasonCode

***

### annualQuotaQuantity?

> `optional` **annualQuotaQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The annual quota quantity under this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/annualQuotaQuantity

***

### applicableCurrencyExchange?

> `optional` **applicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)

The applicable currency exchange for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/applicableCurrencyExchange

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period applicable to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableTax?

> `optional` **applicableTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax, levy or duty applicable to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### borderClearanceInstructions?

> `optional` **borderClearanceInstructions**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Border clearance instructions for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/borderClearanceInstructions

***

### categoryCode?

> `optional` **categoryCode**: `string`

A code specifying a category for this cross-border regulatory procedure, such as the appendices of the CITES Convention.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### certificationBasis?

> `optional` **certificationBasis**: `string`

A basis for a certification, expressed as text, for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/certificationBasis

***

### consignmentDestinationSpecifiedLocation?

> `optional` **consignmentDestinationSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A consignment destination location specified for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/consignmentDestinationSpecifiedLocation

***

### controlRequirementIndicator?

> `optional` **controlRequirementIndicator**: `boolean`

The indication of whether or not a control is required for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/controlRequirementIndicator

***

### controlResult?

> `optional` **controlResult**: `string`

A control result, expressed as text, for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/controlResult

***

### controlStartDateConfirmationIndicator?

> `optional` **controlStartDateConfirmationIndicator**: `boolean`

The indication of whether or not the start date of a control has been confirmed for this cross-border regulatory
procedure.

#### See

https://vocabulary.uncefact.org/controlStartDateConfirmationIndicator

***

### crossBorderRegulatoryProcedurePaymentMethodCode?

> `optional` **crossBorderRegulatoryProcedurePaymentMethodCode**: [`UnecePaymentMethodCodeList`](../type-aliases/UnecePaymentMethodCodeList.md)

The code specifying the payment method for this cross-border regulatory procedure, such as by deferred payment method.

#### See

https://vocabulary.uncefact.org/crossBorderRegulatoryProcedurePaymentMethodCode

***

### crossBorderRegulatoryProcedureTypeCode?

> `optional` **crossBorderRegulatoryProcedureTypeCode**: `string`

A code specifying a type of cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/crossBorderRegulatoryProcedureTypeCode

***

### customsProcedureGuaranteeCode?

> `optional` **customsProcedureGuaranteeCode**: `"unece:CustomsProcedureGuaranteeCodeList#ZZZ"`

The code specifying an undertaking given in cash, bond or as a written guarantee to ensure that an obligation will be
fulfilled for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/customsProcedureGuaranteeCode

***

### declarantAssignedDeclarationId?

> `optional` **declarantAssignedDeclarationId**: `string` \| `IJsonLdValueObject`

The declarant assigned identifier of a declaration for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/declarantAssignedDeclarationId

***

### declarationLodgementLocation?

> `optional` **declarationLodgementLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location at which a declaration has been lodged for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/declarationLodgementLocation

***

### deferredPayableTotalChargeAmount?

> `optional` **deferredPayableTotalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total charges, including tariff and non-tariff charges, deferred for this cross-border
regulatory procedure.

#### See

https://vocabulary.uncefact.org/deferredPayableTotalChargeAmount

***

### deferredPaymentMethodIndicator?

> `optional` **deferredPaymentMethodIndicator**: `boolean`

The indication of whether or not the deferred payment method is applicable to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/deferredPaymentMethodIndicator

***

### document?

> `optional` **document**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced by this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/document

***

### entryCustomsOfficeSpecifiedLocation?

> `optional` **entryCustomsOfficeSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of the specified customs office at which the goods subject to this cross-border regulatory procedure, enter
the customs territory of entry.

#### See

https://vocabulary.uncefact.org/entryCustomsOfficeSpecifiedLocation

***

### examinationEvent?

> `optional` **examinationEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An examination event for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/examinationEvent

***

### exemptionClaimantParty?

> `optional` **exemptionClaimantParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who claims an exemption from this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/exemptionClaimantParty

***

### exitCustomsOfficeSpecifiedLocation?

> `optional` **exitCustomsOfficeSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of the specified customs office at which the goods which are subject to this cross-border regulatory
procedure leave the customs territory of destination.

#### See

https://vocabulary.uncefact.org/exitCustomsOfficeSpecifiedLocation

***

### exportCustomsOfficeSpecifiedLocation?

> `optional` **exportCustomsOfficeSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of the specified customs office which is responsible for export formalities for the goods which are subject
to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/exportCustomsOfficeSpecifiedLocation

***

### exportLicenceControlClassificationId?

> `optional` **exportLicenceControlClassificationId**: `string` \| `IJsonLdValueObject`

The identifier of the export licence classification for control purposes relevant to this cross-border regulatory
procedure, such as per the Wassenaar agreement concerning trade in weapons and dual-use goods and technologies.

#### See

https://vocabulary.uncefact.org/exportLicenceControlClassificationId

***

### freeTradeAgreementName?

> `optional` **freeTradeAgreementName**: `string`

The name of a free trade agreement, expressed as text, for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/freeTradeAgreementName

***

### goodsStatusCode?

> `optional` **goodsStatusCode**: `string`

The code specifying the goods status for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/goodsStatusCode

***

### governmentActionResponsibleAgencyActionCode?

> `optional` **governmentActionResponsibleAgencyActionCode**: [`UneceGovernmentActionCodeList`](../type-aliases/UneceGovernmentActionCodeList.md)[]

A code specifying an action for a responsible agency in this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/governmentActionResponsibleAgencyActionCode

***

### guarantee?

> `optional` **guarantee**: `string`

The undertaking, expressed as text, given in cash, bond or as a written guarantee to ensure that an obligation will be
fulfilled for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/guarantee

***

### immediatePayableTotalChargeAmount?

> `optional` **immediatePayableTotalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total charges, including tariff and non-tariff charges, immediately payable for this
cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/immediatePayableTotalChargeAmount

***

### importCustomsOfficeSpecifiedLocation?

> `optional` **importCustomsOfficeSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of the specified customs office which is responsible for import formalities for the goods which are subject
to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/importCustomsOfficeSpecifiedLocation

***

### nonTariffChargeAmount?

> `optional` **nonTariffChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of all non-tariff charges for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/nonTariffChargeAmount

***

### originCriteria?

> `optional` **originCriteria**: `string`

The origin criteria, expressed as text, for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/originCriteria

***

### paymentOfficeLocation?

> `optional` **paymentOfficeLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of an office at which a payment relevant to this cross-border regulatory procedure is made.

#### See

https://vocabulary.uncefact.org/paymentOfficeLocation

***

### performanceDateTime?

> `optional` **performanceDateTime**: `string`

A date, time, date time, or other date time value on which this cross-border regulatory procedure was, or will be,
performed.

#### See

https://vocabulary.uncefact.org/performanceDateTime

***

### previousDocument?

> `optional` **previousDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A previous document related to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/previousDocument

***

### previousProcedureTypeCode?

> `optional` **previousProcedureTypeCode**: `string`

A code specifying a type of previous procedure for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/previousProcedureTypeCode

***

### quotaId?

> `optional` **quotaId**: `string` \| `IJsonLdValueObject`

A quota identifier for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/quotaId

***

### registeredDeferredPaymentPayerId?

> `optional` **registeredDeferredPaymentPayerId**: `string` \| `IJsonLdValueObject`

The identifier of the registered deferred payment payer for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/registeredDeferredPaymentPayerId

***

### remark?

> `optional` **remark**: `string`

A remark, expressed as text, for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/remark

***

### reportedLogisticsStatus?

> `optional` **reportedLogisticsStatus**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

A logistics status reported for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/reportedLogisticsStatus

***

### requestOverrideCode?

> `optional` **requestOverrideCode**: `string`

A code specifying a request, including a reason, to override previously submitted information for this cross-border
regulatory procedure, such as due to an error condition.

#### See

https://vocabulary.uncefact.org/requestOverrideCode

***

### requiredChemicalTreatment?

> `optional` **requiredChemicalTreatment**: [`IUneceAppliedChemicalTreatment`](IUneceAppliedChemicalTreatment.md)[]

A chemical treatment applied as required by this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/requiredChemicalTreatment

***

### requiredSeal?

> `optional` **requiredSeal**: [`IUneceSeal`](IUneceSeal.md)[]

A seal required by this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/requiredSeal

***

### requiredTestSpecificationReport?

> `optional` **requiredTestSpecificationReport**: [`IUneceTestSpecificationReport`](IUneceTestSpecificationReport.md)[]

A report of a certification test and its attributes that is required for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/requiredTestSpecificationReport

***

### responsibleGovernmentAgencyInvolvementResponsibleAgencyInvolvementCode?

> `optional` **responsibleGovernmentAgencyInvolvementResponsibleAgencyInvolvementCode**: [`UneceResponsibleGovernmentAgencyInvolvementCodeList`](../type-aliases/UneceResponsibleGovernmentAgencyInvolvementCodeList.md)[]

A code specifying a responsible agency involved in this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/responsibleGovernmentAgencyInvolvementResponsibleAgencyInvolvementCode

***

### responsibleGovernmentAgencyResponsibleAgencyCode?

> `optional` **responsibleGovernmentAgencyResponsibleAgencyCode**: [`UneceResponsibleGovernmentAgencyCodeList`](../type-aliases/UneceResponsibleGovernmentAgencyCodeList.md)

The code specifying the agency responsible for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/responsibleGovernmentAgencyResponsibleAgencyCode

***

### specifiedDebtorFinancialAccount?

> `optional` **specifiedDebtorFinancialAccount**: [`IUneceDebtorFinancialAccount`](IUneceDebtorFinancialAccount.md)[]

A debtor financial account specified for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/specifiedDebtorFinancialAccount

***

### statementNote?

> `optional` **statementNote**: [`IUneceNote`](IUneceNote.md)[]

A statement note for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/statementNote

***

### tariffAmount?

> `optional` **tariffAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a tariff for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/tariffAmount

***

### tariffDeductionQuantity?

> `optional` **tariffDeductionQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity to be deducted from the tariff quantity for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/tariffDeductionQuantity

***

### tariffQuantity?

> `optional` **tariffQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A tariff quantity for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/tariffQuantity

***

### totalChargeAmount?

> `optional` **totalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the total charges, including tariff and non-tariff charges, for this cross-border regulatory
procedure.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### totalConsignmentValueAmount?

> `optional` **totalConsignmentValueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The total monetary value for a consignment for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/totalConsignmentValueAmount

***

### transactionNatureCode?

> `optional` **transactionNatureCode**: `string`

A code specifying the nature of a transaction for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/transactionNatureCode

***

### transitCustomsOfficeSpecifiedLocation?

> `optional` **transitCustomsOfficeSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location of a specified customs office which is responsible for transit formalities en route for the goods which are
subject to this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/transitCustomsOfficeSpecifiedLocation

***

### transitReleaseCustomsOfficeSpecifiedLocation?

> `optional` **transitReleaseCustomsOfficeSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location of a specified customs office at which the goods which are subject to this cross-border regulatory procedure
are released from a customs transit regime.

#### See

https://vocabulary.uncefact.org/transitReleaseCustomsOfficeSpecifiedLocation

***

### transportMovementTypeCode?

> `optional` **transportMovementTypeCode**: [`UneceTransportMovementTypeCodeList`](../type-aliases/UneceTransportMovementTypeCodeList.md)[]

A code specifying the transport movement type, such as import, export, transit, for this cross-border regulatory
procedure.

#### See

https://vocabulary.uncefact.org/transportMovementTypeCode

***

### treatmentEvent?

> `optional` **treatmentEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A treatment event for this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/treatmentEvent

***

### usedToDateQuotaQuantity?

> `optional` **usedToDateQuotaQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity of the quota used to date under this cross-border regulatory procedure.

#### See

https://vocabulary.uncefact.org/usedToDateQuotaQuantity

***

### valuationBasisAmount?

> `optional` **valuationBasisAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the basis on which the valuation is, or will be, calculated for this cross-border regulatory
procedure.

#### See

https://vocabulary.uncefact.org/valuationBasisAmount
