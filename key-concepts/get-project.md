# Get the current project

Requesting the current project can be achieved by using the get method on the client's project property.

**get(): Promise&lt;Project&gt;**

### Returns
A Promise that will resolve with the [Project](/model/project.md)

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
                var lang = currentProject.supportedLanguages[i];
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
