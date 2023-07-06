const input = document.getElementById("input");
const lists = document.querySelector(".lists");

function addcontent() {
    if (input.value === '') {
        alert("You must enter something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lists.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    input.value = '';
    saveData()
}
function saveData(){
    localStorage.setItem("data",lists.innerHTML)
}
function showData(){
    lists.innerHTML=localStorage.setItem("data");
}
showData();