# Variable: DublinCorePropertyType

> `const` **DublinCorePropertyType**: `object`

Common Dublin Core property types for ODRL Policy Metadata.

## Type Declaration

### Creator {#creator}

> `readonly` **Creator**: `"creator"` = `"creator"`

The individual, agent, or organisation that authored the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Description {#description}

> `readonly` **Description**: `"description"` = `"description"`

A human-readable representation or summary of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Issued {#issued}

> `readonly` **Issued**: `"issued"` = `"issued"`

The date (and time) the Policy was first issued.
Note: String values may not be normalized and should not be used for direct comparison.

### Modified {#modified}

> `readonly` **Modified**: `"modified"` = `"modified"`

The date (and time) the Policy was updated.
Note: String values may not be normalized and should not be used for direct comparison.

### Publisher {#publisher}

> `readonly` **Publisher**: `"publisher"` = `"publisher"`

The publisher of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Subject {#subject}

> `readonly` **Subject**: `"subject"` = `"subject"`

The subject of the Policy.
Note: String values may not be normalized and should not be used for direct comparison.

### Coverage {#coverage}

> `readonly` **Coverage**: `"coverage"` = `"coverage"`

The jurisdiction under which the Policy is relevant.
Note: When using string values, they may not be normalized and should not be used for direct comparison.
Using "@id" references is preferred for comparison purposes.

### Replaces {#replaces}

> `readonly` **Replaces**: `"replaces"` = `"replaces"`

The identifier of a Policy that this Policy supersedes.
Using "@id" references is preferred for comparison purposes.

### IsReplacedBy {#isreplacedby}

> `readonly` **IsReplacedBy**: `"isReplacedBy"` = `"isReplacedBy"`

The identifier of a Policy that supersedes this Policy.
Using "@id" references is preferred for comparison purposes.

### HasPart {#haspart}

> `readonly` **HasPart**: `"hasPart"` = `"hasPart"`

A related resource that is included either physically or logically in the described resource.

#### See

https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/hasPart

## See

http://purl.org/dc/terms/
