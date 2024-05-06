let plus = document.querySelector("#decrement")
let minus = document.querySelector("#increment")
let word = document.querySelector("#text")
let counter = 0

plus.addEventListener('click', (e)=>{
    counter += 1
    word.innerHTML = counter
})

minus.addEventListener('click', (e)=>{
    counter -= 1
    word.innerHTML = counter
})