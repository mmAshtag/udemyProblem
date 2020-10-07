const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body:''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

//CRUD - Create, Read, Update, Delete
//C localStorage.setItem("location", "Johannesburg")
//R console.log(localStorage.getItem("location"))
//U localStorage.setItem("location", "update")
//D localStorage.removeItem('location') / localStorage.clear()

// localStorage.setItem('notes', JSON.stringify(notes))