
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  

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

  const auth = getAuth();
  let getbtn = document.getElementById("btn");
    getbtn.   addEventListener("click", function () {
        let email = document.getElementById("semail").value;
        let password = document.getElementById("spassword").value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user, email);
            })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
          // ..
        });
    })



























                                                        // Login


    
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 
// //   const firebaseConfig = {
// //     apiKey: "AIzaSyCvD6cZaaVT_FZ09ycEjss3cjpG_ZFi8g8",
// //     authDomain: "pasha-21423.firebaseapp.com",
// //     projectId: "pasha-21423",
// //     storageBucket: "pasha-21423.firebasestorage.app",
// //     messagingSenderId: "803186350119",
// //     appId: "1:803186350119:web:1338bdfd70444dd51c5602",
// //     measurementId: "G-YM21C0SM8F"
// //   };

 
// //   const app = initializeApp(firebaseConfig);
// //   const auth = getAuth(app);

// // let getbtn = document.getElementById("lbtn");
// // getbtn.addEventListener("click", function(){
// //     let email = document.getElementById("lemail").value;
// //     let password = document.getElementById("lpass").value;
   
    
// //     createUserWithEmailAndPassword(auth, email, password)
// //   .then((userCredential) => {
// //      const user = userCredential.user;
// //      console.log(user, email);
// //      // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
    
// //     alert(errorCode, errorMessage);
// //     // ..
// //   });

// // })                                                    