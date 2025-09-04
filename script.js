document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".button1");

  
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});