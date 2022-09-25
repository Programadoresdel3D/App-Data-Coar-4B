/*Set a title with the id get in the link*/
/*Acces to the id gived in thee link*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const title = document.querySelector('title');
title.innerText = `Student ${id}`;

/*Set the function that'll write the information on scripts */
const createElementsForData = (datae) => {
    const nameXD = document.querySelector(".name")
    nameXD.innerHTML = datae[0][`${id}`]["name"]
    const description = document.querySelector(".description")
    const pNumeroDeLavanderia = document.createElement("p")
    pNumeroDeLavanderia.innerHTML = `Número de lavanderia: ${datae[0][`${id}`]["code"]}`
    pNumeroDeLavanderia.classList.add("code")
    const pLastname = document.createElement("h1")
    pLastname.innerHTML = `Apellido: ${datae[0][`${id}`]["lastName"]}`
    pLastname.classList.add("lastName")
    description.appendChild(pLastname)
    description.appendChild(pNumeroDeLavanderia)
}

/*Use the data.json*/
const data = new XMLHttpRequest();
data.open('GET', './data/req.json', true);
data.send();
data.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const datae = JSON.parse(this.responseText);
        createElementsForData(datae);
    }
}
