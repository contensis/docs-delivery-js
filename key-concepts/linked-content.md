---
description: An entry can link to other entries or assets as entry, asset or image field types.  
---
# Linked content

An entry can link to other entries or assets as [entry](/model/entry.md), [asset](/model/asset.md) or [image](/model/image.md) field types. They can be defined as a standard entry field or as a [composed](/model/composed.md) field type in the content type. These links can be singular or multiples of the same content type e.g. Actor, Image, etc.

Linked content can be [unresolved](#unresolved-entries) or [resolved](#resolved-entries) depending on whether a linkDepth value has been provided when retrieving entries using the [get](/key-concepts/get-entry.md), [list](/key-concepts/list-entries.md) or [search](/search/search-basics.md) methods.

## Unresolved entries

An unresolved entry or asset is essentially a subset of the entry structure with enough information to get the correct entry language variation. A subsequent service call is required to obtain the linked content. Unresolved entries and assets is the default behaviour for linked content.

## Resolved entries

Entries can be resolved automatically in the service to a maximum depth of 10 using the linkDepth parameter in any retrieval operation. Resolving entries in a single call can significantly improve the render performance of your webpage or application. Whilst fewer network requests can be beneficial, it can also be detrimental if the linkDepth is too deep, or if there are many linked fields.

### Resolution rules

When a linked entry is accessed then the following rules apply:

- If a language **has** been specified in the link, then the specific language variation will be returned.
- If a language **has** been specified in the link, but the specific language variation does not exist, then null will be returned or will not be included in the array.
- If a language **has not** been specified, then the *defaultLanguage* value defined in the [content type](/model/content-type.md) will be used to select the appropriate entry variation to return.
- If a language **has not** been specified and there is no default variation, then null will be returned.



## Example

```js
resolve(entry: Entry, fields?: string[]): Promise<Entry>;
resolve(entryArray: Entry[], fields?: string[]): Promise<Entry[]>;
resolve(pageListOfEntries: PagedList<Entry>, fields?: string[]): Promise<PagedList<Entry>>;


(function(Zengenti) {
    var client = Zengenti.Contensis.Client.create();
    var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';

    client.entries.get(movieId).then(function(film) {       
        return client.entries.resolve(film);
    }, function(error) {
        console.error(error);
    });

   client.entries.list('movies').then(function(films) {
         return client.entries.resolve(films);
    }, function(error) {
        console.error(error);
    });
})(Zengenti);
```
