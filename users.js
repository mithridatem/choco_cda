//URL de l'API
const url = "https://apichoco.adrardev.fr/user/all";
//on récupère le select
const select = document.querySelector("#allUser");
//on appelle l'API avec un fetch
const apiAllUser = fetch(url)
                        .then(async response=>{
                            //on met la réponse en format json dans une constante
                            const json = await response.json();
                            //on parcourt le tableau
                            json.forEach(element => {
                                //pour chaque élément on crée une option
                                let user = document.createElement("option");
                                user.setAttribute("value", element.id);
                                user.textContent = element.name+" "+element.firstname;
                                //on affiche la nouvelle option dans le select
                                select.appendChild(user);
                            });
                        })