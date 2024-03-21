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

for (let key of team) {
    console.log(key.name, key.role, key.avatar);
};