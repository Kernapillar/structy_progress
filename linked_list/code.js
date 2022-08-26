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