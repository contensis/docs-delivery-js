---
description: An image type is a container of an image asset with an associated caption.
---
# Image
An image type is a container of an image asset with an associated caption.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| asset | object | [Asset](/model/asset.md) | The asset that is linked to from the entry |
| caption | string |  | The image caption, defined in the entry |

> **Note** The caption property allows instance specific text to be associated with a linked image asset.


## Example

```html
<figure id="film_cover">
    <img />
    <figcaption />
</figure>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        var movieId = 'd11315cb-4278-455b-84bb-04698db0ebd2';

        // Get the default language variation of the film
        client.entries.get({ id: movieId, linkDepth: 1 }).then(function(film) {    
            // Get the cover image value
            var coverImage = film.coverImage;  

            // display the cover image
            $('img', '#film_cover')
    	        .attr({
                	src: coverImage.asset.sys.uri,
                    altText: coverImage.asset.altText,
                    width: coverImage.asset.sys.properties.width,
                    height: coverImage.asset.sys.properties.height
                });
            // display the image caption
            $('figcaption', '#film_cover')
    	        .text(coverImage.caption);

        }, function(error) {
            console.error(error);
        });

    });
})(Zengenti);
```
