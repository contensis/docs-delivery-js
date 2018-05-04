# Get a single entry
Requesting an individual entry can be achieved by using the get method on the client's entries property.

**get(id: string): Promise&lt;Entry&gt;**
**get(options: EntryGetOptions): Promise&lt;Entry&gt;**

### Parameters			
| Name | Type | Description |
|:--|:--|:--
| id | string | The id of the entry |
| options | [EntryGetOptions](/model/entry-get-options.md) | An object specifying the id, language, fields to return and linkDepth.|


### Returns
A Promise that will resolve with the [Entry](/model/entry.md)

### Example - using entry id
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

        // Get the default language variation of the film
        client.entries.get(movieId).then(function(film) {      
            // display the film's title and overview 
            $('#film_title').text(film.title);
            $('#film_overview').text(film.overview);
        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```

### Example - using entry get options

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
        client.entries.get( { id: movieId, language: 'fr-FR', linkDepth: 2, fields: ['title', 'overview'] }).then(function(film) {
            // display the film's title and overview
            $('#film_title').text(film.title);
            $('#film_overview').text(film.overview);
        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```