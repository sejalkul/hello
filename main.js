// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_0ggnwdyk83KvrQJbFb16T3bthageFTk",
    authDomain: "contactform-91aa7.firebaseapp.com",
    databaseURL: "https://contactform-91aa7.firebaseio.com",
    projectId: "contactform-91aa7",
    storageBucket: "contactform-91aa7.appspot.com",
    messagingSenderId: "441761748552"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('phone');
    var email = getInputVal('email');
    var phone = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, phone, email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:phone,
      email:email,
      phone:subject,
      message:message
    });
  } 