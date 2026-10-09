# Standards FOAF Examples

These snippets demonstrate registering schema support and defining person records with common FOAF terms.

## FoafDataTypes

```typescript
import { FoafContexts, FoafDataTypes, FoafTypes, type IFoafPerson } from '@3sixty/standards-foaf';

FoafDataTypes.registerRedirects();
FoafDataTypes.registerTypes();

const person: IFoafPerson = {
  '@context': FoafContexts.Context,
  type: FoafTypes.Person,
  name: 'Alex Example',
  mbox: 'mailto:alex@example.org'
};

console.log(person.type); // Person
```
