function addTaskHandler(addTask){
  let currentList = addTask.select_list.value /*list3 */
  let taskDescription = addTask.task_description.value /*task1 */
  let taskPriority = addTask.task_priority.value/*3 */

  for(let i = 0; i < giantList.length; i++){
    if (Object.keys(giantList[i])[0] === currentList){
      giantList[i][currentList].push({name: taskDescription, priority: taskPriority})
      let element = document.createElement('li')
      element.innerHTML = `Name: ${taskDescription}, Priority: ${taskPriority}`
      let listToAppendTo = document.getElementById(`listsOfLists${i}`)
      listToAppendTo.children[1].appendChild(element)
    }

  }


}
