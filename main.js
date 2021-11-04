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


for(let index in obj){
    const card = obj[index];

    const cardImg = card.image;
    const cardName = card.firstName;
    const cardJob = card.job;


    console.log(obj);

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


    btn.addEventListener('click', function(){
        const namePush = document.getElementById('name').value;
        const rolePush = document.getElementById('role').value;
        const imgPush = document.getElementById('image').value;

        console.log(obj);
        const newObj = 
        {
            image: imgPush,
            firstName: namePush,
            job: rolePush
        };

        obj.push(newObj);
    });




