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

/* // Demo solution
class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        //NAPRAVI SI FUNKCIQTA!!!!
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            //Moje i da si v greshka
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };
        if (creditCard !== undefined) {
            //VNIMAVAI
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(input) {
        if (input.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        let pattern = /\b[A-Z]{1}[a-z]+\b/gm;
        input.forEach(element => {
                if (!element.match(pattern)) {
                    throw new Error("Invalid full name");
                }
            }
        );
        let fullName = {};

        fullName.firstName = input[0];
        fullName.middleName = input[1];
        fullName.lastName = input[2];

        this._fullName = fullName;
    };

    generateIDNumber() {
        let vowel = ['a', 'e', 'i', 'o', 'u'];
        //Formula
        let idNumber = (231 * this.fullName.firstName.charCodeAt(0) + 139 *
            this.fullName.middleName.length).toString();
        if (vowel.includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1))) {
            idNumber += 8;
        } else {
            idNumber += 7;
        }
        //MOJE I DA TRQBWA SETER
        return idNumber;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error("Missing credit card information");
        }
        if (typeof input[0] !== "number" || typeof input[2] !== "number") {
            throw new Error("Invalid credit card details");
        }
        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort(function (a, b) {
            return a.length - b.length ;
        });
    }
    getVacationerInfo(){
        //return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
        //        ID Number: ${this.idNumber}
        //        Wishlist:
        //        ${(this.wishList.length === 0 ? "empty":this.wishList.join(', '))}
        //        Credit Card:
        //        Card Number: ${this.creditCard.cardNumber}
        //        Expiration Date: ${this.creditCard.expirationDate}
        //        Security Number: ${this.creditCard.securityNumber}`

        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
            "ID Number: " + this.idNumber + "\n" +
            "Wishlist:\n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
            "Credit Card:\n" +
            "Card Number: " + this.creditCard.cardNumber + "\n" +
            "Expiration Date: " + this.creditCard.expirationDate + "\n" +
            "Security Number: " + this.creditCard.securityNumber;
    }
}
 */
