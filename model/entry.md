---
description: An entry definition in the Delivery API contains a mixture of standard properties and properties that have been defined by the content type that an entry is based on.
---
# Entries

An entry definition in the Delivery API contains a mixture of standard properties and properties that have been defined by the content type that an entry is based on.

## Data properties

Data properties are items defined by the [fields collection](/model/content-type.md#field) set in a content type.

## Standard properties

These are the standard properties that all entries have. The language property is the indexer for the entry data as an entry can have multiple language variations which can be be edited and versioned independently. In the Delivery API context only a single language variation is available on an entry.

### Entry

| Name     | Type   | Format      | Description                                                                                                                        |
| :------- | :----- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| field id | Any    | Any         | Field data that is defined in the associated [content type](/model/content-type.md#field). The data is keyed by a unique field id. |
| sys      | object | [Sys](#sys) | The container of the entry system data                                                                                             |

### Sys

| Name | Type | Format | Description |
| :- | :- | :- | :- |
| id | string | GUID | The entry identifier as a 128 bit GUID |
| projectId | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| contentTypeId | string | | The API identifier of the content type that the entry is based on |
| dataFormat | string | | Either _entry_ or _asset_ |
| language | string | [Language code](/localization.md) | The language code of the entry variation |
| availableLanguages | string[] | [Language code](/localization.md) | A list languages which have available translations. |
| uri | string | URI | The entry uri |
| allUris | string[] | URI | All uris associated with the entry |
| metadata | object | | Metadata associated with the entry instance |
| workflow | object | | Workflow associated with the entry instance. |
| workflow.id | string | | The API identifier of the workflow that the entry is using. |
| workflow.state | string | | The API identifier of the current workflow state of the entry. |
| isPublished | boolean | | If the entry is currently published then the value will be _true_. If the entry has yet to be published or has been unpublished it will be _false_. |
| version | object | [Version](/model/version.md) | Version info specific to the entry variation |

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
