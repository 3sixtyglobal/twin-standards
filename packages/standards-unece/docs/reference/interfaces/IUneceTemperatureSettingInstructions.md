# Interface: IUneceTemperatureSettingInstructions

Temperature setting related information of an instructive nature.

## See

https://vocabulary.uncefact.org/TemperatureSettingInstructions

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

> **type**: `"TemperatureSettingInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of these temperature setting instructions.

#### See

https://vocabulary.uncefact.org/description

***

### procedure?

> `optional` **procedure**: `string`

A procedure, expressed as text, for these temperature setting instructions.

#### See

https://vocabulary.uncefact.org/procedure

***

### temperatureSettingInstructionsDescriptionCode?

> `optional` **temperatureSettingInstructionsDescriptionCode**: `string`

The code specifying a description of these temperature setting instructions.

#### See

https://vocabulary.uncefact.org/temperatureSettingInstructionsDescriptionCode
