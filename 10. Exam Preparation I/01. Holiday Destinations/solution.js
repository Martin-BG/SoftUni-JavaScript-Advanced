function addDestination() {
  const $inputData = $('.inputData');
  const city = $inputData[0].value;
  const country = $inputData[1].value;
  const season = $('#seasons option:selected').text();

  if (city !== '' && country !== '') {
    $('#seasons').val('summer');
    $inputData[0].value = '';
    $inputData[1].value = '';

    const row = $('<tr>')
      .append($('<td>').text(`${city}, ${country}`))
      .append($('<td>').text(season));
    $('#destinationsList').append(row);

    const $counter = $(`#${season.toLowerCase()}`);
    $counter.val(+$counter.val() + 1);
  }
}
