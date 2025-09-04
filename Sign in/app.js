

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCvD6cZaaVT_FZ09ycEjss3cjpG_ZFi8g8",
    authDomain: "pasha-21423.firebaseapp.com",
    projectId: "pasha-21423",
    storageBucket: "pasha-21423.firebasestorage.app",
    messagingSenderId: "803186350119",
    appId: "1:803186350119:web:1338bdfd70444dd51c5602",
    measurementId: "G-YM21C0SM8F"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let getlbtn = document.getElementById("lbtn");
  getlbtn.addEventListener("click", ()=>{
      let email = document.getElementById("lemail").value;
      let password = document.getElementById("lpassword").value;
   
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        alert("Login Successfull")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Login Failed")
      });

})


















