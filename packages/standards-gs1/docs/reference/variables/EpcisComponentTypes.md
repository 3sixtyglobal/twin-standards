# Variable: EpcisComponentTypes

> `const` **EpcisComponentTypes**: `object`

Supported EPCIS 2.0 `component` values.

## Type Declaration

### X {#x}

> `readonly` **X**: `"x"` = `"x"`

Component or projection along the x axis in Cartesian coordinates (X, Y, Z).

### Y {#y}

> `readonly` **Y**: `"y"` = `"y"`

Component or projection along the y axis in Cartesian coordinates (X, Y, Z).

### Z {#z}

> `readonly` **Z**: `"z"` = `"z"`

Component or projection along the z axis in Cartesian coordinates (X, Y, Z).

### AxialDistance {#axialdistance}

> `readonly` **AxialDistance**: `"axial_distance"` = `"axial_distance"`

Radial distance from the cylindrical axis in a cylindrical polar coordinate
system.

### Azimuth {#azimuth}

> `readonly` **Azimuth**: `"azimuth"` = `"azimuth"`

Angle measured in the XY plane, anticlockwise from the X axis to the plane
containing the vector and the Z axis.

### Height {#height}

> `readonly` **Height**: `"height"` = `"height"`

Height parallel to the cylindrical axis in a cylindrical polar coordinate
system.

### SphericalRadius {#sphericalradius}

> `readonly` **SphericalRadius**: `"spherical_radius"` = `"spherical_radius"`

Radial distance from the centre of a sphere in a spherical polar coordinate
system.

### PolarAngle {#polarangle}

> `readonly` **PolarAngle**: `"polar_angle"` = `"polar_angle"`

Angle measured from the Z axis to the vector in a spherical polar coordinate
system.

### ElevationAngle {#elevationangle}

> `readonly` **ElevationAngle**: `"elevation_angle"` = `"elevation_angle"`

Angle measured from the XY plane to the vector in a spherical polar coordinate
system.

### Easting {#easting}

> `readonly` **Easting**: `"easting"` = `"easting"`

Component or projection along an east-pointing axis in a geographic Cartesian
coordinate system.

### Northing {#northing}

> `readonly` **Northing**: `"northing"` = `"northing"`

Component or projection along a north-pointing axis in a geographic Cartesian
coordinate system.

### Latitude {#latitude}

> `readonly` **Latitude**: `"latitude"` = `"latitude"`

Angle of elevation from the equatorial plane in a geographic coordinate
system.

### Longitude {#longitude}

> `readonly` **Longitude**: `"longitude"` = `"longitude"`

Angle, measured within the equatorial plane, east of the prime meridian in a
geographic coordinate system.

### Altitude {#altitude}

> `readonly` **Altitude**: `"altitude"` = `"altitude"`

Height above a defined surface (such as mean sea level) in a geographic
coordinate system.
