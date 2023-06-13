// Q1 What is the DOM?
// Document Object Model
// Visual representation of the HTML built by the browser
// Q2 How do you listen and react to a DOM event?

// STEP 1 Select an element
const text = document.querySelector(".content")

// STEP 2 Add an event listener
text.addEventListener('click', (event) => {
  // STEP 3 Change the DOM
  event.currentTarget.innerHTML = "<h2>Awesome</h2>"
  // Q3 How do you add/remove a class on an element?
  text.classList.add("text_shadows")
})


