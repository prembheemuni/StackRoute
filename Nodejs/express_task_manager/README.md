# express_task_manager

Express Task manager assignment

## Sample data to feed in db

```
[
        {
            "title": "KL",
            "description": "Its a Mobile",
            "category": "Electronics",
            "dueDate": "2024-12-31T18:30:00.000Z",
            "status": "Completed",
          
        },
        {
          
            "title": "KL-1",
            "description": "Its a Cloth",
            "category": "Clothes",
            "dueDate": "2025-01-01T18:30:00.000Z",
            "status": "Pending",
           
        },
        {
           
            "title": "KL-4",
            "description": "Its a Cloth",
            "category": "Clothes",
            "dueDate": "2025-01-02T18:30:00.000Z",
            "status": "Completed",
           
        },
        {
           
            "title": "AV-D",
            "description": "Its a Food",
            "category": "Food",
            "dueDate": "2025-01-03T18:30:00.000Z",
            "status": "Completed",
           
        },
        {
            
            "title": "AV-DS",
            "description": "Its a Food",
            "category": "Food",
            "dueDate": "2025-01-03T18:30:00.000Z",
            "status": "Pending",
          
        }
    ]
```
## APIS
 - http://localhost:3003/api/task - POST
 - http://localhost:3003/api/task - GET 
 - http://localhost:3003/api/task/1 - GET
 - http://localhost:3003/api/task/1 - PUT
 - http://localhost:3003/api/task/1 - DELTE
 - http://localhost:3003/api/task?status=Pending - GET
 - http://localhost:3003/api/task?status=Completed - GET
 - http://localhost:3003/api/task?category=Food - GET
 - http://localhost:3003/api/task/duedate?sorted=asc - GET
 - http://localhost:3003/api/task/duedate?sorted=dsc - GET
 - http://localhost:3003/api/task/count/category - GET

