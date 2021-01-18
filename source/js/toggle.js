// Example block

var deviceWidth = document.body.clientWidth;
var progress = document.querySelector('.example__progress');

if (progress) {
  var before = progress.querySelector('.example__progress-button--before');
  var after = progress.querySelector('.example__progress-button--after');

  before.addEventListener('click', function() {
    if (progress.classList.contains('example__progress--after')) {
      progress.classList.remove('example__progress--after');
    }
  })

  after.addEventListener('click', function() {
    if (!progress.classList.contains('example__progress--after')) {
      progress.classList.add('example__progress--after');
    }
  })
}
