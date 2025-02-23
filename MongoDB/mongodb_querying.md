### Quering commands

```
db.collection.find()
db.collection.find({ field: value })
db.orders.find({ customer: "John" }, { total: 1 })
db.orders.find({ total: { $gte: 100 } })   // Total greater than or equal to 100
db.orders.find({
  $or: [
    { customer: "John" },
    { total: { $gte: 100 } }
  ]
})
db.orders.find({ customer: { $in: ["John", "Jane"] } })
db.orders.find({ status: { $nin: ["cancelled", "returned"] } })
db.orders.find({ trackingNumber: { $exists: true } })
db.orders.find({ customer: /John/i })  // Case-insensitive match
db.orders.countDocuments({ status: "shipped" })
db.orders.countDocuments({ status: "shipped" })
db.orders.countDocuments()
db.orders.find().sort({ customer: 1, total: -1 })  // Sort by 'customer' ascending and 'total' descending
db.orders.find().skip(5).limit(5)  // Skip the first 5 and return the next 5



```


### Projections
- projections will take 0 , 1 , true, false and can also perform substract and addition


```
db.orders.find({}, {
  total: 1,
  discount: 1,
  finalPrice: { $subtract: ["$total", "$discount"] }
})

```