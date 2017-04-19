# Query operators

- [And](#and)
- [Or](#or)
- [Not](#not)
- [Between](#between)
- [Contains](#contains)
- [EndsWith](#endswith)
- [EqualTo](#equalto)
- [Exists](#exists)
- [FreeText](#freetext)
- [GreaterThan](#greaterthan)
- [GreaterThanOrEqualTo](#greaterthanorequalto)
- [In](#in)
- [LessThan](#lessthan)
- [LessThanOrEqualTo](#lessthanorequalto)
- [StartsWith](#startswith)

## Logical operators

### And
This would return any document where *first* is *1* AND *second* is *2*.

```js
var query = new Query(
        Op.and(
            Op.equalTo('first', 1),
            Op.equalTo('second', 2)
        )
    );
```

The *And* operator is the default logical operator and is not required to be specified explicitly.

```js
var query = new Query(
        Op.equalTo('first', 1),
        Op.equalTo('second', 2)
    );
```



### Or
The example would return any document where *first* is *1* OR *second* is *2*.

```js
var query = new Query(
        Op.or(
            Op.equalTo('first', 1),
            Op.equalTo('second', 2)
        )
    );
```



### Not
The *not* expects an inner operator so in the example any document where *first* is NOT equal to *7* would be returned.

```js
var query = new Query(
        Op.not(Op.equalTo('first', 7))
    );
```



## Relational & equality operators

### Between
In this example, if our field is between *18* and *45* inclusive it would match.

```js
var query = new Query(
    Op.between('age', 18, 45)
);
```



### Contains
This would match on a field called *description* containing the phrase *batman*.

```js
var query = new Query(
    Op.contains('description', 'batman')
);
```



### EndsWith
This would find any item that has a field called *wordField* with a value ending with *ing*.

```js
var query = new Query(
    Op.endsWith('wordField', 'ing')
);
```



### EqualTo
This would find any item that has a field called *blends* with a value exactly matching *5*. For string fields, the comparison is case-insensitive.

```js
var query = new Query(
    Op.equalTo('blends', 5)
);
```



### Exists
In the example any document that has a field called *fieldName* would be returned. You can use a value of *false* if you want documents that do not contain a given field.

```js
var query = new Query(
  Op.exists('fieldName', false)
);
```



### FreeText
In the example the field *synopsis* is searched upon for any words that match *gotham* or *dark* or *knight*.

```js
var query = new Query(
  Op.freeText('synopsis', 'gotham dark night')
);
```



### GreaterThan
In the example any item that has a field called *first* and a value that is greater than *7* would be returned.

```js
var query = new Query(
  Op.greaterThan('first', 7)
);
```



### GreaterThanOrEqualTo
In the example any item that has a field called *first* and a value that is greater than or equal to *7* would be returned.

```js
var query = new Query(
  Op.greaterThanOrEqualTo('first', 7)
);
```



### In
In the example any document that where the field *first* is equal to *1*,*7* or *11* would be returned. The values should be of the same type, in this case *integer*.

```js
var query = new Query(
  Op.in('first', 1, 7, 11)
);
```



### LessThan
In the example any item that has a field called *first* and a value that is less than *7* would be returned.

```js
var query = new Query(
  Op.lessThan('first', 7)
);
```



### LessThanOrEqualTo
In the example any item that has a field called *first* and a value that is less than or equal to *7* would be returned.

```js
var query = new Query(
  Op.lessThanOrEqualTo('first', 7)
);
```



### StartsWith
In the example if the *name* field contains a value starting with *war* it would match.

```js
var query = new Query(
  Op.startsWith('name', 'war')
);
```
