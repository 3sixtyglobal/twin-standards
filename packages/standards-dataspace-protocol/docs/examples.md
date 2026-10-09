# Standards Dataspace Protocol Examples

These snippets show how to prepare payloads for conformance checks and register protocol data types for processing flows.

## DataspaceProtocolHelper

```typescript
import type { IValidationFailure } from '@3sixty/core';
import type { IJsonLdNodeObject } from '@3sixty/data-json-ld';
import {
  DataspaceProtocolHelper,
  DataspaceProtocolTransferProcessTypes
} from '@3sixty/standards-dataspace-protocol';

const payload: IJsonLdNodeObject = {
  '@context': 'https://w3id.org/dspace/2025/1/context.json',
  '@type': DataspaceProtocolTransferProcessTypes.TransferProcess,
  state: 'STARTED'
};

const normalised = await DataspaceProtocolHelper.normalize(payload);
const validationFailures = await DataspaceProtocolHelper.validate(normalised);

console.log(validationFailures.length); // 0
```

## Data Types

```typescript
import {
  CatalogDataTypes,
  ContractNegotiationDataTypes,
  DataspaceProtocolDataTypes,
  TransferProcessDataTypes
} from '@3sixty/standards-dataspace-protocol';

DataspaceProtocolDataTypes.registerRedirects();
DataspaceProtocolDataTypes.registerTypes();
CatalogDataTypes.registerTypes();
ContractNegotiationDataTypes.registerTypes();
TransferProcessDataTypes.registerTypes();

console.log(typeof DataspaceProtocolDataTypes.registerTypes === 'function'); // true
```
