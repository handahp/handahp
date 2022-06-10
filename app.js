const navLinks = document.querySelector(".nav-links")
const navBtn = document.querySelector(".nav-btn")

navBtn.addEventListener("click", () => {
    const visibility = navLinks.getAttribute("data-visible")
    if (visibility === "false") {
        navLinks.setAttribute("data-visible", true)
        navBtn.setAttribute("aria-expanded", true)
        navBtn.innerHTML = "<i class=\"fa-solid fa-xmark fa-xl\"></i>"
    } else {
        navLinks.setAttribute("data-visible", false)
        navBtn.setAttribute("aria-expanded", false)
        navBtn.innerHTML = "<i class=\"fa-solid fa-bars fa-xl\"></i>"
    }
})

navLinks.addEventListener("click", () => {
    navLinks.setAttribute("data-visible", false)
        navBtn.setAttribute("aria-expanded", false)
        navBtn.innerHTML = "<i class=\"fa-solid fa-bars fa-xl\"></i>"
})
