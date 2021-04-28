// Вывести таблицу умножения на 7 от 1 до 9 с помощью цикла.
let out = document.getElementById('out');
let tmp = '';

for (let i=1; i<=9; i++) {
   tmp = tmp +7 +' * '+i+' = ' + 7*i + '<br>';
}
out.innerHTML = tmp;