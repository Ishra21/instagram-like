let box = document.querySelector(".box")
let like = document.querySelector("#like")
let heart = document.querySelector("#heart")
let comment = document.querySelector("#comment")
let send = document.querySelector("#send")
let save = document.querySelector("#save")
let love =document.querySelector('#love')
let p = document.querySelector("p")
let button = document.querySelector("button")


// box.addEventListener('click',function(){
//     like.style.transform = "scale(3)"
// })

count = 0;

const doubleClick = () =>{
    like.style.transform = "scale(3)"
    heart.style.color = "red"
   
    p.innerText = "likes" + " " + count++;
    setTimeout (() =>{
         like.style.transform = "scale(0)"
          heart.style.color = "black"
    },1000)
}

box.addEventListener("dblclick" , doubleClick)


const followbtn = ()=>{
     button.innerText = "follow"
}
button.addEventListener("click" , followbtn)



