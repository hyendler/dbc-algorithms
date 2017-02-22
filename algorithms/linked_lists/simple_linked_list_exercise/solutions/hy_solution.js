//note: I am using ES5 JS class syntactical sugar
/* question: is there any difference, when using ES5 classes, between using constructor function this vs just using this in a function? ie:
  class Animal {
    constructor(name) {
      this.name = name
    }
  }
  
  vs
  
  function Animal (name) {
    this.name = name
  }
*/


class Link {
  constructor(value, link) {
    this._value = value;
    this._nextLink = link;
  }
  
  get nextLink() {
    return this._nextLink;
  }
  
  set nextLink(link) {
    this._nextLink = link
  }
} 

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  insertAtTail(value) {
    var link = new Link(value);
    if (this.size === 0) {
      this.head = link;
      this.tail = link;
    } else {
      var prevTail = this.tail;
      prevTail.nextLink = link;
      this.tail = link;
    }
    this.size += 1;
  }
  
  popTail() {
    var link = this.head
    
    while (link.nextLink != this.tail) {
      link = link.nextLink;
    }
    
    var returnLink = this.tail
    this.tail = link;
    link.nextLink = null;
    this.size -= 1
    return returnLink;
  }
}

var list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);

console.log(list)
console.log("-----")
list.popTail();
console.log(list)