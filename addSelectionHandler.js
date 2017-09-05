function selectionHandler(addTask, newList) {

  let options = ""

  for(let i = 0; i < giantList.length; i++) {
    if(giantList[i]) {
      options += `<option> ${Object.keys(giantList[i])} </option>`
    }
  }
  addTask.children["select_list"].innerHTML = options

}
