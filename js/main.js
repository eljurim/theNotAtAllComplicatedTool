// ECMA6 function
const saluteConsole = ()=>{
    console.log("Hola a todos son YO el JavaScript");
    
}
var database = firebase.database();

const newItem = ()=>{
    let data = document.getElementsByClassName("form-control")
    let product = data.product.value
    let price = data.price.value
    let store = data.store.value
    let payMethod = data.payMethod.value
    let buyer = data.buyer.value
    let buyDate = data.buyDate.value
    console.log(product,price,store,payMethod,buyer,buyDate)
}

document.getElementById("add-new-item").addEventListener("click", saluteConsole);


function writeUserData(userId, name, email, imageUrl) {
    database.ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  writeUserData(123123,"Rosa","manueleljurigmail.com","https://chiga.com")
