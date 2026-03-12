# Variable: EpcisActionTypes

> `const` **EpcisActionTypes**: `object`

GS1 EPCIS 2.0 action values capturing whether an event adds, observes, or
removes associations.

## Type Declaration

### Add {#add}

> `readonly` **Add**: `"ADD"` = `"ADD"`

Indicates that associations described by the event are created as of
eventTime.

### Observe {#observe}

> `readonly` **Observe**: `"OBSERVE"` = `"OBSERVE"`

Reports an observation of existing associations without changing them.

### Delete {#delete}

> `readonly` **Delete**: `"DELETE"` = `"DELETE"`

Indicates that associations described by the event no longer hold as of
eventTime.
