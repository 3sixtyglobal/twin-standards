# Variable: EpcisSourceDestTypes

> `const` **EpcisSourceDestTypes**: `object`

Supported EPCIS 2.0 `source-dest-type` values describing the role of a party
or location in a transfer.

## Type Declaration

### OwningParty

> `readonly` **OwningParty**: `"owning_party"` = `"owning_party"`

Identifier denotes the party who owns (or will own) the objects at the
business transfer endpoint.

### PossessingParty

> `readonly` **PossessingParty**: `"possessing_party"` = `"possessing_party"`

Identifier denotes the party who has (or will have) physical possession of
the objects at the endpoint.

### Location

> `readonly` **Location**: `"location"` = `"location"`

Identifier denotes the physical location of the originating or terminating
endpoint of the business transfer.
