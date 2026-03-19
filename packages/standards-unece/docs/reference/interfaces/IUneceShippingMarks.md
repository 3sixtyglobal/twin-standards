# Interface: IUneceShippingMarks

Physical markings or labels on individual packages or transport units for logistics purposes.

## See

https://vocabulary.uncefact.org/ShippingMarks

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ShippingMarks"`

JSON-LD Type.

***

### barcodeLabel? {#barcodelabel}

> `optional` **barcodeLabel?**: [`IUneceLogisticsLabel`](IUneceLogisticsLabel.md)[]

A barcode label that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/barcodeLabel

***

### logisticsShippingMarksMarkingInstructionCode? {#logisticsshippingmarksmarkinginstructioncode}

> `optional` **logisticsShippingMarksMarkingInstructionCode?**: [`UneceMarkingInstructionCodeList`](../type-aliases/UneceMarkingInstructionCodeList.md)[]

A code specifying a marking instruction for these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/logisticsShippingMarksMarkingInstructionCode

***

### logisticsShippingMarksPackageCategoryCode? {#logisticsshippingmarkspackagecategorycode}

> `optional` **logisticsShippingMarksPackageCategoryCode?**: `string`

The code specifying the package category for these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/logisticsShippingMarksPackageCategoryCode

***

### marking? {#marking}

> `optional` **marking?**: `string`

Marking, expressed as text, for these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/marking

***

### rFIDLabel? {#rfidlabel}

> `optional` **rFIDLabel?**: [`IUneceLogisticsLabel`](IUneceLogisticsLabel.md)[]

A Radio Frequency Identification (RFID) label that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/rFIDLabel

***

### radioactiveLabel? {#radioactivelabel}

> `optional` **radioactiveLabel?**: [`IUneceLogisticsLabel`](IUneceLogisticsLabel.md)[]

Radioactive labelling that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/radioactiveLabel

***

### vINLabel? {#vinlabel}

> `optional` **vINLabel?**: [`IUneceLogisticsLabel`](IUneceLogisticsLabel.md)[]

A Vehicle Identification Number (VIN) label that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/vINLabel
