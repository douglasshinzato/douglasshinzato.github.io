// const mobileMenuButton = document.querySelector(".mobileMenuButton")
// const navBar = document.querySelector(".nav-bar")
// mobileMenuButton.addEventListener("click", () => {
//   mobileMenuButton.classList.toggle("is-active")
//   navBar.classList.toggle("is-active")
// })
// Add this script to your HTML file
const mobileMenuButton = document.querySelector(".mobileMenuButton")
const navBarUl = document.querySelector(".nav-bar ul")

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.toggle("is-active")
  navBarUl.classList.toggle("active")
})
