//URL de l'API
const url = "https://apichoco.adrardev.fr/chocoblast/all";
//on récupère le select
const chocoblasts = document.querySelector("#chocoblasts");
//on appelle l'API avec un fetch
const apiAllChoco = fetch(url).then(async (response) => {
    //on met la réponse en format json dans une constante
    const json = await response.json();
    //on parcourt le tableau
    json.forEach((element) => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", element.id);
        chocoblasts.appendChild(newDiv);
        let newwDiv = document.getElementById(element.id);
        let h2 = document.createElement("h2");
        h2.innerText = element.title;
        newwDiv.appendChild(h2);
        let div3 = document.createElement("div");
        div3.innerText = element.content;
        newwDiv.appendChild(div3)
        let p1 = document.createElement("p");
        p1.innerText = element.creation_date;
        newwDiv.appendChild(p1);
        let p2 = document.createElement("p")
        p2.innerText = element.author.name + " " + element.author.firstname;
        newwDiv.appendChild(p2);
        let p3 = document.createElement("p");
        p3.innerText = element.target.name + " " + element.target.firstname;
        newwDiv.appendChild(p3);
    });
});
