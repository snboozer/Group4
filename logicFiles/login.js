//user authentication and homepage redirect
function login() {
    
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(user => {

        //window.location = "index.html";
      
  })
  
   .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error : " + errorMessage);
      window.location = "index.html";
    });

       //Handle Account Status
  


  };

  