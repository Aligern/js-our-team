// this is our team members array:
const team = [ {
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
}
];

// here we print on console the name, role and avatar for each team member:
for (let key of team) {
    console.log(key.name, key.role, key.avatar);
};

//the calls for our functions:
createList();
createAddBtn();

// starting to create our add button
function createAddBtn () {
    const testata = document.getElementById('testata');
    testata.classList.add('pb-2');
    const addBtn = document.createElement('button');
    addBtn.classList.add('btn','btn-outline-primary');
    addBtn.textContent = 'Aggiungi profilo';
    testata.appendChild(addBtn);

    //we addEventListener to our button:
    addBtn.addEventListener('click', function() {
        //we create our form into our HTML at the 'click'

        let addFormDiv = document.createElement('div'); // let's create a <div>
        addFormDiv.classList.add('d-flex','flex-column', 'justify-content-center' ); // we give attributes to our <div>

        let addFormLabel = document.createElement('label'); // we do the same for the label
        addFormLabel.classList.add('form-label','fw-bold','text-uppercase','text-start');
        addFormLabel.textContent = 'Benvenuto nuovo utente!';

        let addFormInput = document.createElement('input'); // this is our 1st input form
        addFormInput.type = 'text';
        addFormInput.placeholder = 'Nome e Cognome';
        addFormInput.classList.add('form-control', 'w-25');

        let addFormInput2 = document.createElement('input'); // this is the 2nd input form
        addFormInput2.type = 'text';
        addFormInput2.placeholder = 'Ruolo nel team';
        addFormInput2.classList.add('form-control', 'w-25', 'mt-2');
        
        let addImgInput = document.createElement('input');
        addImgInput.type = 'file';
        addImgInput.placeholder = 'Inserisci una tua foto';
        addImgInput.classList.add('mt-2');
        
        addFormDiv.appendChild(addFormLabel);
        addFormDiv.appendChild(addFormInput);
        addFormDiv.appendChild(addFormInput2);
        addFormDiv.appendChild(addImgInput);
        testata.appendChild(addFormDiv);
    });
};

// here we print our list 
function createList(){
    const elContainer = document.getElementById('contenitore');
    elContainer.classList.add('p-5')
    const eldiv = document.createElement('div');
    eldiv.classList.add('row','d-flex', 'justify-content-center','gap-3')
    elContainer.appendChild(eldiv);
    // for the lenght of our array we do a print into our HTML:
    for (let i = 0; i < team.length; i++) {
        const elCard = document.createElement('div');
        elCard.classList.add('col-3','bg-white','text-center','card');
        const elImg = document.createElement('img');
        elImg.src = team[i].avatar;
        // here we set the printing order of our elements into our HTML:
        elCard.innerHTML =`
        <div class="card-body bg-white">
        <img src="${team[i].avatar}" alt="">
        <p class="pt-2 text-uppercase fw-bold">
        ${team[i].name} 
        </p>
        <p>
        ${team[i].role} 
        </p>
        </div>
        `;
    eldiv.appendChild(elCard); //here we do the print on the HTML
}
};