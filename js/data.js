
let d = new Date();
d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
//d.setDate(d.getDate() + (7-d.getDay())%7+1);
let s = d.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
document.getElementById('d').innerHTML = s;
console.log(s);
console.log(d);
