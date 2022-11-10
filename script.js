const form = document.getElementById("quiz-form")
const answer = Array.from(document.querySelectorAll(".answer"))
const alert = document.querySelector("#alert")
const questionItems = document.querySelectorAll(".question-item")



//prevent default behaviour 

form.addEventListener("submit", e => {
    e.preventDefault()


  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
const checkedAnswers = answer.filter(answer => answer.checked) //we are using the checked property to see the what answers have been selected


//3 loop through each answer to see if they are correct 

checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === "true" //we're getting the value property (see HTML) and checking to see if its equal to string of true

    const questionItem = answer.closest(".question-item")


//4//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.

if (isCorrect) {
questionItem.classList.add("correct")
questionItem.classList.remove("incorrect")
} else {
questionItem.classList.add("incorrect")
questionItem.classList.remove("correct")
}


    //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

const allTrue = checkedAnswers.every(answer => answer.value === "true")

const allAnswered = checkedAnswers.length === questionItems.length

if (allTrue && allAnswered) {

      alert.classList.add("active")
      setTimeout(() => {
        alert.classList.remove("active")
      }, 1000);


} else{
    alert1.classList.add("active")
    setTimeout(() => {
        alert1.classList.remove("active")
      }, 1000)
}



})




})