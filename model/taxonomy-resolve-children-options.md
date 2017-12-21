---
description: A structure that supports multiple configuration options for requesting taxonomy nodes.
---
# TaxonomyResolveChildrenOptions

A structure that supports multiple configuration options for resolving taxonomy nodes.

## Properties

| Name | Type |  Description |
| :------- | :----- | :---------- |
| key | string | The taxonomy node key |
| node | [TaxonomyNode](/model/taxonomy-node.md) | The taxonomy node |
| order | string | Specifies the order of taxonomy nodes: 'defined' or 'alphabetical' (defaults to 'defined') |
| childDepth | number | The depth of resolved children (defaults to 1) |
| language | string | The language code for the retrieved taxonomy nodes |

## Example

```js
(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();    

    client.taxonomy.resolveChildren({ key: '0/1', order: 'alphabetical', childDepth: 10, language: 'fr-FR' }).then(node => {        
        console.log("Taxonomy resolveChildren with options and takonomy node key:");
        console.log(node);
    });

    client.taxonomy.resolveChildren({ node: { key: '0/1', name: '', path: '', hasChildren: true }, order: 'alphabetical', childDepth: 99, language: 'fr-FR' }).then(node => {        
        console.log("Taxonomy resolveChildren with options and taxonomy node:");
        console.log(node);
    });

})(Zengenti);
```
