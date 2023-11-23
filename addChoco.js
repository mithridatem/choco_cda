let mySelect = document.querySelector("#select-user")

function putSelectGetAllUsers() {
    fetch("https://apichoco.adrardev.fr/user/all/asc")
        .then(async response => {
            if (response.status === 200) {
                const data = await response.json()
                data.forEach(user => {
                    let optionE = document.createElement("option")
                    optionE.value = user.id
                    optionE.textContent = `${user.name} ${user.firstname}`
                    mySelect.appendChild(optionE)
                })
            }
        })
}
// penser à mettre un max à la date
// https://apichoco.adrardev.fr/chocoblast/add

//set max date
const [today] = new Date().toISOString().split('T')

document.querySelector("#dateChoco").setAttribute('max', today)

document.querySelector("#addChoco").onsubmit = (e) => {
    e.preventDefault()
    console.log(mySelect.value)
    let data = {
        title: document.querySelector("#titreChoco").value,
        content: document.querySelector("#contentChoco").value,
        creation_date: document.querySelector("#dateChoco").value.replaceAll("-","/"),
        author: {
            id: "1"
        },
        target: {
            id: mySelect.value
        }
    }
    fetch("https://apichoco.adrardev.fr/chocoblast/add",
    {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(async response => {
        if (response.status === 200) {
            alert("OUI")
        } else {
            alert("NON")
        }
    })
}