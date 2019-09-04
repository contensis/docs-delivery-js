---
description: Taxonomy nodes can be retrieved using the following methods, either by key or by path.
---
# Taxonomy

Taxonomy nodes can be retrieved using the following methods, either by key or by path. The localization can be included as a parameter to determine the language the nodes should be returned as. The order by default is set to 'alphabetical', but an order of 'defined' (which is the order set in the UI) can also be used. 

The childDepth parameter is used to reduce the number of service calls if child and descendant nodes are being iterated, which will potentially increase performance.

- [getNodeByKey(key: string | TaxonomyGetNodeByKeyOptions): Promise &lt;TaxonomyNode&gt;](#getnodebykey)
- [getNodeByPath(path: string | TaxonomyGetNodeByPathOptions): Promise &lt;TaxonomyNode&gt;](#getnodebypath)
- [resolveChildren(node: string | TaxonomyNode | TaxonomyResolveChildrenOptions): Promise &lt;TaxonomyNode&gt;](#resolvechildren)

## getNodeByKey

A function that uses a taxonomy node key to retrieve taxonomy nodes. It returns a Promise that will resolve with a [TaxonomyNode](/model/taxonomy-node.md) instance.

### Syntax

```typescript
getNodeByKey(key: string | TaxonomyGetNodeByKeyOptions): Promise<TaxonomyNode>
```

### Parameters

*key*
> Type: `string`
> The key for the taxonomy, which is a forward-slash delimited set of integer values, e.g. 0/2/734 

or 

*key*
> Type: [`TaxonomyGetNodeByKeyOptions`](/model/taxonomy-get-node-by-key-options.md) 
> An object that supports multiple configuration options

### Example

```js
(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    client.taxonomy.getNodeByKey('0/1').then(node => {        
        console.log("Taxonomy getNodeByKey:");
        console.log(node);        
    });

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

---

## getNodeByPath

A function that uses a taxonomy node path to retrieve taxonomy nodes. It returns a Promise that will resolve with a [TaxonomyNode](/model/taxonomy-node.md) instance.

### Syntax

```typescript
getNodeByPath(path: string | TaxonomyGetNodeByPathOptions): Promise <TaxonomyNode>
```

### Parameters

*path*
> Type: `string`  
> The path for the taxonomy, which is a forward-slash delimited set of string values, e.g. "Root/Movies/Genres/Comedy" 

or 

*path*
> Type: [`TaxonomyGetNodeByPathOptions`](/model/taxonomy-get-node-by-path-options.md) 
> An object that supports multiple configuration options

### Example

```js
(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    client.taxonomy.getNodeByPath('Root/StructuredContent').then(node => {        
        console.log("Taxonomy getNodeByPath:");
        console.log(node);
    });

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

---

## resolveChildren

A function that uses a taxonomy node key or a taxonomy node instance to resolve taxonomy nodes. It returns a Promise that will resolve with a [TaxonomyNode](/model/taxonomy-node.md) instance.

### Syntax

```typescript
resolveChildren(node: string | TaxonomyNode | TaxonomyResolveChildrenOptions): Promise<TaxonomyNode>
```

### Parameters

*node*
> Type: `string`
> The key for the taxonomy, which is a forward-slash delimited set of integer values, e.g. 0/2/734 

or 

*node*
> Type: [`TaxonomyNode`](/model/taxonomy-node.md) 
> A taxonomy node object

or 

*node*
> Type: [`TaxonomyResolveChildrenOptions`](/model/taxonomy-resolve-children-options.md) 
> An object that supports multiple configuration options

### Example

```js
(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    client.taxonomy.resolveChildren('0/1').then(node => {        
        console.log("Taxonomy resolveChildren with taxonomy node key:");
        console.log(node);
    });

    client.taxonomy.resolveChildren({ key: '0/1', name: '', path: '', hasChildren: true }).then(node => {        
        console.log("Taxonomy resolveChildren with taxonomy node:");
        console.log(node);
    });

    client.taxonomy.resolveChildren({ key: '0/1', order: 'defined', childDepth: 10, language: 'fr-FR' }).then(node => {        
        console.log("Taxonomy resolveChildren with options and taxonomy node key:");
        console.log(node);
    });

    client.taxonomy.resolveChildren({ node: { key: '0/1', name: '', path: '', hasChildren: true }, order: 'defined', childDepth: 99, language: 'fr-FR' }).then(node => {        
        console.log("Taxonomy resolveChildren with options and taxonomy node:");
        console.log(node);
    });

})(Zengenti);
```

---
