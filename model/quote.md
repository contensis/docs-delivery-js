# Quote
The quote object represents a section of referenced text from an external source.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| text | string | | The quote text |
| source | string | | The source of the quote |

## Example

```html
<blockquote id="film_quote"></blockquote>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';

        // Get the default language variation of the film
        client.entries.get(movieId).then(function(film) {    
            // Get the memorable quote value
            var filmQuote = film.memorableQuote;  

            // display the quote's text and source
            $('#film_quote')
    	        .text(filmQuote.text)
                .attr('cite', filmQuote.source);

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```