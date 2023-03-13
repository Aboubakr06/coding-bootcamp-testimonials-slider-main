// Select the arrow links
const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');

// Select all elements with class "one" and "two"
const ones = document.querySelectorAll('.one');
const twos = document.querySelectorAll('.two');

// Add an event listener to the right arrow link
rightArrow.addEventListener('click', () => {
  ones.forEach((one) => {
    one.classList.add('hidden');
    one.classList.remove('grid');
  });

  twos.forEach((two) => {
    two.classList.remove('hidden');
    two.classList.add('grid');
  });
});

// Add an event listener to the left arrow link
leftArrow.addEventListener('click', () => {

  ones.forEach((one) => {
    one.classList.remove('hidden');
    one.classList.add('grid');
  });

  twos.forEach((two) => {
    two.classList.add('hidden');
    two.classList.remove('grid');
  });
});
