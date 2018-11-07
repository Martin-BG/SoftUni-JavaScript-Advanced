function nuke(selector1, selector2) {
  if (selector1 === selector2) {
    return;
  }
  $(selector1).filter(selector2).remove();
}

const assert = require('chai').assert;
const jsdom = require('jsdom-global')();
const $ = require('jquery');

describe('test cases for nuke function', () => {
  let oldHtml;
  let htmlSelector;

  after(() => {
    jsdom();
  });

  beforeEach('init the HTML', () => {
    document.body.innerHTML =
      `<div id="target">
          <div class="nested target">
              <p>This is some text</p>
          </div>
          <div class="target">
              <p>Empty div</p>
          </div>
          <div class="inside">
              <span class="nested">Some more text</span>
              <span class="target">Some more text</span>
          </div>
      </div>`;
    htmlSelector = $('#target');
    oldHtml = htmlSelector.html();
  });

  it('should do nothing on invalid first selector', () => {
    nuke('#invalid', '.target');
    const newHtml = htmlSelector.html();
    assert.equal(newHtml, oldHtml);
  });

  it('should do nothing on invalid second selector', () => {
    nuke('.target', '#invalid');
    const newHtml = htmlSelector.html();
    assert.equal(newHtml, oldHtml);
  });

  it('should do nothing with two valid selectors', () => {
    nuke('.nested', '.inside');
    const newHtml = htmlSelector.html();
    assert.equal(newHtml, oldHtml);
  });

  it('should do nothing on missing second selector', () => {
    nuke('.target');
    const newHtml = htmlSelector.html();
    assert.equal(newHtml, oldHtml);
  });

  it('should do nothing on missing selectors', () => {
    nuke();
    const newHtml = htmlSelector.html();
    assert.equal(newHtml, oldHtml);
  });

  it('should do noting if selectors are equals', () => {
    nuke('.target', '.target');
    const newHtml = htmlSelector.html();
    assert.equal(newHtml, oldHtml);
  });

  it('should remove elements having both selectors', () => {
    nuke('.nested', '.target');
    const newHtml = htmlSelector.html();
    assert.notEqual(newHtml, oldHtml);
  });
});
