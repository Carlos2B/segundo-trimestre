const orders = []

function addOrder(order){
    orders.push(order)
    return order
}

function getOrder(id){
    return orders.find(order => order.id === id)
}

function deleteOrder(id){
    const index = orders.findIndex(order => order.id === id)
    if(index !==  -1){
        return orders.splice(index, 1)[0]
    }
    return null
}

module.exports = {addOrder, getOrder, deleteOrder}