function makeReservation(containerId) {
  const $submitButton = $('#submit');
  const $editButton = $('#edit');
  const $continueButton = $('#continue');

  const $fullName = $('#fullName');
  const $email = $('#email');
  const $phoneNumber = $('#phoneNumber');
  const $address = $('#address');
  const $postalCode = $('#postalCode');

  const $infoPreview = $('#infoPreview');

  $submitButton.on('click', submitForm);
  $editButton.on('click', editForm);
  $continueButton.on('click', continueToPayment);

  function submitForm() {
    if ($fullName.val() !== '' && $email.val() !== '') {
      $infoPreview
        .append(`<li>Name: ${$fullName.val()}</li>`)
        .append(`<li>E-mail: ${$email.val()}</li>`)
        .append(`<li>Phone: ${$phoneNumber.val()}</li>`)
        .append(`<li>Address: ${$address.val()}</li>`)
        .append(`<li>Postal Code: ${$postalCode.val()}</li>`);

      $fullName.val('');
      $email.val('');
      $phoneNumber.val('');
      $address.val('');
      $postalCode.val('');

      $submitButton.prop('disabled', true);
      $editButton.prop('disabled', false);
      $continueButton.prop('disabled', false);
    }
  }

  function editForm() {
    const lis = $infoPreview.children();

    $fullName.val(lis[0].textContent.substr('Name: '.length));
    $email.val(lis[1].textContent.substr('E-mail: '.length));
    $phoneNumber.val(lis[2].textContent.substr('Phone: '.length));
    $address.val(lis[3].textContent.substr('Address: '.length));
    $postalCode.val(lis[4].textContent.substr('Postal Code: '.length));

    $infoPreview.empty();

    $submitButton.prop('disabled', false);
    $editButton.prop('disabled', true);
    $continueButton.prop('disabled', true);
  }

  function continueToPayment() {
    const $container = $(containerId);

    $container
      .append('<h2>Payment details</h2>')
      .append($('<select id="paymentOptions" class="custom-select">')
        .append('<option selected disabled hidden>Choose</option>')
        .append('<option value="creditCard">Credit Card</option>')
        .append('<option value="bankTransfer">Bank Transfer</option>'))
      .append('<div id="extraDetails">');

    $('#paymentOptions').on('change', extraPaymentDetails);

    $submitButton.prop('disabled', true);
    $editButton.prop('disabled', true);
    $continueButton.prop('disabled', true);
  }

  function extraPaymentDetails() {
    const selected = $('#paymentOptions option:selected').val();
    const $extraDetails = $('#extraDetails');

    $extraDetails.empty();

    if (selected === 'creditCard') {
      $extraDetails
        .append('<div class="inputLabel">Card Number<input></div><br>')
        .append('<div class="inputLabel">Expiration Date<input></div><br>')
        .append('<div class="inputLabel">Security Numbers<input></div><br>')
        .append('<button id="checkOut">Check Out</button>');
    } else if (selected === 'bankTransfer') {
      $extraDetails
        .append('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>')
        .append('<button id="checkOut">Check Out</button>');
    }

    $('#checkOut').on('click', checkOut);
  }

  function checkOut() {
    $('#wrapper').empty().append('<h4>Thank you for your reservation!</h4>');
  }
}

/* // Demo solution
function makeReservation(containerId) {
    $('#submit').on('click', submitForm);
    $('#edit').on('click', editForm);
    $('#continue').on('click',addPaymentDetails);

    function submitForm() {
        if ($('#fullName').val().trim() !== "" && $('#email').val().trim() !== "") {
            $('#infoPreview')
                .append(`<li>Name: ${$('#fullName').val()}</li>`)
                .append(`<li>E-mail: ${$('#email').val()}</li>`)
                .append(`<li>Phone: ${$('#phoneNumber').val()}</li>`)
                .append(`<li>Address: ${$('#address').val()}</li>`)
                .append(`<li>Postal Code: ${$('#postalCode').val()}</li>`);

            $('input').val('');
            $('#submit').prop('disabled', true);
            $('#edit').prop('disabled', false);
            $('#continue').prop('disabled', false);
        }
    }

    function editForm() {
        let info = $('li');
        $('#fullName').val(info[0].textContent.substring(6));
        $('#email').val(info[1].textContent.substring(8));
        $('#phoneNumber').val(info[2].textContent.substring(7));
        $('#address').val(info[3].textContent.substring(9));
        $('#postalCode').val(info[4].textContent.substring(13));

        $('ul li').remove();
        $('#submit').prop('disabled', false);
        $('#edit').prop('disabled', true);
        $('#continue').prop('disabled', true);

    }

    function addPaymentDetails() {
        $(containerId)
            .append(`<h2>Payment details</h2>`)
            .append($(`<select id="paymentOptions" class="custom-select">`)
                .append(`<option selected disabled hidden>Choose</option>`)
                .append(`<option value="creditCard">Credit Card</option>`)
                .append(`<option value="bankTransfer">Bank Transfer</option>`)
            )
            .append(`<div id="extraDetails">`);

        $('#paymentOptions').on('change',appendExtraDetails);
        $('#submit').prop('disabled', true);
        $('#edit').prop('disabled', true);
        $('#continue').prop('disabled', true);
    }
    function appendExtraDetails() {
        let selected=$("#paymentOptions").find(':selected').val();
        $('#extraDetails').empty();


        if(selected==='creditCard'){
            $('#extraDetails')
                .append($(`<div class="inputLabel">Card Number<input></div><br>`))
                .append($(`<div class="inputLabel">Expiration Date<input></div><br>`))
                .append($(`<div class="inputLabel">Security Numbers<input></div><br>`))
        }
        else{
            $('#extraDetails')
                .append($(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`))
        }
        $('#extraDetails').append($(`<button id="checkOut">Check Out</button>`));

        $('#checkOut').on('click',function () {
            $('#wrapper').empty();
            $('#wrapper').append($(`<h4>Thank you for your reservation!</h4>`))
        })

    }

}
 */
