
/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

Tools:
-Create one string for cards
-Cicle for
*/


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


const rowEl = document.querySelector('#section .row')
console.log(rowEl);


for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  const { name, role, email, img } = member
  console.log(name, role, email, img);
  console.log(member);
  let marckUpString = `
    <div class="col-4">
      <div class="card" style="width: 18rem;">
          <img src="./assets/${img}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              ${role} <br>
              ${email}
            </p>
          </div>
      </div>
    </div>
  `
  console.log(marckUpString);
  rowEl.insertAdjacentHTML("beforeend", marckUpString)


}
