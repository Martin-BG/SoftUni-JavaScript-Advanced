function solve(arr, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = +price;
      this.status = status;
    }
  }

  let tickets = [];

  arr.forEach((line) => tickets.push(new Ticket(...line.split('|'))));

  tickets.sort((a, b) => a[criteria] > b[criteria]);

  return tickets;
}

console.log(solve([
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'
], 'destination'));

console.log(solve([
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'
], 'status'));
