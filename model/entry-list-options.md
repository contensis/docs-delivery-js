---
description: Entry List Options is a structure that is used to describe details for requesting entry listing results.
---
# Entry List Options

Entry List Options is a structure that is used to describe details for requesting entry listing results.

## Properties
| Name | Type | Description |
| :------- | :--- | :----- | :---------- |
| contentTypeId | string | The id of the content type | 
| language | string | The language variation to return for each entry |
| pageOptions | PageOptions | An object specifying the pageSize and pageIndex |
| order | string [...] | An array of field ids to order the results by. Descending order is specified using a prefixed '-' |
| linkDepth | number | The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |
| fields | string [...] | An array of field ids to restrict the fields returned for an entry |

## Example
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
            contentTypeId: 'movies', // get a list of movies
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
