# Interface: IUneceService

A service associated with a transport movement.
A referenced service associated with a specified event during transport movement.

## See

https://vocabulary.uncefact.org/Service

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Service"`

JSON-LD Type.

***

### actualPerformancePeriod? {#actualperformanceperiod}

> `optional` **actualPerformancePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An actual period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/actualPerformancePeriod

***

### chargeAmount? {#chargeamount}

> `optional` **chargeAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the charge for this transport service.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### contractId? {#contractid}

> `optional` **contractId?**: `string` \| `IJsonLdValueObject`

The contract identifier of this referenced transport service.

#### See

https://vocabulary.uncefact.org/contractId

***

### deliverySpecifiedLocation? {#deliveryspecifiedlocation}

> `optional` **deliverySpecifiedLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location specified for a delivery by this referenced transport service.

#### See

https://vocabulary.uncefact.org/deliverySpecifiedLocation

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this transport service.

#### See

https://vocabulary.uncefact.org/description

***

### effectiveSpecifiedPeriod? {#effectivespecifiedperiod}

> `optional` **effectiveSpecifiedPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period during which this transport service is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### estimatedPerformancePeriod? {#estimatedperformanceperiod}

> `optional` **estimatedPerformancePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An estimated period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/estimatedPerformancePeriod

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier of this transport service.

#### See

https://vocabulary.uncefact.org/identifier

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this transport service.

#### See

https://vocabulary.uncefact.org/information

***

### itemQuantity? {#itemquantity}

> `optional` **itemQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity of items for this referenced transport service.

#### See

https://vocabulary.uncefact.org/itemQuantity

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this transport service.

#### See

https://vocabulary.uncefact.org/name

***

### plannedPerformancePeriod? {#plannedperformanceperiod}

> `optional` **plannedPerformancePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A planned period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/plannedPerformancePeriod

***

### preplannedIndicator? {#preplannedindicator}

> `optional` **preplannedIndicator?**: `boolean`

The indication of whether or not this referenced transport service has been planned in advance of its execution.

#### See

https://vocabulary.uncefact.org/preplannedIndicator

***

### reasonCode? {#reasoncode}

> `optional` **reasonCode?**: `string`

A code specifying a reason for this transport service.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### relatedSpecifiedLocation? {#relatedspecifiedlocation}

> `optional` **relatedSpecifiedLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A related logistics location specified for this referenced transport service.

#### See

https://vocabulary.uncefact.org/relatedSpecifiedLocation

***

### requestedPerformancePeriod? {#requestedperformanceperiod}

> `optional` **requestedPerformancePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A requested period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/requestedPerformancePeriod

***

### requesterParty? {#requesterparty}

> `optional` **requesterParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party requesting this referenced transport service.

#### See

https://vocabulary.uncefact.org/requesterParty

***

### responsibleParty? {#responsibleparty}

> `optional` **responsibleParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party responsible for this transport service.

#### See

https://vocabulary.uncefact.org/responsibleParty

***

### responsibleTradeParty? {#responsibletradeparty}

> `optional` **responsibleTradeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party responsible for this transport service.

#### See

https://vocabulary.uncefact.org/responsibleTradeParty

***

### specifiedRoute? {#specifiedroute}

> `optional` **specifiedRoute?**: [`IUneceTransportRoute`](IUneceTransportRoute.md)[]

A transport route specified for this transport service.

#### See

https://vocabulary.uncefact.org/specifiedRoute

***

### transportContractMovementContractMovementTypeCode? {#transportcontractmovementcontractmovementtypecode}

> `optional` **transportContractMovementContractMovementTypeCode?**: [`UneceTransportContractMovementCodeList`](../type-aliases/UneceTransportContractMovementCodeList.md)[]

A code specifying a contract movement type of this transport service.

#### See

https://vocabulary.uncefact.org/transportContractMovementContractMovementTypeCode

***

### transportServiceCategoryTypeCode? {#transportservicecategorytypecode}

> `optional` **transportServiceCategoryTypeCode?**: `string`

A code specifying a type of category for this transport service.

#### See

https://vocabulary.uncefact.org/transportServiceCategoryTypeCode

***

### transportServiceConditionTypeCode? {#transportserviceconditiontypecode}

> `optional` **transportServiceConditionTypeCode?**: [`UneceTransportServiceConditionCodeList`](../type-aliases/UneceTransportServiceConditionCodeList.md)[]

A code specifying a type of condition for this transport service, such as a contract or carriage condition.

#### See

https://vocabulary.uncefact.org/transportServiceConditionTypeCode

***

### transportServicePaymentArrangementCode? {#transportservicepaymentarrangementcode}

> `optional` **transportServicePaymentArrangementCode?**: [`UneceTransportServicePaymentArrangementCodeList`](../type-aliases/UneceTransportServicePaymentArrangementCodeList.md)

The code specifying the payment arrangement for this transport service.

#### See

https://vocabulary.uncefact.org/transportServicePaymentArrangementCode

***

### transportServicePriorityCode? {#transportserviceprioritycode}

> `optional` **transportServicePriorityCode?**: [`UneceTransportServicePriorityCodeList`](../type-aliases/UneceTransportServicePriorityCodeList.md)

The code specifying the priority of this transport service.

#### See

https://vocabulary.uncefact.org/transportServicePriorityCode

***

### transportServiceRequirementCode? {#transportservicerequirementcode}

> `optional` **transportServiceRequirementCode?**: [`UneceTransportServiceRequirementCodeList`](../type-aliases/UneceTransportServiceRequirementCodeList.md)[]

A code specifying a service requirement for this transport service.

#### See

https://vocabulary.uncefact.org/transportServiceRequirementCode

***

### uRICommunication? {#uricommunication}

> `optional` **uRICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)

The Uniform Resource Identifier (URI) communication for this transport service, such as its website or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
