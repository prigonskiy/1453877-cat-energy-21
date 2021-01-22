//

// Example block/slider

var deviceWidth = document.body.clientWidth;
var progress = document.querySelector('.example__progress');
var tabletWidth = 768;

if (progress) {
  var buttonBefore = progress.querySelector('.example__progress-button--before');
  var buttonAfter = progress.querySelector('.example__progress-button--after');

  buttonBefore.addEventListener('click', function() {
    if (progress.classList.contains('example__progress--after')) {
      progress.classList.remove('example__progress--after');
    }
  })

  buttonAfter.addEventListener('click', function() {
    if (!progress.classList.contains('example__progress--after')) {
      progress.classList.add('example__progress--after');
    }
  })

  if (deviceWidth >= tabletWidth) {
    var imageBefore = progress.querySelector('.example__illustration--before');
    var imageAfter = progress.querySelector('.example__illustration--after');
    var scale = progress.querySelector('.example__progress-bar');
    var range = scale.querySelector('.example__range');

    range.addEventListener('input', function() {
      imageBefore.style.width = (100 - range.value) + '%';
      imageAfter.style.width = range.value + '%';
    })

    buttonBefore.addEventListener('click', function () {
      imageBefore.style.width = '100%';
      imageAfter.style.width = '0%';
      range.value = 0;
    })

    buttonAfter.addEventListener('click', function () {
      imageBefore.style.width = '0%';
      imageAfter.style.width = '100%';
      range.value = 100;
    })
  }
}
