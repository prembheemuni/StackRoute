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

class SalariedEmploye extends Employee {
  constructor(name, age, salary, role, department, reportingManager, tax) {
    super(name, age, salary, role, department, reportingManager);
    this.tax = tax;
    this.payslips = [];
    this.benifits = [];
  }

  performDeduction(amount) {
    this.salary -= amount;
  }

  incrementSalary(amount) {
    this.salary += amount;
  }

  addPayslips(monthlySalary) {
    this.payslips.push(monthlySalary);
  }

  addBenifits(benifit) {
    this.benifits.push(benifit);
  }

  getBenifits() {
    return this.benifits;
  }
}

class Benifit {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  getBenifitDetails() {
    return this.name + " " + this.value;
  }
}

class Insurance extends Benifit {
  constructor(name, value, validity) {
    super(name, value);
    this.validity = validity;
  }
}

class Bonus extends Benifit {
  constructor(name, value) {
    super(name, value);
  }
}

class Incentive extends Benifit {
  constructor(name, value, type) {
    super(name, value);
    this.type = type;
  }
}

class PayslipCompensation {
  generatePayslip(employe, monthlySalary) {
    employe.addPayslips(monthlySalary);
  }

  applyBonus(employe, benifit) {
    employe.addBenifits(benifit);
  }
}

const prem = new SalariedEmploye(
  "Prem",
  "24",
  12000,
  "Software Engineer",
  "IT",
  "Main",
  2000
);
const incentive = new Incentive("Incentive2025", 30000, "yearly");
const insurance = new Insurance("Insurance2025", 2000, "1 Year");

const compensation = new PayslipCompensation();

compensation.generatePayslip(prem, prem.salary);
compensation.applyBonus(prem, incentive);
compensation.applyBonus(prem, insurance);

console.log(prem.getBenifits());
