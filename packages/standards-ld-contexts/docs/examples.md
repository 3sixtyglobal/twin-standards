# Standards LD Contexts Examples

These snippets show how to inspect bundled contexts and add them to the JSON-LD document cache.

## Context Cache Helpers

```typescript
import {
  LD_CONTEXTS,
  addAllContextsToDocumentCache,
  addContextToDocumentCache
} from '@twin.org/standards-ld-contexts';

const contextCount = Object.keys(LD_CONTEXTS).length;
await addAllContextsToDocumentCache();
await addContextToDocumentCache('https://www.w3.org/ns/credentials/v2');

console.log(contextCount > 0); // true
```
