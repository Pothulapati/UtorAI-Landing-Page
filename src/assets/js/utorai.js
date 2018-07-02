var $mob_btn = document.querySelector('.primary-nav > .mob-nav-btn');
var $mob_nav = document.querySelector('.mobile-nav');
var $content = document.querySelector('.content');
var $links = document.querySelectorAll('.primary-nav > .link');


$mob_btn.addEventListener('click', function(){
  this.classList.toggle('open');
  $mob_nav.classList.toggle('hidden-in-mobile');
  $content.classList.toggle('hidden-in-mobile');
});

//
$links.forEach(function(link){
  link.addEventListener('click', function(){
    if("section" in link.dataset){
      document.getElementById(link.dataset.section).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    } 
  });
});