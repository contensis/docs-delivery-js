---
description: A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch.
---
# Search

A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. The query API allows any required sub-query structure to be defined and a comprehensive selection of Operators enable individual field level evaluation.

* [Query](#query)
* [Sub-queries](#sub-queries)
* [Location searches](#location-searches)
* [Ordering](#ordering)
* [Paging](#paging)
* [Weighting](#weighting)
* [Specifying fields](#specifying-fields)
* [Limiting fields](#limiting-fields)
* [Ordering by distance](#ordering-by-distance)
* [Limiting fields](#limiting-fields)
* [Complete example](#complete-example)

```js
search(query: Query): Promise<PagedList<Entry>>

search(query: Query, linkDepth: number): Promise<PagedList<Entry>>
```

## Query

This example demonstrates a simple search with default ordering and paging options.

```js
(function(Zengenti) {

    var client = Zengenti.Contensis.Client.create();
    var Query = Zengenti.Contensis.Query;
    var Op = Zengenti.Contensis.Op;

    var query = new Query(
        Op.contains('title', 'Batman'),
        Op.greaterThan('runtime', 200)
    );

    client.entries.search(query).then(function(films) {
        // films are available
        // films.pageIndex
        // films.pageSize
        // films.totalCount
        // films.items

    }, function(error) {
        console.error(error);
    });

})(Zengenti);
```

## Sub-queries

A sub-query is a query within another query that is used as a condition to further restrict the results. Effectively they are defined by an explicit nesting of [logical operators](query-operators.md#logical-operators).

This example demonstrates a simple search with a sub-query.

```js
var query = new Query(
    Op.contains('title', 'Batman'),
    Op.or(
        Op.greaterThan('releaseDate', 1960),
        Op.contains('tagline', 'gotham')
    )
);
```

## Location searches

Search for locations within a radius of a specified location.

### Supported distance units

| Unit          | Search value                   |
|---------------|--------------------------------|
| Mile          | `mi` or `miles`                |
| Yard          | `yd` or `yards`                |
| Feet          | `ft` or `feet`                 |
| Inch          | `in` or `inch`                 |
| Kilometer     | `km` or `kilometers`           |
| Meter         | `m` or `meters`                |
| Centimeter    | `cm` or `centimeters`          |
| Millimeter    | `mm` or `millimeters`          |
| Nautical mile | `NM`, `nmi` or `nauticalmiles` |

### Example

Find all entries which have a location within 10.5 miles of Ludlow Castle's location.
Append the search value at the end of the distance specified, so for example "10.5mi" or "10.5miles".

```js
var query = new Query(
  Op.distanceWithin("location", 52.377, -2.749, "10mi"))
);
```

When searching for a location field, you can also [order the results by distance](#ordering-by-distance).

## Ordering

Results can be ordered by one or more fields in an ascending or descending direction. Order clauses are prioritised in the order that they are added. By default, if no order clauses are specified then the entry results are ordered by the EntryTitle in an ascending direction.

```js
var OrderBy = Zengenti.Contensis.OrderBy;
```

### Ascending order

Order by 'releaseDate' in an ascending direction.

```js
query.orderBy = OrderBy.asc('releaseDate');
```

### Descending order

Order by 'releaseDate' in a descending direction.

```js
query.orderBy = OrderBy.desc('releaseDate');
```

### Multiple clauses

Multiple order clauses.

```js
query.orderBy = OrderBy.asc('title').desc('releaseDate');
```

## Paging

Paging allows the number of results to be restricted to a defined count so that the results are easier to handle and ensures a response is returned quickly. The page number can also be specified to allow which set of results is to be returned.

The page number can also be specified to allow which set of results is to be returned. The page size is limited to a maximum of 10,000 however this is not recommended.

```js
query.pageSize = 50;
query.pageIndex = 1;
```

### Weighting

All query operators can have a weight applied.

```js
var query = new Query(
  Op.equalTo('first', 7).weight(10)
);
```

## Specifying fields

### System fields

System fields such as id, contentTypeId, projectId, versionNo etc. are under the *sys* object and can be accessed using a dot notation, e.g. sys.id, sys.contentTypeId, sys.projectId, sys.version.versionNo.

The *entryTitle* field is a dynamic value, determined by the *EntryTitleField* value in the content type.

### Data fields

Fields defined in the content type for the entry can be accessed by their API id.

### All fields

All fields can be searched by specifying an asterisk (*) in the field id. Note there are some limitations, and the FreeText operator is not supported for all fields.

#### Example

```js
var query = new Query(
  Op.equalTo('*', "Interstellar")
);
```

### Array fields

Searching on array fields require square brackets [] to be specified in the field id before any field ids within the object. Note that this syntax is not required for single object fields. All operators support searching across array fields.

#### Example array field search
This example searches for a quote source of "Bruce Willis" within a quote array field called movieQuote.

```js
var query = new Query(
  Op.equalTo('movieQuote[].source', "Bruce Willis")
);
```

## Limiting fields

If you have large entries and only require a subset of fields it is worth limiting the fields returned in the results. This will reduce the size of the payload from the API which in turn will improve performance. You can include fields by specifiying the field API ID or you can exclude fields by prefixing the field API ID with a -. Field limiting also applies to linked entries when specifying a linkDepth.

```js
query.fields = ['entryTitle', 'description'];
```

## Ordering by distance

When [searching by location](#location-searches), to return the search results according to the distance of the location field in each entry from the distance specified in the distanceWithin search, add the location field to the [orderBy](#ordering) clause, e.g.

```js
var query = new Query(
  Op.distanceWithin("location", 52.377, -2.749, "10mi"))
);
var OrderBy = Zengenti.Contensis.OrderBy;
query.orderBy = OrderBy.asc('location');
```

## Complete example

```js
(function(Zengenti) {
    var client = Zengenti.Contensis.Client.create();
    var Query = Zengenti.Contensis.Query;
    var Op = Zengenti.Contensis.Op;
    var OrderBy = Zengenti.Contensis.OrderBy;
    var query = new Query(
        Op.contains('title', 'Batman'),
        Op.or(
            Op.greaterThan('releaseDate', 1960),
            Op.contains('tagline', 'gotham')
        )
    );
    query.orderBy = OrderBy.asc('title').desc('releaseDate');
    query.pageSize = 50;
    query.pageIndex = 1;
    query.fields = ['entryTitle', 'tagline', 'releaseDate'];

    client.entries.search(query).then(function(films) {
        // films are available
        // films.pageIndex
        // films.pageSize
        // films.totalCount
        // films.items

    }, function(error) {
        console.error(error);
    });
})(Zengenti);
```
