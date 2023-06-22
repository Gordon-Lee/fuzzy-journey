function toggleMode() {
  const html = document.documentElement
  const img = html.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatarLight.png")
    img.setAttribute("alt", "light")
  } else {
    img.setAttribute("src", "./Assets/avatarDark.png")
    img.setAttribute("alt", "dark")
  }
}
