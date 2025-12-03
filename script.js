         // SetInterval & clearInterval

// const startBtn = document.querySelector(".start")
// const stopBtn = document.querySelector(".stop")

// let intervalId;

// function interval (){
//     if(!intervalId) {
//         intervalId = setInterval(changeColor, 1000)
//     }
// }

// function changeColor() {
//     let hexValue = Math.floor(Math.random() * 16777215).toString(16);
//     document.querySelector("main").style.backgroundColor = `#${hexValue}`
// }

// startBtn.addEventListener("click", interval);
// stopBtn.addEventListener("click", () => {clearInterval(intervalId)})



         // Callbacks

// const createPostBtn = document.querySelector(".create-post")
// const getPostBtn = document.querySelector(".get-post") 

// const posts = [
//     {title: "Post one", about: "This is post one"},
//     {title: "Post two", about: "This is post two"}
// ]

// function createpost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback()
//     }, 2000);
// }

// function getPost() {
//     setTimeout(() => {
//         posts.forEach(post => {
//             let div = document.createElement("div")
//             div.innerHTML = `<strong>${post.title}</strong> : ${post.about}`
//             document.querySelector(".posts").appendChild(div)
//         })
//     }, 1000);
// }

// getPostBtn.addEventListener("click", getPost)
// createPostBtn.addEventListener("click", createpost({title: "Post three", about: "This is post three"}, getPost))



        // AJAX and XHR Object


// let jokeEl = document.querySelector("#jokes")

// function getJoke() {
//     const xhr = new XMLHttpRequest;

//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

//     xhr.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
            
//             jokeEl.innerHTML = JSON.parse(this.response).value
            
//         }
//     }
//     xhr.send();
// }



// document.querySelector(".get-joke").addEventListener("click", getJoke)




        // Callback Hell

function getData(endpoint, cb) {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', endpoint)

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                cb(JSON.parse(this.response));
            }
        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000)
}

getData('./tournament.json', (data) => {
    console.log(data);
    getData('./team.json', (data) => {
        console.log(data);
        getData('./players.json', (data) => {
            console.log(data);
        })
    })
})
