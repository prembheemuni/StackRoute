class Applicant {
  constructor(name, age, qualification, experience, resume) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
    this.experience = experience;
    this.resume = resume;
  }

  updateCandidateName(name) {
    this.name = name;
  }

  getDetails() {
    return {
      name: this.name,
      qualification: this.qualification,
    };
  }
}

class JobOpening {
  constructor(jobtitle, jobDescription, requiredSkils, experienceLevel) {
    this.jobtitle = jobtitle;
    this.jobDescription = jobDescription;
    this.requiredSkils = requiredSkils;
    this.experienceLevel = experienceLevel;
    this.applications = [];
  }

  addApplication(applicant) {
    this.applications.push(applicant);
    console.log("Application added");
  }

  removeApplication() {
    console.log("application removed");
  }

  getAllApplications() {
    return this.applications;
  }
}

class InterviewSchduler {
  constructor() {
    this.interviews = [];
  }

  schduleNewInterview(applicant) {
    this.interviews.push(applicant);
    console.log("Interview Schduled");
  }
}

class TrackInterview {
  constructor() {
    this.interviewResults = [];
  }

  addInterviewResult(applicant) {
    this.interviewResults.push(applicant);
    console.log("Interview Result is Added");
  }

  getAllInterViewDetails() {
    return this.interviewResults;
  }
}

class RecruitmentProcess {
  constructor(jobOpening, interviewSchduler, interviewTracker) {
    this.jobOpening = jobOpening;
    this.interviewSchduler = interviewSchduler;
    this.interviewTracker = interviewTracker;
  }

  addApplicationToJob(applicant) {
    this.jobOpening.addApplication(applicant);
  }

  schduleNewInterview(applicant) {
    this.interviewSchduler.schduleNewInterview(applicant);
  }

  addInterviewResult(applicant) {
    this.interviewTracker.addInterviewResult(applicant);
  }

  releaseOffer(applicant) {
    console.log("Offer released for", applicant.name);
  }
}

const interview = new InterviewSchduler();

const interviewTracker = new TrackInterview();

const softwareEngineerJobApplication = new JobOpening(
  "Software Engineer",
  "Software",
  "React, Node",
  "3"
);

const prem = new Applicant("prem", 24, "B.Tech", 3, "Resume.pdf");

const recruitment = new RecruitmentProcess(
  softwareEngineerJobApplication,
  interview,
  interviewTracker
);

recruitment.addApplicationToJob(prem);

recruitment.schduleNewInterview(prem);

recruitment.addInterviewResult(prem);

recruitment.releaseOffer(prem);
