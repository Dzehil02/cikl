let out = document.getElementById('out');
let tmp = '';

for (let i=1000; i<=3000; i++) {
   tmp = tmp +'&#'+i+' ';
}
out.innerHTML = tmp;