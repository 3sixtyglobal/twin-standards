# Standards Gaia-X Examples

These snippets register data types and model a service offering entity for exchange across participants.

## GaiaXDataTypes

```typescript
import {
  GaiaXContexts,
  GaiaXDataTypes,
  GaiaXTypes,
  type IGaiaXServiceOffering
} from '@twin.org/standards-gaia-x';

GaiaXDataTypes.registerTypes();

const offering: IGaiaXServiceOffering = {
  '@context': GaiaXContexts.Context,
  type: GaiaXTypes.ServiceOffering,
  id: 'urn:gx:service:catalogue-api',
  name: 'Catalogue API'
};

console.log(offering.type); // gx:ServiceOffering
```
