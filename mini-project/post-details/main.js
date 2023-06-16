let posts = document.getElementsByClassName('postDetails')[0]

const post = JSON.parse(localStorage.getItem('post'))

for (const postElements in post) {
    let postEl = document.createElement('p')
    postEl.classList.add('postEl')
    postEl.innerHTML = `${postElements}: ${post [postElements]}`
    posts.appendChild(postEl)
}

let commentsDet = document.getElementsByClassName('commentDetails')[0]

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let commentDiv = document.createElement('div')
            commentDiv.classList.add('commentD')
            for (const commentDet in comment) {
                let com = document.createElement('p')
                com.innerText = `${commentDet} -- ${comment[commentDet]}`
                commentDiv.appendChild(com)
                commentsDet.appendChild(commentDiv)
            }
        }
    })