# Variable: OdrlActionType

> `const` **OdrlActionType**: `object`

The types for ODRL Actions.
Simple action types (for direct string usage)

## Type Declaration

### Use {#use}

> `readonly` **Use**: `"use"` = `"use"`

The act of using an asset, covering any general usage where ownership does not change.
This is the parent term for most permissions and prohibitions.

### Transfer {#transfer}

> `readonly` **Transfer**: `"transfer"` = `"transfer"`

The act of transferring the ownership of an asset in perpetuity to a third party.

### Aggregate {#aggregate}

> `readonly` **Aggregate**: `"aggregate"` = `"aggregate"`

The act of using an asset (or parts of it) as part of a composite collection.

### Annotate {#annotate}

> `readonly` **Annotate**: `"annotate"` = `"annotate"`

The act of adding explanatory notations/commentaries to the asset.

### Anonymize {#anonymize}

> `readonly` **Anonymize**: `"anonymize"` = `"anonymize"`

The act of anonymising all or parts of the asset, for example, to remove identifying particulars.

### Archive {#archive}

> `readonly` **Archive**: `"archive"` = `"archive"`

The act of persistently storing the asset in a non-transient form.

### ConcurrentUse {#concurrentuse}

> `readonly` **ConcurrentUse**: `"concurrentUse"` = `"concurrentUse"`

The act of multiple concurrent use of the asset.

### Commercialize {#commercialize}

> `readonly` **Commercialize**: `"commercialize"` = `"commercialize"`

The act of using the asset in a business environment where it may be traded for profit.

### Copy {#copy}

> `readonly` **Copy**: `"copy"` = `"copy"`

The act of making an exact reproduction of the asset. Also identified as `reproduce`.

### Derive {#derive}

> `readonly` **Derive**: `"derive"` = `"derive"`

The act of creating a new derivative asset from the original and editing or modifying it.

### Digitize {#digitize}

> `readonly` **Digitize**: `"digitize"` = `"digitize"`

The act of producing a digital copy of an asset from its analogue form.

### Display {#display}

> `readonly` **Display**: `"display"` = `"display"`

The act of making a transient visible rendering of the asset, such as displaying an image on a screen.
Also identified as `present` in earlier versions.

### Distribute {#distribute}

> `readonly` **Distribute**: `"distribute"` = `"distribute"`

The act of publicly distributing, displaying, or performing the asset.

### Execute {#execute}

> `readonly` **Execute**: `"execute"` = `"execute"`

The act of executing the asset, such as running a program or application.

### Extract {#extract}

> `readonly` **Extract**: `"extract"` = `"extract"`

The act of extracting (replicating) unchanged parts of the asset for reuse.

### ExtractChar {#extractchar}

> `readonly` **ExtractChar**: `"extractChar"` = `"extractChar"`

The act of extracting unchanged character(s) from the asset.

### ExtractWord {#extractword}

> `readonly` **ExtractWord**: `"extractWord"` = `"extractWord"`

The act of extracting unchanged word(s) from the asset.

### ExtractPage {#extractpage}

> `readonly` **ExtractPage**: `"extractPage"` = `"extractPage"`

The act of extracting unchanged page(s) from the asset.

### Index {#index}

> `readonly` **Index**: `"index"` = `"index"`

The act of recording the asset in an index, for example, a search engine database.

### Install {#install}

> `readonly` **Install**: `"install"` = `"install"`

The act of loading the asset onto a storage device ready for operation.

### License {#license}

> `readonly` **License**: `"license"` = `"license"`

The act of granting the use of the asset to third parties. Also identified as `sublicense` in earlier versions.

### Lease {#lease}

> `readonly` **Lease**: `"lease"` = `"lease"`

The act of making the asset available to a third-party for a fixed period with exchange of value.

### Lend {#lend}

> `readonly` **Lend**: `"lend"` = `"lend"`

The act of making the asset available to a third-party for a fixed period without exchange of value.

### Modify {#modify}

> `readonly` **Modify**: `"modify"` = `"modify"`

The act of updating existing content of the asset without creating a new one.

### Move {#move}

> `readonly` **Move**: `"move"` = `"move"`

The act of moving the asset from one digital location to another and deleting the original.

### Play {#play}

> `readonly` **Play**: `"play"` = `"play"`

The act of rendering the asset into audio and/or video form.

### Preview {#preview}

> `readonly` **Preview**: `"preview"` = `"preview"`

The act of providing a short preview of the asset.

### Print {#print}

> `readonly` **Print**: `"print"` = `"print"`

