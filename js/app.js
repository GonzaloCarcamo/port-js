let js_card = document.querySelector('#js_card');

async function setProjects() {
  const response = await fetch('https://polar-refuge-19232.herokuapp.com/');
  const projects = await response.json();
  return projects;
}
setProjects().then(projects => {



  for(i = 0; i < projects.data.length ; i++){

    let div1 = document.createElement('div')
    div1.classList.add('row')
    div1.classList.add('row-cols-1')
    div1.classList.add('row-cols-lg-3')
    div1.classList.add('row-cols-sm-2')
    div1.classList.add('row-cols-md-3')
    div1.classList.add('g-3')


    let div2 = document.createElement('div')
    div2.classList.add('col')

    let div3 = document.createElement('div')
    div3.classList.add('card')
    div3.classList.add('shadow-sm')


    let img = document.createElement('img')
    img.classList.add('card-img-top')
    img.setAttribute("src", projects.data[i].attributes.img)
    img.style.width = '100%'
    img.style.height = '225px'

    let div_body = document.createElement('div')
    div_body.classList.add('card-body')

    let p = document.createElement('p')
    p.classList.add('card-text')
    p.textContent = projects.data[i].attributes.desc

    let a = document.createElement('a')
    let button = document.createElement('button')
    a.href = projects.data[i].attributes.link
    button.textContent = 'Ver Proyecto'

    let span = document.createElement('span')
    

    a.appendChild(button)
    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(img)
    div3.appendChild(div_body)
    div_body.appendChild(p)
    div_body.appendChild(a)
    js_card.appendChild(div1)
  
  }

  
})


