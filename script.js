let container =  document.querySelector('.container')
const btn = document.querySelector('.btn')

container.style.cssText = "display:grid;"

const div1 = document.createElement('div')
div1.classList.add('div1')
div1.classList.add('grid-item1')
div1.textContent = "one"
container.appendChild(div1)

const div2 = document.createElement('div')
div2.classList.add('div2')
div2.classList.add('grid-item2')
div2.textContent = "two"
container.appendChild(div2)

const div3 = document.createElement('div')
div3.classList.add('div3')
div3.classList.add('grid-item3')
div3.textContent = "three"
container.appendChild(div3)

const div4 = document.createElement('div')
div4.classList.add('div4')
div4.classList.add('grid-item4')
div4.textContent = "four"
container.appendChild(div4)

const div5 = document.createElement('div')
div5.classList.add('div5')
div5.classList.add('grid-item5')
div5.textContent = "five"
container.appendChild(div5)


const div6 = document.createElement('div')
div6.classList.add('div6')
div6.classList.add('grid-item6')
div6.textContent = "six"
container.appendChild(div6)

const div7 = document.createElement('div')
div7.classList.add('div7')
div7.classList.add('grid-item7')
div7.textContent = "seven"
container.appendChild(div7)

const div8 = document.createElement('div')
div8.classList.add('div8')
div8.classList.add('grid-item8')
div8.textContent = "eight"
container.appendChild(div8)

const div9 = document.createElement('div')
div9.classList.add('div9')
div9.classList.add('grid-item9')
div9.textContent = "nine"
container.appendChild(div9)

const div10 = document.createElement('div')
div10.classList.add('div10')
div10.classList.add('grid-item10')
div10.textContent = "ten"
container.appendChild(div10)

const div11 = document.createElement('div')
div11.classList.add('div11')
div11.classList.add('grid-item11')
div11.textContent = "eleven"
container.appendChild(div11)

const div12 = document.createElement('div')
div12.classList.add('div12')
div12.classList.add('grid-item12')
div12.textContent = "twelve"
container.appendChild(div12)

const div13 = document.createElement('div')
div13.classList.add('div13')
div13.classList.add('grid-item13')
div13.textContent = "thirteen"
container.appendChild(div13)

const div14 = document.createElement('div')
div14.classList.add('div14')
div14.classList.add('grid-item14')
div14.textContent = "fourteen"
container.appendChild(div14)

const div15 = document.createElement('div')
div15.classList.add('div15')
div15.classList.add('grid-item15')
div15.textContent = "fifteen"
container.appendChild(div15)

const div16 = document.createElement('div')
div16.classList.add('div16')
div16.classList.add('grid-item16')
div16.textContent = "16"
container.appendChild(div16)

const div17 = document.createElement('div')
div17.classList.add('div17')
div17.classList.add('grid-item17')
div17.textContent = "one17"
container.appendChild(div17)

const div18 = document.createElement('div')
div18.classList.add('div18')
div18.classList.add('grid-item18')
div18.textContent = "one18"
container.appendChild(div18)

const div19 = document.createElement('div')
div19.classList.add('div19')
div19.classList.add('grid-item19')
div19.textContent = "one19"
container.appendChild(div19)

const div20 = document.createElement('div')
div20.classList.add('div20')
div20.classList.add('grid-item20')
div20.textContent = "one20"
container.appendChild(div20)

const div21 = document.createElement('div')
div21.classList.add('div21')
div21.classList.add('grid-item21')
div21.textContent = "one21"
container.appendChild(div21)

const div22 = document.createElement('div')
div22.classList.add('div22')
div22.classList.add('grid-item22')
div22.textContent = "one22"
container.appendChild(div22)

const div23 = document.createElement('div')
div23.classList.add('div23')
div23.classList.add('grid-item23')
div23.textContent = "one23"
container.appendChild(div23)

const div24 = document.createElement('div')
div24.classList.add('div24')
div24.classList.add('grid-item24')
div24.textContent = "one25"
container.appendChild(div24)

const div25 = document.createElement('div')
div25.classList.add('div25')
div25.classList.add('grid-item25')
div25.textContent = "one25"
container.appendChild(div25)

btn.addEventListener('click', chooseSquare)

function chooseSquare(){
    alert("How many squares do you want?")
    let length = prompt("Lenght: ....")
    let breadth =  prompt("Breadth: ....")
    container.replaceChildren();
}