The act of rendering the asset onto paper or hard copy form.

### Read {#read}

> `readonly` **Read**: `"read"` = `"read"`

The act of obtaining data from the asset, such as a database record.

### SecondaryUse {#secondaryuse}

> `readonly` **SecondaryUse**: `"secondaryUse"` = `"secondaryUse"`

The act of using the asset for a purpose other than its intended purpose.

### Share {#share}

> `readonly` **Share**: `"share"` = `"share"`

The act of non-commercial reproduction and distribution of the asset to third-parties.

### AdhocShare {#adhocshare}

> `readonly` **AdhocShare**: `"adhocShare"` = `"adhocShare"`

The act of sharing the asset to parties in close proximity to the owner.

### ShareAlike {#sharealike}

> `readonly` **ShareAlike**: `"shareAlike"` = `"shareAlike"`

The act of distributing any derivative asset under the same terms as the original.

### TextToSpeech {#texttospeech}

> `readonly` **TextToSpeech**: `"textToSpeech"` = `"textToSpeech"`

The act of a system reading the text of the asset out loud.

### Translate {#translate}

> `readonly` **Translate**: `"translate"` = `"translate"`

The act of translating the asset's original language into another, creating a new derivative asset.

### Transform {#transform}

> `readonly` **Transform**: `"transform"` = `"transform"`

The act of transforming the asset into a different digital format.

### Uninstall {#uninstall}

> `readonly` **Uninstall**: `"uninstall"` = `"uninstall"`

The act of unloading the asset from a storage device, making it no longer accessible.

### Watermark {#watermark}

> `readonly` **Watermark**: `"watermark"` = `"watermark"`

The act of applying a watermark to the asset.

### Write {#write}

> `readonly` **Write**: `"write"` = `"write"`

The act of writing to or modifying the asset.

### Append {#append}

> `readonly` **Append**: `"append"` = `"append"`

The act of adding to the end of an asset, for example, a database record.
Also identified as `appendTo`.

### Give {#give}

> `readonly` **Give**: `"give"` = `"give"`

The act of giving away the asset in perpetuity without exchange of value, requiring the original to be deleted.

### Sell {#sell}

> `readonly` **Sell**: `"sell"` = `"sell"`

The act of trading the asset in exchange for compensation, requiring the original to be deleted.

### AcceptTracking {#accepttracking}

> `readonly` **AcceptTracking**: `"acceptTracking"` = `"acceptTracking"`

The act of accepting that the use of the asset may be tracked by a specified party.

### AttachPolicy {#attachpolicy}

> `readonly` **AttachPolicy**: `"attachPolicy"` = `"attachPolicy"`

The act of keeping a policy notice attached to the asset.

### AttachSource {#attachsource}

> `readonly` **AttachSource**: `"attachSource"` = `"attachSource"`

The act of attaching the source of the asset and its derivatives.

### Attribute {#attribute}

> `readonly` **Attribute**: `"attribute"` = `"attribute"`

The act of attributing the asset to a specified party.

### Compensate {#compensate}

> `readonly` **Compensate**: `"compensate"` = `"compensate"`

The act of compensating a specified party by some amount for use of the asset.

### Delete {#delete}

> `readonly` **Delete**: `"delete"` = `"delete"`

The act of permanently removing all copies of the asset.

### EnsureExclusivity {#ensureexclusivity}

> `readonly` **EnsureExclusivity**: `"ensureExclusivity"` = `"ensureExclusivity"`

The act of requiring the assigner to ensure a permission is exclusive to the assignee.

### Include {#include}

> `readonly` **Include**: `"include"` = `"include"`

The act of including other related assets to fulfil the function.

### Inform {#inform}

> `readonly` **Inform**: `"inform"` = `"inform"`

The act of informing a party that an action has been performed on the asset.

### NextPolicy {#nextpolicy}

> `readonly` **NextPolicy**: `"nextPolicy"` = `"nextPolicy"`

The act of specifying a policy for third-party use of the asset.

### ObtainConsent {#obtainconsent}

> `readonly` **ObtainConsent**: `"obtainConsent"` = `"obtainConsent"`

The act of requiring explicit consent from a party to perform an action.

### Pay {#pay}

> `readonly` **Pay**: `"pay"` = `"pay"`

The act of paying a financial amount to a party for use of the asset.

### ReviewPolicy {#reviewpolicy}

> `readonly` **ReviewPolicy**: `"reviewPolicy"` = `"reviewPolicy"`

The act of performing a manual review of the terms associated with the asset.
