# @parcel/transform-less

> Parcel transform for Less

## Installation

```
yarn add --dev @parcel/transform-less
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.less": ["@parcel/transform-less"]
  }
}
```
