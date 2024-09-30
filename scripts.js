document.querySelector('.scroll-to-top').addEventListener('click', scrollToTop);

const header = document.querySelector(".header-container");
const toggleScroll = "sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 150) {
    header.classList.add(toggleScroll);
  } else {
    header.classList.remove(toggleScroll);
  }
});


let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let projects = [
    {
        title: 'Sporting Events Management System',
        description: 'A sporting events management system that streamlines interactions between athletes and coaches. The backend, built with an ASP.NET Core Web API and hosted in a Docker container, enables coaches to manage events for athletes. The frontend, developed with TypeScript and React, allows athletes to view their assigned events.',
        images: [
            'img/spaapp_1.png',
            'img/spaapp_2.png',
            'img/spaapp_3.png',
            'img/spaapp_4.png',
            'img/spaapp_5.png',
            'img/spaapp_6.png',
            'img/spaapp_7.png'
        ],
        technologies: ['img/html.png', 'img/css.png', 'img/react.png', 'img/typescript.png', 'img/net-core.png', 'img/docker.png']
    },
    {
        title: 'Game Key Store',
        description: 'A school group project still in development: <br> A mobile-optimized game key reselling website. <br> The backend runs in a Docker container with an ASP.NET Core Web API for user authentication and key management, built with C# on .NET 8. The frontend, developed in TypeScript and React, provides a responsive mobile experience.',
        images: ['img/key_home.jpg'],
        technologies: ['img/html.png', 'img/css.png', 'img/react.png', 'img/typescript.png', 'img/net-logo.png', 'img/c_sharp.png'],
    },
    {
        title: 'Open-source School Management System',
        description: 'An open-source school management system being developed for my final thesis with a classmate. The tech stack is still to be determined, utilizing agile methods and tools like Jira and Figma for project management and design. The frontend is built with TypeScript and React to enhance the educational experience for students and administrators.',
        images: [],
        technologies: ['img/html.png', 'img/css.png', 'img/react.png', 'img/typescript.png'],
    },
]

const projectContainer = document.getElementById('projects-container');

projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    let imagesHTML = '';

    if (project.images.length > 0 ) {
        imagesHTML = `
            <div id="projectCarousel${index + 1}" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                ${project.images
                  .map((img, i) => `
                    <div class="carousel-item ${i === 0 ? 'active' : ''} project-img">
                      <img class="d-block w-100" src="${img}" alt="Project Image ${i + 1}">
                    </div>
                  `)
                  .join('')}
              </div>
              <a class="carousel-control-prev" href="#projectCarousel${index + 1}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#projectCarousel${index + 1}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        `;
    } else {
        imagesHTML = `<p style="margin-top: 2em; font-size: 2em; margin-bottom: 3em;"><i>Coming Soon</i></p>`;
    } 
    
    const projectInfo = `
    <div class="project-info">
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies
          .map((tech) => `<img src="${tech}" alt="Technology" />`)
          .join('')}
      </div>
    </div>
  `;

  projectDiv.innerHTML = `${imagesHTML}${projectInfo}`;
  projectContainer.appendChild(projectDiv);
});
