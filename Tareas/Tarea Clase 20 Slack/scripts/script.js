const slackHTML = document.getElementById("slack")
const contactos = [
    {
        nombre: "Adrian Mogus",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVD3GPV2-4c4cd3e0784e-192",
        status: "activo"
    },
    {
        nombre: "Candia",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQU0R7D-ea383db445e8-512",
        status: "activo"
    },
    {
        nombre: "Claudia Varela",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU3M13L-e4c619eb0508-512",
        status: "inactivo"
    },
    {
        nombre: "Emanuel Carreira",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-512",
        status: "inactivo"
    },
    {
        nombre: "Fede Rabbian",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-512",
        status: "inactivo"
    },
    {
        nombre: "Gabriel Casabona",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCYRKEY-d004bc161213-512",
        status: "inactivo"
    },
    {
        nombre: "Gaston Ferrari",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCX98H2-7b2952b1bb15-512",
        status: "activo"
    },
    {
        nombre: "Lio Silman",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQTRNJF-20622c72af58-512",
        status: "activo"
    },
    {
        nombre: "Lucas Legor",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-512",
        status: "activo"
    },
    {
        nombre: "Luciano Leone",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-512",
        status: "activo"
    },
    {
        nombre: "Tomas Martinez",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8SBJM-45507abb443f-512",
        status: "activo"
    },
    {
        nombre: "Matias Gimenez",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F9NRCBC0-5cfe19a6f509-512",
        status: "activo"
    },

    ]
    let template = ''
    function render(usuarios) {
    for (usuario of usuarios) {
        template =template + `
        <div class="card">
            <div class="user">
                <img class="avatar" src="${usuario.avatar}">
            </div>
            <div>
                <p class="name">${usuario.nombre}</p>    
            </div>
        <div>
    `
    }
}
render(contactos)
slackHTML.innerHTML = template