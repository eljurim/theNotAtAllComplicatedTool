const database = firebase.database()
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