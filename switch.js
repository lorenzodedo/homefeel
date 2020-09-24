$('[lang="small"]').hide();

if ($(window).width() < 768) {
  $('[lang="big"]').hide();
  $('[lang="small"]').show();
}
