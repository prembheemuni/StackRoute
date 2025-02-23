### mongodb aggregations

#### The Stage output is passed to next stage with updated data and updated names.

```

db.orders.insertMany([
  {
    _id: 1,
    customer: "John",
    total: 150,
    status: "shipped",
    items: [
      { product: "Laptop", quantity: 1, price: 100 },
      { product: "Mouse", quantity: 1, price: 50 }
    ],
    customerId: ObjectId("5f5f5f5f5f5f5f5f5f5f5f5f")
  },
  {
    _id: 2,
    customer: "Jane",
    total: 200,
    status: "shipped",
    items: [
      { product: "Smartphone", quantity: 1, price: 150 },
      { product: "Case", quantity: 1, price: 50 }
    ],
    customerId: ObjectId("5f5f5f5f5f5f5f5f5f5f5f6f")
  },
  {
    _id: 3,
    customer: "Alice",
    total: 50,
    status: "pending",
    items: [
      { product: "Headphones", quantity: 1, price: 50 }
    ],
    customerId: ObjectId("5f5f5f5f5f5f5f5f5f5f5f7f")
  },
  {
    _id: 4,
    customer: "Bob",
    total: 180,
    status: "shipped",
    items: [
      { product: "Keyboard", quantity: 1, price: 80 },
      { product: "Monitor", quantity: 1, price: 100 }
    ],
    customerId: ObjectId("5f5f5f5f5f5f5f5f5f5f5f8f")
  },
  {
    _id: 5,
    customer: "John",
    total: 120,
    status: "cancelled",
    items: [
      { product: "Tablet", quantity: 1, price: 120 }
    ],
    customerId: ObjectId("5f5f5f5f5f5f5f5f5f5f5f5f")
  }
]);


```

### $match similar to find()

```
db.orders.aggregate([
    { $match : {status : "shipped"}}
])
```

### Project ; reshaping documents

```
db.orders.aggregate([
  {
    $project: {
      _id: 0,    // Exclude _id field
      customer: 1,
      total: 1,
      status: 1
    }
  }
])

db.orders.aggregate([{$project:{_id:0,customer:1}}])

db.orders.aggregate([
  {
    $project: {
      customer: 1,  // Keep the 'customer' field as is
      orderAmount: "$total",  // Rename 'total' to 'orderAmount'
      status: 1   // Keep the 'status' field as is
    }
  }
])

// additions and multiplications
db.orders.aggregate([
  {
    $project: {
      customerName: "$customer",  // Rename 'customer' to 'customerName'
      discountedPrice: { $multiply: ["$total", 0.9] },  // Apply a 10% discount
      orderStatus: "$status",  // Rename 'status' to 'orderStatus'
      _id: 0  // Exclude the '_id' field
    }
  }
])


```


### Grouping and aggregating

- grouping syntax is below
```
{
  $group: {
    _id: <group_by_field>,  // Field to group by
    aggregationOperator1: { <operator>: <field> },  // Aggregation operator for a field
    aggregationOperator2: { <operator>: <field> },  // More aggregation operators
    ...
  }
}


```
- feild should be starts with $
```
db.orders.aggregate([
  {
    $group: {
      _id: "$customer",  // Group by customer
      totalAmount: { $sum: "$total" }  // Calculate total amount per customer
    }
  }
])

```
- if you want the sum, max, min of all just add _id as null. no grouping only aggregation

- grouping is nothing but unique ness, if more than 1 then it is cartisian combination

### List of aggregations with grouping

```
db.orders.aggregate([
  {$group:{
_id:'$customer',
total: {$sum: '$total'},
max : {$max : '$total'},
min : {$min : '$total'},
avg : {$avg : '$total'},
first : {$first : '$total'},
last : {$last : '$total'},
}}
])


allItems: { $push: "$items" }
// Creates new array with all items in it.

uniqueCustomers: { $addToSet: "$customer" }
// unique customers
```

### Sort
```
db.orders.aggregate([{$sort:{total:-1}}])
```

### limit and skip
```
db.orders.aggregate([{$sort:{total:-1}},{$limit:1}])
db.orders.aggregate([
  { $skip: 2 }
])


```



### Stages

- We can add more {} to aggregations array , so that we can perform operations on the output of previois stage.
```
db.orders.aggregate([
  {$group:{
_id:'$customer',
total: {$sum: '$total'},
max : {$max : '$total'},
min : {$min : '$total'},
avg : {$avg : '$total'},
first : {$first : '$total'},
last : {$last : '$total'},
allItems : {$push: '$items'}
}},
  {$sort : {total:-1}},
  {$limit:3},
  {$project:{mainTotal:'$total'}}
])
```

- complex projection

```
db.orders.aggregate([
  {$group:{
_id:'$customer',
total: {$sum: '$total'},
max : {$max : '$total'},
min : {$min : '$total'},
avg : {$avg : '$total'},
first : {$first : '$total'},
last : {$last : '$total'},
allItems : {$push: '$items'}
}},
  {$sort : {total:-1}},
  {$limit:3},
  {$project:{mainTotal:'$total',discount:{$multiply:[0.1,"$total"]}}}
])
```