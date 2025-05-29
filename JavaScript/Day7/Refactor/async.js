import { updateHeading } from './domUtils.js';

const sayHello = () => {
  console.log("hello world");
};

const changeText = () => {
  updateHeading("javascript series");
};

const changeMe = setTimeout(changeText, 2000);

document.querySelector('#stop').addEventListener('click', () => {
  clearTimeout(changeMe);
  console.log("Stopped");
});
