# Standards W3C DCAT Examples

These snippets register DCAT schemas and model a catalogue record for publication workflows.

## DcatDataTypes

```typescript
import {
  DcatClasses,
  DcatContexts,
  DcatDataTypes,
  type IDcatCatalog
} from '@3sixty/standards-w3c-dcat';

DcatDataTypes.registerRedirects();
DcatDataTypes.registerTypes();

const catalog: IDcatCatalog = {
  '@context': DcatContexts.Context,
  type: DcatClasses.Catalog,
  title: 'Operational Data Catalogue'
};

console.log(catalog.type); // dcat:Catalog
```
