const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

// Creo costanti fontamentali
const rowEl = document.querySelector('#section .row')
const formEl = document.getElementById('form')
const nameField = document.getElementById('inputName')
const roleField = document.getElementById('inputRole')
const emailField = document.getElementById('inputEmail')
const imageField = document.getElementById('inputImage')


// Creo un ciclo FOR per leggere i membri del team e stamparli in pagina 
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const { name, role, email, img } = member
    let marckUpString = `
    <div class="carta bg-black text-white">
        <div class="director">
            <div class="imagine">
                <img src="./assets/${img}" class="rounded-start" alt="..." width= 120px>
            </div>
            <div class="testi">
                <h5>${name}</h5>
                <p>${role}</p>
                <p class="text-info">${email}</p>
            </div>
        </div>
    </div>
  `
    rowEl.insertAdjacentHTML("beforeend", marckUpString)
}

//Creo un add Event Listener per verificare il form e ricreare una card
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = nameField.value
    let role = roleField.value
    let email = emailField.value
    let image = imageField.value
    const loading = {
        name: name,
        role: role,
        email: email,
        img: image
    }

    teamMembers.push(loading)


    let marckUpString = `
    <div class="carta bg-black text-white">
        <div class="director">
            <div class="imagine">
                <img src="./assets/${image}" class="rounded-start" alt="..." width= 120px>
            </div>
            <div class="testi">
                <h5>${name}</h5>
                <p>${role}</p>
                <p class="text-info">${email}</p>
            </div>
        </div>
    </div>
  `
    rowEl.insertAdjacentHTML("beforeend", marckUpString)

    nameField.value = '';
    roleField.value = '';
    emailField.value = '';
    imageField.value = '';
})