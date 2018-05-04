---
description: A data type is the storage type for a field, and determines how the field data is validated and indexed for search.
---
# Data types

A data type is the storage type for a field, and determines how the field data is validated and indexed for search.

Contensis supports the following basic data types:

| Type | Description |
| :--- | :---------- |
| string | Used for text entries such as titles, content or markup |
| integer | A whole number |
| decimal | A number with a fractional part |
| boolean | A value of *true* or *false* |
| dateTime | A point in time |
| object | Any arbitrary structure as JSON or a string |
| stringArray | An array of strings |
| integerArray | An array of integers |
| decimalArray | An array of decimals |
| booleanArray | An array of booleans |
| dateTimeArray | An array of dateTimes |
| objectArray | An array of objects |


## Examples

```json
{
    "string": "This is a simple string",
    "integer": 24,
    "decimal": 1.34,
    "boolean": true,
    "dateTime": "2016-10-12T09:29:18.5144641+01:00",
    "object": {
        "id": "12345",
        "name": "item1"
    },
    "stringArray": [
        "Item 1",
        "Item 2",
        "Item 3"
    ],
    "integerArray": [
        1,2,3
    ],
    "decimalArray": [
        1.2, 3.4, 5.6
    ],
    "booleanArray": [
        true, false, true
    ],
    "dateTimeArray": [
        "2017-03-07T14:37:27.0998174+00:00",
        "2017-03-07T14:39:16.3337294+00:00",
        "2017-03-07T14:39:19.3495296+00:00"
    ],
    "objectArray": [
        {
            "id": "12345",
            "name": "item1"
        },
        {
            "id": "67890",
            "name": "item2"
        }
    ]
}
```
