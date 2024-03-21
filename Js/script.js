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
    avatar: ' ./img/wayne-barnett-founder-ceo.jpg'
}, 
{
    name: 'Angela Lopez',
    role:   'Social Media Manager',
    avatar: ' ./img/wayne-barnett-founder-ceo.jpg'
}, 
{
    name: 'Scott Estrada',
    role:   'Developer',
    avatar: ' ./img/wayne-barnett-founder-ceo.jpg'
}, 
{
    name: 'Barbara Ramos',
    role:   'Graphic Designer',
    avatar: ' ./img/wayne-barnett-founder-ceo.jpg'
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
    const elUl = document.createElement('ul');
    const elLi = document.createElement('li');
    elContainer.appendChild(elUl);
    // for the lenght of our array we do a print into our HTML:
    for (let i = 0; i < team.length; i++) {
        const elLi = document.createElement('li');
        const elImg = document.createElement('img');
        elImg.src = team[i].avatar;
        elLi.innerHTML =`
        Name: ${team[i].name},
        Role: ${team[i].role},
    `
    elLi.appendChild(elImg);// here we print the avatars into our "elLI"
    elUl.appendChild(elLi); //here we do the print on the HTML
    }
};