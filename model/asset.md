# Assets

Assets are an extension of entries, with additional properties containing details about the file they represent. An asset is an entry with a dataFormat value equal to *asset*, which allows them to be identified and queried independently to entries.

## Standard Fields

All assets have the following standard entry fields:

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| title | string | | The title of the asset |
| description | string | | The description for the asset |
| sys | object | [Sys](#sys) | The container of the entry system data |

### Image
In addition to the standard data fields, images have the following.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| altText | string | | The default alt text defined for the image resource |

### Sys

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| id | string | GUID | The asset identifier as a 128 bit GUID|
| projectId | string | | The API identifier of the project the entry belongs to |
| contentTypeId | string | | The API identifier of the content type that the entry is based on |
| dataFormat | string | | *asset* |
| language | string | [Language code](/localization.md) | The language code of the asset variation |
| version | object | [Version](/model/version.md) | Version info specific to the entry variation |
| properties | object | [Properties](#Properties) | The container of asset specific properties |

## Properties
### Default
All assets have the following default readonly properties.

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| uri | string | | The URI path to the file, excluding the domain |
| filename | string | | The name of the actual file, with extension included |
| fileSize | number | | The file size in bytes |

### Extended
Extended properties are specific to a content type.

#### Images

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| width | number | | The width of the image |
| height | number | | The height of the image |

