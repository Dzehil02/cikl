// Вывести числа от 1 до 100 на экран.
let out = document.getElementById('out');
let tmp = '';

for (let i=1; i<=100; i++) {
   tmp = tmp + i + ' ';
}
out.innerHTML = tmp;