;(function() {
  $('.library-card').click(function() {
    location.href =
      '../d/' +
      $(this)
        .find('input[type=checkbox]')
        .val() +
      '.htm'
  })
})()
