---
description: Entry Get Options is a structure that is used to describe details for requesting an entry.
---
# Entry Get Options

Entry Get Options is a structure that is used to describe details for requesting an entry.

## Properties
| Name | Type | Description |
| :------- | :--- | :----- | :---------- |
| id | string | The id of the entry | 
| language | string | The language variation to return for each entry |
| linkDepth | number | The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Example
```html
<h1 id="film_title"></h1>
<p id="film_overview"></p>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';   

        // Get the French variation of the film with a link depth of 2
        client.entries.get( { id: movieId, language: 'fr-fr', linkDepth: 2 }).then(function(film) {
            // display the film's title and overview
            $('#film_title').text(film.title);
            $('#film_overview').text(film.overview);
        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
