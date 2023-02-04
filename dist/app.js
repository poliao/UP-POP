const favButton = document.getElementById("fav-btn")
const body = document.body

/*favorite button event*/
let turnOn = false;

favButton.addEventListener('click' , ()=> {
    let star = document.getElementById("star-fav")
    let getSyle = favButton.style
    showBackdrop()
})

function showBackdrop() {
    //initialize
    let star = document.getElementById("star-fav")
    let getSyle = favButton.style
    let yesORno = "<span class= \" underline decoration-pink-500/50 decoration-4  underline-offset-2\">ใช่หรือไม่<span>"
    //new element
    let backdrop = document.createElement('div')
    let content = document.createElement('p')
    let confirm = document.createElement('input')
    let cancle = document.createElement('input')
    let card = document.createElement('div')
    let container = document.createElement('div')
    let _id = "backdrop"
    /* Backdrop */
    backdrop.id = _id
    backdrop.className = "bg-slate-900/60 w-full h-full inset-0 fixed flex flex-col items-center justify-center"

    /* Content */
    if(!turnOn){
        content.innerHTML = `คุณต้องการติดตามกิจกรรมนี้ ${yesORno}`
    
        confirm.setAttribute('type', "button")
        cancle.setAttribute('type', "button")
    
        confirm.value = "ใช่"
        cancle.value = "ไม่ใช่"
    
        let = arr = [confirm, cancle]
        arr.forEach(element => {
            element.className = "p-1 cursor-pointer" + " "//for a white space
        });
    
        confirm.className += "grow-[2] bg-green-500 rounded-md"
        cancle.className += "grow border-2 border-rose-700 rounded-md"
        /**Add event click */
        confirm.addEventListener('click', ()=> {
            body.removeChild(document.getElementById(_id))
            star.setAttribute("name", "star")
            getSyle.color = "rgba(251, 191, 36, 1)";
            getSyle.backgroundColor = "rgba(251, 191, 36, 0.6)"
            getSyle.opacity = "1"
            turnOn = true
        })
        cancle.addEventListener('click', ()=> {
            body.removeChild(document.getElementById(_id))
            star.setAttribute("name","star-outline")
            getSyle.color = "white";
            getSyle.backgroundColor = "rgba(255, 255, 255, 0.3)"
            getSyle.opacity = "0.8"
            turnOn = false
        })
        /**Contaner */
        
        container.className = "flex flex-row flex-2 w-full gap-2 mt-[12px]"
    
        container.appendChild(confirm)
        container.appendChild(cancle)
    
        /** Card */
        card.className = "self-center justify-self-center"
    }else {
        content.innerHTML = `ยกเลิกการติดตามกิจกรรมนี้ ${yesORno}`
    
        confirm.setAttribute('type', "button")
        cancle.setAttribute('type', "button")
    
        confirm.value = "ใช่"
        cancle.value = "ไม่ใช่"
    
        let = arr = [confirm, cancle]
        arr.forEach(element => {
            element.className = "p-1 cursor-pointer" + " "//for a white space
        });
    
        confirm.className += "grow-[2] bg-green-500 rounded-md"
        cancle.className += "grow border-2 border-rose-700 rounded-md"
        /**Add event click */
        confirm.addEventListener('click', ()=> {
            body.removeChild(document.getElementById(_id))
            star.setAttribute("name","star-outline")
            getSyle.color = "white";
            getSyle.backgroundColor = "rgba(255, 255, 255, 0.3)"
            getSyle.opacity = "0.8"
            turnOn = false
        })
        cancle.addEventListener('click', ()=> {
            body.removeChild(document.getElementById(_id))
            star.setAttribute("name", "star")
            getSyle.color = "rgba(251, 191, 36, 1)";
            getSyle.backgroundColor = "rgba(251, 191, 36, 0.6)"
            getSyle.opacity = "1"
            turnOn = true
        })
        /**Contaner */
        
        container.className = "flex flex-row flex-2 w-full gap-2 mt-[12px]"
    
        container.appendChild(confirm)
        container.appendChild(cancle)
    
        /** Card */
        card.className = "self-center justify-self-center"    
    }




    card.appendChild(content)
    card.appendChild(container)
    
    backdrop.appendChild(card)
    body.appendChild(backdrop)
}