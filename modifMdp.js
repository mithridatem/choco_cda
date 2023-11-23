let resultat = document.querySelector("#resultat")

document.querySelector("#change-password").onsubmit = (e) => {
    e.preventDefault()
    // Vérification de l'ancien mdp
    // Récupération des données de formulaire
    const pwd1 = document.querySelector("#new-password1").value
    const pwd2 = document.querySelector("#new-password2").value

    // On vérifie si ils sont identiques
    if (pwd1 === pwd2) {
        //Gestion de la validité du pwd si on a le temps
        // on construit le body
        let data = {
            token: localStorage.getItem("token"),
            password: pwd1
        }
        fetch("https://apichoco.adrardev.fr/user/update/password",
            {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(async response => {
                // gestion des erreurs ici
                if (response.status == 200) {
                    resultat.textContent = "C'est ok";
                    // alert("success")
                } else {
                    resultat.textContent = "Le compte n'existe pas";
                }
            })
    } else {
        // gestion visuelle de l'erreur à faire
    }
}