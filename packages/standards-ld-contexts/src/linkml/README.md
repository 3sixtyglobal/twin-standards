# LinkML Gaia-X 24.11 (Loire)

This folder contains the Gaia-X Loire v24.11 LinkML sources. From these sources one can build the corresponding [Gaia-X LD Context](../ldContexts/gaia-x-v24.11.json).

## How to build it

First open a LinkML generator session:

```sh
docker run -v ./:/work -w /work/ --rm -ti docker.io/linkml/linkml
```

then generate as follows:

```sh
gen-jsonld-context types-gaia-x-v24.11.yaml > gaia-x-v24.11.json
mv gaia-x-v24.11.json ../ldContexts/gaia-x-v24.11.json
```
