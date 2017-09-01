let counter = 0

function addListHandler(input) {
  event.preventDefault()
  let element = document.createElement('li')
  element.innerHTML = `${input.value}
    <button id=${counter} class="decimate"> Delete </button>`
  let listsOfLists = document.getElementById("list-of-lists")
  listsOfLists.appendChild(element)
  counter++
  // let delete = document.getElementById('destroy')
  // // console.log(delete)
}

function deleteThis() {

}
