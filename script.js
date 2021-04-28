function validateform() {
    var fname =
					document.forms["RegForm"]["fname"];
          var lname =
					document.forms["RegForm"]["lname"];
				var email =
					document.forms["RegForm"]["email"];
				var phone =
					document.forms["RegForm"]["phnnum"];
				var birthday =
					document.forms["RegForm"]["bday"];
				var time =
					document.forms["RegForm"]["appt"];
			
				if (fname.value == "") {
					window.alert("Please enter your first name.");
					fname.focus();
					return false;
				}

				if (lname.value == "") {
					window.alert("Please enter your last name");
					lname.focus();
					return false;
				}

				if (email.value == "") {
					window.alert(
					"Please enter a valid e-mail address.");
					email.focus();
					return false;
				}

				if (phone.value == "") {
					window.alert(
					"Please enter your telephone number.");
          phone.focus();
            return false;

        }
          if(phone.value.length<10 || phone.value.length>10)
            {
              window.alert("Enter your 10 digit number");
            
            phone.focus();
            return false;
            }
								
        if (birthday.value == "") {
					window.alert("Please enter your Date of birth.");
					birthday.focus();
					return false;
				}
        if (time.value == "") {
					window.alert("Please enter your time of registration");
					time.focus();
					return false;
				}
      }