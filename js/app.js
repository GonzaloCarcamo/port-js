let projects_cards = document.querySelector('#projects_cards');
let spinner = document.querySelector('.spinner-border')

window.addEventListener('DOMContentLoaded', () => {
  projects_cards.style.display = 'none'

  setTimeout(function () {
    spinner.style.display = 'none'
    projects_cards.style.display = ''
  }, 1000)
})

async function setProjects() {
  const response = await fetch('https://desolate-waters-44255.herokuapp.com/');
  const projects = await response.json();
  return projects;
}
setProjects().then(projects => {



  for(i = 0; i < projects.data.length ; i++){

    let card_project = document.createElement('div')
    card_project.classList.add('card_project')

    let img_project = document.createElement('img')
    img_project.classList.add('img_project')
    img_project.setAttribute("src", projects.data[i].attributes.img)

    let text_project = document.createElement('p')
    text_project.classList.add('text_project')
    text_project.textContent = `
      ${projects.data[i].attributes.title}
      ${projects.data[i].attributes.desc}`

    let links_first = document.createElement('div')
    links_first.classList.add('links_first')

    let h5 = document.createElement('h5')
    h5.textContent = projects.data[i].attributes.category.title
    let h6 = document.createElement('h6')
    h6.textContent = `Level: ${projects.data[i].attributes.difficulty} / 5`

    let links_last = document.createElement('section')
    links_last.classList.add('links_last')

    let a = document.createElement('a')
    a.href = projects.data[i].attributes.link

    let button_project = document.createElement('button')
    button_project.classList.add('button_project')
    button_project.textContent = 'Proyect'

    projects_cards.appendChild(card_project)
    card_project.appendChild(img_project)
    card_project.appendChild(links_first)
    links_first.appendChild(h5)
    links_first.appendChild(h6)
    card_project.appendChild(text_project)
    card_project.appendChild(links_last)
    a.appendChild(button_project)
    links_last.appendChild(a)

  }

  
})


