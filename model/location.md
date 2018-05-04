---
description: The location object represents a geographical coordinate that specifies the position of a point on the Earth's surface.
---
# Location

The location object represents a geographical coordinate that specifies the position of a point on the Earth's surface.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :-- | :---------- |
| lat | number | | The north-south position |
| lon | number | | The east-west position |

## Example
```html
<div id="map">
</div>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';

        // Get the default language variation of the film
        client.entries.get(movieId).then(function(film) {   
            // get the filming location of the film 
            var filmingLocation = film.filmingLocation;

            // combine lat/lon into a string
            var latLon = filmingLocation.lat + ',' + filmingLocation.lon;

            // Use Google map API to generate a map image 
            var imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + latLon + "&zoom=14&size=400x300&sensor=false";

            $('<img />')                // create an image element
                .attr('src', imgUrl)    // set the src of the image to the Google map
                .appendTo('#map');      // add the image to the map container

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
