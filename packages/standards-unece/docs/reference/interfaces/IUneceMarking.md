# Interface: IUneceMarking

An inscription, stamp or label on packaging, such as to indicate date, ownership, quality, manufacture or origin.

## See

https://vocabulary.uncefact.org/Marking

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

> **type**: `"Marking"`

JSON-LD Type.

***

### automaticDataCaptureMethodTypeCode?

> `optional` **automaticDataCaptureMethodTypeCode**: [`UneceAutomaticDataCaptureMethodCodeList`](../type-aliases/UneceAutomaticDataCaptureMethodCodeList.md)

A code specifying an automatic data capture method type for this packaging marking.

#### See

https://vocabulary.uncefact.org/automaticDataCaptureMethodTypeCode

***

### content?

> `optional` **content**: `string`

Content, expressed as text, of this packaging marking.

#### See

https://vocabulary.uncefact.org/content

***

### contentAmount?

> `optional` **contentAmount**: [`IUneceAmountType`](IUneceAmountType.md)

Content, expressed as a monetary amount, for this packaging marking.

#### See

https://vocabulary.uncefact.org/contentAmount

***

### contentCode?

> `optional` **contentCode**: `string`

Content, expressed as a code, of this packaging marking.

#### See

https://vocabulary.uncefact.org/contentCode

***

### contentDateTime?

> `optional` **contentDateTime**: `string`

The date, time, date time or other date time value for the content of this packaging marking.

#### See

https://vocabulary.uncefact.org/contentDateTime

***

### packagingMarkingBarcodeTypeCode?

> `optional` **packagingMarkingBarcodeTypeCode**: `string`

A code specifying a type of barcode for this packaging marking.

#### See

https://vocabulary.uncefact.org/packagingMarkingBarcodeTypeCode

***

### packagingMarkingTypeCode?

> `optional` **packagingMarkingTypeCode**: [`UnecePackagingMarkingCodeList`](../type-aliases/UnecePackagingMarkingCodeList.md)

A code specifying a type of packaging marking.

#### See

https://vocabulary.uncefact.org/packagingMarkingTypeCode

***

### specifiedLogisticsLabel?

> `optional` **specifiedLogisticsLabel**: [`IUneceLogisticsLabel`](IUneceLogisticsLabel.md)

A logistics label specified for this packaging marking.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLabel
