## MongoDB

### Basic commands

- `cls` clears the shell
- `show dbs` for listing dbs
- `use dbName` uses or creates if it is not exists
- `db.createCollection('students')` creates collection
- `db.dropDatabase()` drops the current database

### Collection commands

- `db.students.insertOne({name : 'prem'})` for inserting
- `db.students.find()` for getting all the data
- `db.students.insertMany([{},{}])` insert many

### Data types
- strings
- numbers
- doubles
- booleans
- date : new Date()
- null
- arrays ["a","b"]
- Nested Documents {"a" : "b"}

```

db.students.insertOne({name : 'Ranjith',age:25, average : 9.72, fullTime:false, registerDate : new Date(), graductionDate : null, courses : ['chemistry','maths'], address : {pin:'531085',city:'vizag'}})

```


### Sorting and limiting and skipping

 - `sort` chaining to find method. `-1` for desc `1` for asc
 ```
  db.students.find().sort({name : -1})
 ```
 - `limit` chaining to find and sort , takes input as number
 
 ```
    db.students.sort({name : -1}).limit(1)
    db.orders.find().skip(5).limit(5)  // Skip the first 5 and return the next 5

 ```


### find() method
- `find({query},{projection})` query takes key names in collections and prjection refers to how we get the data
- `query` is similar to where clause in sql

```
db.students.find({},{name : true})
```
- the above command means return document but only names. this is how projection works. it takes true/false values

### Update
- `updateOne(filter,update)`

```
db.students.updateOne({name:'kumar'},{$set:{avg:9.8}})
```
- `$set` is a parameter inside update takes object of updated values it modifies or adds the new values
- `$unset:{avg:0.0}` to remove a feild

- `updateMany` updates all the documents
```
db.students.updateMany({},{$set:{fullTime:true}})
```
- we can set and unset also
- we can also check and add if that feild not existed to any documents

```
    db.students.updateMany({fulltime:{$exits:false}},{$set:{fulltime:true}})
```


### Delete
- `deleteOne(filter)` and `deleteMany(filter)`
- we can pass object to the filter to delete it.
- we can delete mulltiple if certain fields not exists
```
db.students.deleteMany({fulltime:{$exists:false}})
```


### Comparison operators
- these comparison operators can be used in filters
- `find(filter)` `updateOne(filter,update)` `deleteOne(filter)`
- `{name : "prem"}` this is exact match (=)
- `{name : {$ne : 'prem'}}` not equals to
- `$lt : 20` less than 20
- `$gt : 20` greater than 20
- `$lte $gte` less than equall to greater than equal to
- `{$lte:5, $gte:1}` this is for the range
- `{$in:['prem','premk']}` in operators for given set of values, within array
- `$nin` - similary not in

### Logical operators

- the above comparison operations is a single expression.
- we can have those multiple expressions using `$and` `$or` operators, it takes array of expressions
- similary `$nor` operator
- `$not` it takes only one expression so it will be inside the expression

```
db.students.find({$and : [{age : {$lt : 20}},{name : {$ne : 'kumar'}}]})
```

```
db.students.find({age : {$not : {lt : 20}}})
```

### Indexes

- `.explain('executionStats')` gives execution stats how query is performed.
- it gives `totalDocsExamined` by the query
- `db.students.createIndex({name : 1})` here 1 is for creating index in `ASC` order.
- We can only create indexes in ASC or DSC because indexes are carried by `B-Tree`. with sorting order the look ups are faster.
- With more indexes are in our database for every `write` `update` the indexes are need to be updates so write performance becomes slow.
- After creating index the `totalDocsExamined` will be reduced because of quick lookup of `0logN`
- `db.students.getIndexes()` to list all indexes on that collection
- `db.students.dropIndex('name')` to delete index


### Collections

- `show collections`
- `db.createCollection('teachers')`
- `db.createCollection('teachers',{capped:true, size:1000000,max:100})` for limiting the size of collection and max number of records
- `db.createCollection('teachers',{capped:true,size:100000,max:100},{autoIndexId : false})` prevents creating index of id automatically. this is one of the performance increasing measure of write performance.
- `db.teachers.drop()` to drop a collection


### Counting

- `db.orders.countDocuments()` total count
- `db.orders.countDocuments({name : 'prem'})` first find then count