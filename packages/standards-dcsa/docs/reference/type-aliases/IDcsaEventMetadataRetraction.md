# Type Alias: IDcsaEventMetadataRetraction

> **IDcsaEventMetadataRetraction** = [`IDcsaEventMetadataBase`](../interfaces/IDcsaEventMetadataBase.md) & `object`

Retraction event metadata.

If `retractedEventID` is provided, the event MUST NOT include a payload.

## Type Declaration

### retractedEventID

> **retractedEventID**: `string`

The `eventID` of the event being retracted.
