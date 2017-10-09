//jshint esnext:true
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoList = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let removeTask = document.createElement('input');
    removeTask.type = "button";
    removeTask.value = "Delete"
    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(removeTask);
    toDoList.appendChild(newLi);
    newToDoList.value = '';

  removeTask.addEventListener('click', function(e) {
    newLi.parentNode.removeChild(newLi);
    newLi.appendChild(removeTask);
  });


  });

}

window.onload = function() {
  onReady();
};
