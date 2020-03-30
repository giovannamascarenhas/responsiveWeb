// o menu normal esta sendo mostrado
let show = true;
const menuSection = document.querySelector('.menu-section');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    // se o show for true, então o overflow será hidden, se não, ele terá a barra de rolagem normal
    document.body.style.overflow = show ? 'hidden' : 'initial';
    // adiciono essa segunda opção no toggle, para eu ter a certeza que o meu toggle não irá bugar, não irá fazer a ação no momento errado.
    // obrigatoriamente, coloque o on.
    menuSection.classList.toggle('on', show)
    show = !show;
})