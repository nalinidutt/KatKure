$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
  	value = value - 1;
  } else {
  	value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
  	value = value + 1;
  } else {
  	value =100;
  }

  $input.val(value);

});

var removeCartItemButtons = document.getElementsByClassName('delete-btn');

for (var i=0; i< removeCartItemButtons.length; i++)
{
  var button = removeCartItemButtons[i];
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}
