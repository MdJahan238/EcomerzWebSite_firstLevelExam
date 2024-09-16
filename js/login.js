// const submitButton=document.getElementById('submit-buttton')
// console.log(submitButton);



// document.getElementById('submit-buttton').addEventListener('click', function(){
//     // console.log('event added');
// //    const userEmail = document.getElementById('user-email');

//    //get user email
//    const userInput = document.getElementById("user-email");
//    const userValue = userInput.value;
//    console.log(userValue);
   
//     //get user password 
//    const passwordInputField = document.getElementById("user-password");
//    const userPassword = passwordInputField.value;
//    console.log(userPassword);
    
// })



document.getElementById('submit-buttton').addEventListener('click', function(){
    // console.log('event added');
//    const userEmail = document.getElementById('user-email');

   //get user email
   const userInput = document.getElementById("user-email");
   const userEmail= userInput.value;
   
    //get user password 
   const passwordInputField = document.getElementById("user-password");
   const userPassword = passwordInputField.value;
    

   if (userEmail == 'admin@gmail.com' && userPassword=='123456'){
    alert("Login Successful");
    window.location.href = "../index.html";
   }

   if (userEmail != 'admin@gmail.com' || userPassword!='123456'){
    alert("Username or Password is not valid");
    
   }

   
    
})

