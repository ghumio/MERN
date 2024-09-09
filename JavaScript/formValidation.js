let name_input = document.getElementById("name");
let name_msg = document.getElementById("name_msg");

function display_msg(element, message, color) {
  element.innerHTML = message;
  element.style.color = color;
}

function name_validate() {
  let name = name_input.value;
  if (!name.match(/^[a-zA-Z]+$/)) {
    display_msg(name_msg, "Name must be only alphabets", "red");
    return false;
  } else if (!name.match(/^.{3,}$/)) {
    display_msg(name_msg, "Name must be at least 3 characters", "red");
    return false;
  } else {
    display_msg(name_msg, "Valid Name", "green");
    return true;
  }
}
name_input.addEventListener("keyup", name_validate);

let age_input = document.getElementById("age");
let age_msg = document.getElementById("age_msg");

function age_validate() {
  let age = age_input.value;
  if (!age.match(/^[0-9]+$/)) {
    display_msg(age_msg, "Age msut be only numbers", "red");
    return false;
  } else if (age < 18) {
    display_msg(age_msg, "You must be at least 18 years old", "red");
    return false;
  } else {
    display_msg(age_msg, "Valid Age", "green");
    return true;
  }
}
age_input.addEventListener("keyup", age_validate);

let phone_input = document.getElementById("phone");
let phone_msg = document.getElementById("phone_msg");

function phone_validate() {
  let phone = phone_input.value;
  if (!phone.match(/^[0-9]+$/)) {
    display_msg(phone_msg, "Phone must be only numbers", "red");
    return false;
  } else if (!phone.match(/^(9)(8)[0-6]/)) {
    display_msg(
      phone_msg,
      "phone number must begin with 980, 981,982,983,984 and 985 ",
      "red"
    );
    return false;
  } else if (!phone.match(/^.{10}$/)) {
    display_msg(phone_msg, "Phone number must be 10 digit", "red");
    return false;
  } else {
    display_msg(phone_msg, "Valid Phone", "green");
    return true;
  }
}
phone_input.addEventListener("keyup", phone_validate);

let email_input = document.getElementById("email");
let email_msg = document.getElementById("email_msg");

function email_validate() {
  let email = email_input.value;
  //   if (!email.match(/^[a-zA-Z]/)) {
  //     display_msg(email_msg, "Email must start with alphabets", "red");
  //     return false;
  //   } else if (!email.match(/^.[a-zA_Z_.]+/)) {
  //     display_msg(
  //       email_msg,
  //       "",
  //       "red"
  //     );
  //     return false;
  if (!email.match(/^[a-zA-Z][a-zA-Z0-9_.]+[@][a-z]+[.](com)$/)) {
    display_msg(email_msg, "email must be in abc@abc.com", "red");
    return false;
  } else {
    display_msg(email_msg, "Valid Email", "green");
    return true;
  }
}
email_input.addEventListener("keyup", email_validate);

let pwd_input = document.getElementById("pwd");
let pwd_msg = document.getElementById("pwd_msg");

function pwd_validate() {
  let pwd = pwd_input.value;
  if (!pwd.match(/[a-z]/)) {
    display_msg(
      pwd_msg,
      "Password must contain at least 1 lowercase alphabet",
      "red"
    );
    return false;
  } else if (!pwd.match(/[A-Z]/)) {
    display_msg(
      pwd_msg,
      "Password must contain at least 1 uppercase alphabet",
      "red"
    );
    return false;
  } else if (!pwd.match(/[0-9]/)) {
    display_msg(pwd_msg, "Password must contain at least 1 number", "red");
    return false;
  } else if (!pwd.match(/[!$%^(){}#@-]/)) {
    display_msg(
      pwd_msg,
      "Password must contain at least 1 special character",
      "red"
    );
    return false;
  } else if (!pwd.match(/^.{8,30}$/)) {
    display_msg(pwd_msg, "PAssword must be 8 and 30 between", "red");
    return false;
  } else {
    display_msg(pwd_msg, "Valid password", "green");
    return true;
  }
}
pwd_input.addEventListener("keyup", pwd_validate);

function form_validate() {
  if (
    name_validate &&
    age_validate &&
    phone_validate &&
    email_validate &&
    pwd_validate
  ) {
    return true;
  } else {
    return false;
  }
}
