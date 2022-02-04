/* Option 1 */
function toggleAccordion(num, totalAccordions) {

  for (let index = 0; index < totalAccordions; index++) {
    if (index + 1 === num) {
      continue;
    }
    document.getElementById(`accordion-${index + 1}`).classList.remove('accordion-toggled');

  }

  document.getElementById(`accordion-${num}`).classList.toggle('accordion-closed');
  document.getElementById(`accordion-${num}`).classList.toggle('accordion-toggled');
}

/* Option 2 */



/* Option 3 - W3Schools */
/* Issue with this one */
// var acc = document.getElementsByClassName("accordion-faq");
// var index;

// for (index = 0; index < acc.length; index++) {
//   acc[index].addEventListener("click", function () {
//     this.classList.toggle("accordion-toggled");
//     var accAnswer = this.nextElementSibling;
//     if (accAnswer.style.maxHeight) {
//       accAnswer.style.maxHeight = null;
//     } else {
//       accAnswer.style.maxHeight = accAnswer.scrollHeight + "px";
//     }
//   });
// }
