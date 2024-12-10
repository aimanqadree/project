let i = 0;
var counter1 = document.getElementById("counter1")
const interval1 = setInterval(()=>{
    i+=1;
    counter1.textContent = `${i}+`
    if (i==500){
        clearInterval(interval1)
    }
},5)

let j = 0;
var counter2 = document.getElementById("counter2")
const interval2 = setInterval(()=>{
    j+=1;
    counter2.textContent = `${j}k+`
    if (j==100){
        clearInterval(interval2)
    }
},5)

let k = 0;
var counter3 = document.getElementById("counter3")
const interval3 = setInterval(()=>{
    k+=1;
    counter3.textContent = `${k}k+`
    if (k==200){
        clearInterval(interval3)
    }
},5)

let m = 0;
var counter4 = document.getElementById("counter4")
const interval4 = setInterval(()=>{
    m+=1;
    counter4.textContent = `${m}+`
    if (m==200){
        clearInterval(interval4)
    }
},5)




