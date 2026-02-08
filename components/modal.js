const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector(".modal-backdrop");
const openBtn = document.querySelector(".open-btn");
openBtn.addEventListener("click", function() {
    modal.classList.add("active");
});
closeBtn.addEventListener('click', function(){
    modal.classList.remove('active')
})
backdrop.addEventListener('click', function(){
    modal.classList.remove('active')
})
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
    }
});