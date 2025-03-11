### **Git Assignment Use Case: Collaborative Web Application Development**

#### **Scenario:**  
You and your team are developing a web application for a task management system called “TaskMaster.” The project is structured into multiple feature branches, and you need to merge various features, resolve conflicts, manage version releases, and ensure proper code reviews.

#### **Objective:**  
To understand and apply Git’s merging strategies, conflict resolution, pull requests, and versioning practices effectively within a team-based environment.

---

### **Assignment Instructions:**

1. **Branch Merging Strategies:**  
   You are tasked with merging multiple feature branches into the `main` branch while ensuring a clean and understandable Git history. Follow these steps:
   - Create a **feature branch** named `feature/task-crud` and implement a basic task CRUD (Create, Read, Update, Delete) functionality.
   - After completing the feature, create another branch named `feature/user-authentication` to implement user authentication features (login, register, etc.).
   - Merge the `feature/task-crud` branch into the `feature/user-authentication` branch (simulate a fast-forward merge scenario).
   

2. **Resolving Merge Conflicts:**  
   During the merging process, you will encounter conflicts. Here’s how to handle them:
   - While merging the branches, there will be a conflict in the `app.js` file between `feature/task-crud` and `feature/user-authentication`.
   - Use the `git status` command to identify the conflicted files and manually resolve the conflict in the `app.js` file.
   - Once resolved, stage the changes and commit the merge.

3. **Structuring a Good Pull Request (PR):**  
   Once your feature branches are ready to be merged into the `main` branch, follow these steps:
   - Create a Pull Request for merging `feature/user-authentication` into the `main` branch.
   - Include a descriptive title, such as “Implemented user authentication features.”
   - In the PR description, provide context for the changes and reference the task management issue it resolves (for example, “Resolves #101: User login and registration”).
   - Request reviews from at least two team members, making sure to address their feedback before merging.

4. **Using Git Tags for Releases and Versioning:**  
   After successfully merging both feature branches into `main`, you need to tag the release for versioning:
   - Create an **annotated tag** called `v1.0.0` to mark the first stable release of the project.
   - Push the tag to the remote repository.
   - After making a minor update to the authentication process (e.g., adding password reset functionality), create a new tag `v1.1.0` to signify the update.
   - Make sure to follow **semantic versioning** for the tags (Major.Minor.Patch).
