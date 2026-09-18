// const acc = document.querySelector('.accordion');
// const panel = document.querySelector('.panel');

// acc.addEventListener("click" , function() {
//           acc.classList.toggle("active");

//           if(panel.style.maxHeight) {
//                     panel.style.maxHeight = null;
//           }
//           else {
//                     panel.style.maxHeight = panel.scrollHeight + 'px'
//           }
// });


const accordions = document.querySelectorAll(".accordion");

accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    // Toggle active class on clicked accordion
    this.classList.toggle("active");

    // Get the panel associated with this accordion
    const panel = this.nextElementSibling;

    // Toggle panel max-height
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

