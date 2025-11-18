# Variable: DcatRelationshipType

> `const` **DcatRelationshipType**: `object`

DCAT relationship types for describing qualified relationships between resources.
These are used with the dcat:qualifiedRelation property.

## Type Declaration

### HadRole

> `readonly` **HadRole**: `"hadRole"` = `"hadRole"`

The function of an entity with respect to another resource.
Used in qualified relationships to specify the role.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:relationship_had_role

### Replaces

> `readonly` **Replaces**: `"replaces"` = `"replaces"`

A related resource that is supplanted, displaced, or superseded by the described resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_replaces

### IsReplacedBy

> `readonly` **IsReplacedBy**: `"isReplacedBy"` = `"isReplacedBy"`

A related resource that supplants, displaces, or supersedes the described resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_replaced_by

### HasVersion

> `readonly` **HasVersion**: `"hasVersion"` = `"hasVersion"`

A related resource that is a version, edition, or adaptation of the described resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_version

### IsVersionOf

> `readonly` **IsVersionOf**: `"isVersionOf"` = `"isVersionOf"`

A related resource of which the described resource is a version, edition, or adaptation.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_version_of

### IsReferencedBy

> `readonly` **IsReferencedBy**: `"isReferencedBy"` = `"isReferencedBy"`

A related resource that references, cites, or otherwise points to the described resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_referenced_by

### References

> `readonly` **References**: `"references"` = `"references"`

A related resource that is referenced, cited, or otherwise pointed to by the described resource.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_references

### Requires

> `readonly` **Requires**: `"requires"` = `"requires"`

A related resource that requires the described resource to support its function, delivery, or coherence.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_requires

### IsRequiredBy

> `readonly` **IsRequiredBy**: `"isRequiredBy"` = `"isRequiredBy"`

A related resource that is required by the described resource to support its function, delivery, or coherence.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_required_by

## See

https://www.w3.org/TR/vocab-dcat-3/#qualified-forms
