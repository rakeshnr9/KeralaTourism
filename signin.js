let name = document.getElementById("name");
let username = document.getElementById("username");
let pass = document.getElementById("pass");

let errorpass = document.getElementById("errorpass");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let email = document.getElementById("email");




   function  validEmailId() {


let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

        if (regexp.test(email.value)) {
error.innerHTML="Valid";
error.style.color="green";

            return true;
        } else {
            error.innerHTML="InValid Email Id";
error.style.color="red";

            return false;
        }


    }

    function passWord()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if ( phoneno.test(phone.value)) {
    error1.innerHTML="Valid";
    error1.style.color="green";

                return true;
            } else {
                error1.innerHTML="InValid Phone Number";
    error1.style.color="red";

                return false;
            }
}
