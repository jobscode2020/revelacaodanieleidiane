$(document).ready(function () {

  $("#boy").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(yesItsBoy, 2300);

  });

  $("#girl").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(noItsBoy, 2300);
  });

  $(".boy").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(yesItsBoy, 2300);
  });

  $(".girl").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(noItsBoy, 2300);
  });

});

function yesItsBoy() {
  $('.card-body').empty().html(`
  <h5 class="text-center">
    <img src="https://media.giphy.com/media/1QjzdzQd2D3Qpxn29P/giphy.gif" style="width:7rem;">
    <img src="https://media.giphy.com/media/ZyupJv9fpknluc04os/giphy.gif" style="width:7rem;">
    <img src="https://media.giphy.com/media/VaqR08nDfj4tGHPyTX/giphy.gif" style="width:13rem;">
  </h5>

  `);
}

function noItsBoy() {
  $('.card-body').empty().html(`
  <h5 class="text-center">
    <img src="https://media.giphy.com/media/xT9Igpm06uM5OJ5lVS/giphy.gif" style="width:5rem;">
    <img src="https://media.giphy.com/media/xT9Igpm06uM5OJ5lVS/giphy.gif" style="width:5rem;">
    <img src="https://media.giphy.com/media/VaqR08nDfj4tGHPyTX/giphy.gif" style="width:13rem;">
  </h5>
  `);
}
