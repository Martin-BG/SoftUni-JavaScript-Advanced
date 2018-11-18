function realEstateAgency() {
  const $regPrice = $('input[name=apartmentRent]');
  const $regType = $('input[name=apartmentType]');
  const $regCommission = $('input[name=agencyCommission]');
  const $findBudget = $('input[name=familyBudget]');
  const $findType = $('input[name=familyApartmentType]');
  const $findName = $('input[name=familyName]');
  const $message = $('#message');
  const $building = $('#building');
  const $agencyProfit = $('#roof>h1');

  const $btnReg = $('button[name=regOffer]');
  const $btnFind = $('button[name=findOffer]');

  $btnReg.on('click', regOffer);
  $btnFind.on('click', findOffer);

  function regOffer() {
    const price = +$regPrice.val();
    const commission = +$regCommission.val();
    const apartmentType = $regType.val().trim();

    $regPrice.val('');
    $regCommission.val('');
    $regType.val('');

    if (price && price > 0 && commission && commission >= 0 && commission <= 100 && apartmentType && /^[^:]+$/g.test(apartmentType)) {
      $building.append(`<div class="apartment"><p>Rent: ${price}</p><p>Type: ${apartmentType}</p><p>Commission: ${commission}</p></div>`);
      $message.text('Your offer was created successfully.');
    } else {
      $message.text('Your offer registration went wrong, try again.');
    }
  }

  function findOffer() {
    const budget = +$findBudget.val();
    const apartmentType = $findType.val().trim();
    const familyName = $findName.val().trim();

    $findBudget.val('');
    $findType.val('');
    $findName.val('');

    if (budget && budget > 0 && apartmentType && familyName) {
      const $apartments = $('.apartment').filter((index, element) => {
        const rent = +element.children[0].textContent.substring(6);
        const type = element.children[1].textContent.substring(6);
        const commission = +element.children[2].textContent.substring(12);
        if (rent && commission) {
          const cost = rent + rent * commission / 100.0;
          return type === apartmentType && budget >= cost;
        }
      });

      if ($apartments.length) {
        let $apartment = $apartments.first();
        $apartment.css('border', '2px solid red');
        const rent = +$apartment.children()[0].textContent.substring(6);
        const commission = +$apartment.children()[2].textContent.substring(12);

        let profit = +$agencyProfit.text().substring(15, $agencyProfit.text().length - 3).trim();
        profit += rent * commission / 100.0 * 2;
        $agencyProfit.text(`Agency profit: ${profit} lv.`);

        $apartment.empty();
        $apartment
          .append($(`<p>${familyName}</p><p>live here now</p>`))
          .append($('<button>').text('MoveOut').on('click', () => {
            $apartment.remove();
            $message.text(`They had found cockroaches in ${familyName}\'s apartment`);
          }));
        $message.text('Enjoy your new home! :))');
      } else {
        $message.text('We were unable to find you a home, so sorry :(');
      }
    } else {
      $message.text('We were unable to find you a home, so sorry :(');
    }
  }
}
