const input = document.querySelector(".input")
const text = document.querySelector(".my-todo")
const form = document.getElementById("myForm")
const todonull = document.querySelector(".todonull") 
const e = document.querySelector("Event")

function Add(e){
    e.preventDefault();
    if(input.value === ""){
        alert("please enter a task")
    }
    else{
    
        let newEle = document.createElement("ul")
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-xmark"></i>` ;

        // appendChild matlap ham ooske ander daal rahe hai 
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove () {
            newEle.remove()
        } 
        console.log("Helo world")
        todonull.innerHTML="Your ToDo List....";
        
    }
   

}
form.addEventListener("submit",Add);
