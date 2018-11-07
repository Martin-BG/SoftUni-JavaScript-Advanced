let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let testedFunction = function () {
  //Some code
};

let describe;
('testedFunction', function () {
  //Tests here
});
