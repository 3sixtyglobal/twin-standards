# Standards Dataspace Protocol Examples

These snippets show how to prepare payloads for conformance checks and register protocol data types for processing flows.

## DataspaceProtocolHelper

```typescript
import type { IValidationFailure } from '@twin.org/core';
import type { IJsonLdNodeObject } from '@twin.org/data-json-ld';
import {
  DataspaceProtocolHelper,
  DataspaceProtocolTransferProcessTypes
} from '@twin.org/standards-dataspace-protocol';

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
} from '@twin.org/standards-dataspace-protocol';

DataspaceProtocolDataTypes.registerRedirects();
DataspaceProtocolDataTypes.registerTypes();
CatalogDataTypes.registerTypes();
ContractNegotiationDataTypes.registerTypes();
TransferProcessDataTypes.registerTypes();

console.log(typeof DataspaceProtocolDataTypes.registerTypes === 'function'); // true
```
