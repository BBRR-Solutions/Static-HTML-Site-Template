class CompanyInput {
  constructor(ClassName, Value) {
    this.ClassName = ClassName;
    this.Value = Value;
  }

  ClassWrite() {
    var x = document.getElementsByClassName(this.ClassName);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = this.Value;
    }
  }
}

var CYear = new Date().getFullYear();

let CompanyName = new CompanyInput("CompanyNameInput", "BBRR Solutions");
let CompanyContactEmail = new CompanyInput(
  "CompanyContactEmail",
  "information@bbrr.solutions"
);
let CopyrightYear = new CompanyInput("CopyrightYear", CYear);
let CompanyYear = new CompanyInput("CompanyYear", "2020");
let FirstCompanyNo = new CompanyInput("FirstCompanyNo", "+52 (686) 568-6480");
let SecondCompanyNo = new CompanyInput("SecondCompanyNo", "+52 (686) 337-1694");

function CompanyInformation() {
  CompanyName.ClassWrite();
  CompanyContactEmail.ClassWrite();
  CopyrightYear.ClassWrite();
  CompanyYear.ClassWrite();
  FirstContactNo.ClassWrite();
  SecondContactNo.ClassWrite();
}
