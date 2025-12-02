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

const createPostBtn = document.querySelector(".create-post")
const getPostBtn = document.querySelector(".get-post") 

const posts = [
    {title: "Post one", about: "This is post one"},
    {title: "Post two", about: "This is post two"}
]

function createpost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

function getPost() {
    setTimeout(() => {
        posts.forEach(post => {
            let div = document.createElement("div")
            div.innerHTML = `<strong>${post.title}</strong> : ${post.about}`
            document.querySelector(".posts").appendChild(div)
        })
    }, 1000);
}

getPostBtn.addEventListener("click", getPost)
createPostBtn.addEventListener("click", createpost({title: "Post three", about: "This is post three"}, getPost))