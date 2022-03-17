const LinkedList = require('./linkedList')

describe('#insertAtHead', () => {
    test('Adds element to beginning of the list.', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('Index less than 0.', () => {
        test('Returns null.', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('Index greater than list length.', () => {
        test('Returns null.', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    describe('With index 0.', () => {
        test('Returns the head.', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    describe('With index  in the middle.', () => {
        test('Returns the element at that index.', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)

            expect(ll.getByIndex(2).value).toBe(30)
        })
    })
})
