// let x = 1234567812345678;
// let y = x.toString().split("");
// console.log(y)
// let z = 0;
// for (let i = 0; i < y.length; i+=2) {
//     z += parseInt(y[i]*2)
// }
// let a = 0;
// for (let i = 1; i < 15; i+=2) {
//     a += parseInt(y[i])
//     console.log(y[i])
// }
// console.log(z)    
// console.log(a)
// let totalnumber = (a+z) /10
// let t = totalnumber.toString().substr(2);
// t = parseInt(t);
// let finalN = 10 -t;
// console.log(totalnumber)
// console.log(t)
// console.log(finalN)
let inputfield = document.getElementById('check');
inputfield.addEventListener('click', checkCardNumber)

function checkCardNumber() {
    let cardNumber = document.getElementById('input').value;
    console.log(cardNumber)
    if (cardNumber.length == 16) {
        let split = cardNumber.toString().split("");

        let first = "";
        for (let i = 0; i < split.length; i += 2) {
            let a = parseInt(split[i] * 2)

            first += a;
        }

        let second = 0;
        for (let i = 1; i < 15; i += 2) {
            second += split[i]

        }


        let totalnumber = (first + second);
        let splittotal = totalnumber.split("");

        let spNum = 0;
        for (let i = 0; i < splittotal.length; i++) {
            spNum += parseInt(splittotal[i]);
        }

        let divide = spNum / 10;

        let a = parseInt(totalnumber.toString().slice(-1));
        let lastdigit = divide.toString().substr(parseInt(a));

        let finalN = 10 - parseInt(lastdigit)
        if (finalN == parseInt(split.slice(-1))) {
            console.log( "Card is Valid")
        } else {
            console.log( "Card is Not Valid")
        }
    }
    else {
        console.log( "Please Enter Compelte Card Number")
    }
}