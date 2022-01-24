
let data = new Date();
data.setDate(data.getDate() + (1 + 7 - data.getDay()) % 7);
//data.setDate(data.getDate() + (7-data.getDay())%7+1); //- добавляет дату следующего понедельник
// let s = d.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
// document.getElementById('d').innerHTML = s;  - второй вариант


function setZero(date) {
    return date < 10 ? '0' + date : date;
}

let curr_date = data.getDate();
let curr_month = data.getMonth() + 1;
let curr_year = data.getFullYear();
let thisDate = curr_year + "." + setZero(curr_month) + "." + setZero(curr_date) + "!";
console.log(thisDate);
document.getElementById('d').innerHTML = thisDate;

