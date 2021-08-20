'use strict';

// write your code here
const listPopulation = [...document.querySelectorAll('.population')];

let total = 0;

for (let i = 0; i < listPopulation.length; i++) {
  total += Number(listPopulation[i].textContent.split(',').join(''));
}

let average = total / listPopulation.length;

function numberWithCommas(x) {
  const parts = x.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join(".");
}

total = numberWithCommas(total);
average = numberWithCommas(average);

document.querySelector('.total-population').textContent = `${total}`;
document.querySelector('.average-population').textContent = `${average}`;
