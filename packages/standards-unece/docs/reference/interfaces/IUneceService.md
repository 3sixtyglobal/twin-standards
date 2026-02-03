# Interface: IUneceService

A service associated with a transport movement.
A referenced service associated with a specified event during transport movement.

## See

https://vocabulary.uncefact.org/Service

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Service"`

JSON-LD Type.

***

### actualPerformancePeriod?

> `optional` **actualPerformancePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

An actual period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/actualPerformancePeriod

***

### chargeAmount?

> `optional` **chargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the charge for this transport service.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### contractId?

> `optional` **contractId**: `string`

The contract identifier of this referenced transport service.

#### See

https://vocabulary.uncefact.org/contractId

***

### deliverySpecifiedLocation?

> `optional` **deliverySpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

A logistics location specified for a delivery by this referenced transport service.

#### See

https://vocabulary.uncefact.org/deliverySpecifiedLocation

***

### description?

> `optional` **description**: `string`

The textual description of this transport service.

#### See

https://vocabulary.uncefact.org/description

***

### effectiveSpecifiedPeriod?

> `optional` **effectiveSpecifiedPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period during which this transport service is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### estimatedPerformancePeriod?

> `optional` **estimatedPerformancePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

An estimated period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/estimatedPerformancePeriod

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this transport service.

#### See

https://vocabulary.uncefact.org/identifier

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this transport service.

#### See

https://vocabulary.uncefact.org/information

***

### itemQuantity?

> `optional` **itemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

A quantity of items for this referenced transport service.

#### See

https://vocabulary.uncefact.org/itemQuantity

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this transport service.

#### See

https://vocabulary.uncefact.org/name

***

### plannedPerformancePeriod?

> `optional` **plannedPerformancePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

A planned period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/plannedPerformancePeriod

***

### preplannedIndicator?

> `optional` **preplannedIndicator**: `boolean`

The indication of whether or not this referenced transport service has been planned in advance of its execution.

#### See

https://vocabulary.uncefact.org/preplannedIndicator

***

### reasonCode?

> `optional` **reasonCode**: `string`

A code specifying a reason for this transport service.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### relatedSpecifiedLocation?

> `optional` **relatedSpecifiedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

A related logistics location specified for this referenced transport service.

#### See

https://vocabulary.uncefact.org/relatedSpecifiedLocation

***

### requestedPerformancePeriod?

> `optional` **requestedPerformancePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

A requested period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/requestedPerformancePeriod

***

### requesterParty?

> `optional` **requesterParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

A trade party requesting this referenced transport service.

#### See

https://vocabulary.uncefact.org/requesterParty

***

### responsibleParty?

> `optional` **responsibleParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

A trade party responsible for this transport service.

#### See

https://vocabulary.uncefact.org/responsibleParty

***

### responsibleTradeParty?

> `optional` **responsibleTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

A trade party responsible for this transport service.

#### See

https://vocabulary.uncefact.org/responsibleTradeParty

***

### specifiedRoute?

> `optional` **specifiedRoute**: [`IUneceTransportRoute`](IUneceTransportRoute.md)

A transport route specified for this transport service.

#### See

https://vocabulary.uncefact.org/specifiedRoute

***

### transportContractMovementContractMovementTypeCode?

> `optional` **transportContractMovementContractMovementTypeCode**: [`UneceTransportContractMovementCodeList`](../type-aliases/UneceTransportContractMovementCodeList.md)

A code specifying a contract movement type of this transport service.

#### See

https://vocabulary.uncefact.org/transportContractMovementContractMovementTypeCode

***

### transportServiceCategoryTypeCode?

> `optional` **transportServiceCategoryTypeCode**: `string`

A code specifying a type of category for this transport service.

#### See

https://vocabulary.uncefact.org/transportServiceCategoryTypeCode

***

### transportServiceConditionTypeCode?

> `optional` **transportServiceConditionTypeCode**: [`UneceTransportServiceConditionCodeList`](../type-aliases/UneceTransportServiceConditionCodeList.md)

A code specifying a type of condition for this transport service, such as a contract or carriage condition.

#### See

https://vocabulary.uncefact.org/transportServiceConditionTypeCode

***

### transportServicePaymentArrangementCode?

> `optional` **transportServicePaymentArrangementCode**: [`UneceTransportServicePaymentArrangementCodeList`](../type-aliases/UneceTransportServicePaymentArrangementCodeList.md)

The code specifying the payment arrangement for this transport service.

#### See

https://vocabulary.uncefact.org/transportServicePaymentArrangementCode

***

### transportServicePriorityCode?

> `optional` **transportServicePriorityCode**: [`UneceTransportServicePriorityCodeList`](../type-aliases/UneceTransportServicePriorityCodeList.md)

The code specifying the priority of this transport service.

#### See

https://vocabulary.uncefact.org/transportServicePriorityCode

***

### transportServiceRequirementCode?

> `optional` **transportServiceRequirementCode**: [`UneceTransportServiceRequirementCodeList`](../type-aliases/UneceTransportServiceRequirementCodeList.md)

A code specifying a service requirement for this transport service.

#### See

https://vocabulary.uncefact.org/transportServiceRequirementCode

***

### uRICommunication?

> `optional` **uRICommunication**: [`IUneceCommunication`](IUneceCommunication.md)

The Uniform Resource Identifier (URI) communication for this transport service, such as its website or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
