let increment = document.querySelector('.inc') ;
let decrement = document.querySelector('.dec') ;
let counter = document.querySelector('.count') ;
let reset = document.querySelector('.reset') ;
let stepCount = document.querySelector('#stepCount') ;

increment.addEventListener('click' , function(e){
    let num = parseInt(counter.innerText) ;
    let step = parseInt(stepCount.value) ;
    counter.innerText = num + step ;
})

decrement.addEventListener('click' , function(e){

    let num = parseInt(counter.innerText) ;
    let step = parseInt(stepCount.value) ;
    counter.innerText = num - step ;
})

reset.addEventListener('click' , function(e){
    counter.innerText = 0 ;
})