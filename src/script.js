let submit=document.getElementById("submit")
let addList=document.getElementById("addList")
let todoList=document.getElementById("todo")
let completed=document.getElementById("completed")
let list=new Array()

submit.addEventListener('click',(event)=>{
    if(addList.value!=''){
        list.push(addList.value)
        todoList.innerHTML+=`<li id="${list.length-1}" class="text-xl font-semibold  py-3 px-3 mt-3 bg-linear-to-r from-pink-400 to-fuchsia-400 rounded-2xl max-sm:w-[80%] w-[30%] max-md:w-[60%] max-lg:w-[50%] flex justify-between items-center">${addList.value}<span><i class="fa-solid fa-check-to-slot ml-3 font-bold text-2xl  hover:cursor-pointer "onclick='add(${list.length-1})'></i><i class="fa-solid fa-trash ml-5 hover:cursor-pointer text-2xl" onclick='remove(${list.length-1})' ></i></span></li>`
        addList.value=''
    }

})
document.addEventListener('keypress',(event)=>{
   if(event.key==='Enter'){
    if(addList.value!=''){
        list.push(addList.value)
        todoList.innerHTML+=`<li id="${list.length-1}" class="text-xl font-semibold py-3 px-3 mt-3 bg-linear-to-r from-pink-400 to-fuchsia-400 rounded-2xl max-sm:w-[80%] w-[30%] max-md:w-[60%] max-lg:w-[50%] flex justify-between items-center">${addList.value}<span><i class="fa-solid fa-check-to-slot ml-3 font-bold text-2xl  hover:cursor-pointer "onclick='add(${list.length-1})'></i><i class="fa-solid fa-trash ml-5 hover:cursor-pointer text-2xl" onclick='remove(${list.length-1})' ></i></span></li>`
        addList.value=''
    }
   } 
})

function add(id){
    completed.innerHTML+=`<li class="text-xl font-semibold  py-3 px-3 mt-3 bg-linear-to-r from-pink-400 to-fuchsia-400  rounded-2xl max-sm:w-[80%] w-[30%] max-md:w-[50%] max-lg:w-[50%] flex justify-between items-center">${list[id]}<i class="fa-solid fa-trash ml-5 hover:cursor-pointer text-2xl " onclick='del(event)'></i></li>`
    document.getElementById(id).style.display="none"
}
function remove(id){
    document.getElementById(id).style.display="none"
}
function del(event){
    let addedElememt=event.target.parentElement
    addedElememt.parentNode.removeChild(addedElememt)
}
