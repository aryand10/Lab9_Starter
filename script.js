let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

errorBtns[0].addEventListener('click', () => console.log('This is a console log example'));
errorBtns[1].addEventListener('click', () => console.error('This is a console error example'));
errorBtns[2].addEventListener('click', () => {
  console.count('Count Example');
  console.count('Count Example');
});
errorBtns[3].addEventListener('click', () => console.warn('This is a console warn example'));
errorBtns[4].addEventListener('click', () => console.assert(false, 'This is a console assert example'));
errorBtns[5].addEventListener('click', () => console.clear());
errorBtns[6].addEventListener('click', () => console.dir(document.body));
errorBtns[7].addEventListener('click', () => console.dirxml(document.body));
errorBtns[8].addEventListener('click', () => {
  console.group('Group Example');
  console.log('Inside Group Example');
});
errorBtns[9].addEventListener('click', () => console.groupEnd('Group Example'));
errorBtns[10].addEventListener('click', () => {
  let obj = { id: 1, name: 'Item 1' };
  console.table([obj, obj, obj]);
});
errorBtns[11].addEventListener('click', () => console.time('Timer Example'));
errorBtns[12].addEventListener('click', () => console.timeEnd('Timer Example'));
errorBtns[13].addEventListener('click', () => console.trace('Trace Example'));

