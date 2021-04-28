// Вывести числа от 50 до 0 на экран.
let out = document.getElementById('out');
let tmp = '';

for (let i=50; i>=0; i=i-1) {
   tmp = tmp + i + '<br>';
}
out.innerHTML = tmp;