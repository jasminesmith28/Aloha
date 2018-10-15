$(function () {

    $('header nav a')
    .click(function (event) {
        var target = $(this.hash);
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });

$('#updates').on('submit','form', function(event) {
    event.preventDefault();
    let $email = $('#email');
    if ($email.val().length!==0) {
      alert('Thank you for subscribing');
    } else {
      alert('Please enter a valid email!');
    }
  });

  $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
});

});