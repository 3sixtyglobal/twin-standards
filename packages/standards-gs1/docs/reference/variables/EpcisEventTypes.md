# Variable: EpcisEventTypes

> `const` **EpcisEventTypes**: `object`

EPCIS 2.0 event type identifiers used in EPCIS JSON and XML documents.

## Type Declaration

### ObjectEvent

> `readonly` **ObjectEvent**: `"ObjectEvent"` = `"ObjectEvent"`

Event that observes one or more instance- or class-level objects.

### AggregationEvent

> `readonly` **AggregationEvent**: `"AggregationEvent"` = `"AggregationEvent"`

Event recording child objects aggregated under a parent identifier.

### AssociationEvent

> `readonly` **AssociationEvent**: `"AssociationEvent"` = `"AssociationEvent"`

Event recording parent/child associations without implying containment.

### TransformationEvent

> `readonly` **TransformationEvent**: `"TransformationEvent"` = `"TransformationEvent"`

Event recording how inputs are transformed into outputs.

### TransactionEvent

> `readonly` **TransactionEvent**: `"TransactionEvent"` = `"TransactionEvent"`

Event linking objects or quantities to business transactions.
