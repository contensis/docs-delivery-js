# Search

A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. The query API allows any required sub-query structure to be defined and a comprehensive selection of Operators enable individual field level evaluation.

- [Query](#query)
- [Sub-queries](#sub-queries)
- [Ordering](#ordering)
- [Paging](#paging)
- [Weighting](#weighting)
- [Specifying fields](#specifying-fields)
- [Complete example](#complete-example)

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
