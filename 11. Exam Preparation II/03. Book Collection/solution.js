class BookCollection {
  constructor(shelfGenre, room, shelfCapacity) {
    this.room = room;
    this.shelfGenre = shelfGenre;
    this.shelfCapacity = +shelfCapacity;
    this.shelfCondition = +shelfCapacity;
    this.shelf = [];
  }

  get room() {
    return this._room;
  }

  set room(room) {
    if (room !== 'livingRoom' && room !== 'bedRoom' && room !== 'closet') {
      throw new Error(`Cannot have book shelf in ${room}`);
    }

    this._room = room;
  }

  addBook(bookName, bookAuthor, genre = this.shelfGenre) {
    if (this.shelf.length >= this.shelfCapacity) {
      this.shelf.splice(0, this.shelf.length - this.shelfCapacity + 1);
    }
    this.shelf.push({bookName, bookAuthor, genre});
    this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
    this.shelfCondition = this.shelfCapacity - this.shelf.length;
    return this;
  }

  throwAwayBook(bookName) {
    this.shelf = this.shelf.filter(book => book.bookName !== bookName);
  }

  showBooks(genre) {
    let result = `Results for search "${genre}":\n`;
    result += this.shelf
      .filter(book => book.genre === genre)
      .map(book => `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`)
      .join('\n');
    return result;
  }

  toString() {
    if (this.shelf.length === 0) {
      return 'It\'s an empty shelf';
    }

    let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
    result += this.shelf
      .map(book => `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`)
      .join('\n');
    return result;
  }
}

// let garden = new BookCollection("Programming", "garden"); // Throws: Cannot have book shelf in garden

let livingRoom = new BookCollection('Programming', 'livingRoom', 5)
  .addBook('Introduction to Programming with C#', 'Svetlin Nakov')
  .addBook('Introduction to Programming with Java', 'Svetlin Nakov')
  .addBook('Programming for .NET Framework', 'Svetlin Nakov');
console.log(livingRoom.toString());

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook('John Adams', 'David McCullough', 'history');
bedRoom.addBook('The Guns of August', 'Cuentos para pensar', 'history');
bedRoom.addBook('Atlas of Remote Islands', 'Judith Schalansky');
bedRoom.addBook('Paddle-to-the-Sea', 'Holling Clancy Holling');
console.log('Shelf\'s capacity: ' + bedRoom.shelfCondition);
console.log(bedRoom.showBooks('history'));

/* // Demo solution
class BookCollection {

    constructor(genre, room, capacity){ // ????????????
        this.room = room;
        this.shelfCapacity = capacity;
        this.shelfGenre = genre;
        this.shelf = [];
    }

    get room(){
        return this._room
    }

    set room(currentRoom){
        switch (currentRoom) {
            case'livingRoom':
            case'bedRoom':
            case 'closet':
                this._room = currentRoom;
                break;
            default:
                throw `Cannot have book shelf in ${currentRoom}`;
        }
    }

    addBook(bookName, bookAuthor, genre){ // genre???????

        if(this.shelfCondition === 0){
            this.shelf.shift();
        }

        let book = {bookName, bookAuthor, genre};

        this.shelf.push(book);
        this.shelf.sort((book1, book2) => book1['bookAuthor'].localeCompare(book2['bookAuthor']));

        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter((b) => b.bookName !== bookName)
    }


    showBooks(genre){
        let output = "";

        let wantedBooks = this.shelf.filter((b) => b.genre === genre);

        if(wantedBooks.length > 0){

            output += `Results for search \"${genre}\":\n`;

            wantedBooks.forEach((book) => {
                output += `\uD83D\uDCD6 ${book.bookAuthor} - \"${book.bookName}\"\n`;
            })
        }

        return output.trim();
    }

    toString(){
        let output = "";

        if(this.shelf.length > 0) {
            output += `\"${this.shelfGenre}\" shelf in ${this.room} contains:\n`;
                this.shelf.forEach((book) => {
                output += `\uD83D\uDCD6 \"${book.bookName}\" - ${book.bookAuthor}\n`;
            });
        }else {
            output += `It's an empty shelf`;
        }

        return output.trim();
    }

     get shelfCondition(){
        return Math.max(0, (this.shelfCapacity - this.shelf.length));
    }
}
 */
