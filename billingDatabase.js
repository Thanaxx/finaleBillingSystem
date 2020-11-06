// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBwHvpho6FecJrVnTKGrPX_I6AdTCx6-Po",
  authDomain: "billingsystemxxx.firebaseapp.com",
  databaseURL: "https://billingsystemxxx.firebaseio.com",
  projectId: "billingsystemxxx",
  storageBucket: "billingsystemxxx.appspot.com",
  messagingSenderId: "219743734834",
  appId: "1:219743734834:web:91f785be39d5f93bfd002b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  /*-------------------------------------------------------*/
  //reference contact information collections or ngalan sa sulod sang db/fb
  let billingSystem = firebase.database().ref("bill");

  //listen for a submit
  var billingForm = document.querySelector(".billing");

  billingForm.addEventListener("submit", nextForm);

  function nextForm(e){
    e.preventDefault();

      //Get values
      let acctNumber = document.querySelector("#num").value;
      let acctName = document.querySelector("#nim").value;
      let dueDate = document.querySelector("#dayte").value;
      let amount = document.querySelector("#amt").value;
      let emAddress = document.querySelector("#acctEm").value;

      console.log(acctNumber, acctName, dueDate, amount, emAddress);

      sendBillingEmail(acctNumber, acctName, dueDate, amount, emAddress); //function to send Email
    saveBillingInfo(acctNumber, acctName, dueDate, amount, emAddress); //Function to save conatact info to firebase
  }



  //Save Billing info to the firebase
  function saveBillingInfo(acctNumber, acctName, dueDate, amount, emAddress){
      let newBillingInfo = billingSystem.push();

      newBillingInfo.set({
          AccountNumber: acctNumber,
          AccountName: acctName,
          DueDate: dueDate,
          Amount: amount,
          EmailAddress: emAddress,
      })
  }

  //send billing email function
  function sendBillingEmail(acctNumber, acctName, dueDate, amount, emAddress){
        Email.send({
            Host : "smtp.gmail.com",
            Username : 'ystel670@gmail.com',
            Password : 'bwlzuslqwoyfwewf',
            To : "ystel670@gmail.com",
            From : `${emAddress}`,
            Subject : `${acctName} sent you a message!`,
            Body : `${acctName} with an Account Number ${acctNumber} sent a payment of ${amount} </br> billing due date: ${dueDate}`,
        }).then(
        (message) => alert("Your payment was sucessfully sent to Ileco Office!")
        );
    }
