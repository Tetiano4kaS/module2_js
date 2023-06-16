let usersContainer = document.getElementsByClassName('usersContainer')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div')
            userDiv.classList.add('userDiv')
            userDiv.innerHTML = `ID:${user.id} <br> Name:${user.name}`
            let btn = document.createElement('button')
            btn.classList.add('userBtn')
            btn.innerText = 'Details'
            btn.onclick = function (e) {
                e.preventDefault()
                localStorage.setItem('user', JSON.stringify(user))
                location.href="../user-details"
            }
            userDiv.appendChild(btn)
            usersContainer.appendChild(userDiv)
        }
    })