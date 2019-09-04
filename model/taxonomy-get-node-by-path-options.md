---
description: A structure that supports multiple configuration options for requesting taxonomy nodes.
---
# TaxonomyGetNodeByPathOptions

A structure that supports multiple configuration options for requesting taxonomy nodes.

## Properties

| Name | Type |  Description |
| :------- | :----- | :---------- |
| path | string | The taxonomy node path |
| order | string | Specifies the order of taxonomy nodes: 'defined' or 'alphabetical' (defaults to 'alphabetical') |
| childDepth | number | The depth of resolved children (defaults to 1) |
| language | string | The language code for the retrieved taxonomy nodes |

## Example

```js
(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

     client.taxonomy.getNodeByPath({
        path: 'Root/StructuredContent',
        order: 'defined',
        childDepth: 10,
        language: 'fr-FR'
    }).then(node => {        
        console.log("Taxonomy getNodeByPath with options:");
        console.log(node);        
    });

})(Zengenti);
```
