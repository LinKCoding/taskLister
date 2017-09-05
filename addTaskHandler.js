let taskCounter = 0

function addTaskHandler(addTask){
  let currentList = addTask.select_list.value /*list3 */
  let taskDescription = addTask.task_description.value /*task1 */
  let taskPriority = addTask.task_priority.value/*3 */

  for(let i = 0; i < giantList.length; i++){
    if (giantList[i] && Object.keys(giantList[i])[0] === currentList){
      giantList[i][currentList].push({name: taskDescription, priority: taskPriority})
      let element = document.createElement('li')
      element.id = `${currentList}${giantList[i][currentList].length-1}`
      element.innerHTML = `Name: ${taskDescription}, Priority: ${taskPriority}
      <button id=${currentList}-${giantList[i][currentList].length-1} class="decimate"> Delete </button>`
      taskCounter++
      let listToAppendTo = document.getElementById(`listsOfLists${i}`)
      listToAppendTo.children[1].appendChild(element)
    }

  }


}
