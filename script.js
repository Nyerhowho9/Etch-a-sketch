let btn = document.querySelector('.btn')

let size;
function gridMaker(size){
    let container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gap = '2px';

    let totalDiv = (size * size )+1;
    for (let i = 2; i <=totalDiv; i++) {
        let squares = document.createElement('div');
        squares.classList.add("squares");
        squares.style.cssText = 'background-color :blue;';
        container.insertAdjacentElement('beforeend', squares);
        
        squares.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = 'pink';
         setTimeout(()=>{event.target.style.backgroundColor = "cadetblue";}, 400)
       })  
    }
}
gridMaker(10);

btn.addEventListener('click', ()=>{  
    if(length = prompt("Input the size of your board")){
        if(length <=100){
            gridMaker(length)
        }else{
            alert("Please int=put a lower number")
        }
    }
       
})