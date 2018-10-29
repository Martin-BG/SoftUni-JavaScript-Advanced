function sortedList() {
  return {
    list: [],
    size: 0,
    add: function (element) {
      this.list.push(element);
      this.size++;
      this.list.sort((a, b) => a - b);
    },
    remove: function (index) {
      if (this.size > index && index >= 0) {
        this.size--;
        this.list.splice(index, 1);
      }
    },
    get: function (index) {
      if (this.size > index && index >= 0) {
        return this.list[index];
      }
    }
  };
}

const sorted = sortedList();
sorted.add(7);
sorted.add(-1);
sorted.add(23);
console.log(sorted.list);
console.log(sorted.size);
console.log(sorted.get(2));
sorted.remove(1);
console.log(sorted.list);
