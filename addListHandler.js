let counter = 0

function addListHandler(input) {
  event.preventDefault()

  let newObj = { [input.value] : [] }
  giantList.push(newObj)

  let element = document.createElement('li')
  let olelement = document.createElement('ul')
  element.id = `listsOfLists${counter}`
  element.innerHTML = `${input.value}
    <button id=${counter} class="decimate"> Delete </button>`
  let listsOfLists = document.getElementById("list-of-lists")
  listsOfLists.appendChild(element)
  element.appendChild(olelement)
  counter++
}
