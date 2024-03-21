// this is our team members array:
const team =[ {
    name: 'Wayne Barnett',
    role:   'Founder & CEO',
    avatar: ' ./img/wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Angela Caroll',
    role:   'Chief Editor',
    avatar: './img/angela-caroll-chief-editor.jpg'
}, 
{
    name: 'Walter Gordon',
    role:   'Office Manager',
    avatar: ' ./img/walter-gordon-office-manager.jpg'
}, 
{
    name: 'Angela Lopez',
    role:   'Social Media Manager',
    avatar: ' ./img/angela-lopez-social-media-manager.jpg'
}, 
{
    name: 'Scott Estrada',
    role:   'Developer',
    avatar: ' ./img/scott-estrada-developer.jpg'
}, 
{
    name: 'Barbara Ramos',
    role:   'Graphic Designer',
    avatar: ' ./img/barbara-ramos-graphic-designer.jpg'
}, 
];

// here we print on console name, role and avatar for each team member:
for (let key of team) {
    console.log(key.name, key.role, key.avatar);
};

createList();

// here we print our list 
function createList(){
    const elContainer = document.getElementById('contenitore');
    const eldiv = document.createElement('div');
    eldiv.classList.add('row','d-flex', 'justify-content-center')
    elContainer.appendChild(eldiv);
    // for the lenght of our array we do a print into our HTML:
    for (let i = 0; i < team.length; i++) {
        const elCard = document.createElement('div');
        elCard.classList.add('col-3','bg-white','text-center','card', 'mt-3', 'ms-4');
        const elImg = document.createElement('img');
        elImg.src = team[i].avatar;
        elCard.innerHTML =`
        <div class="card-body bg-white">
        <img src="${team[i].avatar}" alt="">
        <p> ${team[i].name}, 
        <br>
        ${team[i].role} 
        </p>
        </div>
        `;
    // here we print the avatars into our "elCard"
    eldiv.appendChild(elCard); //here we do the print on the HTML
    }
};