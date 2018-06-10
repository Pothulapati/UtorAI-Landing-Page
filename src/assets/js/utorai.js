$mob_btn = document.querySelector('.primary-nav > .mob-nav-btn');
$mob_nav = document.querySelector('.mobile-nav');
$content = document.querySelector('.content');

$mob_btn.addEventListener('click', function(){
  this.classList.toggle('open');
  $mob_nav.classList.toggle('hidden-in-mobile');
  $content.classList.toggle('hidden-in-mobile');
});