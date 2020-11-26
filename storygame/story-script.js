 const wordPool = ["but", "but", "since", "although", "despite", "but", "while", "while", "despite", "The dog", "He", "She", "It", "is", "was", "is", "was", "is", "was", "is", "was", "He", "She", "It", "is", "was", "He", "She", "It", "is", "was", "sad", "lonely", "happy", "alone", "cheerful", "silent", "crying", "singing", "laughing", "shouting", "running", "sitting", "watching", "dancing", "on the bench", "in the park", "on the beach", "in the forest", "by the lake", "when", "while", "that", "however"]

 var story = []

 function getaNewWord() {
     var randomWord = document.getElementById("randomWordBox")
     var wordNumber = Math.floor(Math.random() * wordPool.length)
     var newRandomWord = wordPool[wordNumber]
     randomWord.innerText = newRandomWord
     counter()
 }

 function add2beg() {
     var newRandomWord = document.getElementById("randomWordBox").innerText
     story.unshift(newRandomWord)
     let storyBox = document.getElementById("storyBox")
     storyBox.innerText = ""
     for (i = 0; i < story.length; i++) {
         storyBox.append(story[i] + " ")
     }
 }

 function add2end() {
     var newRandomWord = document.getElementById("randomWordBox").innerText
     story.push(newRandomWord)
     let storyBox = document.getElementById("storyBox")
     storyBox.innerText = ""
     for (i = 0; i < story.length; i++) {
         storyBox.append(" " + story[i])
     }
 }

 function rembeg() {
     var newRandomWord = document.getElementById("randomWordBox").innerText
     story.shift(newRandomWord)
     let storyBox = document.getElementById("storyBox")
     storyBox.innerText = ""
     for (i = 0; i < story.length; i++) {
         storyBox.append(story[i])
     }
     counter()
 }

 function remend() {
     var newRandomWord = document.getElementById("randomWordBox").innerText
     story.pop(newRandomWord)
     let storyBox = document.getElementById("storyBox")
     storyBox.innerText = ""
     for (i = 0; i < story.length; i++) {
         storyBox.append(story[i])
     }
     counter()
 }

 function counter() {
     var count = document.getElementById("counter").textContent
     count = +count + 1
     document.getElementById("counter").textContent = count
 }

 function reset() {
     location.reload()
 }

 document.getElementById("nw-btn").addEventListener("click", getaNewWord)
 document.getElementById("ab-btn").addEventListener("click", add2beg)
 document.getElementById("ae-btn").addEventListener("click", add2end)
 document.getElementById("rb-btn").addEventListener("click", rembeg)
 document.getElementById("re-btn").addEventListener("click", remend)
 document.getElementById("reset").addEventListener("click", reset)