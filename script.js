class MathError extends Error {
    constructor(message) {
      super(message);
      this.name = "MathError";
    }
  }
  
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
  
    try {
      if (firstNum === '' || secondNum === '') {
        throw new MathError('Both input fields must have a value');
      }
      if (isNaN(firstNum) || isNaN(secondNum)) {
        throw new MathError('Inputs must be numbers');
      }
      if (operator === '/' && secondNum === '0') {
        throw new MathError('Division by zero is not allowed');
      }
  
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (error) {
      if (error instanceof MathError) {
        console.error('Math error:', error.message);
      } else {
        console.error('Calculation error:', error);
      }
      output.innerHTML = 'Error: ' + error.message;
    } finally {
      console.log('Calculation attempted');
    }
  });
  
  let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
  
  // Start your code here
  errorBtns[0].addEventListener('click', () => {
    try {
      console.log('This is a console log example');
    } catch (error) {
      console.error('Error with console log:', error);
    } finally {
      console.log('Console log attempted');
    }
  });
  
  errorBtns[1].addEventListener('click', () => {
    try {
      console.error('This is a console error example');
    } catch (error) {
      console.error('Error with console error:', error);
    } finally {
      console.log('Console error attempted');
    }
  });
  
  errorBtns[2].addEventListener('click', () => {
    try {
      console.count('Count Example');
      console.count('Count Example');
    } catch (error) {
      console.error('Error with console count:', error);
    } finally {
      console.log('Console count attempted');
    }
  });
  
  errorBtns[3].addEventListener('click', () => {
    try {
      console.warn('This is a console warn example');
    } catch (error) {
      console.error('Error with console warn:', error);
    } finally {
      console.log('Console warn attempted');
    }
  });
  
  errorBtns[4].addEventListener('click', () => {
    try {
      console.assert(false, 'This is a console assert example');
    } catch (error) {
      console.error('Error with console assert:', error);
    } finally {
      console.log('Console assert attempted');
    }
  });
  
  errorBtns[5].addEventListener('click', () => {
    try {
      console.clear();
    } catch (error) {
      console.error('Error with console clear:', error);
    } finally {
      console.log('Console clear attempted');
    }
  });
  
  errorBtns[6].addEventListener('click', () => {
    try {
      console.dir(document.body);
    } catch (error) {
      console.error('Error with console dir:', error);
    } finally {
      console.log('Console dir attempted');
    }
  });
  
  errorBtns[7].addEventListener('click', () => {
    try {
      console.dirxml(document.body);
    } catch (error) {
      console.error('Error with console dirxml:', error);
    } finally {
      console.log('Console dirxml attempted');
    }
  });
  
  errorBtns[8].addEventListener('click', () => {
    try {
      console.group('Group Example');
      console.log('Inside Group Example');
    } catch (error) {
      console.error('Error with console group:', error);
    } finally {
      console.log('Console group start attempted');
    }
  });
  
  errorBtns[9].addEventListener('click', () => {
    try {
      console.groupEnd('Group Example');
    } catch (error) {
      console.error('Error with console groupEnd:', error);
    } finally {
      console.log('Console group end attempted');
    }
  });
  
  errorBtns[10].addEventListener('click', () => {
    try {
      let obj = { id: 1, name: 'Item 1' };
      console.table([obj, obj, obj]);
    } catch (error) {
      console.error('Error with console table:', error);
    } finally {
      console.log('Console table attempted');
    }
  });
  
  errorBtns[11].addEventListener('click', () => {
    try {
      console.time('Timer Example');
    } catch (error) {
      console.error('Error with console time:', error);
    } finally {
      console.log('Console time attempted');
    }
  });
  
  errorBtns[12].addEventListener('click', () => {
    try {
      console.timeEnd('Timer Example');
    } catch (error) {
      console.error('Error with console timeEnd:', error);
    } finally {
      console.log('Console time end attempted');
    }
  });
  
  errorBtns[13].addEventListener('click', () => {
    try {
      console.trace('Trace Example');
    } catch (error) {
      console.error('Error with console trace:', error);
    } finally {
      console.log('Console trace attempted');
    }
  });
  