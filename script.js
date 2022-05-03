'use-strict';

const colorBox = document.querySelector('.color');
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');
const copiedColor = document.querySelector('.copied-color');
const btnReset = document.querySelector('#btn-reset');
let colorCode = '';

const randomNumber = function () {
  return Math.trunc(Math.random() * 256) + 1;
};

const changeColor = function () {
  const randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()},${randomNumber()})`;
  colorBox.style.borderColor = randomColor;
  colorBox.style.backgroundColor = randomColor;
  heading.style.color = randomColor;
  colorCode = randomColor;
};

const resetColor = function () {
  colorBox.style.borderColor = '';
  colorBox.style.backgroundColor = '';
  heading.style.color = '';
  colorCode = '';
  copiedColor.textContent = '';
};

const copyColorCode = function () {
  colorCode
    ? (copiedColor.textContent = `Color code: ${colorCode}`)
    : (copiedColor.textContent = `There isn't any color`);
};

btn.addEventListener('click', changeColor);
colorBox.addEventListener('click', copyColorCode);
btnReset.addEventListener('click', resetColor);


//
