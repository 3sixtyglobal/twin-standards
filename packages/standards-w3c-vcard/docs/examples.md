# Standards W3C vCard Examples

These snippets use shared context constants and common property keys to build contact objects.

## VCard Contexts And Properties

```typescript
import { VCardContexts, VCardPropertyType } from '@3sixty/standards-w3c-vcard';

const card = {
  '@context': VCardContexts.Context,
  type: VCardPropertyType.Individual,
  [VCardPropertyType.FormattedName]: 'Alex Example',
  [VCardPropertyType.Email]: 'mailto:alex@example.org',
  [VCardPropertyType.Phone]: 'tel:+44-20-1234-5678'
};

console.log(card.type); // Individual
console.log(card[VCardPropertyType.FormattedName]); // Alex Example
```
