# Data formats

The data format property is used as an extension of a [data type](/key-concepts/data-types.md) to describe the structure and intent of the data. For example, a *location* has a data type of *object*, and a data format of *location*. Another example is a HTML block, which has a data type of *string* and a data format of *html*.  

The data format is a string value and is designed to allow custom types to be added.

## Supported data formats

The following list contains the data formats that are currently understood by Contensis:

| Data format | Data type | Description |
| :---------- | :-------- | :---------- |
| [entry](/model/entry.md) | object | An entry format for storing content. |
| [asset](/model/asset.md) | object | An asset format that represents a file resource. |
| [location](/model/location.md) | object | Represents a point on the surface of the Earth. |
| [quote](/model/quote.md) | object | A quote with text and a source. |
| [dateRange](/model/date-range.md) | object | Represents a start and end point in time. |
| [image](/model/image.md) | object | Wraps an asset with an additional caption property. |
| field | objectArray | Represents a [composed](/model/composed.md) type, defined as an objectArray data type. |
| heading | string | Represents a document heading. |
| html | string | A string of HTML markup. |
| markdown | string | A string of markdown markup. |
