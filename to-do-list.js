let data=document.getElementById("inp");
let text=document.querySelector(".text");
function Add(){
    if(data.value==""){
        alert("phele kuch likho to ..   ");
    }
    else{
        let new_element=document.createElement('ul');
        new_element.innerHTML=`${data.value}<sapn><i class="fa-solid fa-trash"></i></sapn>`;
        text.appendChild(new_element);
        new_element.querySelector("i").addEventListener("click",remov);
        data.value="";
        function remov(){
            new_element.remove();
        }
    }
}