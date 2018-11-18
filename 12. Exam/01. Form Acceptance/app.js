function acceptance() {
  const $company = $('input[name=shippingCompany]');
  const $product = $('input[name=productName]');
  const $quantity = $('input[name=productQuantity]');
  const $scrape = $('input[name=productScrape]');
  const $warehouse = $('#warehouse');

  const companyName = $company.val().trim();
  const productName = $product.val().trim();
  const productQuantity = +$quantity.val() - +$scrape.val();

  if (companyName && productName && productQuantity > 0) {
    const $div = $('<div>');
    const $p = $(`<p>[${companyName}] ${productName} - ${productQuantity} pieces</p>`);
    const $button = $(`<button type="button">Out of stock</button>`).on('click', () => $div.remove());
    $div.append($p);
    $div.append($button);
    $warehouse.append($div);

    $company.val('');
    $product.val('');
    $quantity.val('');
    $scrape.val('');
  }
}
