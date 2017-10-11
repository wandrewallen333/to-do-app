//jshint esnext:true
function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const removeTask = document.createElement('input')

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return }
    toDos.push ({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';
    renderTheUI(toDos);
  }


  function renderTheUI(toDos) {
    const todoList = document.getElementById('toDoList')
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const removeTask = document.createElement('input')
      removeTask.type = "button";
      removeTask.value = "Delete";
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(removeTask);
    });
  }



  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });


  renderTheUI(toDos);
}


window.onload = function() {
  onReady();
};
