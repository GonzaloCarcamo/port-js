const render_about = document.querySelector('#render_about')
const render_projects = document.querySelector('#render_projects')

const about_link = document.querySelector('#about-link')
const projects_link = document.querySelector('#projects-link')
const title = document.querySelector('#title')
const nav = document.querySelector('#navbarHeader')

window.addEventListener('DOMContentLoaded', (event) => {
  title.textContent = 'Sobre Mí'
  render_projects.style.display = 'none'
});

about_link.addEventListener("click", () => {
  title.textContent = 'Sobre Mí'
  render_about.style.display = 'block'
  render_projects.style.display = 'none'
})

projects_link.addEventListener("click", () => {
  title.textContent = 'Proyectos'
  render_projects.style.display = 'block'
  render_about.style.display = 'none'
})