const LinkedList = require('./linkedList')

const ll = new LinkedList.fromValues(10, 20, 30, 40)
ll.print()
ll.removeAtIndex(2)
ll.print()
