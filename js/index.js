document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('github-form')
    function addUser(item){
        let user = document.createElement('li')
        user.innerHTML = `
        <h1>${item.login}</h1>
        <img src = ${item.avatar_url} id=avatar>
        <a href=${item.html_url}>${item.login} on GitHub</a>
        `
        const userList = document.getElementById('user-list')
        userList.append(user)
        document.querySelector('h1').addEventListener('click', ()=>{
            fetch (`https://api.github.com/users/${item.login}/repos`)
            .then (res=>res.json())
            // .then (repos=>console.log(repos))
            .then (repos=>{repos.forEach(item=>addRepo(item))
            })
        function addRepo(item){
            let repo = document.createElement('li')
            repo.innerText = item.name
            const repoList = document.getElementById('repos-list')
            repoList.append(repo)
            return console.log(item)
         }
    })

    }
    
    form.addEventListener('submit', (e)=>{
        let input = e.target.search.value
        // console.log(input)
        e.preventDefault()
        form.reset()
        fetch (`https://api.github.com/search/users?q=${input}`)
        .then (res=>res.json())
        // .then (data=>console.log(data.items))
        .then (data=>{data.items.forEach(item=>addUser(item))
        })
    })
    
})