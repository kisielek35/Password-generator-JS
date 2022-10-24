let inputRange = document.querySelector(".inputRange");
let passwordinput = document.querySelector(".passwordinput");
let btn = document.querySelector(".btn");
let checkbox1 = document.querySelector(".checkbox1");
let checkbox2 = document.querySelector(".checkbox2");
let checkbox3 = document.querySelector(".checkbox3");
let passworHistory = document.querySelector(".passworHistory ul");
let x = 0;
const T1 = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
const T2 = [1,2,3,4,5,6,7,8,9,0];
const T3 = ["!","@","#","$","%","&"];
const T4 = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","C","G","H","J","K","L","Z","X","V","B","N","M"]
passwordinput.value == null;
    btn.addEventListener("click", () => {
        passwordinput.value = null;
        if (checkbox1.checked && checkbox2.checked &&  checkbox3.checked) {
            for (i=0;i<inputRange.value / 4;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T2[Math.floor(Math.random() * T2.length)];
                passwordinput.value += T3[Math.floor(Math.random() * T3.length)];
                passwordinput.value += T4[Math.floor(Math.random() * T4.length)];
            }
        } else if (checkbox1.checked && checkbox2.checked) {
            for (i=0;i<inputRange.value / 3;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T3[Math.floor(Math.random() * T3.length)];
                passwordinput.value += T4[Math.floor(Math.random() * T4.length)];
            }
        } else if (checkbox1.checked && checkbox3.checked) {
            for (i=0;i<inputRange.value / 3;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T2[Math.floor(Math.random() * T2.length)];
                passwordinput.value += T4[Math.floor(Math.random() * T4.length)];
            }
        } else if (checkbox2.checked && checkbox3.checked) {
            for (i=0;i<inputRange.value / 3;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T2[Math.floor(Math.random() * T2.length)];
                passwordinput.value += T3[Math.floor(Math.random() * T3.length)];
            }
        } else if (checkbox1.checked && checkbox2.checked) {
            for (i=0;i<inputRange.value / 2;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T2[Math.floor(Math.random() * T2.length)];
            }
        } else if (checkbox1.checked) {
            for (i=0;i<inputRange.value / 2;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T4[Math.floor(Math.random() * T4.length)];
            }
        } else if (checkbox2.checked) {
            for (i=0;i<inputRange.value / 2;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T3[Math.floor(Math.random() * T3.length)];
            }
        } else if (checkbox3.checked) {
            for (i=0;i<inputRange.value / 2;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
                passwordinput.value += T2[Math.floor(Math.random() * T2.length)];
            }
        } else {
            for (i=0;i<inputRange.value;i++){
                passwordinput.value += T1[Math.floor(Math.random() * T1.length)];
            }
        }

        if (x < 5) {
            passworHistory.innerHTML += `<li> ${passwordinput.value} </li>`;
            x++
        } else {
            passworHistory.innerHTML = null;
            x=0;
        }
        
    })
