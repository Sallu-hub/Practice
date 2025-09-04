  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    deleteField 
    } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

  import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
     } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
  const db = getFirestore(app);


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('user is signed in:', uid);
  
      if (location.pathname === "/index.html" || location.pathname === "/login.html") {
        
         setTimeout(()=>{
            location.href = "./admin.html";
         },2000);
        
      }
    } else {
    }
  });
  

  function handleSignup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    Swal.fire({
        title: "User Signed Up Successfully!",
        text: `${user.email}`,
        icon: "success"
      });

})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials !",
      });

});
}
  window.handleSignup = handleSignup;



function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        Swal.fire({
            title: "User Signed Up Successfully!",
            text: `${user.email}`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000
         })
  
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Credentials!",
        });
      });
  }
  window.handleLogin = handleLogin;
  



  function Logout() {
    const auth = getAuth();
    
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success"
        }).then(() => {
          location.href = "./login.html"; 
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
        console.error("Logout Error:", error);
      });
  }
  
  window.Logout = Logout;




  async function addProduct() {

    getProductListDiv.innerHTML = "";


    const product_id = document.getElementById("productid").value;
    const product_name = document.getElementById("productName").value;
    const product_price = document.getElementById("productPrice").value;
    const product_des = document.getElementById("productDesc").value;
    const product_url = document.getElementById("productImg").value;
  
    try {
      const docRef = await addDoc(collection(db, "items"), {
        product_id,
        product_name,
        product_price,
        product_des,
        product_url
      });
  
      Swal.fire({
        title: "Product Added Successfully!",
        text: `Your Product ID is ${docRef.id}`,
        icon: "success"
      });

      document.getElementById("productid").value = "";
document.getElementById("productName").value = "";
document.getElementById("productPrice").value = "";
document.getElementById("productDesc").value = "";
document.getElementById("productImg").value = "";

const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
modal.hide();

getProductList();
  
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Product Not Added",
        text: error.message,
      });
    }
  }
  window.addProduct = addProduct;
  


  let getProductListDiv = document.getElementById("product-list");

  async function getProductList() {
    getProductListDiv.innerHTML = ""; //  Clear old products

      const querySnapshot = await getDocs(collection(db, "items"));
      querySnapshot.forEach((doc) => {
        const data = doc.data(); //  this was missing

          getProductListDiv.innerHTML += `
          <div class="col-md-4">
        <div class="product-card p-3 shadow-sm">
          <img src="${doc.data().product_url}" alt="Product Image" class="img-fluid fixed-img mb-3">
          <h5 class="fw-bold">${doc.data().product_name}</h5>
          <p class="text-muted">${doc.data().product_des}</p>
          <h6 class="text-primary">Rs. ${doc.data().product_price}</h6>
            <button onclick='openEditModal("${doc.id}", "${doc.data().product_name}", "${doc.data().product_price}", "${doc.data().product_des}", "${doc.data().product_url}")' class='btn btn-info w-100 mt-2'> Edit </button>
          <button onclick='delItem("${doc.id}")' class="btn btn-danger w-100 mt-2">Delete</button>
        </div>
      </div>
          `;
      });
  }
  if (getProductListDiv) {
    getProductList();
  }
  
  async function delItem(params) {
    getProductListDiv.innerHTML = "";
    const cityRef = doc(db, "items", params);
    await deleteDoc(cityRef, {
      capital: deleteField(),
    });
    getProductList();
  }
  window.delItem = delItem;




window.openEditModal = function (id, name, price, desc, url) {
    document.getElementById("editProductId").value = id;
    document.getElementById("editProductName").value = name;
    document.getElementById("editProductPrice").value = price;
    document.getElementById("editProductDesc").value = desc;
    document.getElementById("editProductImage").value = url;
  
    let editModal = new bootstrap.Modal(
      document.getElementById("editProductModal")
    );
    editModal.show();
  };
  
  window.saveProductChanges = async function () {
    const id = document.getElementById("editProductId").value;
    const name = document.getElementById("editProductName").value;
    const price = document.getElementById("editProductPrice").value;
    const desc = document.getElementById("editProductDesc").value;
    const url = document.getElementById("editProductImage").value;
  
    const productRef = doc(db, "items", id);
  
    try {
      await updateDoc(productRef, {
        product_id: id,
        product_name: name,
        product_price: price,
        product_des: desc,
        product_url: url,
      });
      Swal.fire({
        title: "Updated!",
        text: "Product updated successfully.",
        icon: "success",
      });
      getProductListDiv.innerHTML = "";
      getProductList();
      bootstrap.Modal.getInstance(
        document.getElementById("editProductModal")
      ).hide();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    }
  };