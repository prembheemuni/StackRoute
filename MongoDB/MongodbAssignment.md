### Part 1 Database and collection creation
1. Create a new MongoDB database named LibraryDB.
2. Create two collections
Books: Stores details of books available in the library.
Schema: { "title": String, "author": String, "isbn": String, "category": String, "available_copies": Number }
Members: Stores details of registered library members.
Schema: { "name": String, "email": String, "phone": String, "membership_date": String, "borrowed_books": Array }

```
use LibraryDB

db.createCollection("Books")

db.createCollection("Members")
```

### Part 2 Inserting Data 

3. Insert at least 10 book records into the Books collection with the following fields:

```
db.Books.insertMany([
  {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "isbn": "9780743273565", "category": "Classic", "available_copies": 5},
  {"title": "To Kill a Mockingbird", "author": "Harper Lee", "isbn": "9780061120084", "category": "Classic", "available_copies": 3},
  {"title": "1984", "author": "George Orwell", "isbn": "9780451524935", "category": "Dystopian", "available_copies": 4},
  {"title": "Pride and Prejudice", "author": "Jane Austen", "isbn": "9780141439518", "category": "Romance", "available_copies": 6},
  {"title": "Moby Dick", "author": "Herman Melville", "isbn": "9781503280786", "category": "Adventure", "available_copies": 2},
  {"title": "War and Peace", "author": "Leo Tolstoy", "isbn": "9781400079988", "category": "Historical", "available_copies": 7},
  {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "isbn": "9780316769488", "category": "Fiction", "available_copies": 4},
  {"title": "Brave New World", "author": "Aldous Huxley", "isbn": "9780060850524", "category": "Dystopian", "available_copies": 5},
  {"title": "The Hobbit", "author": "J.R.R. Tolkien", "isbn": "9780345339683", "category": "Fantasy", "available_copies": 8},
  {"title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "isbn": "9780486415871", "category": "Classic", "available_copies": 3}
]
)

db.Members.insertMany([
  {"name": "Alice Johnson", "email": "alice@example.com", "phone": "1234567890", "membership_date": "2023-01-15", "borrowed_books": ["The Great Gatsby", "1984"]},
  {"name": "Bob Smith", "email": "bob@example.com", "phone": "1234567891", "membership_date": "2023-02-20", "borrowed_books": []},
  {"name": "Charlie Brown", "email": "charlie@example.com", "phone": "1234567892", "membership_date": "2023-03-10", "borrowed_books": ["Pride and Prejudice"]},
  {"name": "David White", "email": "david@example.com", "phone": "1234567893", "membership_date": "2023-04-05", "borrowed_books": ["Moby Dick", "War and Peace"]},
  {"name": "Emma Green", "email": "emma@example.com", "phone": "1234567894", "membership_date": "2023-05-12", "borrowed_books": ["To Kill a Mockingbird"]},
  {"name": "Frank Black", "email": "frank@example.com", "phone": "1234567895", "membership_date": "2023-06-18", "borrowed_books": ["Brave New World"]},
  {"name": "Grace Taylor", "email": "grace@example.com", "phone": "1234567896", "membership_date": "2023-07-23", "borrowed_books": []},
  {"name": "Henry Adams", "email": "henry@example.com", "phone": "1234567897", "membership_date": "2023-08-30", "borrowed_books": ["The Hobbit"]},
  {"name": "Ivy Wilson", "email": "ivy@example.com", "phone": "1234567898", "membership_date": "2023-09-15", "borrowed_books": []},
  {"name": "Jack Carter", "email": "jack@example.com", "phone": "1234567899", "membership_date": "2023-10-05", "borrowed_books": ["Crime and Punishment"]}
]
)
```

### Part 3 Retrieving Data




5. Retrieve all books from the Books collection.
6. Retrieve only the title and author of all books.
7. Find books written by a specific author (e.g., "J.K. Rowling").
8. Find all members who have borrowed at least one book.
9. Find books in a specific category (e.g., "Fiction").

```

db.Books.find()

db.Books.find({},{_id:0, title:1,author:1})

db.Books.find({author:'J.K. Rowling'})

db.Members.find({borrowed_books : {$ne : []}})

db.Books.find({category:'Fiction'})

```


### Part 4 Updating data 

10. Update the available_copies of a book after a member borrows it.
11. Add a borrowed book to a specific member’s borrowed_books list.
12. Update a member's phone number.

```
db.Books.updateOne({title:"The Great Gatsby"},{$inc : {available_copies : -1}})

db.Members.updateOne({name : "Bob Smith"},{$push : {borrowed_books : "The Hobbit"}})
db.Members.find({name : "Bob Smith"})

db.Members.updateOne({name : "Bob Smith"},{$set : {phone : '8309090126'}})
```


### Part 5 Deleting data


13. Delete a specific book from the Books collection.
14. Remove a borrowed book from a member’s borrowed_books list after they return it.
15. Delete a member who has canceled their membership.

```
db.Books.deleteOne({title : '1984'})

db.Members.updateOne({name : "Bob Smith"},{$pull : {borrowed_books : 'The Hobbit'}})

db.Members.deleteOne({name:"Grace Taylor"})
```

### Part 6 Summarizing data

16. Count the total number of books available in the library.
17. Count how many books are available in each category.
18. Find the top 3 most borrowed books based on the number of times they appear in members' borrowed_books list.
19.  Find the total number of registered members.
20 .List all members who joined before "2023-07-01".

```
db.Books.aggregate([
{
	$group:{_id:null,totalBooks:{$sum : "$available_copies"}},
},
{
	$project:{Avaible_Books:"$totalBooks"}
}

])


db.Books.aggregate([
{
	$group:{_id:"$category",totalBooks:{$sum : "$available_copies"}},
},
{
	$project:{categoryName:"$_id",available_books:"$totalBooks",_id:0}
}

])


db.Members.aggregate([
  {
		$unwind : "$borrowed_books"
	},
  {
		$group:{_id:"$borrowed_books",total:{$sum:1}}
	},
  {
		$sort : {total : -1}
	},
  {
		$limit : 3
	},
  {
		$project:{_id:0,Book_Name:"$_id",totalBuys:"$total"}
	}
])


db.Members.aggregate([
  {
		$match:{phone : {$exists:true}}
	},
  {
		$count:"total"
	},
  {
		$project:{total_Numbers:"$total"}
	}
])


db.Members.aggregate([
  {
		$match : {membership_date : {$lt : "2023-07-01"}}
	}
])

```


