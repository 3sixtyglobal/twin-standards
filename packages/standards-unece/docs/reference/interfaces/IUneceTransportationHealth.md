# Interface: IUneceTransportationHealth

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

> `optional` **diedOnboardHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

A died onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/diedOnboardHealthIndication

***

### diseaseOnboardHealthIndication?

> `optional` **diseaseOnboardHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

A disease onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/diseaseOnboardHealthIndication

***

### illPersonNowOnboardHealthIndication?

> `optional` **illPersonNowOnboardHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

An ill person or persons now onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/illPersonNowOnboardHealthIndication

***

### medicalPractitionerConsultedHealthIndication?

> `optional` **medicalPractitionerConsultedHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

A medical practitioner consulted indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/medicalPractitionerConsultedHealthIndication

***

### moreIllOnboardHealthIndication?

> `optional` **moreIllOnboardHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

A more ill onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/moreIllOnboardHealthIndication

***

### onboardInfectionConditionHealthIndication?

> `optional` **onboardInfectionConditionHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

An onboard infection condition indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/onboardInfectionConditionHealthIndication

***

### sanitaryMeasureAppliedHealthIndication?

> `optional` **sanitaryMeasureAppliedHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

An applied sanitary measure indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/sanitaryMeasureAppliedHealthIndication

***

### sickAnimalOnboardHealthIndication?

> `optional` **sickAnimalOnboardHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

A sick animal or animals onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/sickAnimalOnboardHealthIndication

***

### stowawayFoundOnboardHealthIndication?

> `optional` **stowawayFoundOnboardHealthIndication**: [`IUneceMDHHealthIndication`](IUneceMDHHealthIndication.md)[]

A stowaway or stowaways found onboard indication for this MDH transportation health.

#### See

https://vocabulary.uncefact.org/stowawayFoundOnboardHealthIndication
