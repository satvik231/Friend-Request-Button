var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
// var Remove = document.querySelector("#remove")
var flag = 0
btn.addEventListener("click",()=>{
    if(flag==0){
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        btn.innerHTML= "Remove Friend"
        flag=1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag=0
    }
})

// Remove.addEventListener("click",()=>{
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })
