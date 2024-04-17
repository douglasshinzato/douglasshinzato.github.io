const mobileMenuButton = document.querySelector(".mobileMenuButton")
const mobileMenu = document.querySelector(".mobile-menu")
mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.toggle("is-active")
  mobileMenu.classList.toggle("is-active")
})
