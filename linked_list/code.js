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