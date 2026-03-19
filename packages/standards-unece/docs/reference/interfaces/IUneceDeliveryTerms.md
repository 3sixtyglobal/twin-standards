# Interface: IUneceDeliveryTerms

Conditions agreed upon between the parties with regard to the delivery of goods and or services for trade purposes.

## See

https://vocabulary.uncefact.org/DeliveryTerms

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DeliveryTerms"`

JSON-LD Type.

***

### declarationCountryRelationshipCode? {#declarationcountryrelationshipcode}

> `optional` **declarationCountryRelationshipCode?**: `string`

The code specifying whether the place specified by these trade delivery terms is located in the country where a
declaration is made, in another member country of the same economic or customs union, or in a third country.

#### See

https://vocabulary.uncefact.org/declarationCountryRelationshipCode

***

### deliveryDiscontinuationCode? {#deliverydiscontinuationcode}

> `optional` **deliveryDiscontinuationCode?**: `string`

The code specifying the delivery discontinuation for this trade delivery terms.

#### See

https://vocabulary.uncefact.org/deliveryDiscontinuationCode

***

### deliveryTermsDeliveryTypeCode? {#deliverytermsdeliverytypecode}

> `optional` **deliveryTermsDeliveryTypeCode?**: [`UneceDeliveryTermsCodeList`](../type-aliases/UneceDeliveryTermsCodeList.md)

The code specifying the type of delivery for these trade delivery terms.

#### See

https://vocabulary.uncefact.org/deliveryTermsDeliveryTypeCode

***

### deliveryTermsFunctionCode? {#deliverytermsfunctioncode}

> `optional` **deliveryTermsFunctionCode?**: [`UneceDeliveryTermsFunctionCodeList`](../type-aliases/UneceDeliveryTermsFunctionCodeList.md)[]

A code specifying a function of these trade delivery terms.

#### See

https://vocabulary.uncefact.org/deliveryTermsFunctionCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of these trade delivery terms.

#### See

https://vocabulary.uncefact.org/description

***

### partialDeliveryAllowedIndicator? {#partialdeliveryallowedindicator}

> `optional` **partialDeliveryAllowedIndicator?**: `boolean`

The indication of whether or not these trade delivery terms allow a partial delivery.

#### See

https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator

***

### relevantLocation? {#relevantlocation}

> `optional` **relevantLocation?**: [`IUneceTradeLocation`](IUneceTradeLocation.md)

The trade location relevant for these trade delivery terms.

#### See

https://vocabulary.uncefact.org/relevantLocation

***

### riskResponsibilityCode? {#riskresponsibilitycode}

> `optional` **riskResponsibilityCode?**: `string`

A code specifying the risk responsibility for these trade delivery terms.

#### See

https://vocabulary.uncefact.org/riskResponsibilityCode
