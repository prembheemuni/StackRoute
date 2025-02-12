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
  }

  getPromotion(newRole) {
    this.role = newRole;
  }

  getHikeByPercentage(percentage) {
    this.salary += (this.salary * percentage) / 100;
  }
}

class AllocateResources {
  constructor() {
    this.laptopsAllotted = [];
    this.IdCardsAlloted = [];
    this.emailAccounts = [];
    this.swipeAccess = [];
  }

  allocateLaptop(employe) {
    this.laptopsAllotted.push(employe);
    console.log("Provided Laptop for", employe.name);
  }

  provideIdCard(employe) {
    this.IdCardsAlloted.push(employe);
  }

  createEmailAccount(employe) {
    this.emailAccounts.push(employe);
  }

  provideSwipeAccess(employe) {
    this.swipeAccess.push(employe);
  }
}

class Session {
  constructor(sessionName, sessionDuration, instructor) {
    this.sessionName = sessionName;
    this.sessionDuration = sessionDuration;
    this.instructor = instructor;
    this.attendedPeope = [];
  }

  addNewAttendee(employe) {
    this.attendedPeope.push(employe);
    console.log("Employee is added to the session", employe.name);
  }
}

class EmployeeOnBoarding {
  constructor(resourceManager, orientationSession, trainingSession) {
    this.resourceManager = resourceManager;
    this.orientationSession = orientationSession;
    this.trainingSession = trainingSession;
  }

  provideLaptop(employe) {
    this.resourceManager.allocateLaptop(employe);
  }

  provideIdCard(employe) {
    this.resourceManager.provideIdCard(employe);
  }

  provideEmail(employe) {
    this.resourceManager.createEmailAccount(employe);
  }

  provideSwipeAccess(employe) {
    this.resourceManager.provideSwipeAccess(employe);
  }

  schduleOrientationSession(employe) {
    this.orientationSession.addNewAttendee(employe);
  }

  schduleTrainingSession(employe) {
    this.trainingSession.addNewAttendee(employe);
  }
}

const resourceManager = new AllocateResources();
const orientationSession = new Session("Orientation", "60min", "Prem Kumar");
const trainingSession = new Session("Traiing", "120min", "Prem Kumar");

const jayraj = new FullTimeEmployee(
  "jayraj",
  "30",
  "100000",
  "Software Engineer",
  "IT",
  "Suresh",
  "permeant"
);

const onBoardProcess = new EmployeeOnBoarding(
  resourceManager,
  orientationSession,
  trainingSession
);

onBoardProcess.provideLaptop(jayraj);
onBoardProcess.provideEmail(jayraj);
onBoardProcess.provideIdCard(jayraj);
onBoardProcess.provideSwipeAccess(jayraj);
onBoardProcess.schduleOrientationSession(jayraj);
onBoardProcess.schduleTrainingSession(jayraj);
