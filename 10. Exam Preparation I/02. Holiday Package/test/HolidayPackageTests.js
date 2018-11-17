const assert = require('chai').assert;
const HolidayPackage = require('../HolidayPackage').HolidayPackage;

describe('HolidayPackage class', () => {
  let holidayPackage = new HolidayPackage('Italy', 'Summer');

  beforeEach('init HolidayPackage class', () => {
    holidayPackage = new HolidayPackage('Italy', 'Summer');
  });

  it('insurance should not be included by default', () => {
    assert.equal(holidayPackage.insuranceIncluded, false);
  });

  it('no vacationers should be included by default', () => {
    assert.equal(holidayPackage.vacationers.length, 0);
  });

  it('destination is properly set', () => {
    assert.equal(holidayPackage.destination, 'Italy');
  });

  it('season is properly set', () => {
    assert.equal(holidayPackage.season, 'Summer');
  });

  it('showVacationers returns correct message for no vacationers', () => {
    assert.equal(holidayPackage.showVacationers(), 'No vacationers are added yet');
  });

  it('adding valid vacationer should succeed', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    assert.equal(holidayPackage.vacationers[0], 'Pesho Peshev');
  });

  it('adding vacationer with no name should throw', () => {
    assert.throws(() => holidayPackage.addVacationer(), Error);
  });

  it('adding vacationer with empty name should throw', () => {
    assert.throws(() => holidayPackage.addVacationer(' '), Error);
  });

  it('adding vacationer with incomplete name should throw', () => {
    assert.throws(() => holidayPackage.addVacationer('Pesho'), Error);
  });

  it('adding vacationer with invalid type for name should throw', () => {
    assert.throws(() => holidayPackage.addVacationer(true), Error);
  });

  it('insuranceIncluded should throw on invalid type', () => {
    assert.throws(() => holidayPackage.insuranceIncluded = 'true', Error);
  });

  it('showVacationers returns correct message for non-empty vacationers', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    holidayPackage.addVacationer('Ivan Ivanov');
    assert.equal(holidayPackage.showVacationers(), 'Vacationers:\nPesho Peshev\nIvan Ivanov');
  });

  it('generateHolidayPackage for no vacationers should throw', () => {
    assert.throws(() => holidayPackage.generateHolidayPackage(), Error);
  });

  it('generateHolidayPackage returns correct message for one vacationer, Summer, no insurance', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nPrice: 600';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for one vacationer, Winter, no insurance', () => {
    holidayPackage.season = 'Winter';
    holidayPackage.addVacationer('Pesho Peshev');
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nPrice: 600';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for one vacationer, Spring, no insurance', () => {
    holidayPackage.season = 'Spring';
    holidayPackage.addVacationer('Pesho Peshev');
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nPrice: 400';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for one vacationer, Spring, with insurance', () => {
    holidayPackage.season = 'Spring';
    holidayPackage.insuranceIncluded = true;
    holidayPackage.addVacationer('Pesho Peshev');
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nPrice: 500';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for one vacationer, Summer, with insurance', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    holidayPackage.insuranceIncluded = true;
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nPrice: 700';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for one vacationer, Summer, with insurance', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nPrice: 600';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for two vacationer, Summer, no insurance', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    holidayPackage.addVacationer('Ivan Ivanov');
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nIvan Ivanov\nPrice: 1000';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });

  it('generateHolidayPackage returns correct message for two vacationer, Summer, with insurance', () => {
    holidayPackage.addVacationer('Pesho Peshev');
    holidayPackage.addVacationer('Ivan Ivanov');
    holidayPackage.insuranceIncluded = true;
    const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPesho Peshev\nIvan Ivanov\nPrice: 1100';
    assert.equal(holidayPackage.generateHolidayPackage(), expected);
  });
});

/* // Demo solution
let expect=require('chai').expect;
const HolidayPackage=require('./classImplementaion');

describe('HolidayPackage',function () {
    let holidayPackage;
    beforeEach(function () {
        holidayPackage=new HolidayPackage('Italy','Summer');
    });

    it('insuranceIncluded must have defalut value - false',function () {
        expect(holidayPackage.insuranceIncluded).to.equal(false);
    });
    it('Show message if no vacationers added',function () {
        expect(holidayPackage.showVacationers()).to.equal('No vacationers are added yet');
    });
    it('generateHolidayPackage must throw an error',function () {
        expect(()=>holidayPackage.generateHolidayPackage()).to.throw();
    });
    it('addVacationer must throw an error for adding non-string',function () {
        expect(()=>holidayPackage.addVacationer(1)).to.throw();
    });
    it('addVacationer must throw an error for adding empty string',function () {
        expect(()=>holidayPackage.addVacationer(" ")).to.throw();
    });
    it('addVacationer must throw an error for adding only one name',function () {
        expect(()=>holidayPackage.addVacationer('Pesho')).to.throw();
    });
    it('showVacationers must show correct message',function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshov');
        expect(holidayPackage.showVacationers()).to.equal('Vacationers:\nIvan Ivanov\nPesho Peshov')
    });
    it('generateHolidatPackage must show a correct sum for Summer season',function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshov');
        holidayPackage.insuranceIncluded=true;
        expect(holidayPackage.generateHolidayPackage())
            .to
            .equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshov\nPrice: 1100');
    })

});
 */
