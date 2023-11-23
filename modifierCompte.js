
//event click on the button
let bouton = document.getElementById('btn') ;
bouton.addEventListener('click', changement);

//get the input info
let nom = document.getElementById('name');
let prenom = document.querySelector('#firstName');
let email = document.querySelectorAll('input')[2] ;

//Show name and first name from the storage (used to fetch API)
document.querySelectorAll('p')[0].textContent = "Nom : " + localStorage.getItem('name');
document.querySelectorAll('p')[1].textContent = "Prénom : " + localStorage.getItem('firstName');

//get the token and verify the inputs
function changement() {
    if (nom.value == "" && prenom.value == "" && email.value == "") {
        document.getElementById('error').textContent = "Veuillez renseigner un des champs" ;
    }
    else {
        document.getElementById('error').textContent = "" ;
        
        let userInfoURL = "https://apichoco.adrardev.fr/user/info" ;

        let xx =  localStorage.getItem('name');
        let yy = localStorage.getItem('firstName');

        const lejson = JSON.stringify({name:xx,firstname:yy});

        fetch(userInfoURL, {
            method:'POST',
            body:lejson})
            .then(async response =>{
            if(response.status == 200){
                const json = await response.json();

                localStorage.setItem("email",json.email);
                localStorage.setItem("token",json.token);

                let newName; let newFirstName; let newEmail;

                if(nom.value ==""){
                     newName = localStorage.getItem("name");
                     console.log(newName);
                }else{
                     newName = nom.value;
                     console.log(newName);
                }
                if(prenom.value ==""){
                     newFirstName = localStorage.getItem("firstName");
                     console.log(newFirstName);
                }else{
                     newFirstName = prenom.value;
                     console.log(newFirstName);
                }
                if(email.value ==""){
                     newEmail = localStorage.getItem("email");
                     console.log(newEmail);
                }else{
                     newEmail = email.value;
                     console.log(newEmail);
                }
                modifier(newName, newFirstName, newEmail);
            }else{
                console.log("Marche pas");
            }
        });
    }
}
//modify the informations
function modifier(newName, newFirstName, newEmail){
    let majUserURL = "https://apichoco.adrardev.fr/user/update";

    const json = JSON.stringify({name:newName,firstname:newFirstName,email:newEmail,token:localStorage.getItem('token')})
    //const json = JSON.stringify({name:nom.value,firstname:prenom.value,email:email.value,token:localStorage.getItem('token')})
    fetch(majUserURL, {
        method:'POST',
        body:json})
        .then(async response =>{
        if(response.status == 200){
            localStorage.removeItem('token');
            localStorage.removeItem('email');

            localStorage.setItem('name',newName);
            localStorage.setItem('firstName',newFirstName);

            document.querySelectorAll('p')[0].textContent = localStorage.getItem('name');
            document.querySelectorAll('p')[1].textContent = localStorage.getItem('firstName');
            console.log('fini');
        }else{
            console.log("Marche pas");
        }
    });
}



