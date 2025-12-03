# Interface: ISupplyChainTradeTransaction

A group of supply chain trade line items, trade agreement, trade delivery and trade settlement details.

## See

https://vocabulary.uncefact.org/SupplyChainTradeTransaction

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

> **type**: `"SupplyChainTradeTransaction"`

JSON-LD Type.

***

### applicableHeaderTradeAgreement?

> `optional` **applicableHeaderTradeAgreement**: [`IHeaderTradeAgreement`](IHeaderTradeAgreement.md)[]

A trade agreement header applicable to this supply chain trade transaction, such as payment or delivery terms.

#### See

https://vocabulary.uncefact.org/applicableHeaderTradeAgreement

***

### applicableHeaderTradeDelivery?

> `optional` **applicableHeaderTradeDelivery**: [`IHeaderTradeDelivery`](IHeaderTradeDelivery.md)[]

A trade delivery header applicable to this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/applicableHeaderTradeDelivery

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A period applicable to this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableTradeSettlement?

> `optional` **applicableTradeSettlement**: [`IHeaderTradeSettlement`](IHeaderTradeSettlement.md)[]

The trade settlement header applicable to this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/applicableTradeSettlement

***

### associatedDocument?

> `optional` **associatedDocument**: [`IDocument`](IDocument.md)[]

A referenced document associated with this supply chain trade transaction, such as the purchase order, invoice or
packing list.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedDocumentLineDocument?

> `optional` **associatedDocumentLineDocument**: [`IDocumentLineDocument`](IDocumentLineDocument.md)[]

The document line associated with this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### associatedFinancingRequestResultDocument?

> `optional` **associatedFinancingRequestResultDocument**: [`IFinancingRequestResultDocument`](IFinancingRequestResultDocument.md)[]

The financing request result document associated with this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/associatedFinancingRequestResultDocument

***

### associatedStandard?

> `optional` **associatedStandard**: [`IStandard`](IStandard.md)[]

A referenced standard associated with this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### documentURLId?

> `optional` **documentURLId**: `string`

The Uniform Resource Locator (URL) of the web location of the document for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/documentURLId

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedDeliverySchedule?

> `optional` **includedDeliverySchedule**: [`IDeliverySchedule`](IDeliverySchedule.md)[]

Delivery scheduling details included in a defined forecast period for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedDeliverySchedule

***

### includedNote?

> `optional` **includedNote**: [`INote`](INote.md)[]

A note included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedNote

***

### includedProductGroup?

> `optional` **includedProductGroup**: [`IProductGroup`](IProductGroup.md)[]

A product group included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedProductGroup

***

### includedSupplyChainTradeLineItem?

> `optional` **includedSupplyChainTradeLineItem**: [`ISupplyChainTradeLineItem`](ISupplyChainTradeLineItem.md)[]

A trade line item included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem

***

### includedTradeProduct?

> `optional` **includedTradeProduct**: [`ITradeProduct`](ITradeProduct.md)[]

A trade product included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedTradeProduct

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/information

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time or other date time value for the issuance of this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### lineItemQuantity?

> `optional` **lineItemQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of line items for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/lineItemQuantity

***

### salesAgentAssignedId?

> `optional` **salesAgentAssignedId**: `string`

The unique identifier assigned by the sales agent to identify this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/salesAgentAssignedId

***

### senderRecipientSequenceId?

> `optional` **senderRecipientSequenceId**: `string`

The sender-recipient sequence identifier for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/senderRecipientSequenceId

***

### shipmentId?

> `optional` **shipmentId**: `string`

An identifier, such as the Unique Consignment Reference (UCR), for the shipment which is the subject of this supply
chain trade transaction.

#### See

https://vocabulary.uncefact.org/shipmentId

***

### specifiedPackage?

> `optional` **specifiedPackage**: [`IPackage`](IPackage.md)[]

A logistics package specified for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/specifiedPackage

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/typeCode
