class company_input {
  constructor(class_name, value) {
    this.class_name = class_name;
    this.value = value;
  }

  class_write() {
    var x = document.getElementsByClassName(this.class_name);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = this.value;
    }
  }
}

var c_year = new Date().getFullYear();

let company_name = new company_input("company_name_input", "BBRR Solutions");
let company_contact_email = new company_input(
  "company_contact_email",
  "information@bbrr.solutions"
);
let copyright_year = new company_input("copyright_year", c_year);
let company_year = new company_input("company_year", "2020");
let first_contact_no = new company_input(
  "first_company_no",
  "+52 (686) 568-6480"
);
let second_contact_no = new company_input(
  "second_company_no",
  "+52 (686) 337-1694"
);

function company_information() {
  company_name.class_write();
  company_contact_email.class_write();
  copyright_year.class_write();
  company_year.class_write();
  first_contact_no.class_write();
  second_contact_no.class_write();
}
