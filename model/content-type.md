---
description: A content type resource can be retrieved from the Delivery API to understand the schema of an entry.
---

# Content type

A content type resource can be retrieved from the Delivery API to understand the schema of an [entry](entry.md). Entries are constructed and validated using the information defined in the fields collection.

## Properties

| Name               | Type         | Format                              | Description                                                                                            |
| :----------------- | :----------- | :---------------------------------- | :----------------------------------------------------------------------------------------------------- |
| id                 | string       |                                     | A unique content type identifier                                                                       |
| projectId          | string       |                                     | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| name               | object       | [Localized value](/localization.md) | The friendly name given to a content type                                                              |
| description        | object       | [Localized value](/localization.md) | The description text given to a content type                                                           |
| entryTitleField    | string       |                                     | The id of the field which should be used as the title in entry listings                                |
| fields             | object [...] | [Field](#field)                     | A collection of fields that form the schema for an entry                                               |
| enabled            | boolean      |                                     |                                                                                                        |
| defaultLanguage    | string       | [Language code](/localization.md)   |                                                                                                        |
| supportedLanguages | string [...] | [Language code](/localization.md)   |                                                                                                        |
| workflowId         | string       |                                     | The workflow that derived entries will                                                                 |
| dataFormat         | string       |                                     | Either _entry_ or _asset_                                                                              |
| previewUrl         | string       |                                     | The URL where an example of an entry based on the content type can be viewed                            |
| version            | object       | [Version](/model/version.md)        | Version information about the content type                                                             |

## Field

The field object is the definition of a field within an entry. The field also contains the validations and editor configuration that is used within the Contensis UI and services.

### Properties

| Name        | Type   | Format                                     | Description                                                                                     |
| :---------- | :----- | :----------------------------------------- | :---------------------------------------------------------------------------------------------- |
| id          | string |                                            | A unique field identifier                                                                       |
| name        | object | [Localized value](/localization.md)        | A friendly name for the field                                                                   |
| description | object | [Localized value](/localization.md)        | The description for the field's purpose                                                         |
| dataType    | string | [Data type](/key-concepts/data-types.md)   | The field data type                                                                             |
| dataFormat  | string | [Data type](/key-concepts/data-formats.md) | The field data format                                                                           |
| default     | object | [Localized value](/localization.md)        | The default value for the field if no value is provided by an editor                            |
| validations | object |                                            | The validations that will be performed on the field when the entry is either created or updated |
| editor      | object | Editor                                     | Configuration for the Contensis entry editor                                                    |

## Localized value

A localized value is an object that has values that are keyed by [language codes](/localization.md) which allows multilingual variations of a specific property.

## Example

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
