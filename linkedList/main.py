

class ListNode:

    def __init__(self, value=0, next_node: 'ListNode' = None):
        self.value = value
        self.next_node = next_node


class LinkedList:
    head: ListNode = None

    '''
    append the file
    append:(self,value)
    
    '''

    def append(self, value: int):
        '''
        don't complain vs code
        '''
        new_node = ListNode(value)
        if self.head is None:
            self.head = new_node
            return

        current = self.head

        while current.next_node:
            current = current.next_node
        current.next_node = new_node

    def display(self):
        '''
        don't complain vs code

        '''
        current = self.head

        linked_list = []

        while current.next_node:
            linked_list.append(current.value)
            current = current.next_node

        return linked_list


l = LinkedList()

l.append(10)
l.append(20)
l.append(30)
l.append(40)

print('display', l.display())
