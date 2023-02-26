let formButton = document.querySelectorAll(".my-btn");
let formAction = document.getElementById("form");
let exitButton = document.getElementById("exit");


for (let i = 0; i < formButton.length; i++) {
  formButton[i].addEventListener("click", function () {
    formAction.classList.remove("d-none");
  });
}

exitButton.addEventListener("click", function () {
  formAction.classList.add("d-none");
});


// ____________________________________________________________________________

$("#frm").validate({
  rules: {
    fName: { 
      required: true,
      minlength: 2,
  },
    lName:{
      required: true,
      minlength: 2,
    },
    phone: {
      required: true,
      minlength: 11,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    fName: {
      required: "Please inter your first name",
      minlength: "Can't be one letter",
    },
    lName: {
      required: "Please inter your last name",
      minlength: "Can't be one letter",
    },
    phone: {
      required: "Please inter your Phone Number",
      minlength: "Please make sure its 11 number",
    },
    email: {
      required: "Please write your Email",
      email: "Please provide a vaild Email",
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});
