https://learn.javascript.ru/task/rewrite-arrow
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

let ask = ("Вы согласны?",
   
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.") );