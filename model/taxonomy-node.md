# TaxonomyNode

Represents taxonomy nodes in the Delivery API that have been created in Contensis.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| key | string | | The taxonomy key |
| name | string | | The localized taxonomy name |
| path | string | | The full taxonomy node path |
| hasChildren | boolean | | Whether or not the node has any child nodes |
| children | TaxonomyNode [...] | | A list of child taxonomy nodes |

## Example

This example shows a taxonomy node object with child taxonomy nodes:

```json
{
    "key": "0",
    "name": "Root",
    "path": "Root",
    "hasChildren": true,
    "children": [
        {
            "key": "0/1",
            "name": "Movies",
            "path": "Root/Movies",
            "hasChildren": true,
            "children": [
                {
                    "key": "0/1/2",
                    "name": "Genres",
                    "path": "Root/Movies/Genres",
                    "hasChildren": false,
                    "children": []
                }
            ]
        }        
    ]
}
```
