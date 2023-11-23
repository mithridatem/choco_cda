//récupération du bouton
const bt = document.querySelector('#bt');
//zone pour afficher le résultat (erreur ou ajout de compte)
const resultat = document.querySelector('#resultat');
//ajout d'un écouteur sur le bouton
bt.addEventListener('click', ()=>{
    //récupération des 4 valeurs (nom, prénom, email et password)
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    //url api ajouter un compte
    const url = 'https://apichoco.adrardev.fr/user/add';
    //json à envoyer
    const json = JSON.stringify({name:nom,firstname:prenom,email:email,password:password});
    //appel de fetch (url et options)
    fetch(url,
    {   
        method :'POST',
        body:json
    })
    //gestion du retour de l'API
    .then(async response=>{
        //récupération json réponse API
        const jsonApi = await response.json();
        //vérification compte ajouté
        if(response.status===200){
            //écrire dans le paragraphe résultat
            resultat.textContent = jsonApi.error;
        }
        //vérification erreur d'ajout de compte
        if(response.status===400){
            //écrire dans le paragraphe résultat
            resultat.textContent = jsonApi.error;
        }
    });
});