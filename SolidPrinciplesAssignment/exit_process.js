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

class Resignation {
  constructor() {
    this.exitEmployees = [];
  }

  addEmployeeToResignation(employe) {
    this.exitEmployees.push(employe);
  }
}

class TerminationWorkFlow {
  constructor() {
    this.terminationWorkFlows = [];
  }

  addNewTerminationWorkFlow(employe) {
    this.terminationWorkFlows.push(employe);
  }
}

class Interview {
  constructor() {
    this.interviews = [];
  }

  addNewInterview(employe) {
    this.interviews.push(employe);
  }
}

class FeedBack {
  constructor() {
    this.feedBacks = [];
  }

  addNewFeedBack(employe, message) {
    this.feedBacks.push({ employeDetails: employe, message: message });
  }
}

class RelievingLetters {
  constructor(joinDate, endDate) {
    this.joinDate = joinDate;
    this.endDate = endDate;
  }
}

class ExperienceLetter extends RelievingLetters {
  constructor(joinDate, endDate, accomplishments) {
    super(joinDate, endDate);
    this.accomplishments = accomplishments;
  }
}

class ClearanceLetter extends RelievingLetters {
  constructor(joinDate, endDate, records) {
    super(joinDate, endDate);
    this.records = records;
  }
}

class ResourceManager {
    constructor(){
        this.resources = []
    }

    removeResources(employe){
        this.resources = []
    }

}

class OffBoarding {
  constructor(
    resignation,
    terminationWorkflow,
    exitInterview,
    exitFeedBack,
    experienceLetter,
    clearanceLetter,
    resourceManager
  ) {
    this.resignation = resignation;
    this.terminationWorkFlow = terminationWorkflow;
    this.exitInterview = exitInterview;
    this.exitFeedBack = exitFeedBack;
    this.experienceLetter = experienceLetter;
    this.clearanceLetter = clearanceLetter;
    this.resourceManager = resourceManager;
  }

  addNewResignation(employe) {
    this.resignation.addEmployeeToResignation(employe);
  }

  addNewTerminationWorkflow(employe) {
    this.terminationWorkFlow.addNewTerminationWorkFlow(employe);
  }

  schduleExitInterview(employe) {
    this.exitInterview.addNewInterview(employe);
  }

  takeExitFeedback(employe, feedback) {
    this.exitFeedBack.addNewFeedBack(employe, feedback);
  }

  provideExperienceLetter(employe) {
    return this.experienceLetter;
  }

  provideClearanceLetter(employe) {
    return this.clearanceLetter;
  }

  removeAccessAndResources(employe){
    this.resourceManager.removeResources(employe);
  }
}

const prem = new Employee(
  "Prem",
  "24",
  12000,
  "Software Engineer",
  "IT",
  "Main"
);

const resignation = new Resignation();

const terminationWorkFlow = new TerminationWorkFlow();

const exitInterview = new Interview();

const exitFeedBack = new FeedBack();

const experienceLetter = new ExperienceLetter('2021','2024','Yes');

const clearanceLetter = new ClearanceLetter('2021','2024','noRecord');

const resourceManager = new ResourceManager();

const offBoarding = new OffBoarding(resignation,terminationWorkFlow, exitInterview, exitFeedBack,experienceLetter,clearanceLetter,resourceManager)

offBoarding.addNewResignation(prem)

offBoarding.addNewTerminationWorkflow(prem)

offBoarding.schduleExitInterview(prem)

offBoarding.takeExitFeedback(prem)

offBoarding.provideExperienceLetter(prem)

offBoarding.provideClearanceLetter(prem)

offBoarding.removeAccessAndResources(prem)