---
description: Requesting all entries for a content type can be achieved by using the list method on the client's entries property.
---
# List entries by content type
Requesting all entries for a content type can be achieved by using the list method on the client's entries property.

**list(contentTypeId: string): Promise&lt;PagedList&lt;Entry&gt;&gt;**

**list(options: EntryListOptions): Promise&lt;PagedList&lt;Entry&gt;&gt;**

### Parameters			
| Name | Type | Description |
|:--|:--|:--
| contentTypeId | string | The id of the content type |
| options | [EntryListOptions](/model/entry-list-options.md) | An object specifying the content type id, language, page options, ordering, fields to return and linkDepth.|


### Returns
A Promise that will resolve with a [Paged List](/model/paged-list.md) of [Entry](/model/entry.md)

### Example - using content type id
```html
<ul id="film_list">
</ul>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        // Get a list of movies
        client.entries.list('movie').then(function(listOfFilms) {    

            for (var i = 0, ilen = listOfFilms.items.length; i < ilen; i++) {
                // loop through the entries adding their title to the list
                var film = listOfFilms.items[i];
                $('#film_list').append($('<li />').text(film.title));
            }

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```

### Example - using entry list options

```html
<ul id="film_list">
</ul>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        // specify the options
        var options = {
            contentTypeId: 'movie', // get a list of movies
            language: 'fr-FR',  // get french variations
            order: ['title'],   // order by title field
            fields: ['title'],  // only return title field
            linkDepth: 1
        };

        // Get the list using the options
        client.entries.list(options).then(function(listOfFilms) {    

            for (var i = 0, ilen = listOfFilms.items.length; i < ilen; i++) {
                // loop through the entries adding their title to the list
                var film = listOfFilms.items[i];
                $('#film_list').append($('<li />').text(film.title));
            }

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
