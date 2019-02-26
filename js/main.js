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

const consoleTest = () => {
    console.log("Hello you")
}

const showAllItems = () => {

    database.ref("compras/")
        .once("value", snapshotPromise => {
            let itemsList = Object.values(snapshotPromise.val())
            itemsList.forEach((currentValue)=>{
                let itemRow = `<tr>
                    <th scope="row">1</th>
                    <td>${currentValue.product}</td>
                    <td>${currentValue.store}</td>
                    <td>${currentValue.price}</td>
                    <td>${currentValue.payMethod}</td>
                    <td>${currentValue.buyer}</td>
                    <td>${currentValue.date}</td>
                    <td><img src="img/pencil-small.png" alt=""></img></td>
                </tr>`
                $("#body-wrapper").append(itemRow)
            })
        })
        
}



document.getElementById("add-button").addEventListener("click", consoleTest)

const savePurchase = (purchase) => {
    database.ref("compras/").push(purchase)
}

const getForm = () => {
    let form = document.getElementsByClassName("form-control")
    let product = form.product.value
    let store = form.store.value
    let price = form.price.value
    let payMethod = form.payMethod.value
    let buyer = form.buyer.value
    let date = form.date.value
    return ({
        product,
        store,
        price,
        payMethod,
        buyer,
        date
    })
}


const getItems = () => {
    let {
        product,
        store,
        price,
        payMethod,
        buyer,
        date
    } = getForm()
    console.log(product, store, price, payMethod, buyer, date)
    savePurchase({
        product,
        store,
        price,
        payMethod,
        buyer,
        date
    })
}
