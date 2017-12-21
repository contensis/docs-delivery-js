---
description: Requesting all entries for a content type can be achieved by using the list method on the client's entries property.
---
# Get a list of all entries by content type
Requesting all entries for a content type can be achieved by using the list method on the client's entries property.

**list(): Promise&lt;PagedList&lt;Entry&gt;&gt;**

**list(options: EntryListOptions): Promise&lt;PagedList&lt;Entry&gt;&gt;**

### Parameters			
| Name | Type | Description |
|:--|:--|:--
| options | [EntryListOptions](/model/entry-list-options.md) | An object specifying the language, page options, ordering, fields to return and linkDepth.|



### Returns
A Promise that will resolve with a [Paged List](/model/paged-list.md) of [Entry](/model/entry.md)

### Example - using content type id
```html
<ul id="entry_list">
</ul>
```

```js
(function(Zengenti) {
    var client = Zengenti.Contensis.Client.create();
    $(function() {
        client.entries.list().then(function(listOfEntries) {    
            for (var i = 0, ilen = listOfEntries.items.length; i < ilen; i++) {
                var entry = listOfEntries.items[i];
                $('#entry_list').append($('<li />').text(film.entryTitle));
            }
        }, function(error) {
            console.error(error);
        });
    });
})(Zengenti);
```

### Example - using entry list options

```html
<ul id="entry_list">
</ul>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        // specify the options
        var options = {
            language: 'fr-FR',  // get french variations
            order: ['entryTitle'],   // order by entryTitle field
            fields: ['entryTitle'],  // only return entryTitle field
            linkDepth: 1
        };

        // Get the list using the options
        client.entries.list(options).then(function(listOfEntries) {    

            for (var i = 0, ilen = listOfEntries.items.length; i < ilen; i++) {
                // loop through the entries adding their title to the list
                var entry = listOfEntries.items[i];
                $('#entry_list').append($('<li />').text(film.entryTitle));
            }

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
