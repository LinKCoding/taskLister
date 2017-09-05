giantList = []

document.addEventListener("DOMContentLoaded", () => {

  const addList = document.getElementById('add_list')
  const newList = document.getElementById('list_title')
  const listsOfLists = document.getElementById('list-of-lists');
  const addTask = document.getElementById("add_task")
  console.log(addList);
  console.log(newList);

  addList.addEventListener("submit", () => {
    event.preventDefault()
    addListHandler(newList)
    addTask.hidden = false
    selectionHandler(addTask, newList)
  })

  listsOfLists.addEventListener("click", function() {
    if(event.target.className === 'decimate') {
      delete giantList[event.target.id]
      this.removeChild(this.children[event.target.id])
      selectionHandler(addTask, newList)
    }
  })

})
