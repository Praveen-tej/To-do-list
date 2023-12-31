window.alert("Hello guys, Welcome to my To-do list");
let myForm = document.getElementById("myForm")
let myInput = document.getElementById("myInput")
let myList = document.getElementById("myList")
myForm.addEventListener("submit", (data) => {
    data.preventDefault()
    createItem(myInput.value);
})
createItem = (d) => {
    let myTemplate = `<li>${d}<button class="button2" onClick = "deleteItem(this)">Delete</button></li>`
    myList.insertAdjacentHTML("beforeend", myTemplate)
    myInput.value = ""
    myInput.focus()
}
function deleteItem(x) {
    x.parentElement.remove()
}