// id            Код товара
// name          Наименование
// description   Описание
// sizes         массив возможных размеров
// price         цена товара
// available     Признак доступности для продажи

const products = [{id: 1, 'name': 'Pants', description: '100% Polyester', sizes: ['s', 'm', 'l'], price: 98, available: 'available'},
                    {id: 2, 'name': 'Hat', description: '100% Cotton', sizes: ['m'], 'price': 22, available: 'available'},
                    {id: 3, 'name': 'Jacket', description: '63% Cotton, 37% Polyester', sizes: ['l'], price: 70, 'available': 'available'},
                    {id: 4, 'name': 'Sweatshirt', description: '100% Cotton', sizes: ['m', 'l', 'xl'], price: 12, 'available': 'available'},
                    {id: 5, 'name': 'Shirt', description: '100% Cotton', sizes: ['xs', 's', 'm'], price: 12, 'available': 'not available'}
            ] 

let cart = [{good: 2, amount: 3}, {good: 3, amount: 1}]

const appendProduct = function (id, amount) {
    for ( i = 0; i < products.length; i++) {
        if ( id == products[i]['id'] ) {
            cart.push({good: id, amount: amount})
        }

    }
}
const deleteProduct = function (id) {
    for ( i = 0; i < cart.length; i++) {
        if ( id == cart[i]['good'] ) {
            delete cart[i]
        }
    }
}

const clearingOfCart = function() {
    cart.splice(0, cart.length);
}

const totalCount = function () {
    let totalAmount = 0
    for ( i = 0; i < cart.length; i++) {
        totalAmount += cart[i]['amount']
    }
    let totalSumm = 0
    for ( i = 0; i < cart.length; i++) {
        for ( p = 0; p < products.length; p++) {
            if ( cart[i]['good'] == products[p]['id'] ) {
                calculation = products[p]['price'] * cart[i]['amount']
                totalSumm += calculation
            }
        }
    }
    return { totalSumm: totalSumm, totalAmount: totalAmount }
}


// appendProduct(3, 1)
// deleteProduct(2)
// clearingOfCart()

// console.log(cart)
// console.log(totalAmount())
console.log(totalCount())