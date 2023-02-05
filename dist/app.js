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

//bg-slate-200/50 hover:shadow-lg hover:shadow-black/25 w-fit px-2 rounded-full self-end  text-white

allFavBtn.forEach((element) => {
    
    element.addEventListener('click', ()=> {
        if(element.id == "fav-btn-1"){
            element.className = "bg-black/25 hover:shadow-lg hover:shadow-black/25 w-fit px-2 rounded-full self-end  text-amber-400 text-5xl border-2 border-white/50"
            
        }else if(element.id != "fav-btn-1") {
            element.className = "bg-black/25 hover:shadow-lg hover:shadow-black/25 w-fit px-2 rounded-full self-end  text-amber-400 border-2 border-white/50"
        }

        element.children[0].setAttribute('name', 'star')

        let nodeList = element.children
        console.log(nodeList);
    })
})
