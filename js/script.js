"use strict";

class Fylo {
  form = document.querySelector(".email-form");
  submitBtn = document.querySelector(".submit-btn");

  constructor() {
    this.form.setAttribute("novalidate", "novalidate");
    this.form.addEventListener("submit", this.checkSubmit.bind(this));
  }

  checkSubmit(e) {
    e.preventDefault();

    const input = this.form.querySelector("input");
    if (input.value === "" || !this.validateEmail(input.value)) {
      this.showError("Please enter a valid email address");
    } else {
      this.showSuccess("Thank you!");
      input.setAttribute("disabled", "disabled");
      this.submitBtn.setAttribute("disabled", "disabled");
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  showError(message) {
    const formMessage = this.form.querySelector(".form-message");
    formMessage.textContent = message;
    this.form.classList.add("invalid-form");
  }

  showSuccess(message) {
    const delay = this.form.classList.contains("invalid-form") ? 200 : 0;
    this.form.classList.remove("invalid-form");
    setTimeout(
      function () {
        const formMessage = this.form.querySelector(".form-message");
        formMessage.textContent = message;
        this.form.classList.add("success-form");
      }.bind(this),
      delay
    );
  }
}

const app = new Fylo();
