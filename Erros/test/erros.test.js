const {addUser, getUser, delteUser} = require('../src/user')
const {addOrder, getOrder, delteOrder} = require('../src/orders')
const { describe } = require('yargs')

describe('Teste de integração entre usuarios e pedidos', () => {
    test('Testando a funcao adicionar usuario e pedido', () => {
        const user = {id:1, name:"João"}
        const order = {id: 100, userId: 1, item: 'mouse'}

        addUser(user)
        addOrder(order)

        const findUser = getUser(1)
        const findOrder = getOrder(100)

        expect(findUser).toEqual(user)
        expect(findOrder).toEqual(order)
        expect(findUser.userId).toBe(findUser.id)
    })
})