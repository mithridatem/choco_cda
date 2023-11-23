//récupération du bouton
const bt = document.querySelector('#bt');
//zone pour afficher le résultat (erreur ou ajout de compte)
const resultat = document.querySelector('#resultat');

//Valider le bon format de mot de passe
const inputPassword = document.querySelector("#password");
inputPassword.addEventListener("keyup", function () {
    let password = document.querySelector("#password").value;
    const nombre = document.querySelector("#nombre");
    const maj = document.querySelector("#maj");
    const min = document.querySelector("#min");
    const caract = document.querySelector("#caract");

    let regexPasswordNombre = /^(?=.*[0-9]){1,}/;
    let regexPasswordMaj = /^(?=.*[A-Z]){1,}/;
    let regexPasswordMin = /^(?=.*[a-z]){1,}/;
    let regexPasswordCaract = /^.{12,20}$/;

    if (regexPasswordNombre.test(password)) {
        nombre.style.color = "green";
    } else {
        nombre.style.color = "black";
    }

    if (regexPasswordMaj.test(password)) {
        maj.style.color = "green";
    } else {
        maj.style.color = "black";
    }

    if (regexPasswordMin.test(password)) {
        min.style.color = "green";
    } else {
        min.style.color = "black";
    }

    if (regexPasswordCaract.test(password)) {
        caract.style.color = "green";
    } else {
        caract.style.color = "black";
    }

})

//Vérifier que les 2 password sont identiques
const inputConfirmer = document.querySelector('#confirm');
console.log(inputConfirmer);
inputConfirmer.addEventListener("keyup", function () {
    let mdp = document.querySelector("#password").value;
    let confirmer = document.querySelector("#confirm").value;
    if (mdp == confirmer) {
        inputConfirmer.style.backgroundColor = "green";
    } else if (mdp !== confirmer) {
        inputConfirmer.style.backgroundColor = "red";
    }

})

//ajout d'un écouteur sur le bouton
bt.addEventListener('click', () => {
    //récupération des 4 valeurs (nom, prénom, email et password)
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    //url api ajouter un compte
    const url = 'https://apichoco.adrardev.fr/user/add';
    //json à envoyer
    const json = JSON.stringify({ name: nom, firstname: prenom, email: email, password: password });
    //appel de fetch (url et options)
    fetch(url,
        {
            method: 'POST',
            body: json
        })
        //gestion du retour de l'API
        .then(async response => {
            //récupération json réponse API
            const jsonApi = await response.json();
            //vérification compte ajouté
            if (response.status === 200) {
                //écrire dans le paragraphe résultat
                resultat.textContent = jsonApi.error;
            }
            //vérification erreur d'ajout de compte
            if (response.status === 400) {
                //écrire dans le paragraphe résultat
                resultat.textContent = jsonApi.error;
            }
        });
});