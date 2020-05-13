;(function() {
  $('.library-card').click(function() {
    location.href =
      '/library/d/' +
      $(this)
        .find('input[type=checkbox]')
        .val() +
      '.htm'
  })
})()
