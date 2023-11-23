//récupération du bouton
const bt = document.querySelector('#bt');
//zone pour afficher le résultat (erreur ou ajout de compte)
const resultat = document.querySelector('#resultat');

//----Valider le bon format de mot de passe
//récupération de l'input du mot de passe
const inputPassword = document.querySelector("#password");
//on  écoute l'événement keyup sur l'input de mot de passe
inputPassword.addEventListener("keyup", function () {
    //récuperation de la valeur du l'input du mot de passe
    let password = document.querySelector("#password").value;
    //récupération des paragraphes pour visualiser la validation des regex
    const nombre = document.querySelector("#nombre");
    const maj = document.querySelector("#maj");
    const min = document.querySelector("#min");
    const caract = document.querySelector("#caract");
    //Regex pour vérifier qu'il y a au moins un chiffre
    let regexPasswordNombre = /^(?=.*[0-9]){1,}/;
    //Regex pour vérifier qu'il y a au moins une lettre majuscule
    let regexPasswordMaj = /^(?=.*[A-Z]){1,}/;
    //Regex pour vérifier qu'il y a au moins une lettre minuscule
    let regexPasswordMin = /^(?=.*[a-z]){1,}/;
    //Regex pour vérifier qu'il y a entre 12 et 20 caractères
    let regexPasswordCaract = /^.{12,20}$/;

    //Conditions pour vérifier les regex
    if (regexPasswordNombre.test(password)) {
        //Si c'est bon le paragraphe passe en vert
        nombre.style.color = "green";
    } else {
        //Sinon il passe en noir
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

//----Vérifier que les 2 password sont identiques
//Récupération du l'input de confirmation de mot de passe
const inputConfirmer = document.querySelector('#confirm');
//on écoute l'événement keyup sur l'input de confirmation de mot de passe
inputConfirmer.addEventListener("keyup", function () {
    //Récupération de la valeur de l'input du mot de passe
    let mdp = document.querySelector("#password").value;
    //récupération de la valeur de l'input de confirmation de mot de passe
    let confirmer = document.querySelector("#confirm").value;
    //Condition de vérification de la concordance entre les 2 valeurs des input
    if (mdp == confirmer) {
        //Si c'est bon le background de l'input passe en vert
        inputConfirmer.style.backgroundColor = "green";
    } else if (mdp !== confirmer) {
        //Sinon le background de l'input passe en rouge
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
