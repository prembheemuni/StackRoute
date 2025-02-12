// Note : Not reused employee because i haven't created node project all files are in js as per assignment

class Employee {
  constructor(name, age, salary, role, department, reportingManager) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.role = role;
    this.department = department;
    this.reportingManager = reportingManager;
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    name,
    age,
    salary,
    role,
    department,
    reportingManager,
    typeOfEmployment
  ) {
    super(name, age, salary, role, department, reportingManager);
    this.typeOfEmployment = typeOfEmployment;
    this.feedBacks = [];
  }

  getPromotion(newRole) {
    this.role = newRole;
  }

  getHikeByPercentage(percentage) {
    this.salary += (this.salary * percentage) / 100;
  }

  addFeedBack(message) {
    this.feedBacks.push(message);
  }

  getAllFeedBacks() {
    return this.feedBacks;
  }
}

class PerformanceTracker {
  constructor() {
    this.employeFeedBackList = [];
    this.employeAppraisalList = [];
  }

  addFeedBackForEmploye(message, employe) {
    this.employeFeedBackList.push({ name: employe.name, message });
  }

  giveAppraisal(percentage, employe) {
    this.employeAppraisalList.push({ name: employe.name, percentage });
  }
}

class PerformanceManager {
  constructor(performanceTracker) {
    this.performanceTracker = performanceTracker;
  }

  addFeedBack(message, employe) {
    this.performanceTracker.addFeedBackForEmploye(message, employe);
    employe.addFeedBack(message);
  }

  giveAppraisal(percentage, employe) {
    this.performanceTracker.giveAppraisal(percentage, employe);
    employe.getHikeByPercentage(percentage);
  }
}
const performanceTracker = new PerformanceTracker();
const performanceManager = new PerformanceManager(performanceTracker);
const jayraj = new FullTimeEmployee(
  "jayraj",
  "30",
  100000,
  "Software Engineer",
  "IT",
  "Suresh",
  "permeant"
);

performanceManager.addFeedBack("Very Good Employe", jayraj);
performanceManager.giveAppraisal(50, jayraj);

console.log(jayraj.getAllFeedBacks());
console.log(jayraj.salary);
