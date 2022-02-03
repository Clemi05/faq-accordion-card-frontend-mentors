function toggleAccordion(num, totalAccordions) {

  for (let index = 0; index < totalAccordions; index++) {
    if (index + 1 === num) {
      continue;
    }
    document.getElementById(`accordion-${index + 1}`).classList.remove('accordion-toggled');
  }

  document.getElementById(`accordion-${num}`).classList.toggle('accordion-toggled');
}
