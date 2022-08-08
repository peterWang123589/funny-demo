import './style/scss/demo1.scss'

const light = document.querySelector('.c-bulb');

const toggleLight = () => {
  document.querySelector('body').classList.toggle('is-light-on');
}

light.addEventListener('mouseover', toggleLight);
light.addEventListener('mouseout', toggleLight);