# Standards W3C Activity Streams Examples

These snippets register type mappings and compose an activity payload with actor and object values.

## ActivityStreamsDataTypes

```typescript
import {
  ActivityStreamsContexts,
  ActivityStreamsDataTypes,
  ActivityStreamsObjectTypes,
  type IActivityStreamsActivity
} from '@3sixty/standards-w3c-activity-streams';

ActivityStreamsDataTypes.registerRedirects();
ActivityStreamsDataTypes.registerTypes();

const activity: IActivityStreamsActivity = {
  '@context': ActivityStreamsContexts.Context,
  type: ActivityStreamsObjectTypes.Create,
  actor: 'did:example:publisher',
  object: {
    type: ActivityStreamsObjectTypes.Note,
    content: 'Shipment created'
  }
};

console.log(activity.type); // Create
```
