document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('github-form')
    function addUser(login){
        let user = document.createElement('li')
        user.innerHTML = login
        const userList = document.getElementById('user-list')
        userList.append(user)

    }
    form.addEventListener('submit', (e)=>{
        let input = e.target.search.value
        // console.log(input)
        e.preventDefault()
        form.reset()
        fetch (`https://api.github.com/search/users?q=${input}`)
        .then (res=>res.json())
        // .then (data=>console.log(data))
        .then (data=>{data.items.forEach(login=>addUser(login))
        })

            // console.log(data.items))
        // .then(data=>Object.keys(data.items).forEach(console.log(items.login.value)))
        // .then(data=>Object.keys(data.items).forEach(login=>addUser(login)))
    })
    
})