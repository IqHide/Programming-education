if (-1 || 0) alert('first') // if возвращает true, а значит функция alert выполняется
if (-1 && 0) alert('second') // if возвращает false, а значит функция alert НЕ выполняется
if (null || (-1 && 1)) alert('third') // if возвращает true, а значит функция alert выполняется. Подробнее про if: в скобках true && true - это true. null || true - это также true

//Ответ: Выполняется 1 и 3
