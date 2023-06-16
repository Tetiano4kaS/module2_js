let userDetail = document.getElementsByClassName('userDetail')[0];
const user = JSON.parse(localStorage.getItem('user'))

let userDetDiv = document.createElement('div')
userDetDiv.classList.add('userDivInfo')
userDetail.appendChild(userDetDiv)


function getUserDetails(user) {
    for (const userInfo in user) {
        if (typeof user[userInfo] === "object") {
            getUserDetails(user[userInfo])
        } else {
            let userInformation = document.createElement('div')
            userInformation.classList.add('userInformation')
            userInformation.innerHTML = `${userInfo} - ${user[userInfo]}`
            userDetDiv.appendChild(userInformation);
        }
    }
}

getUserDetails(user)

let buttonWrapper= document.createElement('div')
buttonWrapper.classList.add('btnWrapper')

let button = document.createElement('button')
button.innerText = 'Post of current user'
button.classList.add('postOfCurrentBtn')
buttonWrapper.appendChild(button)
userDetDiv.appendChild(buttonWrapper)

button.onclick = function () {
    if (!document.getElementById('allPosts')) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(posts => {
                for (const post of posts) {

                    let postInformation = document.createElement('div')
                    postInformation.classList.add('postInformation')
                    postInformation.setAttribute('id', 'allPosts')
                    postInformation.innerHTML = `<hr> ${post.title}`
                    postsWrapper.appendChild(postInformation)

                    let postDetailsBtn = document.createElement('button')
                    postDetailsBtn.classList.add('postDetailsBtn')
                    postDetailsBtn.innerText = 'Post details'
                    postInformation.appendChild(postDetailsBtn)
                    postDetailsBtn.onclick=function (){
                        localStorage.setItem('post',JSON.stringify(post))
                        location.href="../post-details"
                    }
                }
            })
    }
}

let postsWrapper= document.createElement('div')
postsWrapper.classList.add('postsWrapper')
userDetail.appendChild(postsWrapper)
