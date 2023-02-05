const myBody = document.body

//#cardA-1, #cardA-2, #cardA-3, #cardB-1, #cardB-2, #cardB-3

const allElementCard = [
    document.getElementById("cardA-1"),
    document.getElementById("cardA-2"),
    document.getElementById("cardA-3"),
    document.getElementById("cardB-1"),
    document.getElementById("cardB-2"),
    document.getElementById("cardB-3"),
]

const allFavBtn = [
    document.getElementById("fav-btn-1"),
    document.getElementById("fav-btn-2"),
    document.getElementById("fav-btn-3"),
    document.getElementById("fav-btn-4"),
    document.getElementById("fav-btn-5"),
    document.getElementById("fav-btn-6"),
]

document.querySelectorAll(".hit").forEach((element) => {
    element.addEventListener('click', ()=> {
        window.open("https://www.google.com/", "_self")
    })
})

let canChange = false
//bg-slate-200/50 hover:shadow-lg hover:shadow-black/25 w-fit px-2 rounded-full self-end  text-white
//<ion-icon name="star"></ion-icon>
allFavBtn.forEach((element) => {
    
    element.addEventListener('click', ()=> {

        if(element.id == "fav-btn-1" && canChange){
            element.className = "bg-amber-300/50 hover:shadow-lg hover:shadow-black/25 w-fit px-2 rounded-full self-end  text-amber-300 text-5xl"
            element.children[0].setAttribute('name', 'star')
        }else if(element.id != "fav-btn-1" && canChange) {
            element.className = "bg-amber-300/50 hover:shadow-lg hover:shadow-black/25 w-fit px-2 rounded-full self-end  text-amber-300"
            element.children[0].setAttribute('name', 'star')
        }
        let nodeList = element.children
        
        

        console.log(nodeList);
    })
})
