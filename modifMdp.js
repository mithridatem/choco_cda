let resultat = document.querySelector("#resultat")
let regexPwd = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

// on gère la validité des mdps
document.querySelector("#new-password1").addEventListener("keyup", (e) => {

    if (!regexPwd.test(e.target.value)) {
        e.target.style.backgroundColor = "red"
    } else {
        e.target.style.backgroundColor = "green"
    }

    if (regexPwd.test(e.target.value)
        && regexPwd.test(document.querySelector("#new-password1").value)
        && document.querySelector("#new-password2").value === document.querySelector("#new-password1").value) {
        document.querySelector("#valider").disabled = false
    } else {
        document.querySelector("#valider").disabled = true
    }

})

// on gère la validité des mdps
document.querySelector("#new-password2").addEventListener("keyup", (e) => {
    if (!regexPwd.test(e.target.value)) {
        e.target.style.backgroundColor = "red"
    } else {
        e.target.style.backgroundColor = "green"
    }

    if (regexPwd.test(e.target.value)
        && regexPwd.test(document.querySelector("#new-password1").value)
        && document.querySelector("#new-password2").value === document.querySelector("#new-password1").value) {
        document.querySelector("#valider").disabled = false
    } else {
        document.querySelector("#valider").disabled = true
    }
})

// Gestion du submit du nouveau mdp
document.querySelector("#change-password").onsubmit = (e) => {
    e.preventDefault()
    // Vérification de l'ancien mdp
    // Récupération des données de formulaire
    const pwd1 = document.querySelector("#new-password1").value
    const pwd2 = document.querySelector("#new-password2").value

    // On vérifie si ils sont identiques
    if (pwd1 === pwd2 && pwd1 != "") {
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