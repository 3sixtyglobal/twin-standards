# Variable: EpcisErrorReasonTypes

> `const` **EpcisErrorReasonTypes**: `object`

Supported EPCIS 2.0 `error-reason` values from the GS1 EPCIS JSON Schema.

## Type Declaration

### DidNotOccur {#didnotoccur}

> `readonly` **DidNotOccur**: `"did_not_occur"` = `"did_not_occur"`

Prior event is erroneous because it did not actually occur; no corrective
events exist.

### IncorrectData {#incorrectdata}

> `readonly` **IncorrectData**: `"incorrect_data"` = `"incorrect_data"`

Prior event has incorrect data and may be corrected by subsequent linked
events.
