# Interface: IUneceStowaway

A person who is found hiding aboard a ship or other conveyance, such as in order to obtain free passage or elude
detection.

## See

https://vocabulary.uncefact.org/Stowaway

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Stowaway"`

JSON-LD Type.

***

### careProvided? {#careprovided}

> `optional` **careProvided?**: `string`

Care, expressed as text, that has been provided to this found stowaway.

#### See

https://vocabulary.uncefact.org/careProvided

***

### claimedLanguageProficiency? {#claimedlanguageproficiency}

> `optional` **claimedLanguageProficiency?**: [`IUneceLanguageProficiency`](IUneceLanguageProficiency.md)[]

Personal language proficiency skills claimed by this found stowaway.

#### See

https://vocabulary.uncefact.org/claimedLanguageProficiency

***

### countryClaimedNationalityId? {#countryclaimednationalityid}

> `optional` **countryClaimedNationalityId?**: `string` \| `object` & `object` \| `object` & `object` \| `object` & `object`

An identifier of a nationality claimed by this found stowaway.

#### See

https://vocabulary.uncefact.org/countryClaimedNationalityId

***

### discoveredDateTime? {#discovereddatetime}

> `optional` **discoveredDateTime?**: `string`

A date, time, date time, or other date time value on which this found stowaway is discovered.

#### See

https://vocabulary.uncefact.org/discoveredDateTime

***

### embarkationLocation? {#embarkationlocation}

> `optional` **embarkationLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location where a found stowaway embarked upon the transport means on which they were discovered.

#### See

https://vocabulary.uncefact.org/embarkationLocation

***

### homeAddress? {#homeaddress}

> `optional` **homeAddress?**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

A home address for this found stowaway.

#### See

https://vocabulary.uncefact.org/homeAddress

***

### intendedDestinationLocationCode? {#intendeddestinationlocationcode}

> `optional` **intendedDestinationLocationCode?**: `string`

A code specifying a location of an intended destination for this found stowaway.

#### See

https://vocabulary.uncefact.org/intendedDestinationLocationCode

***

### intendedDestinationName? {#intendeddestinationname}

> `optional` **intendedDestinationName?**: `string`

A name, expressed as text, of an intended destination for this found stowaway.

#### See

https://vocabulary.uncefact.org/intendedDestinationName

***

### interviewDateTime? {#interviewdatetime}

> `optional` **interviewDateTime?**: `string`

A date, time, date time, or other date time value on which this found stowaway is interviewed.

#### See

https://vocabulary.uncefact.org/interviewDateTime

***

### personalStatement? {#personalstatement}

> `optional` **personalStatement?**: `string`

A personal statement, expressed as text, made by this found stowaway.

#### See

https://vocabulary.uncefact.org/personalStatement

***

### photographicPictureBinaryFile? {#photographicpicturebinaryfile}

> `optional` **photographicPictureBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file providing a photographic picture of this found stowaway.

#### See

https://vocabulary.uncefact.org/photographicPictureBinaryFile

***

### physicalDescription? {#physicaldescription}

> `optional` **physicalDescription?**: `string`

The physical description, expressed as text, of this found stowaway.

#### See

https://vocabulary.uncefact.org/physicalDescription

***

### possessionList? {#possessionlist}

> `optional` **possessionList?**: `string`

A list of possessions, expressed as text, for this found stowaway.

#### See

https://vocabulary.uncefact.org/possessionList

***

### providedContact? {#providedcontact}

> `optional` **providedContact?**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

A person or department that acts as a point of contact with or for this found stowaway.

#### See

https://vocabulary.uncefact.org/providedContact

***

### providedName? {#providedname}

> `optional` **providedName?**: `string`

A name, expressed as text, as provided by this found stowaway.

#### See

https://vocabulary.uncefact.org/providedName

***

### responsiblePersonStatement? {#responsiblepersonstatement}

> `optional` **responsiblePersonStatement?**: `string`

A statement, expressed as text, about the stowaway made by the person responsible for operating the means of transport
on which the stowaway was found.

#### See

https://vocabulary.uncefact.org/responsiblePersonStatement

***

### statedEmbarkationMethod? {#statedembarkationmethod}

> `optional` **statedEmbarkationMethod?**: `string`

A method, expressed as text, of embarkation stated by this found stowaway.

#### See

https://vocabulary.uncefact.org/statedEmbarkationMethod

***

### statedEmbarkationReason? {#statedembarkationreason}

> `optional` **statedEmbarkationReason?**: `string`

A reason, expressed as text, for embarkation stated by this found stowaway.

#### See

https://vocabulary.uncefact.org/statedEmbarkationReason
