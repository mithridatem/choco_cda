//URL de l'API
const url = "https://apichoco.adrardev.fr/chocoblast/all";
//on récupère le select
const body = document.querySelector("body");
//on appelle l'API avec un fetch
const apiAllChoco = fetch(url)
                        .then(async response=>{
                            //on met la réponse en format json dans une constante
                            const json = await response.json();
                            //on parcourt le tableau
                            json.forEach(element => {
                                let newDiv = document.createElement('div').setAttribute('id', element.id);
                                newDiv.a
                            });
                        })