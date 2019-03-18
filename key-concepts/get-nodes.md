---
description: Requesting nodes can be achieved by using one of the get methods.
---
# Getting nodes

Requesting [nodes](/model/node.md) can be achieved by using one of the `get` methods.

- [getRoot(options?: NodeGetRootOptions): Promise&lt;Node&gt;](#get-root)
- [get(idOrPathOrOptions: string | NodeGetByIdOptions | NodeGetByPathOptions): Promise&lt;Node&gt;](#get-node)
- [getByEntry(entryIdOrEntryOrOptions: string | Entry | NodeGetByEntryOptions): Promise<Node[]>](#get-nodes-by-entry)
- [getChildren(idOrNodeOrOptions: string | Node | NodeGetChildrenOptions): Promise<Node[]>](#get-node-children)
- [getParent(idOrNodeOrOptions: string | Node | NodeGetParentOptions): Promise&lt;Node&gt;](#get-node-parent)
- [getAncestorAtLevel(idOrNodeOrOptions: string | Node | NodeGetAncestorAtLevelOptions): Promise&lt;Node&gt;](#get-node-ancestor-at-level)
- [getAncestors(idOrNodeOrOptions: string | Node | NodeGetAncestorsOptions): Promise<Node[]>](#get-node-ancestors)
- [getSiblings(idOrNodeOrOptions: string | Node | NodeGetSiblingOptions): Promise<Node[]>](#get-node-siblings)

## Get root
Gets the root node of the tree.
### Parameters

*options*
> Type: [`NodeGetRootOptions`](/model/node-get-root-options.md)  
> The options for requesting a root node. If the argument is not provided then the default option will be used.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get root node with default options
    client.nodes.getRoot().then(function(node) {
        // root node is available
    }, function(error) {
        console.error(error);
    });

    // get root node with specific options
    client.nodes.getRoot({ 
            language: 'fr-FR', 
            fields: ['title'], 
            depth: 2 
        }).then(function(node) {
        // root node is available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---

## Get node
Gets a node by id or path.
### Parameters

The *idOrPathOrOptions* parameter can be one of the following types.

*idOrPathOrOptions*
> Type: `string`  
> The node id or the node path.

*idOrPathOrOptions*
> Type: [`NodeGetByIdOptions`](/model/node-get-by-id-options.md)
> The options for requesting a node by id.

*idOrPathOrOptions*
> Type: [`NodeGetByPathOptions`](/model/node-get-by-path-options.md)
> The options for requesting a node by path.

### Remarks

Returns *null* if a node with the specified id or path does not exist.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get node by id
    client.nodes.get('57d77dbc-49da-40ca-aaaf-3b877b69699a').then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

     // get node by path
    client.nodes.get('/en-GB/movies/1995/toy-story').then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

    // get node by id with specific options
    client.nodes.get({ 
            id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
            language: 'fr-FR', 
            fields: ['title'], 
            depth: 2 
        }).then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

     // get node by path with specific options
    client.nodes.get({ 
            path: '/en-GB/movies/1995/toy-story',
            language: 'fr-FR', 
            fields: ['title'], 
            depth: 2 
        }).then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---

## Get nodes by entry

Gets an array of nodes assigned to an entry.

### Parameters

The *entryIdOrEntryOrOptions* parameter can be one of the following types.

*entryIdOrEntryOrOptions*
> Type: `string`  
> The entry id.

*entryIdOrEntryOrOptions*
> Type: [`Entry`](/model/entry.md)  
> The entry.

*entryIdOrEntryOrOptions*
> Type: [`NodeGetByEntryOptions`](/model/node-get-by-entry-options.md)  
> The options for requesting nodes assigned to an entry.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get node by entry id
    client.nodes.getByEntry('ba950397-5e7c-4847-a07f-cf015b9e59cb').then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

    // get node by entry
    var entry = {
        'title' : 'An entry',
        sys: {
            id: 'ba950397-5e7c-4847-a07f-cf015b9e59cb',
            contentTypeId: 'movie'
        }
    };     
    client.nodes.getByEntry(entry).then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

    // get node by entry with specific options using the entry id
    client.nodes.getByEntry({ 
            entryId: 'ba950397-5e7c-4847-a07f-cf015b9e59cb',
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

     // get node by entry with specific options using the entry
    client.nodes.getByEntry({ 
            entry: entry,
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(node) {
        // the node is available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---

## Get node children

Gets node children.

### Parameters

The *idOrNodeOrOptions* parameter can be one of the following types.

*idOrNodeOrOptions*
> Type: `string`  
> The node id.

*idOrNodeOrOptions*
> Type: [`Node`](/model/node.md)  
> The node.

*idOrNodeOrOptions*
> Type: [`NodeGetChildrenOptions`](/model/node-get-children-options.md)  
> The options for requesting node children.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get node children by node id
    client.nodes.getChildren('57d77dbc-49da-40ca-aaaf-3b877b69699a').then(function(nodes) {
        // the node children are available
    }, function(error) {
        console.error(error);
    });

    // get node children by node
    var node = {
        id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
        title: 'Toy Story',
        path: '/en-GB/movies/1995/toy-story'    
    };     
    client.nodes.getChildren(node).then(function(nodes) {
        // the node children are available
    }, function(error) {
        console.error(error);
    });

    // get node children with specific options using the node id
    client.nodes.getChildren({ 
            id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(nodes) {
        // the node children are available
    }, function(error) {
        console.error(error);
    });

     // get node children with specific options using the node
    client.nodes.getChildren({ 
            node: node,
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(nodes) {
        // the node children are available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---
## Get node parent

Gets a node parent.

### Parameters

The *idOrNodeOrOptions* parameter can be one of the following types.

*idOrNodeOrOptions*
> Type: `string`  
> The node id.

*idOrNodeOrOptions*
> Type: [`Node`](/model/node.md)  
> The node.

*idOrNodeOrOptions*
> Type: [`NodeGetParentOptions`](/model/node-get-parent-options.md)  
> The options for requesting a node parent.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get node parent by node id
    client.nodes.getParent('57d77dbc-49da-40ca-aaaf-3b877b69699a').then(function(parentNode) {
        // the node parent is available
    }, function(error) {
        console.error(error);
    });

    // get node parent by node
    var node = {
        id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
        title: 'Toy Story',
        path: '/en-GB/movies/1995/toy-story'    
    };     
    client.nodes.getParent(entry).then(function(parentNode) {
        // the node parent is available
    }, function(error) {
        console.error(error);
    });

    // get node parent with specific options using the node id
    client.nodes.getParent({ 
            id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(parentNode) {
        // the node parent is available
    }, function(error) {
        console.error(error);
    });

     // get node parent with specific options using the node
    client.nodes.getParent({ 
            node: node,
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(parentNode) {
        // the node parent is available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---

## Get node ancestor at level

Gets a node ancestor at a specified level.

### Parameters

*options*
> Type: [`NodeGetAncestorAtLevelOptions`](/model/node-get-ancestor-at-level-options.md)  
> The options for requesting a node ancestor at a specified level.

### Remarks

If a level is specified that is equal to or greater than the level of the start node then *null* will be returned.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
   
    // get node ancestor  with specific options using the node id
    client.nodes.getAncestorAtLevel({ 
            id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
            startLevel: 1,
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(ancestorNode) {
        // the node ancestor is available
    }, function(error) {
        console.error(error);
    });

     // get node ancestor with specific options using the node
    var node = {
        id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
        title: 'Toy Story',
        path: '/en-GB/movies/1995/toy-story'    
    };        
    client.nodes.getAncestorAtLevel({ 
            node: node,
            startLevel: 1,
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(ancestorNode) {
        // the node ancestor is available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---

## Get node ancestors

Gets node ancestors.

### Parameters

The *idOrNodeOrOptions* parameter can be one of the following types.

*idOrNodeOrOptions*
> Type: `string`  
> The node id.

*idOrNodeOrOptions*
> Type: [`Node`](/model/node.md)  
> The node.

*idOrNodeOrOptions*
> Type: [`NodeGetAncestorsOptions`](/model/node-get-ancestors-options.md)  
> The options for requesting node ancestors.

### Remarks

If a level is specified that is equal to or greater than the level of the start node then an empty array will be returned.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get node ancestors by node id
    client.nodes.getAncestors('57d77dbc-49da-40ca-aaaf-3b877b69699a').then(function(nodes) {
        // the node ancestors are available
    }, function(error) {
        console.error(error);
    });

    // get node ancestors by node
    var node = {
        id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
        title: 'Toy Story',
        path: '/en-GB/movies/1995/toy-story'    
    };     
    client.nodes.getAncestors(entry).then(function(nodes) {
        // the node ancestors are available
    }, function(error) {
        console.error(error);
    });

    // get node ancestors with specific options using the node id
    client.nodes.getAncestors({ 
            id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
            language: 'fr-FR', 
            startLevel: 1,
            fields: ['description']
        }).then(function(nodes) {
        // the node ancestors are available
    }, function(error) {
        console.error(error);
    });

     // get node ancestors with specific options using the node
    client.nodes.getAncestors({ 
            node: node,
            startLevel: 1,
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(nodes) {
        // the node ancestors are available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---

## Get node siblings

Gets node siblings.

### Parameters

The *idOrNodeOrOptions* parameter can be one of the following types.

*idOrNodeOrOptions*
> Type: `string`  
> The node id.

*idOrNodeOrOptions*
> Type: [`Node`](/model/node.md)  
> The node.

*idOrNodeOrOptions*
> Type: [`NodeGetSiblingsOptions`](/model/node-get-siblings-options.md)  
> The options for requesting node siblings.

### Examples

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    
    // get node siblings by node id
    client.nodes.getSiblings('57d77dbc-49da-40ca-aaaf-3b877b69699a').then(function(nodes) {
        // the node siblings are available
    }, function(error) {
        console.error(error);
    });

    // get node siblings by node
    var node = {
        id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
        title: 'Toy Story',
        path: '/en-GB/movies/1995/toy-story'    
    };     
    client.nodes.getSiblings(entry).then(function(nodes) {
        // the node siblings are available
    }, function(error) {
        console.error(error);
    });

    // get node siblings with specific options using the node id
    client.nodes.getSiblings({ 
            id: '57d77dbc-49da-40ca-aaaf-3b877b69699a',
            language: 'fr-FR',             
            fields: ['description']
        }).then(function(nodes) {
        // the node siblings are available
    }, function(error) {
        console.error(error);
    });

     // get node siblings with specific options using the node
    client.nodes.getSiblings({ 
            node: node,            
            language: 'fr-FR', 
            fields: ['description']
        }).then(function(nodes) {
        // the node siblings are available
    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```
---