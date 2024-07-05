// // let btn =document.querySelector(".btn");  // select only first element of same name.

// let btn =document.querySelector(".btn");  // select all element of same class name.
// let btn5 = document.querySelector(".btn5");
// let btn6 = document.querySelector(".btn6");
// let bgClr = "def";
// // btn.onclick = () =>{
// //     console.log("hello");
// //     if (bgClr === "def") {
// //         document.querySelector(".btn1").style.backgroundColor="green";
// //         bgClr = "ondef";
// //     } else {
// //         document.querySelector(".btn1").style.backgroundColor="rgba(65, 65, 121, 0.861)";
// //         bgClr = "def";
// //     }
    
// // }


// //
// btn.addEventListener("mousedown", ()=>{
//     document.querySelector(".btn").style.backgroundColor="rgba(848, 844, 121, 0.95)";
// })

// btn.addEventListener("mouseup", ()=>{
//     document.querySelector(".btn").style.backgroundColor="rgba(65, 65, 121, 0.861)";
// })
// let calc = document.querySelector("input");

// btn5.addEventListener("click", () =>{
    
//     calc.innerHTML=btn5.value;
// })

// btn6.addEventListener("click", () =>{
    
//     calc.innerHTML=btn6.value;
// })



let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".btn");

let string = "";

let arr = Array.from(buttons);
arr.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})