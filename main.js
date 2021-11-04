// Creo un array di oggetti avendo proprietà immagine, nome e ruolo 
const container = document.querySelector('.team-container');
const btn = document.getElementById('addMemberButton');

const obj = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        firstName: 'Wayne Barnett',
        job: 'Founder & CEO'
    },

    {
        image: 'img/angela-caroll-chief-editor.jpg',
        firstName: 'Angela Caroll',
        job: 'Chief Editor'
    },

    {
        image: 'img/walter-gordon-office-manager.jpg',
        firstName: 'Walter Gordon',
        job: 'Office Manager'
    },

    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        firstName: 'Angela Lopez',
        job: 'Social Media Manager'
    },

    {
        image: 'img/scott-estrada-developer.jpg',
        firstName: 'Scott Estrada',
        job: 'Developer'
    },

    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        firstName: 'Barbara Ramos',
        job: 'Graphic Designer'
    }

]

// console.log(obj);

for(let index in obj){
    const card = obj[index];

    console.log(card);

    const cardImg = card.image;
    const cardName = card.firstName;
    const cardJob = card.job;

    container.innerHTML +=
    `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${cardImg}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${cardName}</h3>
              <p>${cardJob}</p>
            </div>
          </div>
    `

}


