let mySelect = document.querySelector("#select-user")

function putSelectGetAllUsers() {
    fetch("https://apichoco.adrardev.fr/user/all")
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