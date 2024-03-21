// this is our team members array:
const team =[ {
    name: 'Wayne Barnett',
    role:   'Founder & CEO',
    avatar: ' wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Angela Caroll',
    role:   'Chief Editor',
    avatar: 'angela-caroll-chief-editor.jpg'
}, 
{
    name: 'Walter Gordon',
    role:   'Office Manager',
    avatar: ' wayne-barnett-founder-ceo.jpg'
}, 
{
    name: 'Angela Lopez',
    role:   'Social Media Manager',
    avatar: ' wayne-barnett-founder-ceo.jpg'
}, 
{
    name: 'Scott Estrada',
    role:   'Developer',
    avatar: ' wayne-barnett-founder-ceo.jpg'
}, 
{
    name: 'Barbara Ramos',
    role:   'Graphic Designer',
    avatar: ' wayne-barnett-founder-ceo.jpg'
}, 
];

// here we print on console name, role and avatar for each team member:
for (let key of team) {
    console.log(key.name, key.role, key.avatar);
};

createList();

function createList(){
    const elContainer = document.getElementById('contenitore');
    const elUl = document.createElement('ul');
    const elLi = document.createElement('li');
    elContainer.appendChild(elUl);
    for (let i = 0; i < team.length; i++) {
        const elLi = document.createElement('li');
        elLi.innerHTML =`
        Name: ${team[i].name},
        Role: ${team[i].role},
        Avatar ${team[i].avatar}
    `
    elUl.appendChild(elLi);
    }
};