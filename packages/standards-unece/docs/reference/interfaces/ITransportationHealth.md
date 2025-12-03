# Interface: ITransportationHealth

Health indications to be reported on a WHO MDH (Maritime Declaration of Health).

## See

https://vocabulary.uncefact.org/TransportationHealth

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"TransportationHealth"`

JSON-LD Type.

***

### diedOnboardHealthIndication?

> `optional` **diedOnboardHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

A died onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/diedOnboardHealthIndication

***

### diseaseOnboardHealthIndication?

> `optional` **diseaseOnboardHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

A disease onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/diseaseOnboardHealthIndication

***

### illPersonNowOnboardHealthIndication?

> `optional` **illPersonNowOnboardHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

An ill person or persons now onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/illPersonNowOnboardHealthIndication

***

### medicalPractitionerConsultedHealthIndication?

> `optional` **medicalPractitionerConsultedHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

A medical practitioner consulted indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/medicalPractitionerConsultedHealthIndication

***

### moreIllOnboardHealthIndication?

> `optional` **moreIllOnboardHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

A more ill onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/moreIllOnboardHealthIndication

***

### onboardInfectionConditionHealthIndication?

> `optional` **onboardInfectionConditionHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

An onboard infection condition indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/onboardInfectionConditionHealthIndication

***

### sanitaryMeasureAppliedHealthIndication?

> `optional` **sanitaryMeasureAppliedHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

An applied sanitary measure indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/sanitaryMeasureAppliedHealthIndication

***

### sickAnimalOnboardHealthIndication?

> `optional` **sickAnimalOnboardHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

A sick animal or animals onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/sickAnimalOnboardHealthIndication

***

### stowawayFoundOnboardHealthIndication?

> `optional` **stowawayFoundOnboardHealthIndication**: [`IMDHHealthIndication`](IMDHHealthIndication.md)[]

A stowaway or stowaways found onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/stowawayFoundOnboardHealthIndication
