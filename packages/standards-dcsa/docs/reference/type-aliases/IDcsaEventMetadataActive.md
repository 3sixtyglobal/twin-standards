# Type Alias: IDcsaEventMetadataActive

> **IDcsaEventMetadataActive** = [`IDcsaEventMetadataBase`](../interfaces/IDcsaEventMetadataBase.md) & `object`

Active event metadata (not a retraction).

The OpenAPI schema defines `retractedEventID` with a default of `null`, so we
allow it to be omitted or explicitly set to `null`.

## Type Declaration

### retractedEventID?

> `optional` **retractedEventID**: `null`

Must be `null` (or omitted) for non-retraction events.
