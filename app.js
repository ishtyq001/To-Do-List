const inputBox=document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
      alert("You must write something!");
    }
    else{
      let li= document.createElement("li");
      //li stores the text inside the box
      //li is displayed under list-container<html wala>

      li.innerHTML=inputBox.value;
      listContainer.appendChild(li);
      let span= document.createElement("span");
      //for the cross icon
      span.innerHTML="\u00d7";
      li.appendChild(span);

    }
    //because we need to clear the input box one the value is entered
    inputBox.value="";
    //to save data
    saveData();

}

listContainer.addEventListener("click",function(e){
  //fist it will check where we have clicked
  //if we have clicked on LI then it will add the checked class name
  //and if the checked class name is already there it will remove that
  //because we have added class list.toggle from the target element if the clicked
  //target element is LI
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  //if we have clicked on LI then it will delete the parent element
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

//so that value doesn't get lost when we refresh the data
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML=localStorage.getItem("data");

}
showTask();