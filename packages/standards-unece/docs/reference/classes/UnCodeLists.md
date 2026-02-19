# Class: UnCodeLists

A class for handling Code Lists.

## See

https://vocabulary.uncefact.org/code-lists

## Constructors

### Constructor

> **new UnCodeLists**(): `UnCodeLists`

#### Returns

`UnCodeLists`

## Methods

### getDescriptions()

> `static` **getDescriptions**(`codeList`, `locale?`): `Promise`\<\{\[`key`: `string`\]: `string`; \}\>

Get all the translations for a specific list type.

#### Parameters

##### codeList

[`UneceCodeLists`](../type-aliases/UneceCodeLists.md)

The code list to get the translations for.

##### locale?

`string`

The locale to get the translations for. If not provided, the default locale will be used. Falls back to 'en' if the locale doesn't exist.

#### Returns

`Promise`\<\{\[`key`: `string`\]: `string`; \}\>

The translations for the code list.

***

### getDescription()

> `static` **getDescription**(`codeList`, `key`, `locale?`): `Promise`\<`string` \| `undefined`\>

Get a translation for a specific list type.

#### Parameters

##### codeList

[`UneceCodeLists`](../type-aliases/UneceCodeLists.md)

The code list to get the translations for.

##### key

`string`

The key to get the translation for.

##### locale?

`string`

The locale to get the translations for. If not provided, the default locale will be used.

#### Returns

`Promise`\<`string` \| `undefined`\>

The translation for the specified key in the code list.

***

### getLabels()

> `static` **getLabels**(`codeList`, `locale?`): `Promise`\<\{\[`key`: `string`\]: `string`; \}\>

Get all the short description labels for a specific list type.
Labels are stored in locale files with a `_label` suffix (e.g. `unece:arrivalEvent_label`).

#### Parameters

##### codeList

[`UneceCodeLists`](../type-aliases/UneceCodeLists.md)

The code list to get the labels for.

##### locale?

`string`

The locale to get the labels for. If not provided, the default locale will be used. Falls back to 'en' if the locale doesn't exist.

#### Returns

`Promise`\<\{\[`key`: `string`\]: `string`; \}\>

The labels for the code list, keyed by the original code (without `_label` suffix).

***

### getLabel()

> `static` **getLabel**(`codeList`, `key`, `locale?`): `Promise`\<`string` \| `undefined`\>

Get a short description label for a specific code in a list type.

#### Parameters

##### codeList

[`UneceCodeLists`](../type-aliases/UneceCodeLists.md)

The code list to get the label for.

##### key

`string`

The key to get the label for.

##### locale?

`string`

The locale to get the label for. If not provided, the default locale will be used.

#### Returns

`Promise`\<`string` \| `undefined`\>

The label for the specified key in the code list.
