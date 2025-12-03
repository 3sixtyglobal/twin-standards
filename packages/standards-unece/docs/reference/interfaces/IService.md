# Interface: IService

A service associated with a transport movement.
A referenced service associated with a specified event during transport movement.

## See

https://vocabulary.uncefact.org/Service

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **actualPerformancePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

An actual period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/actualPerformancePeriod

***

### chargeAmount?

> `optional` **chargeAmount**: [`IAmountType`](IAmountType.md)[]

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

> `optional` **deliverySpecifiedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

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

> `optional` **effectiveSpecifiedPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)

The specified period during which this transport service is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### estimatedPerformancePeriod?

> `optional` **estimatedPerformancePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

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

> `optional` **itemQuantity**: [`IQuantityType`](IQuantityType.md)[]

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

> `optional` **plannedPerformancePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

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

> `optional` **relatedSpecifiedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A related logistics location specified for this referenced transport service.

#### See

https://vocabulary.uncefact.org/relatedSpecifiedLocation

***

### requestedPerformancePeriod?

> `optional` **requestedPerformancePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A requested period of performance for this referenced transport service.

#### See

https://vocabulary.uncefact.org/requestedPerformancePeriod

***

### requesterParty?

> `optional` **requesterParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party requesting this referenced transport service.

#### See

https://vocabulary.uncefact.org/requesterParty

***

### responsibleParty?

> `optional` **responsibleParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party responsible for this transport service.

#### See

https://vocabulary.uncefact.org/responsibleParty

***

### responsibleTradeParty?

> `optional` **responsibleTradeParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party responsible for this transport service.

#### See

https://vocabulary.uncefact.org/responsibleTradeParty

***

### specifiedRoute?

> `optional` **specifiedRoute**: [`ITransportRoute`](ITransportRoute.md)

A transport route specified for this transport service.

#### See

https://vocabulary.uncefact.org/specifiedRoute

***

### transportContractMovementContractMovementTypeCode?

> `optional` **transportContractMovementContractMovementTypeCode**: [`TransportContractMovementCodeList`](../type-aliases/TransportContractMovementCodeList.md)[]

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

> `optional` **transportServiceConditionTypeCode**: [`TransportServiceConditionCodeList`](../type-aliases/TransportServiceConditionCodeList.md)

A code specifying a type of condition for this transport service, such as a contract or carriage condition.

#### See

https://vocabulary.uncefact.org/transportServiceConditionTypeCode

***

### transportServicePaymentArrangementCode?

> `optional` **transportServicePaymentArrangementCode**: [`TransportServicePaymentArrangementCodeList`](../type-aliases/TransportServicePaymentArrangementCodeList.md)

The code specifying the payment arrangement for this transport service.

#### See

https://vocabulary.uncefact.org/transportServicePaymentArrangementCode

***

### transportServicePriorityCode?

> `optional` **transportServicePriorityCode**: [`TransportServicePriorityCodeList`](../type-aliases/TransportServicePriorityCodeList.md)[]

The code specifying the priority of this transport service.

#### See

https://vocabulary.uncefact.org/transportServicePriorityCode

***

### transportServiceRequirementCode?

> `optional` **transportServiceRequirementCode**: [`TransportServiceRequirementCodeList`](../type-aliases/TransportServiceRequirementCodeList.md)[]

A code specifying a service requirement for this transport service.

#### See

https://vocabulary.uncefact.org/transportServiceRequirementCode

***

### uRICommunication?

> `optional` **uRICommunication**: [`ICommunication`](ICommunication.md)[]

The Uniform Resource Identifier (URI) communication for this transport service, such as its website or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
