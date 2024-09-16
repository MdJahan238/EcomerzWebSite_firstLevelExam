document.getElementById('logout').addEventListener('click',function(){
    //user signout 
    const userSignoutInput = document.getElementById("logout");
    alert("Do You want to sign out?")
    const userSignOut = window.location.href = "../login.html";

    // if (userEmail == 'admin@gmail.com' && userPassword=='123456'){
    //     alert("Login Successful");
    //     window.location.href = "../banking.html";
    //    }
})