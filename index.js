document.addEventListener("DOMContentLoaded", () => {
  const addList = document.getElementById('add_list')
  const newList = document.getElementById('list_title')
  const decimate = document.getElementById('list-of-lists');
  console.log(decimate);

  addList.addEventListener("submit", () => {
    event.preventDefault()
    addListHandler(newList)
  })

  decimate.addEventListener("click", () => {
    if(event.target.className === 'decimate') {
      debugger
      console.log(event.target);
      decimate.removeChild(decimate.querySelector(`button id = ${id}`))
    }

  })
//

})
