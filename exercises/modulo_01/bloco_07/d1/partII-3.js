document.getElementsByTagName('button')[0].addEventListener('click', () => {
  let span = document.getElementsByTagName('span')[0];
  span.innerHTML === '' ? span.innerHTML = 1: span.innerHTML = Number(span.innerHTML) + 1;
});