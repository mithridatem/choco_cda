//récupération du bouton
const bt = document.querySelector('#bt');
//zone pour afficher le résultat (erreur ou ajout de compte)
const resultat = document.querySelector('#resultat');
//ajout d'un écouteur sur le bouton
bt.addEventListener('click', ()=>{
    //récupération des 4 valeurs (email et password)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    //url api récupération token
    const url = 'https://apichoco.adrardev.fr/user/token';
    //json à envoyer
    const json = JSON.stringify({email:email,password:password});
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
            //stock le token renvoyé par l'api
            const token = jsonApi.token;
            //stock le token contenu dans le storage dans une variable
            const localToken = localStorage.getItem('token');
            //compare le token renvoyé par l'api et celui du storage
            if(token === localToken){
                resultat.textContent = "Vous êtes connecté";
            } else {
            //écrire dans le paragraphe résultat
            resultat.textContent = jsonApi.token;
            //stock le token renvoyée par l'api dans le localstorage
            localStorage.setItem('token', token);
            }
        }
        //vérification erreur d'ajout de compte
        if(response.status===400){
            //écrire dans le paragraphe résultat
            resultat.textContent = jsonApi.error;
        }
    });
});
