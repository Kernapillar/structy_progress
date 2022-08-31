// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
    // todo
    const retArr = [];
    while (head) {
      retArr.push(head.val);
      head = head.next
    }
    return retArr;
};

const sumList = (head) => {
    // todo
    let count = 0;
    while (head) {
        count += head.val;
        head = head.next;
    }
    return count
};
  

const linkedListFind = (head, target) => {
    // todo
    while (head) {
      if (head.val === target) {
        return true
      }
      head = head.next;
    }
    return false 
};

const getNodeValue = (head, index) => {
    // todo
    let i = 0;
    while (head) {
      if (i === index) {
        return head.val;
      } 
      head = head.next
      i += 1;
        
    }
    return null
    
};

const reverseList = (head) => {
  // todo
  if (!head.next) {
    return head;
  }
  let current = head;
  let prev = null;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    
    
  }
  return prev;
};

const zipperLists = (head1, head2) => {
    // todo
    const retHead = head1;
    let retCurrent = head1;
    let current1 = head1;
    let current2 = head2;
    current1 = current1.next
    while (current1 || current2) {
      if (current2) {
        retCurrent.next = current2;
        retCurrent = retCurrent.next;
        current2 = current2.next;
      }
      if (current1) {
        retCurrent.next = current1;
        retCurrent = retCurrent.next;
        current1 = current1.next;
      }
      console.log(retCurrent)
    }
    return retHead;
};

const mergeLists = (head1, head2) => {
  // todo
  const preNode = new Node;
  let current = preNode;
  while (head1 || head2) {
    if (head2 && head1){
        if (head1.val < head2.val) {
        current.next = head1;
        current = current.next;
        head1 = head1.next;
      } else {
        current.next = head2;
        current = current.next
        head2 = head2.next
      } 
    } else {
        if (!head2) {
          current.next = head1;
          current = current.next;
          head1 = head1.next;
        } else {
          current.next = head2;
          current = current.next;
          head2 = head2.next;
        }
      }
    }
    
  
  return preNode.next
};

const isUnivalueList = (head) => {
  // todo
  const listVal = head.val;
  while (head) {
    if (head.val !== listVal){
      return false
    }
    head = head.next;
  }
  return true
};

const longestStreak = (head) => {
  // todo
  let curVal;
  if (head){
    curVal = head.val;
  }
  
  let curStreak = 0;
  let count = 0
  while (head){
    if (head.val !== curVal) {
      if (count > curStreak) {
        curStreak = count;
        count = 1;
        
      } 
      curVal = head.val;
    } else {
      count += 1;
    }
    head = head.next
    console.log(curVal)
    console.log(head)
  }
   return ((count > curStreak) ? count : curStreak)
};

const removeNode = (head, targetVal) => {
  // todo
  if (head.val === targetVal) {
    return head.next;
  }
  
  let current = head;
  while (current.next) {
    if (current.next.val === targetVal) {
      current.next = current.next.next;
      return head
    }
    current = current.next
  }
  current.next = null; 
  return head
};

const insertNode = (head, value, index) => {
  // todo
  
  if (index === 0) {
    newNode = new Node(value);
    newNode.next = head;
    return newNode
  }
  
  let count = 0
  let current = head;
  while (current){
    if (count === index - 1) {
      newNode = new Node(value)
      let temp = current.next
      current.next = newNode
      newNode.next = temp
    }
    count += 1;
    current = current.next;
  }
  return head
};

const createLinkedList = (values) => {
  // todo
  if (values.length === 0) {
    return null
  }
  const head = new Node(values[0]);
  let current = head;
  for (let i = 1; i< values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = current.next
  }
  return head
};

const addLists = (head1, head2) => {
  // todo
  const preHead = new Node();
  let current = preHead;
  let carry = 0;
  while (head1 || head2) {
    if (head1 === null){
      head1 = new Node(0);
    }
    if (head2 === null){
      head2 = new Node(0);
    }
    if (carry !== 0) {
      head1.val += 1
      carry = 0;
    }
    let nextNum = head1.val + head2.val;
    if (nextNum >= 10 ){
      carry = 1;
      nextNum = nextNum - 10
    }
    current.next = new Node(nextNum);
    current = current.next;
    head1 = head1.next;
    head2 = head2.next;
    if (!head1 && !head2 && carry) {
      current.next = new Node(1)
    }
  }
  
  return preHead.next;
};