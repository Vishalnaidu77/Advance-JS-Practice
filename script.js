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

// function getData(endpoint, cb) {
//     const xhr = new XMLHttpRequest;

//     xhr.open('GET', endpoint)

//     xhr.onreadystatechange = function() {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 cb(JSON.parse(this.response));
//             }
//         }
//     }

//     setTimeout(() => {
//         xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000)
// }

// getData('./tournament.json', (data) => {
//     console.log(data);
//     getData('./team.json', (data) => {
//         console.log(data);
//         getData('./players.json', (data) => {
//             console.log(data);
//         })
//     })
// })




        // Promises

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task 1 is completed.");
//         resolve()
//     }, 1000);
// })

// promise.then(() => {
//     console.log("Promise 1 consumed...");
// })

// const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;

//         if (!error) {
//             resolve({ name: "Vishal", age: 23})
//         }else{
//             reject("Error: Something went wrong.")
//         }
//     }, 2000);
// })

// getUser.then((user) => console.log(user))
//         .catch((error) => console.log(error))
//         .finally(() => console.log("Promise is Consumed either Resolve or Reject"))

// console.log("Hello");







// const createPostBtn = document.querySelector(".create-post")
// const getPostBtn = document.querySelector(".get-post") 

// const posts = [
//     {title: "Post one", about: "This is post one"},
//     {title: "Post two", about: "This is post two"}
// ]

// function createpost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         let error = true;

//         if (!error) { 
//             posts.push(post);
//             resolve()
//         }
//         else{
//             reject("Something went wrong.")
//         }
//         }, 2000);
//     });
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

// function showError(error) {
//     const h3 = document.createElement("h3")
//     h3.innerHTML = `<strong>${error}</strong>`
//     document.querySelector(".posts").appendChild(h3)
// }

// createPostBtn.addEventListener("click", createpost({title: "Post three", about: "This is post three"})
//     .then(getPost)
//     .catch(showError)
// )






// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest;
//         let error = false;
//         xhr.open('GET', endpoint)
    
//         xhr.onreadystatechange = function() {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     if (!error) {
//                         resolve(JSON.parse(this.response));
//                     }
//                     else{
//                         reject('Something went wrong!')
//                     }
//                 }
//             }
//         }
    
//         setTimeout(() => {
//             xhr.send();
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// getData('./tournament.json')
//     .then((data) => {
//         console.log(data);
//         return getData('./team.json')
//     })
//     .then((data) => {
//         console.log(data);
//         return getData('./players.json')
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))





        // OOPS (Object oriented programming concept)


// function CreatePencil(name, price, colour, company){
//     this.name = name;
//     this.price = price;
//     this.colour = colour;
//     this.company = company;
// }

// CreatePencil.prototype.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.colour;
//         document.querySelector("main").appendChild(h1)
//    }

// let pencil1 = new CreatePencil("Doms", 10, "royalblue", "Doms")
// let pencil2 = new CreatePencil("Apsara", 10, "Grey", "Natraj")
// let pencil3 = new CreatePencil("Natraj", 5, "Red", "Natraj")


// class CreatePencil{
//     constructor(name, price, colour, company){
//         this.name = name;
//         this.price = price;
//         this.colour = colour;
//         this.company = company;
//     }

//     write(text){
//         let h1 = document.createElement("h1")
//         h1.textContent = text;
//         h1.style.color = this.colour;
//         document.querySelector("main").append(h1)
//     }

//     erase(){
//         document.querySelectorAll("h1").forEach(elem => {
//             if(elem.style.color === this.colour){
//                 elem.remove();
//             }
//         })
//     }
// }

// let p1 = new CreatePencil("Doms", 10, "royalblue", "Doms")
// let p2 = new CreatePencil("Apsara", 10, "grey", "Natraj")
// let p3 = new CreatePencil("Natraj", 5, "red", "Natraj")



        // Extends & Super 

// class User {
//     constructor(name, address, username, email, role){
//         this.name = name;
//         this.address = address;
//         this.username = username;
//         this.email = email;
//         this.role = role;
//     }
 
//     write(text){
//         let h1 = document.createElement("h1")
//         h1.textContent = `${this.name} : ${text}`;
//         document.querySelector("main").append(h1)
//     }
// }

// let u1 = new User("Vishal", "Bhilai", "vishal22", )


// let num = Math.floor(Math.random() * 10) + 1;

// const prm = new Promise((resolve, reject) => {
//     if (num > 5) {
//         resolve()
//     }
//     else reject()
// })

// prm.then(() => {
//     console.log("Resolved", num)
// })
// .catch(() => {
//     console.log("Rejected", num);
// })



// fetch(`https://randomuser.me/api/`)
// .then(function(data){
//     return data.json()
// })
// .then((data) => {
//         console.log(data.results[0].name.first)
// }).catch((err) => {
//         console.log(err);
// })




                // Async Await

// function randomNumber(){
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         let num = Math.floor(Math.random() * 10) + 1;
//                         if(num > 5){
//                                 resolve(true);
//                         }else{
//                                 reject(false)
//                         }
//                 }, 1000);
//         })
// }

// async function abc(){
//         let num = await randomNumber()
//         console.log(num)
// }

// abc()




                // Question 1

// let apiKey = `2f8fad1bd7b4051c5fbaaea5bc8f4c4e`

// async function getWeather(city){
//         try {
//                 let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//                 if (!rawData.ok) {
//                         throw new Error("City not found or Something went wrong.")
//                 }
//                 let data = await rawData.json()
//                 if (data.main.temp < 0) {
//                         console.warn(`Too Cold out there... ${data.main.temp}`);
//                 }
//                 else if (data.main.temp > 30) {
//                         console.warn(`Too Hot out there... ${data.main.temp}`);
//                 }
//                 else{
//                         console.log(data.main.temp);
//                 }
//         } catch (err) {
//                 console.log(err.message);     
//         }
// }

// getWeather("Birnin Kebbi")




                // Question 2


const user = [
        "a@a.com",
        "b@b.com",
        "c@c.com"
]

const sendEmail = (email) => {
        let time = Math.floor(Math.random() * 5)
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        let probability = Math.floor(Math.random() * 10)
                        if(probability <= 5) resolve("Email sent successfully.")
                        else reject("Email not send.")
                }, time * 1000);
        })
}


const sendEmails = async (userList) => {
        let emailMails = userList.map((mails) => {
                return sendEmail(mails)
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        })
        
        let result = await Promise.all(emailMails)
        result.forEach(res => {
                console.log(`${res}` );
        });
}

sendEmails(user)