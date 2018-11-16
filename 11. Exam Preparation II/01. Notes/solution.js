function addSticker() {
  const $title = $('.title');
  const $content = $('.content');
  const title = $title.val();
  const content = $content.val();

  if (title !== '' && content !== '') {
    $title.val('');
    $content.val('');

    const $sticker = $('<li class="note-content" >')
      .append('<a class="button">x</a>').on('click', removeSticker)
      .append(`<h2>${title}</h2>`)
      .append('<hr>')
      .append(`<p>${content}</p>`);

    $('#sticker-list').append($sticker);
  }

  function removeSticker() {
    $(this).remove();
  }
}

/* // Demo solution
function addSticker() {

    let title = $('.title');
    let text = $('.content');
    let ul = $('#sticker-list');

    if(title.val() && text.val()){
        let li = $('<li>');
        li.addClass('note-content');

        let a = $('<a>');
        a.addClass('button');
        a.text('x');
        a.on('click', () => li.remove());

        let h2 = $('<h2>');
        h2.text(title.val());

        let hr = $('<hr>');

        let p = $('<p>');
        p.text(text.val());

        li.append(a);
        li.append(h2);
        li.append(hr);
        li.append(p);

        ul.append(li);

        title.val('');
        text.val('');
    }
}
 */
