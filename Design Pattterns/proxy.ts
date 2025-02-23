interface IDataBaseQuery {
  execute(query: string): void;
}

class MainDataBaseQuery implements IDataBaseQuery {
  public execute(query: string): void {
    console.log("Query executed");
  }
}

class AccessControl implements IDataBaseQuery {
  private mainDataBaseQuery: MainDataBaseQuery;
  private userRole: string;
  constructor(userRole: string) {
    this.mainDataBaseQuery = new MainDataBaseQuery();
    this.userRole = userRole;
  }
  execute(query: string): void {
    if (this.userRole === "admin") {
      this.mainDataBaseQuery.execute(query);
    } else {
      console.log("No Access");
    }
  }
}

const system = new AccessControl("admin");
system.execute("Sum");
