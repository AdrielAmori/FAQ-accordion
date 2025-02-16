var btnExpand = document.querySelectorAll('.faq img');
var paragrafoExp = document.querySelectorAll('.faq p');

btnExpand.forEach(function(button, index) {
  button.addEventListener('click', function() {
    var icon = button;
    var iconSrc = icon.getAttribute('src');
    var paragrafo = paragrafoExp[index];

    if (iconSrc.includes('icon-plus.svg')) {
      icon.setAttribute('src', './assets/images/icon-minus.svg');
      paragrafo.classList.add('show');
    } else {
      icon.setAttribute('src', './assets/images/icon-plus.svg');
      paragrafo.classList.remove('show');
    }
  });
});
