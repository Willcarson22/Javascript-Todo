var items = document.getElementsByTagName("li");

function addTask () {
  
  var newTask = document.getElementById("task").value;

    if (newTask == "") {
      return
    }

    else {
      var newItem = document.createElement("li");
      newItem.innerHTML = newTask;
      document.getElementsByTagName("ul")[0].prepend(newItem);
      document.getElementById("task").value = "";

      var span = document.createElement("span");
      span.className = "item-buttons";
      newItem.appendChild(span);

      addEditButton(span);
      addDeleteButton(span);
      
      newItem.onclick = function (e) {
    
        if (e.target !== e.currentTarget) {
          return;
        }
        
        else {
          this.classList.toggle("checked");
        }
      }
    }
  
}


function addDeleteButton (e) {
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&#x2715";
  deleteButton.className = "delete";
  deleteButton.onclick = function () {this.closest("li").remove()};
  e.appendChild(deleteButton);
}

function addEditButton (e) {
  var editButton = document.createElement("button");
  editButton.innerHTML = "&#128393;";
  editButton.className = "edit";
  editButton.onclick = function () {
    this.closest("li").childNodes[0].nodeValue = prompt("Edit item:", this.closest("li").childNodes[0].nodeValue);
  }
  e.appendChild(editButton);
}

function deleteAllItems () {
  var itemList = document.getElementsByTagName("ul")[0];
  while (itemList.firstChild) {
    itemList.firstChild.remove();
  }
}



// more css/ button work
//while for loop to opitimize code?

