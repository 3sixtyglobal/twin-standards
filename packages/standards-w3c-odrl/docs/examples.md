# Standards W3C ODRL Examples

These snippets register ODRL type mappings and compose a basic policy object with a shared context.

## OdrlDataTypes

```typescript
import {
  OdrlContexts,
  OdrlDataTypes,
  PolicyType,
  type IOdrlPolicy
} from '@3sixty/standards-w3c-odrl';

OdrlDataTypes.registerRedirects();
OdrlDataTypes.registerTypes();

const policy: IOdrlPolicy = {
  '@context': OdrlContexts.Context,
  '@type': PolicyType.Set,
  uid: 'urn:policy:usage:001'
};

console.log(policy.uid); // urn:policy:usage:001
```
