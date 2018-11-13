class Vacationer {
  constructor(namesArr, cardArr) {
    this.fullName = namesArr;
    this.idNumber = '';
    this.creditCard = {};
    this.wishList = [];
    this.generateIDNumber();
    this.addCreditCardInfo(cardArr || [1111, '', 111]);
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(namesArr) {
    if (!Array.isArray(namesArr) || namesArr.length !== 3) {
      throw new Error('Name must include first name, middle name and last name');
    }

    let validate = (name) => {
      if (!/^[A-Z][a-z]+$/g.test(name)) {
        throw new Error('Invalid full name');
      }
      return name;
    };

    this._fullName = {
      firstName: validate(namesArr[0]),
      middleName: validate(namesArr[1]),
      lastName: validate(namesArr[2])
    };
  }

  addCreditCardInfo(cardArr) {
    if (!Array.isArray(cardArr) || cardArr.length !== 3) {
      throw new Error('Missing credit card information');
    }
    if (typeof cardArr[0] !== 'number' || typeof cardArr[2] !== 'number') {
      throw new Error('Invalid credit card details');
    }

    this.creditCard = {
      cardNumber: +cardArr[0],
      expirationDate: cardArr[1],
      securityNumber: +cardArr[2]
    };
  }

  generateIDNumber() {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    this.idNumber = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
    this.idNumber += vowels.includes(this.fullName.lastName.substr(-1)) ? '8' : '7';
  }

  addDestinationToWishList(destination) {
    if (!destination || typeof destination !== 'string') {
      return;
    }
    if (this.wishList.includes(destination)) {
      throw new Error('Destination already exists in wishlist');
    }
    this.wishList.push(destination);
    this.wishList.sort((a, b) => a.length - b.length);
  }

  getVacationerInfo() {
    return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
ID Number: ${this.idNumber}
Wishlist:
${this.wishList.length ? this.wishList.join(', ') : 'empty'}
Credit Card:
Card Number: ${this.creditCard.cardNumber}
Expiration Date: ${this.creditCard.expirationDate}
Security Number: ${this.creditCard.securityNumber}`;
  }
}

let vacationer1 = new Vacationer(['Vania', 'Ivanova', 'Zhivkova']);
vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

let vacationer2 = new Vacationer(['Tania', 'Ivanova', 'Zhivkova'], [123456789, '10/01/2018', 777]);

console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
