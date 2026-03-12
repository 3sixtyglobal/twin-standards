# Interface: IUneceSupplyChainTradeTransaction

A group of supply chain trade line items, trade agreement, trade delivery and trade settlement details.

## See

https://vocabulary.uncefact.org/SupplyChainTradeTransaction

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SupplyChainTradeTransaction"`

JSON-LD Type.

***

### applicableHeaderTradeAgreement? {#applicableheadertradeagreement}

> `optional` **applicableHeaderTradeAgreement**: [`IUneceHeaderTradeAgreement`](IUneceHeaderTradeAgreement.md)[]

A trade agreement header applicable to this supply chain trade transaction, such as payment or delivery terms.

#### See

https://vocabulary.uncefact.org/applicableHeaderTradeAgreement

***

### applicableHeaderTradeDelivery? {#applicableheadertradedelivery}

> `optional` **applicableHeaderTradeDelivery**: [`IUneceHeaderTradeDelivery`](IUneceHeaderTradeDelivery.md)[]

A trade delivery header applicable to this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/applicableHeaderTradeDelivery

***

### applicablePeriod? {#applicableperiod}

> `optional` **applicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period applicable to this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableTradeSettlement? {#applicabletradesettlement}

> `optional` **applicableTradeSettlement**: [`IUneceHeaderTradeSettlement`](IUneceHeaderTradeSettlement.md)

The trade settlement header applicable to this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/applicableTradeSettlement

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document associated with this supply chain trade transaction, such as the purchase order, invoice or
packing list.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedDocumentLineDocument? {#associateddocumentlinedocument}

> `optional` **associatedDocumentLineDocument**: [`IUneceDocumentLineDocument`](IUneceDocumentLineDocument.md)

The document line associated with this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### associatedFinancingRequestResultDocument? {#associatedfinancingrequestresultdocument}

> `optional` **associatedFinancingRequestResultDocument**: [`IUneceFinancingRequestResultDocument`](IUneceFinancingRequestResultDocument.md)

The financing request result document associated with this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/associatedFinancingRequestResultDocument

***

### associatedStandard? {#associatedstandard}

> `optional` **associatedStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard associated with this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### documentURLId? {#documenturlid}

> `optional` **documentURLId**: `string` \| `IJsonLdValueObject`

The Uniform Resource Locator (URL) of the web location of the document for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/documentURLId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedDeliverySchedule? {#includeddeliveryschedule}

> `optional` **includedDeliverySchedule**: [`IUneceDeliverySchedule`](IUneceDeliverySchedule.md)[]

Delivery scheduling details included in a defined forecast period for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedDeliverySchedule

***

### includedNote? {#includednote}

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedNote

***

### includedProductGroup? {#includedproductgroup}

> `optional` **includedProductGroup**: [`IUneceProductGroup`](IUneceProductGroup.md)[]

A product group included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedProductGroup

***

### includedSupplyChainTradeLineItem? {#includedsupplychaintradelineitem}

> `optional` **includedSupplyChainTradeLineItem**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)[]

A trade line item included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem

***

### includedTradeProduct? {#includedtradeproduct}

> `optional` **includedTradeProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A trade product included in this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/includedTradeProduct

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/information

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

The date, time, date time or other date time value for the issuance of this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### lineItemQuantity? {#lineitemquantity}

> `optional` **lineItemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of line items for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/lineItemQuantity

***

### salesAgentAssignedId? {#salesagentassignedid}

> `optional` **salesAgentAssignedId**: `string` \| `IJsonLdValueObject`

The unique identifier assigned by the sales agent to identify this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/salesAgentAssignedId

***

### senderRecipientSequenceId? {#senderrecipientsequenceid}

> `optional` **senderRecipientSequenceId**: `string` \| `IJsonLdValueObject`

The sender-recipient sequence identifier for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/senderRecipientSequenceId

***

### shipmentId? {#shipmentid}

> `optional` **shipmentId**: `string` \| `IJsonLdValueObject`

An identifier, such as the Unique Consignment Reference (UCR), for the shipment which is the subject of this supply
chain trade transaction.

#### See

https://vocabulary.uncefact.org/shipmentId

***

### specifiedPackage? {#specifiedpackage}

> `optional` **specifiedPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A logistics package specified for this supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/specifiedPackage

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of supply chain trade transaction.

#### See

https://vocabulary.uncefact.org/typeCode
