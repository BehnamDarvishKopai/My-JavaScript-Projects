const myBtn = document.querySelector(".ctrlbtn");
const mySidebar = document.querySelector(".sidebar");

myBtn.addEventListener("click" , function() {
           mySidebar.classList.toggle('show');
           myBtn.classList.toggle('open');
})
