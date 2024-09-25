import './styles.scss';

const elements = {
  burger: document.querySelector('.nav_burger'),
  menu: document.querySelector('.header_menu'),
};

elements.burger.addEventListener('click', () => {
  elements.menu.classList.toggle('header_menu--open');
});
