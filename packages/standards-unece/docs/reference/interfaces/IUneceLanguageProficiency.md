# Interface: IUneceLanguageProficiency

Skills in any principal method of human communication, consisting of words used in a structured and conventional way and
conveyed by speech, writing, or gesture.

## See

https://vocabulary.uncefact.org/LanguageProficiency

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

> **type**: `"LanguageProficiency"`

JSON-LD Type.

***

### languageName?

> `optional` **languageName**: `string`

A name, expressed as text, of the language for which this language proficiency is defined.

#### See

https://vocabulary.uncefact.org/languageName

***

### personalLanguageProficiencyLanguageCode?

> `optional` **personalLanguageProficiencyLanguageCode**: [`UneceLanguageCodeList`](../type-aliases/UneceLanguageCodeList.md)[]

The code specifying the language for this personal language proficiency.

#### See

https://vocabulary.uncefact.org/personalLanguageProficiencyLanguageCode

***

### personalLanguageProficiencyLanguageId?

> `optional` **personalLanguageProficiencyLanguageId**: [`UneceLanguageId`](../type-aliases/UneceLanguageId.md)

The identifier of the language for which this personal language proficiency is defined.

#### See

https://vocabulary.uncefact.org/personalLanguageProficiencyLanguageId

***

### readingLevelCode?

> `optional` **readingLevelCode**: `string`

The code specifying the personal reading proficiency level in this language.

#### See

https://vocabulary.uncefact.org/readingLevelCode

***

### speakingLevelCode?

> `optional` **speakingLevelCode**: `string`

The code specifying the personal speaking proficiency level in this language.

#### See

https://vocabulary.uncefact.org/speakingLevelCode

***

### writingLevelCode?

> `optional` **writingLevelCode**: `string`

The code specifying the personal writing proficiency level in this language.

#### See

https://vocabulary.uncefact.org/writingLevelCode
