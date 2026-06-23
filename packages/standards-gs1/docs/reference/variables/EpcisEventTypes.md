# Variable: EpcisEventTypes

> `const` **EpcisEventTypes**: `object`

EPCIS 2.0 event type identifiers used in EPCIS JSON and XML documents.

## Type Declaration

### ObjectEvent {#objectevent}

> `readonly` **ObjectEvent**: `"ObjectEvent"` = `"ObjectEvent"`

Event that observes one or more instance- or class-level objects.

### AggregationEvent {#aggregationevent}

> `readonly` **AggregationEvent**: `"AggregationEvent"` = `"AggregationEvent"`

Event recording child objects aggregated under a parent identifier.

### AssociationEvent {#associationevent}

> `readonly` **AssociationEvent**: `"AssociationEvent"` = `"AssociationEvent"`

Event recording parent/child associations without implying containment.

### TransformationEvent {#transformationevent}

> `readonly` **TransformationEvent**: `"TransformationEvent"` = `"TransformationEvent"`

Event recording how inputs are transformed into outputs.

### TransactionEvent {#transactionevent}

> `readonly` **TransactionEvent**: `"TransactionEvent"` = `"TransactionEvent"`

Event linking objects or quantities to business transactions.
