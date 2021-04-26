var task = document.querySelector("#task"); 
var ekle = document.querySelector("#liveToastBtn");
var liste = document.querySelector("#list");
var removeId=6;
var checked=document.querySelectorAll("li")

for(let i=0;i<checked.length;i++){
   checked[i].addEventListener("click",checkedItem);

   function checkedItem(){
    if(checked[i].className=="checked"){
        checked[i].classList.remove("checked");
    }
    else{
        checked[i].classList.add("checked");
    }
}
}


function newElement(){
    var li=document.createElement("li");

    if(task.value===""){
        $(document).ready(function(){
            $('#liveToast2').toast('show'); 
          });
    }
    else{
        li.innerHTML=`${task.value}<span id='${removeId}' onclick='removeTodo(id)' class='close'">&times;</span>`;
        liste.appendChild(li);
        li.addEventListener("click",checkedItem);
        task.value = "";
        $(document).ready(function(){
            $('#liveToast').toast('show'); 
          });
          removeId++;
    }

    function checkedItem(){
        if(li.className=="checked"){
            li.classList.remove("checked");
        }
        else{
            li.classList.add("checked");
        }
      
    }
    
}


function removeTodo(id){
    var removeItem=document.getElementById(id);
    removeItem.parentElement.remove();
}
