class LinkedLists {
  head = new Nodes("H");

  append(value, index) {
    let tmp = this.head;
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    tmp.next = new Nodes(value, index);
  }

  prepend(value) {
    let tmp = this.head;
    this.head = new Nodes(value);
    this.head.next = tmp;
  }
  head() {
    return this.head;
  }
  tail() {
    let tmp = this.head;
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    return tmp;
  }

  pop() {
    if (this.head != null) {
      let tmp = this.head;
      while (tmp.next.next != null) {
        tmp = tmp.next;
      }
      console.log(tmp);
      tmp.next = null;
    }
  }

  contains(value) {
    let tmp = this.head;
    while (tmp.next != null) {
      if (tmp.value === value) {
        return "Present";
      }
      tmp = tmp.next;
    }
    return "Not Present";
  }

  toString() {
    let tmp = this.head;
    let string = "";
    while (tmp != null) {
      string += ` -> (${tmp.value})`;
      tmp = tmp.next;
    }
    return string;
  }

  find(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value === value) {
        return tmp.index;
      }
      tmp = tmp.next;
    }
  }

  at(index) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.index === index) {
        return tmp.value;
      }
      tmp = tmp.next;
    }
  }
  size() {
    let tmp = this.head;
    let total = 0;
    while (tmp != null) {
      total += 1;
      tmp = tmp.next;
    }

    return total;
  }
}

class Nodes {
  constructor(value = null, index = 0, next = null) {
    this.value = value;
    this.index = index;
    this.next = next;
  }
}

const list = new LinkedLists();
list.append("E", 1);
list.append("A", 2);
list.append("P", 3);
console.log(list);
console.log(list.contains("E"));
console.log(list.toString());
console.log(list.find("P"));
console.log(list.at(2));
console.log(list.size());
