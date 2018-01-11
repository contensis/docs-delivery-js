---
description: The date range object represents a start and end point in time.
---
# Date range

The date range object represents a start and end point in time.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :-- | :---------- |
| from | datetime | | The date and time the range starts |
| to | datetime | | The date and time the range ends |

## Validation

The *from* value cannot be greater than the *to* value.

## Example

```html
<div id="film_start"></div>

<div id="film_end"></div>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';

        // Get the default language variation of the film
        client.entries.get(movieId).then(function(film) {    
            // Get the filming period quote value
            var filmingPeriod = film.filmingPeriod;  

            // display the filming period
            $('#film_start')
    	        .text(filmingPeriod.from);

            $('#film_end')
    	        .text(filmingPeriod.to);

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
