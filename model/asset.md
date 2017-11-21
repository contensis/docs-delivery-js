# Assets

An Asset is an extension of an [entry](/model/entry.md), with pre-defined fields and additional properties containing details about the file they represent. An asset is an entry with a dataFormat value equal to *asset*, which allows them to be identified and queried independently to entries.

## Fields

### Standard

All assets have the following standard data fields.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| title | string | | The title of the asset |
| description | string | | The description for the asset |
| keywords | string [...] || An array of keyword assigned to the asset |
| thumbnail | object | Asset | The thumbnail link for the asset |

### Image

In addition to the standard data fields, images have the following.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| altText | string | | The default alt text defined for the image resource |

## Properties

### Default

All assets have the following default readonly properties.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| filename | string | | The name of the actual file, with extension included |
| fileSize | number | integer | The file size in bytes |
| fileId | string | GUID | The file identifier |

### Extended

Extended properties are specific to a content type.

#### Images

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| width | number | integer | The width of the image |
| height | number | integer | The height of the image |

## Metadata

### User-defined

User-defined metadata set against assets in the Contensis navigation tree are available as values in the Metadata field, which is a child of the **sys** object. The items are keyed by their source metadata name converted to an api identifer, which removes any non-alphanumeric values and formats the value with camel-casing, e.g. Original.Url becomes originalUrl.

All user-defined metadata values are converted to strings Datetime values are rendered with the day, month and year parts in reverse order to allow ordering and greater than / less than conditions, e.g. `"29-08-1978T03:40:27"` becomes `"1978-08-29T03:40:27"`

### Default

In addition to the user-defined metadata, there are the following additional items that are included by default for each asset.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| includeInSearch | boolean || A flag to determine whether the asset should be included in searches |
| includeInAtoZ | boolean || A flag to determine whether the asset should be included in the A-Z control |
| includeInMenu | boolean || A flag to determine whether the asset should be included in navigation controls |
| includeInSitemap | boolean || A flag to determine whether the asset should be included in the sitemap |
| nodeId | number | integer | The node id of the asset (Contensis Web API) |
