---
description: A structure that supports multiple configuration options for requesting taxonomy nodes.
---
# TaxonomyGetNodeByKeyOptions

A structure that supports multiple configuration options for requesting taxonomy nodes.

## Properties

| Name | Type |  Description |
| :------- | :----- | :---------- |
| key | string | The taxonomy node key |
| order | string | Specifies the order of taxonomy nodes: 'defined' or 'alphabetical' (defaults to 'defined') |
| childDepth | number | The depth of resolved children (defaults to 1) |
| language | string | The language code for the retrieved taxonomy nodes |

## Example

```js
(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    client.taxonomy.getNodeByKey({
        key: '0/1',
        order: 'defined',
        childDepth: 10,
        language: 'fr-FR'
    }).then(node => {        
        console.log("Taxonomy getNodeByKey with options:");
        console.log(node);
    });

})(Zengenti);
```
