// start navbar

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll" ,()=> {
    if(window.scrollY > navbar.clientHeight) {
        navbar.style = "background-color:rgba(0, 0, 0, 0.9)"
    }else {
        navbar.style = "background-color:none"
    }
})

let dropDown = document.querySelector(".dropdown");
let dropDownMenu = document.querySelector(".dropdown-menu")


dropDown.addEventListener('mousemove',()=> {
    dropDownMenu.style = "display:block"
})
dropDown.addEventListener("mouseleave",()=> {
    dropDownMenu.style = "display:none"
})


// end navbar



// start fact 

let fact = document.querySelector(".fact")
let h1First = document.querySelector(".fact .container .first")
let h1Second = document.querySelector(".fact .container .second")
let h1Third = document.querySelector(".fact .container .third")
let h1Fourth = document.querySelector(".fact .container .fourth")

    window.addEventListener('scroll' , ()=> {
        if(window.scrollY == fact.clientHeight + "20px") {
            go()
        }
    })


function go() {
    let one = setInterval(()=> {
        let o = h1First.textContent++
        if(o === 273) {
            clearInterval(one)
            h1First.textContent = "0"
        }
    },5)

    let two = setInterval(()=> {
        let t = h1Second.textContent++
        if(t === 420) {
            clearInterval(two)
            h1Second.textContent = "0"
        }
    },5)

    let three = setInterval(()=> {
        let r = h1Third.textContent++
        if(r === 1363) {
            clearInterval(three)
            h1Third.textContent = "0"

        }
    },5)
    let four = setInterval(()=> {
        let f = h1Fourth.textContent++
        if(f === 17) {
            clearInterval(four)
            h1Fourth.textContent = "0"
        }
    },5)

}

go()

// end fact 

// start portfolio






// end portfolio

// start clients
let left = document.querySelector(".clients  .icon .left")
let right = document.querySelector(".clients .container .icon .right")
let divImages = document.querySelector(".clients .slide .images")
let images = document.querySelectorAll(".clients .slide .images img")



right.addEventListener("click",()=> {
    divImages.style = "transform : translateX(200px)"
})
console.log(right1)
// end clients

////////////////////////////////////////////
// let x =  {'object object' : 456 }
// // let a = {name:"a"}  'object object'
// // let b = {name:"b"}  'object object'
// x[a] = 123
// x[b] = 456
// console.log(x[a]);
// 456

// var  x = 10 ;
// console.log(x);
// var x = 20;

///////////////////////
// function test(){
//     var x = undefined;
//     var x = 20
//     console.log(x);
// }
// test()





