const entryBox = document.getElementById("entryBox")
const note = document.querySelector("#noteArea")
const notepad = document.getElementById("notepad")
const notepadNav = document.querySelector("#notepadNav")

let count = 1

function addNote(event) {
    event.preventDefault()
    const newNote = document.createElement("div")
    newNote.className = "singleNote"
    newNote.innerText = note.value
    newNote.style.display = "none"
    notepad.appendChild(newNote)
    note.value = " "

    const btn = document.createElement("button")
    btn.className = "notePage"
    btn.innerText = count
    notepadNav.appendChild(btn)

    btn.addEventListener("click", function() {
        const allNotes = document.querySelectorAll(".singleNote")
        for (let i = 0; i < allNotes.length; i++) {
            allNotes[i].style.display = "none"
        }
        newNote.style.display = "block"
    })

    count++

}

entryBox.addEventListener("submit", addNote)