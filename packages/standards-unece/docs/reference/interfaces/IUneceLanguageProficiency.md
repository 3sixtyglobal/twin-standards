# Interface: IUneceLanguageProficiency

Skills in any principal method of human communication, consisting of words used in a structured and conventional way and
conveyed by speech, writing, or gesture.

## See

https://vocabulary.uncefact.org/LanguageProficiency

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LanguageProficiency"`

JSON-LD Type.

***

### languageName? {#languagename}

> `optional` **languageName?**: `string`

A name, expressed as text, of the language for which this language proficiency is defined.

#### See

https://vocabulary.uncefact.org/languageName

***

### personalLanguageProficiencyLanguageCode? {#personallanguageproficiencylanguagecode}

> `optional` **personalLanguageProficiencyLanguageCode?**: [`UneceLanguageCodeList`](../type-aliases/UneceLanguageCodeList.md)

The code specifying the language for this personal language proficiency.

#### See

https://vocabulary.uncefact.org/personalLanguageProficiencyLanguageCode

***

### personalLanguageProficiencyLanguageId? {#personallanguageproficiencylanguageid}

> `optional` **personalLanguageProficiencyLanguageId?**: `string` \| `IJsonLdValueObject`

The identifier of the language for which this personal language proficiency is defined.

#### See

https://vocabulary.uncefact.org/personalLanguageProficiencyLanguageId

***

### readingLevelCode? {#readinglevelcode}

> `optional` **readingLevelCode?**: `string`

The code specifying the personal reading proficiency level in this language.

#### See

https://vocabulary.uncefact.org/readingLevelCode

***

### speakingLevelCode? {#speakinglevelcode}

> `optional` **speakingLevelCode?**: `string`

The code specifying the personal speaking proficiency level in this language.

#### See

https://vocabulary.uncefact.org/speakingLevelCode

***

### writingLevelCode? {#writinglevelcode}

> `optional` **writingLevelCode?**: `string`

The code specifying the personal writing proficiency level in this language.

#### See

https://vocabulary.uncefact.org/writingLevelCode
