# Interface: IEpcisPersistentDisposition

EPCIS 2.0 PersistentDisposition indicating business conditions to set or unset
independently of event disposition.

## See

https://ref.gs1.org/epcis/PersistentDisposition

## Properties

### set? {#set}

> `optional` **set?**: `string`[]

(Optional) List of persistentDisposition URI values to be set.

***

### unset? {#unset}

> `optional` **unset?**: `string`[]

(Optional) List of persistentDisposition URI values to be unset (revoked).
