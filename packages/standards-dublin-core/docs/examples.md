# Standards Dublin Core Examples

These snippets show how to register redirects and build metadata with shared context and property constants.

## DublinCoreDataTypes

```typescript
import {
  DublinCoreClasses,
  DublinCoreContexts,
  DublinCoreDataTypes,
  DublinCorePropertyType,
  type IDublinCorePeriodOfTime
} from '@twin.org/standards-dublin-core';

DublinCoreDataTypes.registerRedirects();

const period: IDublinCorePeriodOfTime = {
  startDate: '2026-01-01',
  endDate: '2026-12-31'
};

const record = {
  '@context': DublinCoreContexts.Context,
  type: DublinCoreClasses.Dataset,
  [DublinCorePropertyType.Title]: 'Milestone Events',
  [DublinCorePropertyType.Temporal]: period
};

console.log(record.type); // dcat:Dataset
```
