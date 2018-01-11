# Paged list

A paged list is a structure that is used to describe paging details for listing and search results.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| pageIndex | number | int | The index of the result set to return |
| pageSize | number | int | The size of the result set to return. The default is 25 |
| totalCount | number | int | The total number of results available |
| pageCount | number | int | The calculated page count based on the totalCount and pageSize |
| items | object [...] |  | A container for the items being returned |

## Example

The paged list properties provide the information required to implement paging.

```html
<ul id="film_list">
</ul>
<ul id="film_pager">
</ul>
```

```js
(function(Zengenti) {

    // Create a client
    var client = Zengenti.Contensis.Client.create({
        pageSize: 10
    });
    
    // method for loaded a given page index
    function loadPage(pageIndex) {
        // specify the list option
        var options = {
            contentTypeId: 'movies', // get a list of movies
            pageOptions: { pageIndex: pageIndex } // get the specific page
        };

        // Get the list using the options
        client.entries.list(options).then(function(listOfFilms) { 
            // empty the list   
            $('#film_list').empty();
            for (var i = 0, ilen = listOfFilms.items.length; i < ilen; i++) {
                // loop through the entries adding their title to the list
                var film = listOfFilms.items[i];
                $('#film_list').append($('<li />').text(film.title));
            }

            // empty the pager list
            $('#film_pager').empty();
            for (var iPage = 1; iPage <= listOfFilms.pageCount; iPage++) {               
                // create a link
                var link = $('<a />')
                            .text(iPage)
                            .attr('href', '#')
                            .data('pageIndex', iPage - 1);  // set the page index as data on the link

                var listItem = $('<li />');
                if (pageIndex === iPage) {
                    listItem.addClass('selected'); // add a selected class if the link is for the current page
                }

                listItem
                    .appendTo('#film_pager')    // add the list item to the list
                    .append(link);              // add the link to the list item
            }
        }, function(error) {
            console.error(error);
        });

    }

    $(function () {

        // add click handlers to pager links
        $('#film_pager').on('click', 'a', function(e) {
            // get the new page index from the data of the link
            var pageIndex = $(this).data('pageIndex');
            // load the new page
            loadPage(pageIndex);
            // stop the link's default behaviour
            e.preventDefault();
        });

        // load the first page
        loadPage(0);

    });

})(Zengenti);
```