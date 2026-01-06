# Interface: IUneceCustomerClass

The conditions and requirements of the type of person who may use or purchase a product or service.

## See

https://vocabulary.uncefact.org/CustomerClass

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

> **type**: `"CustomerClass"`

JSON-LD Type.

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category, such as adult or child, of this specified customer class,.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### categoryName?

> `optional` **categoryName**: `string`

A category name, expressed as text, of this specified customer class.

#### See

https://vocabulary.uncefact.org/categoryName

***

### description?

> `optional` **description**: `string`

A textual description of this specified customer class.

#### See

https://vocabulary.uncefact.org/description

***

### genderCode?

> `optional` **genderCode**: `string`

The code specifying the gender in this specified customer class.

#### See

https://vocabulary.uncefact.org/genderCode

***

### lowerAgeLimitNumeric?

> `optional` **lowerAgeLimitNumeric**: `string`

The value, expressed as a number of years, for the lower age limit for the category of this specified customer class.

#### See

https://vocabulary.uncefact.org/lowerAgeLimitNumeric

***

### mealServiceCategoryCode?

> `optional` **mealServiceCategoryCode**: `string`

The code specifying the meal service category for this specified customer class.

#### See

https://vocabulary.uncefact.org/mealServiceCategoryCode

***

### specialBeddingServiceOfferedIndicator?

> `optional` **specialBeddingServiceOfferedIndicator**: `boolean`

The indication of whether or not special bedding service is offered for this specified customer class.

#### See

https://vocabulary.uncefact.org/specialBeddingServiceOfferedIndicator

***

### upperAgeLimitNumeric?

> `optional` **upperAgeLimitNumeric**: `string`

The value, expressed as a number of years, for the upper age limit for the category of this specified customer class.

#### See

https://vocabulary.uncefact.org/upperAgeLimitNumeric
