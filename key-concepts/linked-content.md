@TODO: Copy from http when signed off and the examples need reworking.



## Resolving Links
Entries are returned with links not resolved you can resolve these.

```js
resolve(entry: Entry): Promise<Entry>;
resolve(entryArray: Entry[]): Promise<Entry[]>;
resolve(pageListOfEntries: PagedList<Entry>): Promise<PagedList<Entry>>;


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
