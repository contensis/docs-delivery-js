# Project
A project resource can be retrieved from the Delivery API to understand the languages that the project supports and which language is the primary language.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| id | string | | A unique project identifier |
| name | string |  | The friendly name given to the project |
| description | string |  | The description text given to a project |
| supportedLanguages | string [...] |  | An array of all the languages supported by the project |
| primaryLanguage | string | [Language code](/localization.md)  | The primary language for the project |


## Example

```html
<select id="language_selector"></select>
```

```js
(function(Zengenti) {
    // Create a client
    var client = Zengenti.Contensis.Client.create();

    $(function() {
        // Get the current project
        client.project.get().then(function(currentProject) {

            for (var i = 0, ilen = currentProject.supportedLanguages.length; i < ilen; i++) {

                // loop through the project's supported languages and add them to the language selector
                
                // check if the supported language is the primary language, if it is select the option
                var selected = (lang === currentProject.primaryLanguage) ? 'selected' : '';

                var option = $('<option />')
                    .val(lang)
                    .text(lang)
                    .attr('selected', selected);

                $('#language_selector').append(option);

            }

    	}, function(error) {
            console.error(error);
    	});    
    });
    
})(Zengenti);
```
