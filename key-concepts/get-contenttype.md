---
description: Requesting an individual content type can be achieved by using the get method on the client's contentTypes property.
---
# Get a single content type

Requesting an individual content type can be achieved by using the get method on the client's contentTypes property.

**get(contentTypeId: string): Promise&lt;ContentType&gt;**

### Parameters

| Name | Type | Description |
|:--|:--|:--
| contentTypeId | string | The id of the content type |

### Returns
A Promise that will resolve with the [Content Type](/model/content-type.md)

```html
<span id="content_type_name"></span>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        // Get the movie content type
        client.contentTypes.get('movie').then(function(movieContentType) {       
        
            $('#content_type_name').text(movieContentType.name['en-GB']);

        }, function(error) {
            console.error(error);
        });   
    });
    
})(Zengenti);
```
