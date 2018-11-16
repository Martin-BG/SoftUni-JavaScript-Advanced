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
