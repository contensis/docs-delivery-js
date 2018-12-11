---
description: The composed field type contains the data that the composer editor defines.
---
# Composed

The composed field type contains the data that the [composer editor](https://zenhub.zengenti.com/Contensis/11.2/kb/content-types-and-entries/field-editors/composer.aspx) defines. It is an array of objects which expose *type* and *value* properties. The *type* property is a name given to an *allowed field type validation* defined in the content type that the entry is based on. The *value* contains the data for the field.

An *allowed field type* is essentially any standard field (such as Image, Heading, Location, etc.) that restricts what types of field can be added to a composed field.

For example, an *allowed field* could be defined with a type of *Heading* and named mainHeading or with a type of *Image* and named bannerImage. There can be multiple *allowed fields* based on the same type, but a composed field cannot contain other composed fields.

## Properties

| Name | Type | Format | Description |
| :--- | :--- | :----- | :---------- |
| type | string || The field name given to a field type defined in the content type. |
| value | *Any* | *Any* | The value of the field, which can be of any type. |

## Example

The example shows an example composed field.

```html
<div id="film_synopsis"></div>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';

        // Get the default language variation of the film
        client.entries.get(movieId).then(function(film) {      
            // get the film's synopsis
            var synopsis = film.synopsis;
            for (var i = 0, ilen = synopsis.length; i < ilen; i++) {
                // loop through the composed fields items
                var item = synopsis[i];

                if (item.type === 'mainHeading') {
                    var mainHeading = $('<h1 />').text(item.value);
                    $('#film_synopsis').append(mainHeading);
                }

                if (item.type === 'subHeading') {
                    var subHeading = $('<h2 />').text(item.value);
                    $('#film_synopsis').append(subHeading);
                }

                if (item.type === 'markup') {
                    var markup = $('<div />').html(item.value);
                    $('#film_synopsis').append(markup);
                }

                if (item.type === 'quote') {
                    var quote = $('<blockquote />')
    	                .text(item.value.text)
                        .attr('cite', item.value.source);
                    $('#film_synopsis').append(markup);
                }

                if (item.type === 'image') {
                    var image = $('<img />').attr({
                        src: item.value.asset.uri,
                        altText: item.value.asset.properties.altText,
                        width: item.value.asset.properties.width,
                        height: item.value.asset.properties.height
                    });
                    $('#film_synopsis').append(image);
                }
            }
        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
