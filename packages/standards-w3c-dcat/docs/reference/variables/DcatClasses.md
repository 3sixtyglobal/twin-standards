# Variable: DcatClasses

> `const` **DcatClasses**: `object`

DCAT core classes representing the main entities in the Data Catalog Vocabulary.

## Type Declaration

### Catalog

> `readonly` **Catalog**: `"dcat:Catalog"` = `"dcat:Catalog"`

A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog).

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog

### Resource

> `readonly` **Resource**: `"dcat:Resource"` = `"dcat:Resource"`

Resource published or curated by a single agent.
This is an abstract class and should not be used directly.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Resource

### Dataset

> `readonly` **Dataset**: `"dcat:Dataset"` = `"dcat:Dataset"`

A collection of data, published or curated by a single agent, and available for access or download in one or more representations.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset

### Distribution

> `readonly` **Distribution**: `"dcat:Distribution"` = `"dcat:Distribution"`

A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution

### DataService

> `readonly` **DataService**: `"dcat:DataService"` = `"dcat:DataService"`

A collection of operations that provides access to one or more datasets or data processing functions.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service

### DatasetSeries

> `readonly` **DatasetSeries**: `"dcat:DatasetSeries"` = `"dcat:DatasetSeries"`

A collection of datasets that are published separately, but share some common characteristics.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series

### CatalogRecord

> `readonly` **CatalogRecord**: `"dcat:CatalogRecord"` = `"dcat:CatalogRecord"`

A record in a data catalog, describing the registration of a single dataset or data service.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record

### Relationship

> `readonly` **Relationship**: `"dcat:Relationship"` = `"dcat:Relationship"`

An association class for attaching additional information to a relationship between DCAT Resources.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Relationship

### Role

> `readonly` **Role**: `"dcat:Role"` = `"dcat:Role"`

A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships..

#### See

https://www.w3.org/TR/vocab-dcat-3/#Class:Role

## See

https://www.w3.org/TR/vocab-dcat-3/#classes
