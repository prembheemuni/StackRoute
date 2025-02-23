var MainDataBaseQuery = /** @class */ (function () {
    function MainDataBaseQuery() {
    }
    MainDataBaseQuery.prototype.execute = function (query) {
        console.log("Query executed");
    };
    return MainDataBaseQuery;
}());
var AccessControl = /** @class */ (function () {
    function AccessControl(userRole) {
        this.mainDataBaseQuery = new MainDataBaseQuery();
        this.userRole = userRole;
    }
    AccessControl.prototype.execute = function (query) {
        if (this.userRole === "admin") {
            this.mainDataBaseQuery.execute(query);
        }
        else {
            console.log("No Access");
        }
    };
    return AccessControl;
}());
var system = new AccessControl("admin");
system.execute("Sum");
